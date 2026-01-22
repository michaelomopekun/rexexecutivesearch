import type { Metadata, Viewport } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import Preloader from "@/components/Common/Preloader";
import { Analytics } from "@vercel/analytics/next"

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
  description: "Premier FMCG Recruitment. Connecting Top Talent with Leading FMCG Brands.",
  keywords: ["FMCG Recruitment", "Executive Search", "Talent Acquisition", "Rex Executive Search", "Hiring Leaders"],
  authors: [{ name: "Rex Executive Search" }],
  creator: "Rex Executive Search",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Rex Executive Search",
    title: "Rex Executive Search | Premier FMCG Recruitment",
    description: "Your specialist growth and productivity partner in the FMCG sector.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Rex Executive Search",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rex Executive Search",
    description: "Premier FMCG Recruitment.",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/logo.png",
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
        <link rel="icon" href="/logo.ico" />
      </head>
      <body
        className={`${montserrat.variable} ${openSans.variable} antialiased transition-colors duration-300 font-body`}
      >
        <Preloader />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
