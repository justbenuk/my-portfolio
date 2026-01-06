import type { Metadata } from "next";
import "./globals.css";
import { RootProps } from "@/types";
import { Toaster } from "sonner";
import { ThemeProvider } from "next-themes";


export const metadata: Metadata = {
  title: {
    template: '%s - Ben Andrews',
    default: 'Ben Andrews - Fullstack Developer'
  },
  description: "Fullstack Developer based in the midlands",
};

export default function RootLayout({ children }: RootProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider attribute={'class'} defaultTheme="dark" disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
