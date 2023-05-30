"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import { QueryClient, QueryClientProvider } from "react-query";

const inter = Inter({ subsets: ["latin"] });
const rickQuery = new QueryClient();

export const metadata = {
  title: "Rick and Morty",
  description: "Carascters Rick and Morty",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={rickQuery}>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </QueryClientProvider>
  );
}
