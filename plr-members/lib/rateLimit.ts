// Simple in-memory sliding-window rate limiter.
//
// Suitable for the current single-instance Railway deployment: state lives in
// this process only. If the app is ever scaled to multiple instances, swap the
// Map for a shared store (e.g. Upstash Redis) behind the same check() API.

interface Window {
  timestamps: number[]
}

const buckets = new Map<string, Window>()

// Periodically drop stale buckets so the map can't grow unbounded.
const SWEEP_INTERVAL_MS = 10 * 60 * 1000
let lastSweep = Date.now()

function sweep(windowMs: number) {
  const now = Date.now()
  if (now - lastSweep < SWEEP_INTERVAL_MS) return
  lastSweep = now
  for (const [key, win] of buckets) {
    if (win.timestamps.every((t) => now - t > windowMs)) buckets.delete(key)
  }
}

/**
 * Returns true if the request identified by `key` is allowed, false if it has
 * exceeded `limit` requests within the trailing `windowMs` window.
 */
export function checkRateLimit(key: string, limit: number, windowMs: number): boolean {
  const now = Date.now()
  sweep(windowMs)

  let win = buckets.get(key)
  if (!win) {
    win = { timestamps: [] }
    buckets.set(key, win)
  }

  win.timestamps = win.timestamps.filter((t) => now - t < windowMs)
  if (win.timestamps.length >= limit) return false

  win.timestamps.push(now)
  return true
}

/** Extract the client IP from proxy headers (Express forwards these through). */
export function clientIp(request: Request): string {
  const fwd = request.headers.get('x-forwarded-for')
  if (fwd) return fwd.split(',')[0].trim()
  return request.headers.get('x-real-ip') ?? 'unknown'
}
