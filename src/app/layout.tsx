import type { Metadata } from "next";
import "./globals.css";
import { RootProps } from "@/types";
import { Toaster } from "sonner";


export const metadata: Metadata = {
  title: {
    template: '%s - Ben Andrews',
    default: 'Ben Andrews - Fullstack Developer'
  },
  description: "Fullstack Developer based in the midlands",
};

export default function RootLayout({ children }: RootProps) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
