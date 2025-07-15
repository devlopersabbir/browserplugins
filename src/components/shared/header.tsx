import { ThemeToggle } from "../theme-toggle";
import { Button } from "../ui/button";
import Logo from "./logo";
import Link from "next/link";

export default function Header() {
  return (
    <div className="container mx-auto px-6 py-4">
      <div className="flex items-center justify-between">
        <Logo />

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
      </div>
    </div>
  );
}
