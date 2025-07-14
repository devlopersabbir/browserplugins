import type { Metadata } from "next";
import "./globals.css";
import BaseProviders from "@/providers/base-providers";

export const metadata: Metadata = {
  title: "BrowserPlugins",
  description: "Premium Browser Extensions Marketplace",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <BaseProviders>{children}</BaseProviders>
      </body>
    </html>
  );
}
