"use client";
import { Browser } from "@/@types";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { browsers } from "@/constants";
import { Dispatch, SetStateAction } from "react";
type Props = {
  selectedBrowser: Browser;
  setSelectedBrowser: Dispatch<SetStateAction<Browser>>;
};
export default function BrowserFilter({
  selectedBrowser,
  setSelectedBrowser,
}: Props) {
  return (
    <div>
      <label className="text-foreground font-semibold mb-4 block text-lg">
        Browser
      </label>
      <Select
        value={selectedBrowser}
        onValueChange={(v: Browser) => setSelectedBrowser(v)}
      >
        <SelectTrigger className="bg-input/10 border-input text-foreground rounded-xl h-12 backdrop-blur-sm">
          <SelectValue />
        </SelectTrigger>
        <SelectContent className="bg-popover backdrop-blur-2xl border-border rounded-xl">
          {browsers.map((b, i) => (
            <SelectItem
              key={i}
              value={b.value}
              className="text-foreground hover:bg-accent rounded-lg"
            >
              <div className="flex items-center space-x-3">
                {b.icon}
                <span>{b.label}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
