import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "grosure - Your Complete Kitchen Co Pilot",
  description: "Meet Olive, your AI kitchen agent. Transform your kitchen with AI-powered pantry management, smart shopping lists, personalized meal plans, and intelligent recipe discovery.",
  keywords: ["kitchen management", "AI assistant", "meal planning", "recipe app", "pantry management", "shopping list", "Olive", "AI kitchen agent"],
  authors: [{ name: "grosure" }],
  openGraph: {
    title: "grosure - Your Complete Kitchen Co Pilot",
    description: "Meet Olive, your AI kitchen agent. Transform your kitchen with AI-powered pantry management, smart shopping lists, personalized meal plans, and intelligent recipe discovery.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
