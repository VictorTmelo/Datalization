import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from 'next-themes'
import { SidebarProvider } from '@/components/ui/sidebar';
import { Sidebar } from '@/components/Sidebar';
import { Header } from '@/components/Header';

const inter = Inter({
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Datalization",
  description: "A modern dashboard template built with Next.js, Tailwind CSS, and Recharts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${spaceGrotesk.className} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" value={{ light: "light", dark: "dark" }}>
          <SidebarProvider>
            <div className="flex min-h-screen w-full bg-background">
              <Sidebar />
              <div className="flex-1 flex flex-col">
                <Header />
                {children}
              </div>
            </div>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
