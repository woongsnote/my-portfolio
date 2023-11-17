import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Providers } from "./providers";
import { Toaster } from "react-hot-toast";
import { MainLayout } from "@/layouts/main";
import { Header, Footer } from "@/components/index";

const pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  display: "swap",
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ko"
      className={`${pretendard.variable}`}
      suppressHydrationWarning
    >
      <body>
        <Providers>
          <Header />
          <main>
            <MainLayout>{children}</MainLayout>
          </main>
          <Footer />
          <Toaster position="top-center" />
        </Providers>
      </body>
    </html>
  );
}
