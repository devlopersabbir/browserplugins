"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Dispatch, SetStateAction } from "react";
import { sortsBy as sortByConstants } from "@/constants";
import { SortBy } from "@/@types/extension/filter";

type Props = {
  sortBy: SortBy["value"];
  setSortBy: Dispatch<SetStateAction<SortBy["value"]>>;
};
export default function SortByFilter({ sortBy, setSortBy }: Props) {
  return (
    <div>
      <label className="text-foreground font-semibold mb-4 block text-lg">
        Sort By
      </label>
      <Select
        value={sortBy}
        onValueChange={(v: SortBy["value"]) => setSortBy(v)}
      >
        <SelectTrigger className="bg-input/10 border-input text-foreground rounded-xl h-12 backdrop-blur-sm">
          <SelectValue />
        </SelectTrigger>
        <SelectContent className="bg-popover backdrop-blur-2xl border-border rounded-xl">
          {sortByConstants.map((item, index) => (
            <SelectItem
              key={index}
              value={item.value}
              className="text-foreground hover:bg-accent rounded-lg"
            >
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
