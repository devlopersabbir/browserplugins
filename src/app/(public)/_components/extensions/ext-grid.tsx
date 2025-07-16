import { extensions } from "@/constants";
import { Search } from "lucide-react";
import ExtGridHeader from "./ext-grid-header";
import ExtCard from "./ext-card";

export default function ExtGrid() {
  return (
    <div className="container mx-auto">
      <div className="max-w-7xl mx-auto">
        {/* grid header */}
        <ExtGridHeader />

        <div className="grid xl:grid-cols-3 lg:grid-cols-2 gap-8">
          {extensions.map((extension, index) => (
            <ExtCard extension={extension} index={index} key={index} />
          ))}
        </div>

        {extensions.length === 0 && (
          <div className="text-center py-24">
            <div className="w-32 h-32 bg-card/5 backdrop-blur-xl rounded-full flex items-center justify-center mx-auto mb-8 border border-border">
              <Search className="w-16 h-16 text-muted-foreground" />
            </div>
            <h3 className="text-3xl font-bold text-foreground mb-4">
              No extensions found
            </h3>
            <p className="text-muted-foreground text-lg">
              Try adjusting your search criteria or filters
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
