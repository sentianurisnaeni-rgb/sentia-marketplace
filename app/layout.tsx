import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SENTIA BEAUTY",
  description: "Marketplace Beauty",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
   <body>

  <Navbar />

  {children}

  <Footer />

</body>
    </html>
  );
}