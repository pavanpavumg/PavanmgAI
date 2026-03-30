import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ChatAssistant from "@/components/ChatAssistant";
import Navbar from "@/components/Navbar";
import FluidCursor from "@/components/FluidCursor";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pavan M G | AI & Software Engineer",
  description: "Portfolio of Pavan M G - Transforming Physics into Intelligent AI Solutions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} antialiased bg-[#080808]`}>
        <FluidCursor />
        <Navbar />
        <div className="relative z-10">
          {children}
        </div>
        <ChatAssistant />
      </body>
    </html>
  );
}
