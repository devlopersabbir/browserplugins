"use client";
import SearchForm from "./search-form";
import BaseFilters from "./base-filters";

export default function SearchFilters() {
  return (
    <div className="container mx-auto">
      <div className="max-w-7xl mx-auto">
        {/* Search Bar */}
        <div className="relative mb-12">
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-xl"></div>
            <div className="relative bg-card/50 backdrop-blur-2xl border border-border rounded-3xl p-2">
              <SearchForm />
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-card/30 backdrop-blur-2xl rounded-3xl p-8 border border-border">
          <BaseFilters />
        </div>
      </div>
    </div>
  );
}
