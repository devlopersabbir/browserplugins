"use client";

import { useState } from "react";
import CategoryFilter from "./category-filter";
import { Category } from "@/@types/extension/category";
import PriceFilter from "./price-filter";
import SortByFilter from "./sort-by-filter";
import { SortBy } from "@/@types/extension/filter";
import BrowserFilter from "./browser-filter";
import { Browser } from "@/@types";

export default function BaseFilters() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("all");
  const [selectedBrowser, setSelectedBrowser] = useState<Browser>("all");
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [sortBy, setSortBy] = useState<SortBy["value"]>("popular");

  return (
    <div className="grid lg:grid-cols-4 gap-8">
      <CategoryFilter
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <BrowserFilter
        selectedBrowser={selectedBrowser}
        setSelectedBrowser={setSelectedBrowser}
      />

      <PriceFilter priceRange={priceRange} setPriceRange={setPriceRange} />

      <SortByFilter sortBy={sortBy} setSortBy={setSortBy} />
    </div>
  );
}
