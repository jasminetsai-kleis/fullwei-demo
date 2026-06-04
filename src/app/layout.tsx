import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import OrganizationJsonLd from "@/components/OrganizationJsonLd";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "富惟工業 Fullwei Industrial | Precision Metal Components",
  description:
    "Since 1964, precision metal stamping, welding, and tube processing for the world's leading automotive brands.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-TW" className={`${inter.variable} h-full`}>
      <body className="min-h-full antialiased">
        <OrganizationJsonLd />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
