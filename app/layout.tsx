import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "iBuiltThis",
  description: "A app to share your all projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body
        className={`${inter.className} min-h-full flex flex-col antialiased`}
      >
        <header>iBuiltThis</header>
        {children}
        <footer>iBuiltThis Inc. All Rights Reserved</footer>
      </body>
    </html>
  );
}
