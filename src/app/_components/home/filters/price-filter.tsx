"use client";
import { Slider } from "@/components/ui/slider";
import { Dispatch, SetStateAction } from "react";

type Props = {
  priceRange: number[];
  setPriceRange: Dispatch<SetStateAction<number[]>>;
};
export default function PriceFilter({ priceRange, setPriceRange }: Props) {
  return (
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
  );
}
