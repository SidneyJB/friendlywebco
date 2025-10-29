import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CursorEffects } from "@/components/ui/cursor-effects";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The FriendlyWeb Company",
  description: "Professional web development and hosting services",
  keywords: "web development, hosting, websites, friendly web",
  authors: [{ name: "The FriendlyWeb Company" }],
  openGraph: {
    title: "The FriendlyWeb Company",
    description: "Professional web development and hosting services",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
        <CursorEffects />
      </body>
    </html>
  );
}
