"use client";
import { Browser, Extension } from "@/@types";
import { Button } from "@/components/ui/button";
import { Download, Heart } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "sonner";

type Props = {
  extension: Extension;
  selectedBrowser: Browser;
};
export default function ExtensionPurches({
  extension,
  selectedBrowser,
}: Props) {
  const [wishlist, setWishlist] = useState<number[]>([]);

  useEffect(() => {
    const storedWishlist = localStorage.getItem("browserplugins_wishlist");
    if (storedWishlist) {
      setWishlist(JSON.parse(storedWishlist));
    }
  }, []);

  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("browserplugins_wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const toggleWishlist = (id: number) => {
    setWishlist((prevWishlist) => {
      if (prevWishlist.includes(id)) {
        toast.success("Removed from Wishlist");
        return prevWishlist.filter((itemId) => itemId !== id);
      } else {
        toast.success("Added to Wishlist");
        return [...prevWishlist, id];
      }
    });
  };

  return (
    <div className="flex space-x-3">
      <Link
        href={`/checkout/${extension.id}?browser=${selectedBrowser}`}
        className="w-full"
      >
        <Button
          className="w-full flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0"
          size="lg"
        >
          <Download className="w-4 h-4 mr-2" />
          Purchase & Download
        </Button>
      </Link>
      <Button
        variant="outline"
        size="lg"
        onClick={() => toggleWishlist(extension.id)}
        className={`bg-input/10 border-border text-muted-foreground hover:bg-accent ${
          wishlist.includes(extension.id)
            ? "text-red-500 hover:text-red-600"
            : "hover:text-red-400"
        }`}
      >
        <Heart
          className="w-4 h-4"
          fill={wishlist.includes(extension.id) ? "currentColor" : "none"}
        />
      </Button>
    </div>
  );
}
