import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Abhishek Kumar Gupta | Lead SDE",
  description:
    "An editorial-style personal website for Abhishek Kumar Gupta, built with Next.js.",
  icons: {
    icon: "/Abhishek_Gupta_Profile_Pic.png",
    shortcut: "/Abhishek_Gupta_Profile_Pic.png",
    apple: "/Abhishek_Gupta_Profile_Pic.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${cormorantGaramond.variable}`}>
        {children}
      </body>
    </html>
  );
}