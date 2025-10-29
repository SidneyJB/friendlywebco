import type { Metadata } from "next";
import "./globals.css";
import { CursorEffects } from "@/components/ui/cursor-effects";

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
      <body className="antialiased">
        {children}
        <CursorEffects />
      </body>
    </html>
  );
}
