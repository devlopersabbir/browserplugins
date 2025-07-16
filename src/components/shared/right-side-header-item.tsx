"use client";

import Link from "next/link";
import { ThemeToggle } from "../theme-toggle";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";

export default function RightSideHeader() {
  const pathname = usePathname();

  return pathname.startsWith("/dashboard") ? (
    <div className="hidden lg:flex items-center space-x-4">
      <span className="text-sm text-muted-foreground">Welcome back!</span>
      <Button
        variant="outline"
        size="sm"
        className="border-border text-muted-foreground hover:bg-accent hover:text-foreground bg-transparent"
      >
        Logout
      </Button>
      <ThemeToggle />
    </div>
  ) : (
    <div className="flex items-center space-x-4">
      <Link href="/login" className="md:block hidden">
        <Button
          variant="ghost"
          className="text-muted-foreground hover:text-foreground hover:bg-accent border border-border rounded-xl cursor-pointer"
        >
          Login
        </Button>
      </Link>
      <Link href="/register">
        <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 rounded-xl shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 cursor-pointer">
          Get Started
        </Button>
      </Link>
      <ThemeToggle />
    </div>
  );
}
