import type { Metadata, Viewport } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import Preloader from "@/components/Common/Preloader";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#E63946",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "https://rexexecutivesearch.com"),
  title: {
    default: "Rex Executive Search | Premier FMCG Recruitment",
    template: "%s | Rex Executive Search",
  },
  description: "Rex Executive Search - Nigeria's premier FMCG recruitment agency. We connect top executive talent with leading consumer goods brands. Expert headhunting services.",
  keywords: ["FMCG Recruitment", "Executive Search", "Talent Acquisition", "Rex Executive Search", "Hiring Leaders", "Nigeria Recruitment", "Headhunting", "Consumer Goods Jobs"],
  authors: [{ name: "Rex Executive Search" }],
  creator: "Rex Executive Search",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "/",
    siteName: "Rex Executive Search",
    title: "Rex Executive Search | Premier FMCG Recruitment",
    description: "Nigeria's premier FMCG recruitment agency. Connecting top executive talent with leading consumer goods brands.",
    images: [
      {
        url: "/og-image.png",  // Create dedicated 1200x630 image
        width: 1200,
        height: 630,
        alt: "Rex Executive Search - Premier FMCG Recruitment",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rex Executive Search | Premier FMCG Recruitment",
    description: "Nigeria's premier FMCG recruitment agency. Connecting top executive talent with leading consumer goods brands.",
    images: ["/logo.png"],
    creator: "@rex_search",
    site: "@rex_search",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180" },
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
  appleWebApp: {
    title: "RexExecutiveSearch",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Rex Executive Search",
              "url": "https://rexexecutivesearch.com",
              "logo": "https://rexexecutivesearch.com/logo.png",
              "description": "Premier FMCG Recruitment. Connecting Top Talent with Leading FMCG Brands.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "14, Abayomi Street, Akoka",
                "addressLocality": "Lagos",
                "addressCountry": "NG"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+234-912-568-9905",
                "contactType": "customer service"
              },
              "sameAs": [
                "https://www.facebook.com/profile.php?id=61586656664237",
                "https://www.linkedin.com/company/rexsearch/",
                "https://x.com/rex_search"
              ]
            })
          }}
        />
      </head>
      <body
        className={`${montserrat.variable} ${openSans.variable} antialiased transition-colors duration-300 font-body`}
      >
        <Preloader />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
