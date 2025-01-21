import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nepal Trek Blog",
  description: "A journey of building schools and hope in Nepal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <div className="min-h-screen bg-background">
          <main className="container mx-auto py-6 px-4">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
