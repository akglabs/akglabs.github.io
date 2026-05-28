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
  metadataBase: new URL("https://akglabs.github.io"),
  title: "Abhishek Kumar Gupta | AI Engineer & Architect",
  description:
    "Senior Consultant at Microsoft building AI-first digital systems with distributed architecture, cloud-native platforms, and engineering leadership.",
  keywords: [
    "Abhishek Kumar Gupta",
    "AI Engineer",
    "Software Architect",
    "Microsoft",
    "Azure OpenAI",
    "Distributed Systems",
    "Portfolio",
  ],
  openGraph: {
    title: "Abhishek Kumar Gupta | AI Engineer & Architect",
    description:
      "Building AI-first digital experiences with cloud-scale distributed systems and product-focused engineering leadership.",
    url: "https://akglabs.github.io",
    siteName: "AKG Labs Portfolio",
    images: [
      {
        url: "/Abhishek_Gupta_Profile_Pic.png",
        width: 512,
        height: 512,
        alt: "Abhishek Kumar Gupta",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhishek Kumar Gupta | AI Engineer & Architect",
    description:
      "Senior Consultant at Microsoft focused on AI-first digital systems, architecture, and technical leadership.",
    images: ["/Abhishek_Gupta_Profile_Pic.png"],
  },
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
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${manrope.variable} ${cormorantGaramond.variable}`}>
        {children}
      </body>
    </html>
  );
}