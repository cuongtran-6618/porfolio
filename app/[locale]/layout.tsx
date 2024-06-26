import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "../components/layout/Navbar";
import '../styles/globals.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Freelancer portfolio",
  description: "This is my porfolio as a web developer - Cuong Tran",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
