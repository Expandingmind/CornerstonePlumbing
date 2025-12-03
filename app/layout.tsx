import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://cornerstone-plumbing-git-main-expandingminds-projects.vercel.app"),
  title: "Cornerstone Plumbing | Trusted Miami Plumbers",
  description: "Residential & Commercial Plumbing in Miami. Available 24/7 for emergency services. Call Cornerstone Plumbing today.",
  openGraph: {
    title: "Cornerstone Plumbing | Trusted Miami Plumbers",
    description: "Residential & Commercial Plumbing in Miami. Available 24/7 for emergency services. Call Cornerstone Plumbing today.",
    siteName: "Cornerstone Plumbing",
    images: [
      {
        url: "https://cornerstone-plumbing-git-main-expandingminds-projects.vercel.app/images/services/shower.jpeg",
        width: 843,
        height: 1124,
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
    images: ["https://cornerstone-plumbing-git-main-expandingminds-projects.vercel.app/images/services/shower.jpeg"],
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

