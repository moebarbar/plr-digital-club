import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://plrdigitalclub.com'),
  title: {
    default: 'PLR Digital Club — 1,000+ PLR & MRR Digital Products',
    template: '%s | PLR Digital Club',
  },
  description: 'Get lifetime access to 1,000+ PLR & MRR digital products. Canva templates, eBooks, courses, social media templates & more. Rebrand, resell, keep 100% profit.',
  keywords: ['PLR digital products', 'MRR digital products', 'master resell rights', 'private label rights', 'digital products to resell', 'PLR membership'],
  authors: [{ name: 'PLR Digital Club' }],
  creator: 'PLR Digital Club',
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://plrdigitalclub.com',
    siteName: 'PLR Digital Club',
    title: 'PLR Digital Club — 1,000+ PLR & MRR Digital Products',
    description: 'Get lifetime access to 1,000+ PLR & MRR digital products. Rebrand, resell, keep 100% profit. One payment, forever.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'PLR Digital Club — 1,000+ Digital Products With Resell Rights' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PLR Digital Club — 1,000+ PLR & MRR Digital Products',
    description: 'Lifetime access to 1,000+ done-for-you digital products with full resell rights.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://plrdigitalclub.com',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#1A1A4E" />
        <meta name="yandex-verification" content="ed35fed42bf29ddb" />
        <meta name="p:domain_verify" content="df7286a70dfc6abecd35aa97e4efc555" />
      </head>
      <body>
        {/* Google Tag Manager (noscript fallback) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K5TLJDC5"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        {children}

        {/* Google Analytics GA4 */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-QT0VWKRVZ6" strategy="afterInteractive" />
        <Script id="ga4" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-QT0VWKRVZ6');
        `}</Script>

        {/* Google Ads */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=AW-11342167073" strategy="afterInteractive" />
        <Script id="google-ads" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-11342167073');
        `}</Script>

        {/* Google Tag Manager */}
        <Script id="gtm" strategy="afterInteractive">{`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-K5TLJDC5');
        `}</Script>

        {/* Meta Pixel */}
        <Script id="meta-pixel" strategy="afterInteractive">{`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window,document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '694755377566708');
          fbq('track', 'PageView');
        `}</Script>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img height="1" width="1" style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=694755377566708&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        {/* Pinterest events */}
        <Script id="pinterest-events" strategy="afterInteractive">{`
          if (typeof pintrk === 'function') {
            pintrk('track', 'pagevisit', { event_id: 'eventId0001' });
            pintrk('track', 'addtocart', { event_id: 'eventId0001', value: 100, order_quantity: 1, currency: 'USD' });
            pintrk('track', 'checkout', { event_id: 'eventId0001', value: 100, order_quantity: 1, currency: 'USD' });
          }
        `}</Script>

        {/* Weblise pixel */}
        <Script src="https://weblise.co/pixel/WXtnLvHnxxPhlikA" strategy="afterInteractive" />

        {/* Viewtrace pixel */}
        <Script src="https://viewtrace.com/pixel/C0QejEzyFiFbkjUM" strategy="afterInteractive" />

        {/* Popuppuff pixel */}
        <Script src="https://popuppuff.com/pixel/xWRSNKpHUgQFmHzvffCkjGFYKP6Crlmp" strategy="afterInteractive" />

        {/* GRP pixel */}
        <Script id="grp-pixel" strategy="afterInteractive">{`
          ((e,p,t,s,n,r)=>e.grp||((s=e.grp=function(){s.process?s.process.apply(s,arguments):s.queue.push(arguments)}).queue=[],s.t=+new Date,(n=p.createElement(t)).async=1,n.src="https://storage.googleapis.com/grpixel/openpixel.min.js",(r=p.getElementsByTagName(t)[0]).parentNode.insertBefore(n,r)))(window,document,"script"),grp("init","2492");
        `}</Script>

        {/* Growify pixel */}
        <Script
          src="https://cdn.growify.ai/pixel.min.js"
          data-website-id="79e985daa4397ba1c6c26cee94304518:006f218bccd56db2d7a3486ffa1c19f661575802da3b1ada1d664273e20eb9f953fb23806d58008ab2ae544a457fc0a2"
          data-endpoint="api_v2"
          data-platform="web"
          strategy="afterInteractive"
        />

        {/* Replain chat widget */}
        <Script id="replain" strategy="afterInteractive">{`
          window.replainSettings = { id: 'aa5c9c79-a5cc-4ddd-a4f3-b2e7984b068a' };
          (function(u){var s=document.createElement('script');s.async=true;s.src=u;
          var x=document.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);
          })('https://widget.replain.cc/dist/client.js');
        `}</Script>
      </body>
    </html>
  )
}
