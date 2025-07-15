"use client";

import { useState, useEffect } from "react";
import { toast } from "sonner";
import { Extension } from "@/@types";
import { extensions } from "@/constants";
import Header from "@/components/shared/header";
import Hero from "./_components/home/hero";
import SearchFilters from "./_components/home/filters/search-filters";
import CardGrid from "./_components/home/card-grid";
import Stats from "./_components/home/Stats";
import Footer from "@/components/shared/footer";
import BaseFilters from "./_components/home/filters/base-filters";

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedBrowser, setSelectedBrowser] = useState<string>("all");
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [sortBy, setSortBy] = useState("popular");
  const [filteredExtensions, setFilteredExtensions] = useState<Extension[]>([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

  // Filter extensions
  useEffect(() => {
    const filtered = extensions.filter((ext) => {
      const matchesSearch =
        ext.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ext.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ext.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        );

      const matchesCategory =
        selectedCategory === "all" || ext.category === selectedCategory;
      const matchesBrowser =
        selectedBrowser === "all" ||
        ext.browsers.includes(selectedBrowser as any);
      const matchesPrice =
        ext.price >= priceRange[0] && ext.price <= priceRange[1];

      return matchesSearch && matchesCategory && matchesBrowser && matchesPrice;
    });

    // Sort extensions
    switch (sortBy) {
      case "popular":
        filtered.sort((a, b) => b.stats.downloads - a.stats.downloads);
        break;
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "newest":
        filtered.sort(
          (a, b) =>
            new Date(b.lastUpdated).getTime() -
            new Date(a.lastUpdated).getTime()
        );
        break;
    }

    setFilteredExtensions(filtered);
  }, [searchQuery, selectedCategory, selectedBrowser, priceRange, sortBy]);

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <header className="sticky z-50 border-b border-border bg-background/70 backdrop-blur-xl top-0">
        <Header />
      </header>

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
      <CardGrid />
      {/* Stats Section */}
      <Stats extensions={extensions} />

      {/* Footer */}
      <Footer />
    </div>
  );
}
