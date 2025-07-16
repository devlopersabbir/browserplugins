import Header from "@/components/shared/header";
import { ReactNode } from "react";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <main
      id="dashboard-layout"
      className="min-h-screen bg-background text-foreground relative overflow-hidden"
    >
      <Header />
      {children}
    </main>
  );
}
