import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { serveStatic } from "./static";
import { createServer, request as httpRequest } from "http";
import { spawn } from "child_process";
import path from "path";

const app = express();
const httpServer = createServer(app);

const NEXT_PORT = 3001;

// Routes that Next.js (backend) handles
const NEXT_ROUTES = [
  // NOTE: "/" is intentionally NOT here — the homepage is served by the original
  // Vite marketing app (client/src/pages/home.tsx). Everything below is handled
  // by the Next.js members/SEO app.
  "/checkout",
  "/login",
  "/reset-password",
  "/update-password",
  "/dashboard",
  "/library",
  "/profile",
  "/pending",
  "/success",
  "/api",
  "/plr-digital-products",
  "/mrr-digital-products",
  "/sell-digital-products-online",
  "/plr-ebooks",
  "/plr-canva-templates",
  "/plr-social-media-templates",
  "/best-plr-sites-2026",
  "/blog",
  "/about",
  "/contact",
  "/products",
  "/privacy",
  "/terms",
  // Keyword-targeted SEO landing pages (footer + sitemap, not main nav)
  "/plr-for-etsy-sellers",
  "/plr-for-coaches",
  "/plr-for-digital-marketers",
  "/plr-planners-and-journals",
  "/plr-notion-templates",
  "/plr-printables",
  "/faceless-digital-marketing",
  "/how-to-start-a-digital-product-business",
  "/done-for-you-digital-products",
  "/plr-health-and-wellness",
  "/admin",
  "/sitemap.xml",
  "/robots.txt",
  "/_next",
  "/product-images",
];

function shouldProxyToNext(reqPath: string): boolean {
  return NEXT_ROUTES.some(
    (route) => reqPath === route || reqPath.startsWith(route + "/")
  );
}

function proxyToNext(req: Request, res: Response) {
  const rawBody = req.rawBody as Buffer | undefined;

  const options = {
    hostname: "localhost",
    port: NEXT_PORT,
    path: req.url,
    method: req.method,
    headers: {
      ...req.headers,
      host: `localhost:${NEXT_PORT}`,
      "x-forwarded-host": req.headers.host || "",
      "x-forwarded-proto": "https",
      ...(rawBody ? { "content-length": String(rawBody.length) } : {}),
    },
  };

  const proxyReq = httpRequest(options, (proxyRes) => {
    res.writeHead(proxyRes.statusCode!, proxyRes.headers as Record<string, string>);
    proxyRes.pipe(res, { end: true });
  });

  proxyReq.on("error", (err) => {
    log(`Proxy error for ${req.path}: ${err.message}`);
    if (!res.headersSent) {
      res.status(502).send("Service starting up, please try again in a moment.");
    }
  });

  if (rawBody) {
    proxyReq.write(rawBody);
    proxyReq.end();
  } else {
    req.pipe(proxyReq, { end: true });
  }
}

declare module "http" {
  interface IncomingMessage {
    rawBody: unknown;
  }
}

app.use(
  express.json({
    verify: (req, _res, buf) => {
      req.rawBody = buf;
    },
  })
);

app.use(express.urlencoded({ extended: false }));

export function log(message: string, source = "express") {
  const formattedTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}

app.use((req, res, next) => {
  const start = Date.now();
  const reqPath = req.path;

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (reqPath.startsWith("/api")) {
      // Log method/status/timing only — never response bodies, which can
      // contain emails, session URLs, and other PII.
      log(`${req.method} ${reqPath} ${res.statusCode} in ${duration}ms`);
    }
  });

  next();
});

(async () => {
  await registerRoutes(httpServer, app);

  app.use((err: any, _req: Request, res: Response, next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    console.error("Internal Server Error:", err);
    if (res.headersSent) return next(err);
    return res.status(status).json({ message });
  });

  if (process.env.NODE_ENV === "production") {
    // Start Next.js on internal port 3001
    const nextBin = path.join(process.cwd(), "plr-members", "node_modules", ".bin", "next");
    const nextCwd = path.join(process.cwd(), "plr-members");
    const nextEnv = { ...process.env, PORT: String(NEXT_PORT) };

    log(`Starting Next.js on port ${NEXT_PORT}...`, "next");
    const nextProc = spawn(nextBin, ["start", "-p", String(NEXT_PORT)], {
      cwd: nextCwd,
      stdio: "inherit",
      env: nextEnv,
    });

    nextProc.on("error", (err) => log(`Next.js failed to start: ${err.message}`, "next"));
    nextProc.on("exit", (code) => log(`Next.js exited with code ${code}`, "next"));

    // Proxy Next.js routes before static file serving
    app.use((req, res, next) => {
      if (shouldProxyToNext(req.path)) {
        proxyToNext(req, res);
      } else {
        next();
      }
    });

    serveStatic(app);
  } else {
    const { setupVite } = await import("./vite");
    await setupVite(httpServer, app);
  }

  const port = parseInt(process.env.PORT || "5000", 10);
  httpServer.listen({ port, host: "0.0.0.0", reusePort: true }, () => {
    log(`serving on port ${port}`);
  });
})();
