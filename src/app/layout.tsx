import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles.css";
import "@coinbase/onchainkit/tailwind.css";
import "@coinbase/onchainkit/styles.css";
import OnchainProviders from "../OnchainProviders";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Onchain Playground",
  description: "Build onchain applications with ease",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* TODO: how does this wrapping work */}
        <OnchainProviders>{children}</OnchainProviders>
      </body>
    </html>
  );
}
