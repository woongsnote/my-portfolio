import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Toaster } from "react-hot-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  display: "swap",
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  title: "문지웅의 포트폴리오",
  description: "Next.js 14로 구현한 포트폴리오입니다.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='ko'
      className={`${pretendard.variable}`}
      suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Header />
          {children}
          <Footer />
          <Toaster position='top-right' />
        </ThemeProvider>
      </body>
    </html>
  );
}
