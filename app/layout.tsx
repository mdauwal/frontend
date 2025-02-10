"use client";  // Add this at the top

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { usePathname } from "next/navigation";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const hideNavbarAndFooter = ["/signin", "/signup"].includes(pathname);

  return (
    <html lang="en">
      <body>
        {!hideNavbarAndFooter && <Navbar />}
        <main>{children}</main>
        {!hideNavbarAndFooter && <Footer />}
      </body>
    </html>
  );
}
