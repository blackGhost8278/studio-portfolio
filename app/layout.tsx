import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Studio | Multi-Disciplinary Creative Agency",
  description: "Premium web development, IPTV rebranding, and 3D animation services. AI-accelerated workflows for future-proof digital solutions.",
  keywords: ["web development", "IPTV", "3D animation", "creative agency", "digital studio"],
  authors: [{ name: "Studio" }],
  openGraph: {
    title: "Studio | Multi-Disciplinary Creative Agency",
    description: "Premium web development, IPTV rebranding, and 3D animation services.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}

