import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Actuality Live",
  description: "Create winning RFP responses with Actuality AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#F9FAFB] max-w-[100vw] w-screen overflow-x-hidden`}
      >
        <div className="max-w-[1248px] mx-auto overflow-hidden px-[24px] md:px-0 ">

        {children}

        </div>
      </body>
    </html>
  );
}
