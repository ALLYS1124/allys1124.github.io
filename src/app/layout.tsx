import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ally Santana",
  description: "Ally Santana is an artist based in LA. She does commissioned work, and sells originals.",
};

// This is the root of your project, the outermost layer
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
