import { Browser, Extension } from "@/@types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  Chrome,
  Shield,
  Check,
  Users,
  ChromeIcon as Firefox,
} from "lucide-react";
import { Dispatch, SetStateAction } from "react";
import ExtensionPurches from "./ext-purches";
import DeveloperInfo from "./developer-info";
import ExtensionStats from "./ext-stats";

type Props = {
  extension: Extension;
  selectedBrowser: Browser;
  setSelectedBrowser: Dispatch<SetStateAction<Browser>>;
};
export default function Sidebar({
  extension,
  selectedBrowser,
  setSelectedBrowser,
}: Props) {
  return (
    <div className="sticky top-24 space-y-6">
      {/* Purchase Card */}
      <Card className="bg-card/50 backdrop-blur-xl border-border text-foreground">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              {extension.originalPrice && (
                <span className="text-muted-foreground line-through text-lg">
                  ${extension.originalPrice}
                </span>
              )}
              <CardTitle className="text-3xl bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                ${extension.price}
              </CardTitle>
            </div>
            <Badge
              variant="secondary"
              className="bg-green-500/20 text-green-300 border-green-500/30"
            >
              One-time payment
            </Badge>
          </div>
          <CardDescription className="text-muted-foreground">
            Lifetime license with free updates
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <label className="text-sm font-medium mb-3 block text-foreground">
              Select Browser:
            </label>
            <div className="grid grid-cols-2 gap-3">
              <Button
                variant={selectedBrowser === "chrome" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedBrowser("chrome")}
                className={`flex items-center space-x-2 ${
                  selectedBrowser === "chrome"
                    ? "bg-green-500 hover:bg-green-600 text-white"
                    : "bg-input/10 border-border text-muted-foreground hover:bg-accent"
                }`}
              >
                <Chrome className="w-4 h-4" />
                <span>Chrome</span>
              </Button>
              <Button
                variant={selectedBrowser === "firefox" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedBrowser("firefox")}
                className={`flex items-center space-x-2 ${
                  selectedBrowser === "firefox"
                    ? "bg-orange-500 hover:bg-orange-600 text-white"
                    : "bg-input/10 border-border text-muted-foreground hover:bg-accent"
                }`}
              >
                <Firefox className="w-4 h-4" />
                <span>Firefox</span>
              </Button>
            </div>
          </div>

          <ExtensionPurches
            extension={extension}
            selectedBrowser={selectedBrowser}
          />

          <div className="space-y-3 text-sm text-muted-foreground">
            <div className="flex justify-between">
              <span>File size:</span>
              <span className="text-foreground">{extension.size}</span>
            </div>
            <div className="flex justify-between">
              <span>Version:</span>
              <span className="text-foreground">{extension.version}</span>
            </div>
            <div className="flex justify-between">
              <span>Last updated:</span>
              <span className="text-foreground">{extension.lastUpdated}</span>
            </div>
            <div className="flex justify-between">
              <span>Downloads:</span>
              <span className="text-foreground">
                {extension.stats.downloads.toLocaleString()}
              </span>
            </div>
          </div>

          <div className="pt-4 border-t border-border space-y-3">
            <div className="flex items-center space-x-2 text-sm text-green-400">
              <Shield className="w-4 h-4" />
              <span>30-day money-back guarantee</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-blue-400">
              <Check className="w-4 h-4" />
              <span>Lifetime updates included</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-purple-400">
              <Users className="w-4 h-4" />
              <span>Premium support included</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Developer Info */}
      <DeveloperInfo extension={extension} />

      {/* Extension Stats */}
      <ExtensionStats extension={extension} />
    </div>
  );
}
