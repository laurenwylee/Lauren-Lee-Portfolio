import Header from "@/components/Header";
import Footer from "@/components/Footer";

import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const siteUrl = "https://www.laurenwylee.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Lauren Lee | Software Engineer & Nonprofit Founder",
    template: "%s | Lauren Lee",
  },
  description:
    "Lauren Lee is a BS/MS Computer Science student at Yale University, software engineer, and founder of Bridging Seas.",
  openGraph: {
    title: "Lauren Lee | Software Engineer & Nonprofit Founder",
    description:
      "Lauren Lee is a BS/MS Computer Science student at Yale University, software engineer, and founder of Bridging Seas.",
    url: siteUrl,
    siteName: "Lauren Lee",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lauren Lee| Software Engineer & Nonprofit Founder",
    description:
      "Lauren Lee is a BS/MS Computer Science student at Yale University, software engineer, and founder of Bridging Seas.",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Lauren Lee",
  url: siteUrl,
  jobTitle: "Software Engineer",
  affiliation: {
    "@type": "CollegeOrUniversity",
    name: "Yale University",
  },
  sameAs: [
    "https://www.linkedin.com/in/laurenwylee/",
    "https://www.bridgingseas.com/",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jetbrainsMono.variable} antialiased min-h-screen flex flex-col`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
