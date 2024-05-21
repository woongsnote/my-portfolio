import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

// components
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";

// fonts
const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetBrainsMono",
});

// metadata
export const metadata: Metadata = {
  title: "문지웅의 포트폴리오",
  description: "Next.js 14로 구현한 웹 포트폴리오",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr">
      <body className={jetBrainsMono.variable}>
        <Header />
        <main>{children}</main>
        <Footer />
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
