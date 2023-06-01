import "@/styles/globals.css";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "@/components/common/Providers";
import BottomNav from "@/components/common/BottomNav";
import Header from "@/components/common/Header";
import dotenv from "dotenv";
dotenv.config();

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home | Trypto",
  description: "Make & Share your Plan!",
};

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: any;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          <main>{children}</main>
          <BottomNav />
        </Providers>
      </body>
    </html>
  );
}
