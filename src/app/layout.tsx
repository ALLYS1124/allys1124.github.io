import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ally Santana",
  description: "Ally Santana is an artist based in LA. She does commissioned work, and sells originals.",
  openGraph: {
    title: "Ally Santana",
    description: "Ally Santana is an artist based in LA. She does commissioned work, and sells originals.",
    images: [
      {
        url: "/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Ally Santana - Artist based in LA",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ally Santana",
    description: "Ally Santana is an artist based in LA. She does commissioned work, and sells originals.",
    images: ["/preview.jpg"],
  },
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
