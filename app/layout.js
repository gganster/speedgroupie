import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/header";

import "./globals.css";
import SpotifyBar from "@/components/SpotifyBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SpeedGroupie",
  description: "By Guilian",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark min-h-screen max-w-screen overflow-x-hidden  flex-col`}
      >
        <Header />
        <div className="flex-1">
          {children}
        </div>
        <SpotifyBar />
      </body>
    </html>
  );
}
