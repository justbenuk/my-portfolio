import type { Metadata } from "next";
import "./globals.css";
import { RootProps } from "@/types";
import { ThemeProvider } from "next-themes";
import CustomToastContainer from "@/lib/custome-toast-container";

export const metadata: Metadata = {
  title: {
    template: "%s | Ben Andrews",
    default: "Ben Andrews"
  },
  description: "I am a freelance web developer based in Tamworth UK",
};

export default function RootLayout({ children }: RootProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider attribute={'class'} defaultTheme="dark" disableTransitionOnChange>
          {children}
          <CustomToastContainer />
        </ThemeProvider>
      </body>
    </html>
  );
}
