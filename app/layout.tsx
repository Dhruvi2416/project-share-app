import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "iBuiltThis Share Your Creations, Discover New Launches",
  description: "A app to share your all projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.className} min-h-full flex flex-col antialiased`}
      >
        <header>iBuiltThis</header>
        {children}
        <footer>iBuiltThis Inc. All Rights Reserved</footer>
      </body>
    </html>
  );
}
