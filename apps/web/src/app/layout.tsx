import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "ANT Developers",
    template: "%s | ANT Developers",
  },
  description: siteConfig.description,
  keywords: [
    "training academy",
    "aptitude training",
    "technical training",
    "soft skills",
    "interview preparation",
    "corporate training",
    "language training",
  ],
  openGraph: {
    title: "ANT Developers",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: "ANT Developers",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "ANT Developers",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ANT Developers",
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}