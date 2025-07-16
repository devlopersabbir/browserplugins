import { extensions } from "@/constants";
import { Filter } from "lucide-react";

export default function ExtGridHeader() {
  return (
    <div className="flex items-center justify-between mb-16">
      <div>
        <h2 className="text-5xl font-black text-foreground mb-4">
          Featured Extensions
          <span className="text-purple-400 ml-4">({extensions.length})</span>
        </h2>
        <p className="text-muted-foreground text-xl">
          Handpicked premium extensions for power users
        </p>
      </div>
      <div className="flex items-center space-x-3 bg-card/10 backdrop-blur-xl border border-border rounded-2xl px-6 py-3">
        <Filter className="w-5 h-5 text-purple-400" />
        <span className="text-foreground font-medium">
          {extensions.length} results
        </span>
      </div>
    </div>
  );
}
