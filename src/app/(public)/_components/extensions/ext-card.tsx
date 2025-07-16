import { Extension } from "@/@types";
import { Play, Chrome, Globe, Star, Users, Eye } from "lucide-react";
import ToggleWishlist from "../toggle-wish-list";
import { Badge } from "@/components/ui/badge";
import PlayButton from "../play-button";

type Props = {
  extension: Extension;
  index: number;
};
export default function ExtCard({ extension, index }: Props) {
  return (
    <div
      className="group relative animate-fade-in-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Unique Glassy Card */}
      <div className="relative overflow-hidden rounded-3xl bg-card/5 backdrop-blur-2xl border border-border hover:border-primary/30 transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-2xl">
        {/* Gradient Overlay */}
        <GradientOverlay extension={extension} index={index} />
        {/* Status Badges */}
        <div className="absolute top-4 left-4 z-20 flex flex-wrap gap-2">
          {extension.isFeatured && (
            <Badge className="bg-gradient-to-r from-yellow-500/90 to-orange-500/90 backdrop-blur-sm text-white border-0 px-3 py-1 rounded-full font-semibold shadow-lg">
              ⭐ Featured
            </Badge>
          )}
          {extension.isNew && (
            <Badge className="bg-gradient-to-r from-green-500/90 to-emerald-500/90 backdrop-blur-sm text-white border-0 px-3 py-1 rounded-full font-semibold shadow-lg">
              🆕 New
            </Badge>
          )}
          {extension.isPopular && (
            <Badge className="bg-gradient-to-r from-red-500/90 to-pink-500/90 backdrop-blur-sm text-white border-0 px-3 py-1 rounded-full font-semibold shadow-lg">
              🔥 Popular
            </Badge>
          )}
        </div>

        {/* Media Section with Gradient Overlay */}
        <div className="relative aspect-video overflow-hidden">
          {/* Gradient Background */}
          <div
            className="absolute inset-0 opacity-60"
            style={{
              background: `linear-gradient(135deg, ${extension.gradientFrom}, ${extension.gradientTo})`,
            }}
          ></div>

          {/* Media Content */}
          {extension.media[0]?.type === "video" ? (
            <div className="relative w-full h-full">
              <img
                src={extension.media[0].thumbnail || extension.media[0].url}
                alt={extension.name}
                className="w-full h-full object-cover mix-blend-overlay transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <PlayButton extension={extension} />
              </div>
              <Badge className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm text-white border border-white/20 px-3 py-1 rounded-full">
                <Play className="w-3 h-3 mr-1" />
                Video
              </Badge>
            </div>
          ) : (
            <div className="relative w-full h-full">
              <img
                src={extension.media[0]?.url || "/placeholder.svg"}
                alt={extension.name}
                className="w-full h-full object-cover mix-blend-overlay transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>
          )}

          {/* Browser Icons */}
          <div className="absolute top-4 right-4 flex space-x-2">
            {extension.browsers.includes("chrome") && (
              <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/30">
                <Chrome className="w-4 h-4 text-white" />
              </div>
            )}
            {extension.browsers.includes("firefox") && (
              <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/30">
                <Globe className="w-4 h-4 text-white" />
              </div>
            )}
          </div>
        </div>

        {/* Content Section */}
        <div className="relative p-6">
          {/* Title and Description */}
          <div className="mb-4">
            <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
              {extension.name}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {extension.description}
            </p>
          </div>

          {/* Stats */}
          <div className="flex items-center space-x-4 mb-4 text-sm">
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-foreground font-medium">
                {extension.rating}
              </span>
              <span className="text-muted-foreground">
                ({extension.totalRatings})
              </span>
            </div>
            <div className="flex items-center space-x-1">
              <Users className="w-4 h-4 text-muted-foreground" />
              <span className="text-muted-foreground">{extension.users}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Eye className="w-4 h-4 text-muted-foreground" />
              <span className="text-muted-foreground">
                {(extension.stats.views / 1000).toFixed(1)}K
              </span>
            </div>
          </div>

          {/* Features */}
          <div className="flex flex-wrap gap-2 mb-6">
            {extension.features.slice(0, 2).map((feature) => (
              <Badge
                key={feature}
                className="bg-card/10 backdrop-blur-sm border border-border text-muted-foreground hover:bg-accent transition-colors px-2 py-1 rounded-lg text-xs"
              >
                {feature}
              </Badge>
            ))}
            {extension.features.length > 2 && (
              <Badge className="bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 text-purple-300 px-2 py-1 rounded-lg text-xs">
                +{extension.features.length - 2}
              </Badge>
            )}
          </div>

          {/* Price and Actions */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              {extension.originalPrice && (
                <span className="text-muted-foreground line-through text-sm">
                  ${extension.originalPrice}
                </span>
              )}
              <span
                className="text-2xl font-black bg-gradient-to-r bg-clip-text text-transparent"
                // TODO: we can use text-transparent to display with gradient color price
                style={{
                  backgroundImage: `linear-gradient(135deg, ${extension.gradientFrom}, ${extension.gradientTo})`,
                }}
              >
                ${extension.price}
              </span>
            </div>
            <ToggleWishlist extension={extension} />
          </div>
        </div>
      </div>
    </div>
  );
}

function GradientOverlay({ extension }: Props) {
  return (
    <div
      className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
      style={{
        background: `linear-gradient(135deg, ${extension.gradientFrom}40, ${extension.gradientTo}40)`,
      }}
    ></div>
  );
}
