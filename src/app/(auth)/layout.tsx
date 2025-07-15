import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Auth",
};
export default function AuthLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <main id="auth-layout">{children}</main>;
}
