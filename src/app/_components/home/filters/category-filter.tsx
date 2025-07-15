"use client";
import { Category } from "@/@types/extension/category";
import { categories } from "@/constants/categories.data";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Dispatch, SetStateAction } from "react";

type Props = {
  selectedCategory: Category;
  setSelectedCategory: Dispatch<SetStateAction<Category>>;
};
export default function CategoryFilter({
  selectedCategory,
  setSelectedCategory,
}: Props) {
  return (
    <div>
      <label className="text-foreground font-semibold mb-4 block text-lg">
        Category
      </label>
      <Select
        value={selectedCategory}
        onValueChange={(v: Category) => setSelectedCategory(v)}
      >
        <SelectTrigger className="bg-input/10 border-input text-foreground rounded-xl h-12 backdrop-blur-sm">
          <SelectValue />
        </SelectTrigger>
        <SelectContent className="bg-popover backdrop-blur-2xl border-border rounded-xl">
          {/* map categoris */}
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
  );
}
