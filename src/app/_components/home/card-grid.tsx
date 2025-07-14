import { Extension } from "@/@types";
import { Button } from "@/components/ui/button";
import {
  Filter,
  Badge,
  Play,
  Chrome,
  Globe,
  Star,
  Users,
  Eye,
  Heart,
  Link,
  Download,
  Search,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function CardGrid() {
  const [filteredExtensions, setFilteredExtensions] = useState<Extension[]>([]);
  const [wishlist, setWishlist] = useState<number[]>([]);

  const toggleWishlist = (id: number) => {
    setWishlist((prevWishlist) => {
      if (prevWishlist.includes(id)) {
        toast.info("Removed from Wishlist");
        return prevWishlist.filter((itemId) => itemId !== id);
      } else {
        toast.info("Added to Wishlist");
        return [...prevWishlist, id];
      }
    });
  };
  return (
    <section className="relative py-16 px-6 bg-background">
      <div className="container mx-auto">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-16">
            <div>
              <h2 className="text-5xl font-black text-foreground mb-4">
                Featured Extensions
                <span className="text-purple-400 ml-4">
                  ({filteredExtensions.length})
                </span>
              </h2>
              <p className="text-muted-foreground text-xl">
                Handpicked premium extensions for power users
              </p>
            </div>
            <div className="flex items-center space-x-3 bg-card/10 backdrop-blur-xl border border-border rounded-2xl px-6 py-3">
              <Filter className="w-5 h-5 text-purple-400" />
              <span className="text-foreground font-medium">
                {filteredExtensions.length} results
              </span>
            </div>
          </div>

          <div className="grid xl:grid-cols-3 lg:grid-cols-2 gap-8">
            {filteredExtensions.map((extension, index) => (
              <div
                key={extension.id}
                className="group relative animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Unique Glassy Card */}
                <div className="relative overflow-hidden rounded-3xl bg-card/5 backdrop-blur-2xl border border-border hover:border-primary/30 transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-2xl">
                  {/* Gradient Overlay */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(135deg, ${extension.gradientFrom}40, ${extension.gradientTo}40)`,
                    }}
                  ></div>

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
                          src={
                            extension.media[0].thumbnail ||
                            extension.media[0].url
                          }
                          alt={extension.name}
                          className="w-full h-full object-cover mix-blend-overlay transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 hover:scale-110 transition-transform duration-300">
                            <Play className="w-8 h-8 text-white ml-1" />
                          </div>
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
                      {extension.browsers.includes("Chrome") && (
                        <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/30">
                          <Chrome className="w-4 h-4 text-white" />
                        </div>
                      )}
                      {extension.browsers.includes("FireFox") && (
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
                        <span className="text-muted-foreground">
                          {extension.users}
                        </span>
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
                          style={{
                            backgroundImage: `linear-gradient(135deg, ${extension.gradientFrom}, ${extension.gradientTo})`,
                          }}
                        >
                          ${extension.price}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => toggleWishlist(extension.id)}
                          className={`rounded-xl w-10 h-10 p-0 ${
                            wishlist.includes(extension.id)
                              ? "text-red-500 hover:bg-red-500/10"
                              : "text-muted-foreground hover:text-red-400 hover:bg-red-500/10"
                          }`}
                        >
                          <Heart
                            className="w-4 h-4"
                            fill={
                              wishlist.includes(extension.id)
                                ? "currentColor"
                                : "none"
                            }
                          />
                        </Button>
                        <Link href={`/extension/${extension.id}`}>
                          <Button
                            className="text-white border-0 rounded-xl px-4 py-2 font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                            style={{
                              background: `linear-gradient(135deg, ${extension.gradientFrom}, ${extension.gradientTo})`,
                            }}
                          >
                            <Download className="w-4 h-4 mr-1" />
                            Get Now
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredExtensions.length === 0 && (
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
    </section>
  );
}
