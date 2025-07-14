import { categories } from "@/constants/categories.data";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative border-t border-border bg-background/50 backdrop-blur-2xl py-16 px-6">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-2xl shadow-purple-500/25">
                  <span className="text-white font-black text-xl">BP</span>
                </div>
                <div>
                  <h3 className="text-3xl font-black bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent">
                    BrowserPlugins
                  </h3>
                  <p className="text-xs text-muted-foreground font-medium tracking-wider uppercase">
                    Premium Store
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed max-w-md text-lg">
                Your trusted source for premium browser extensions. Handcrafted
                with care, tested for quality, and designed to enhance your
                digital experience.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-6 text-xl">
                Categories
              </h4>
              <ul className="space-y-4">
                {categories.slice(1).map((cat) => (
                  <li key={cat.value}>
                    <Link
                      href={`#${cat.value}`}
                      className="text-muted-foreground hover:text-foreground transition-colors text-lg flex items-center space-x-2 hover:translate-x-2 duration-300"
                    >
                      {cat.icon}
                      <span>{cat.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-6 text-xl">
                Support
              </h4>
              <ul className="space-y-4 text-lg">
                <li>
                  <Link
                    href="/help"
                    className="text-muted-foreground hover:text-foreground transition-colors hover:translate-x-2 m duration-300 inline-block"
                  >
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-muted-foreground hover:text-foreground transition-colors hover:translate-x-2 duration-300 inline-block"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="text-muted-foreground hover:text-foreground transition-colors hover:translate-x-2  duration-300 inline-block"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="text-muted-foreground hover:text-foreground transition-colors hover:translate-x-2  duration-300 inline-block"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-12 pt-8 text-center">
            <p className="text-muted-foreground text-lg">
              &copy; 2024 BrowserPlugins. All rights reserved. Made with ❤️ for
              developers.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
