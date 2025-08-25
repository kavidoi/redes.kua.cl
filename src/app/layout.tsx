import type { Metadata } from "next";
import { Providers } from "@/components/providers/session-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "ChatFlow - Instagram DM Automation",
  description: "Automate your Instagram DMs and grow your business with ChatFlow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-foreground antialiased">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
