import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";

const sohne = localFont({
  src: [
    {
      path: "./fonts/sohne-buch.otf",
      weight: "400",
    },
    {
      path: "./fonts/sohne-halbfett.otf",
      weight: "600",
    },
    {
      path: "./fonts/sohne-kraftig.otf",
      weight: "500",
    },
  ],
  variable: "--font-sohne",
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
        className={`${sohne.variable} antialiased bg-[#F9FAFB] max-w-[100vw] w-screen overflow-x-hidden`}
      >
        <div className="max-w-[1248px] mx-auto overflow-hidden px-[24px] md:px-0">
          {children}
        </div>
      </body>
    </html>
  );
}
