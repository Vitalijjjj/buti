import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { PixelManager } from "@/components/pixels/PixelManager";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Facecult Dublin | Premium Medical Aesthetics Clinic Dublin",
    template: "%s | Facecult Dublin",
  },
  description:
    "Facecult Dublin - Dublin's leading medical aesthetics clinic offering advanced treatments including anti-ageing, dermal fillers, laser treatments, and skin rejuvenation by certified professionals in Dublin.",
  keywords: [
    "facecult dublin",
    "facecult",
    "medical aesthetics Dublin",
    "anti-ageing treatments Dublin",
    "dermal fillers Dublin",
    "laser treatments Dublin",
    "skin clinic Dublin",
    "facecult ireland",
    "facecult aesthetic clinic",
  ],
  authors: [{ name: "Facecult" }],
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://facecult.ie",
    siteName: "Facecult",
    title: "Facecult | Premium Medical Aesthetics Clinic Dublin",
    description:
      "Dublin's leading medical aesthetics clinic offering advanced treatments including anti-ageing, dermal fillers, laser treatments, and skin rejuvenation.",
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GoogleAnalytics />
        <PixelManager />
        {children}
      </body>
    </html>
  );
}
