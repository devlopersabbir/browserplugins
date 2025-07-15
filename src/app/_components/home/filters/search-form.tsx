"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState } from "react";

export default function SearchForm() {
  const [searchQuery, setSearchQuery] = useState("");
  return (
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
  );
}
