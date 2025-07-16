"use client";

import { useState, useEffect } from "react";
import { extensions } from "@/constants";
import Stats from "./_components/Stats";
import SearchFilters from "./_components/filters/search-filters";
import Hero from "./_components/hero";
import ExtGrid from "./_components/extensions/ext-grid";

export default function HomePage() {
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

  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-background to-muted">
        <Hero />
      </section>

      {/* Search and Filters */}
      <section className="relative py-12 px-6 bg-background">
        <SearchFilters />
        {/* <BaseFilters /> */}
      </section>

      {/* Extensions Grid */}
      <section className="relative py-16 px-6 bg-background">
        <ExtGrid />
      </section>

      {/* Stats Section */}
      <section className="relative py-24 px-6 bg-background">
        <Stats extensions={extensions} />
      </section>
    </div>
  );
}
