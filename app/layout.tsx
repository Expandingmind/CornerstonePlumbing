import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cornerstone Plumbing | Trusted Miami Plumbers",
  description: "Residential & Commercial Plumbing in Miami. Available 24/7 for emergency services. Call Cornerstone Plumbing today.",
  openGraph: {
    title: "Cornerstone Plumbing | Trusted Miami Plumbers",
    description: "Residential & Commercial Plumbing in Miami. Available 24/7 for emergency services. Call Cornerstone Plumbing today.",
    images: [
      {
        url: "/images/services/shower.jpeg",
        width: 1200,
        height: 630,
        alt: "Cornerstone Plumbing - Professional Bathroom & Plumbing Services in Miami",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cornerstone Plumbing | Trusted Miami Plumbers",
    description: "Residential & Commercial Plumbing in Miami. Available 24/7 for emergency services.",
    images: ["/images/services/shower.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

