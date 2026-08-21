import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Art Britannia",
  description:
    "Art Britannia Ltd — an art creation company. Registry of studios and ventures.",
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico?v=3", sizes: "any" },
      { url: "/favicon.svg?v=3", type: "image/svg+xml" },
      { url: "/icons/favicon-16x16.png?v=3", sizes: "16x16", type: "image/png" },
      { url: "/icons/favicon-32x32.png?v=3", sizes: "32x32", type: "image/png" },
      { url: "/icons/favicon-96x96.png?v=3", sizes: "96x96", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png?v=3" },
      { url: "/icons/apple-touch-icon-120x120.png?v=3", sizes: "120x120" },
      { url: "/icons/apple-touch-icon-152x152.png?v=3", sizes: "152x152" },
      { url: "/icons/apple-touch-icon-167x167.png?v=3", sizes: "167x167" },
      { url: "/icons/apple-touch-icon-180x180.png?v=3", sizes: "180x180" },
    ],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Art Britannia",
  },
  other: {
    "msapplication-TileColor": "#09070A",
    "msapplication-config": "/browserconfig.xml",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@800&family=Syne:wght@700;800&family=Outfit:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-R560Y2ETFD"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-R560Y2ETFD');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
