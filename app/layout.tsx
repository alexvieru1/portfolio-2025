import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { NavigationDock } from "@/components/navigation-dock";
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import SmoothCursorWrapper from "@/components/ui/smooth-cursor-wrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alex Vieru - Developer",
  description: "Personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ScrollProgress className="top-0 h-1.5" />
          <SmoothCursorWrapper/>
          {children}
          <NavigationDock />
        </ThemeProvider>
      </body>
    </html>
  );
}
