"use client";
import { PropsWithChildren } from "react";
import { ThemeProvider } from "./theme-provider";

export default function BaseProviders({ children }: PropsWithChildren) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
}
