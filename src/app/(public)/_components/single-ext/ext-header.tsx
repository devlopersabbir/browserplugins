import { ExtensionProps } from "@/@types";
import { Badge } from "@/components/ui/badge";
import { Chrome, Eye, Star, Users, ChromeIcon as Firefox } from "lucide-react";

export default function ExtensionHeader({ extension }: ExtensionProps) {
  return (
    <div className="flex items-start justify-between mb-6">
      <div className="flex-1">
        <div className="flex items-center space-x-3 mb-4">
          <h1 className="text-4xl font-bold text-foreground">
            {extension.name}
          </h1>
          <div className="flex items-center space-x-2">
            {extension.browsers.includes("chrome") && (
              <Chrome className="w-6 h-6 text-green-400" />
            )}
            {extension.browsers.includes("firefox") && (
              <Firefox className="w-6 h-6 text-orange-400" />
            )}
          </div>
        </div>
        <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
          {extension.description}
        </p>
        <div className="flex items-center space-x-6 mb-4">
          <div className="flex items-center space-x-1">
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            <span className="font-medium text-foreground">
              {extension.rating}
            </span>
            <span className="text-muted-foreground">
              ({extension.totalRatings} reviews)
            </span>
          </div>
          <div className="flex items-center space-x-1">
            <Users className="w-5 h-5 text-muted-foreground" />
            <span className="text-muted-foreground">
              {extension.users} users
            </span>
          </div>
          <div className="flex items-center space-x-1">
            <Eye className="w-5 h-5 text-muted-foreground" />
            <span className="text-muted-foreground">
              {(extension.stats.views / 1000).toFixed(1)}K views
            </span>
          </div>
          <Badge
            variant="outline"
            className="bg-secondary text-secondary-foreground border-border"
          >
            v{extension.version}
          </Badge>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        {extension.isFeatured && (
          <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-0">
            ⭐ Featured
          </Badge>
        )}
        {extension.isPopular && (
          <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0">
            🔥 Popular
          </Badge>
        )}
      </div>
    </div>
  );
}
