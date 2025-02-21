import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Chat from './components/Chat';

import { ThemeProvider } from 'next-themes';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Agentia World - AI Agents Platform",
  description: "Discover and create intelligent AI agents in Agentia World",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <ThemeProvider attribute="class">
          <Header />
          <main className="flex-grow pt-24 md:pt-28">
            {children}
          </main>
          <Footer />
          <Chat />
        </ThemeProvider>
      </body>
    </html>
  );
}
