"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { categories } from "@/constants/categories.data";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@radix-ui/react-select";
import { Slider } from "@radix-ui/react-slider";
import { Search, Chrome, Globe } from "lucide-react";
import { useState } from "react";

export default function SearchFilters() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedBrowser, setSelectedBrowser] = useState<string>("all");
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [sortBy, setSortBy] = useState("popular");
  return (
    <section className="relative py-12 px-6 bg-background">
      <div className="container mx-auto">
        <div className="max-w-7xl mx-auto">
          {/* Search Bar */}
          <div className="relative mb-12">
            <div className="relative max-w-3xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-xl"></div>
              <div className="relative bg-card/50 backdrop-blur-2xl border border-border rounded-3xl p-2">
                <div className="flex items-center">
                  <Search className="absolute left-6 text-muted-foreground w-6 h-6" />
                  <Input
                    placeholder="Search extensions, features, or categories..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-16 pr-6 py-6 text-lg bg-transparent border-0 text-foreground placeholder-muted-foreground focus:ring-0 focus:outline-none"
                  />
                  <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 rounded-2xl px-8 py-6 font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    Search
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="bg-card/30 backdrop-blur-2xl rounded-3xl p-8 border border-border">
            <div className="grid lg:grid-cols-4 gap-8">
              <div>
                <label className="text-foreground font-semibold mb-4 block text-lg">
                  Category
                </label>
                <Select
                  value={selectedCategory}
                  onValueChange={setSelectedCategory}
                >
                  <SelectTrigger className="bg-input/10 border-input text-foreground rounded-xl h-12 backdrop-blur-sm">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-popover backdrop-blur-2xl border-border rounded-xl">
                    {categories.map((cat) => (
                      <SelectItem
                        key={cat.value}
                        value={cat.value}
                        className="text-foreground hover:bg-accent rounded-lg"
                      >
                        <div className="flex items-center space-x-3">
                          {cat.icon}
                          <span>{cat.label}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-foreground font-semibold mb-4 block text-lg">
                  Browser
                </label>
                <Select
                  value={selectedBrowser}
                  onValueChange={setSelectedBrowser}
                >
                  <SelectTrigger className="bg-input/10 border-input text-foreground rounded-xl h-12 backdrop-blur-sm">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-popover backdrop-blur-2xl border-border rounded-xl">
                    <SelectItem
                      value="all"
                      className="text-foreground hover:bg-accent rounded-lg"
                    >
                      All Browsers
                    </SelectItem>
                    <SelectItem
                      value="chrome"
                      className="text-foreground hover:bg-accent rounded-lg"
                    >
                      <div className="flex items-center space-x-2">
                        <Chrome className="w-4 h-4" />
                        <span>Chrome</span>
                      </div>
                    </SelectItem>
                    <SelectItem
                      value="firefox"
                      className="text-foreground hover:bg-accent rounded-lg"
                    >
                      <div className="flex items-center space-x-2">
                        <Globe className="w-4 h-4" />
                        <span>Firefox</span>
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-foreground font-semibold mb-4 block text-lg">
                  Price Range: ${priceRange[0]} - ${priceRange[1]}
                </label>
                <div className="pt-2">
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={100}
                    step={5}
                    className="mt-2"
                  />
                </div>
              </div>

              <div>
                <label className="text-foreground font-semibold mb-4 block text-lg">
                  Sort By
                </label>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="bg-input/10 border-input text-foreground rounded-xl h-12 backdrop-blur-sm">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-popover backdrop-blur-2xl border-border rounded-xl">
                    <SelectItem
                      value="popular"
                      className="text-foreground hover:bg-accent rounded-lg"
                    >
                      🔥 Most Popular
                    </SelectItem>
                    <SelectItem
                      value="rating"
                      className="text-foreground hover:bg-accent rounded-lg"
                    >
                      ⭐ Highest Rated
                    </SelectItem>
                    <SelectItem
                      value="newest"
                      className="text-foreground hover:bg-accent rounded-lg"
                    >
                      🆕 Newest
                    </SelectItem>
                    <SelectItem
                      value="price-low"
                      className="text-foreground hover:bg-accent rounded-lg"
                    >
                      💰 Price: Low to High
                    </SelectItem>
                    <SelectItem
                      value="price-high"
                      className="text-foreground hover:bg-accent rounded-lg"
                    >
                      💎 Price: High to Low
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
