import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Vaibhav Kharate | Portfolio",
  description: "Professional Data Analyst & Aspiring Data Engineer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/favicons/favicon-48x48.png" />
        <link rel="icon" type="image/png" sizes="64x64" href="/favicons/favicon-64x64.png" />
        <link rel="shortcut icon" href="/favicons/favicon.ico" />
        <link rel="icon" href="/favicons/favicon.svg" type="image/svg+xml" />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#2b5797" />
        <meta name="msapplication-TileImage" content="/favicons/web-app-manifest-192x192.png" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body
        className={`${inter.className} bg-slate-950 text-gray-200 antialiased relative`}
      >
        {/* Background gradient */}
        <div
          className="pointer-events-none fixed inset-0 bg-gradient-to-b 
                     from-slate-950 via-slate-900/40 to-slate-950 opacity-95"
        />
        
        {/* Page Wrapper */}
        <div className="relative z-10 min-h-screen flex flex-col">
        {/* NAVBAR */}
        <Navigation />

        {/* MAIN CONTENT */}
        <main className="flex-1 w-full">{children}</main>

        {/* FOOTER */}
        <Footer />
        </div>
      </body>
    </html>
  );
}
