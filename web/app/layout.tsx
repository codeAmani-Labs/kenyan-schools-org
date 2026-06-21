import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://kenyanschools.org'),
  title: {
    default: "Kenyan Schools Directory | All 47 Counties | CodeAmani Labs",
    template: "%s | Kenyan Schools - CodeAmani Labs",
  },
  description: "Official public directory of Kenya's secondary schools by CodeAmani Labs (Founder: codeAmani-Solutions (Barnabas Waweru)). Explore 1,127+ institutions across all 47 counties with verified sources, county geolocations, and community contributions. Transparent, accessible education data.",
  keywords: [
    "Kenyan schools", "Kenya secondary schools", "National schools Kenya",
    "Kenya high schools directory", "KSSSA schools", "Kenyan education",
    "County schools Kenya", "Schools in Kenya", "Nairobi schools",
    "Mombasa schools", "All 47 counties schools", "CodeAmani Labs"
  ],
  authors: [{ name: "CodeAmani Labs", url: "https://codeamanilabs.org/" }],
  // Founder: codeAmani-Solutions (Barnabas Waweru) - https://github.com/codeAmani-Solutions
  // GitHub Org: https://github.com/codeAmani-Labs
  // Founder: codeAmani-Solutions (Barnabas Waweru) - https://github.com/codeAmani-Solutions
  openGraph: {
    title: "Kenyan Schools Directory | All 47 Counties",
    description: "Built by CodeAmani Labs (Founder: codeAmani-Solutions (Barnabas Waweru)). Transparent public directory of Kenya's secondary schools with sources and county geolocations.",
    images: [{ url: "/og.png" }],
    siteName: "Kenyan Schools | CodeAmani Labs",
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kenyan Schools Directory - CodeAmani Labs",
    description: "Authoritative directory of Kenyan secondary schools across 47 counties. Reliable public data resource.",
  },
  alternates: {
    canonical: "https://kenyanschools.org",
    types: {
      "application/xml": "https://kenyanschools.org/sitemap.xml",
    },
  },
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
  icons: {
    icon: "/favicon.ico",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Toaster position="top-center" richColors closeButton />
      </body>
    </html>
  );
}
