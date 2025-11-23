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
          { <Navigation />}

          {/* MAIN CONTENT */}
          <main className="flex-1 w-full">{children}</main>

          {/* FOOTER */}
          { <Footer />}
        </div>
      </body>
    </html>
  );
}
