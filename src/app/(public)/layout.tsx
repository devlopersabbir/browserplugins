import Footer from "@/components/shared/footer";
import Header from "@/components/shared/header";
import { ReactNode } from "react";

export default function PublicLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <main
      id="public-layout"
      className="min-h-screen bg-background text-foreground relative overflow-hidden"
    >
      <Header />
      {children}
      <Footer />
    </main>
  );
}
