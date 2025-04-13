"use client"
import { Geist, Geist_Mono } from "next/font/google";
import { Header, ColorProvider, Wrapper } from "@/components"
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


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
        <Wrapper>
          <Header />
          {children}
        </Wrapper>

      </body>
    </html >
  );
}

