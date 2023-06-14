"use client";

import Navbar from "@/components/Navbar";
import "./globals.css";
import { useState, useEffect } from "react";
import Loader from "@/components/Loader";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
  }, []);

  setTimeout(() => {
    setLoading(false);
  }, 1000);

  return (
    <html lang="en" className="scroll-smooth">
      <body>
        {loading ? (
          <div className="w-full h-[100vh] flex flex-col justify-center items-center">
            <Loader />
          </div>
        ) : (
          <>
            <Navbar />
            {children}
          </>
        )}
      </body>
    </html>
  );
}
