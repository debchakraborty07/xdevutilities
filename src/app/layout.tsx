// src/app/layout.tsx

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/shared/navbar/navbar";
import Footer from "@/components/shared/footer/footer";
import { AuthProvider } from "@/context/auth-context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// এডসেন্স এবং SEO-র জন্য এই অংশটি খুব গুরুত্বপূর্ণ
export const metadata: Metadata = {
  metadataBase: new URL('https://www.xdevutilities.com'),
  title: {
    default: "xdevutilities | High-Performance Web Tools",
    template: "%s " 
  },
  description: "A collection of minimalist, privacy-focused utility tools for developers and creators. No tracking, no data storage.",
  alternates: {
    canonical: '/',
  },
  // সোশ্যাল মিডিয়া শেয়ারিং-এর জন্য (ঐচ্ছিক কিন্তু ভালো)
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.xdevutilities.com',
    siteName: 'xdevutilities',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google AdSense Script - Head এ রাখাটাই সবচেয়ে সেফ */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1460954118834824"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-background text-foreground flex flex-col min-h-screen`}>
        <AuthProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}