"use client";
import { Button } from "@/components/ui/button";
import { Heart, Download } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { ExtensionSchema } from "../schemas/extension.schema";

type Props = {
  extension: ExtensionSchema;
};
export default function ToggleWishlist({ extension }: Props) {
  const [wishlist, setWishlist] = useState<number[]>([]);

  // Load wishlist from localStorage on mount
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
        toast.info("Removed from Wishlist");
        return prevWishlist.filter((itemId) => itemId !== id);
      } else {
        toast.info("Added to Wishlist");
        return [...prevWishlist, id];
      }
    });
  };
  return (
    <div className="flex items-center space-x-2">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => toggleWishlist(Number(extension.id))}
        className={`rounded-xl w-10 h-10 p-0 ${
          wishlist.includes(Number(extension.id))
            ? "text-red-500 hover:bg-red-500/10"
            : "text-muted-foreground hover:text-red-400 hover:bg-red-500/10"
        }`}
      >
        <Heart
          className="w-4 h-4"
          fill={
            wishlist.includes(Number(extension.id)) ? "currentColor" : "none"
          }
        />
      </Button>
      <Link href={`/extension/${extension.id}`}>
        <Button
          className="text-white border-0 rounded-xl px-4 py-2 font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
          style={{
            background: `linear-gradient(135deg, #8B5CF6, #EC4899)`,
          }}
        >
          <Download className="w-4 h-4 mr-1" />
          Get Now
        </Button>
      </Link>
    </div>
  );
}
