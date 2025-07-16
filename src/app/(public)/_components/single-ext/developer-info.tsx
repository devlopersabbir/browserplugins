import { Extension } from "@/@types";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

type Props = {
  extension: Extension;
};
export default function DeveloperInfo({ extension }: Props) {
  return (
    <Card className="bg-card/50 backdrop-blur-xl border-border text-foreground">
      <CardHeader>
        <CardTitle className="flex items-center space-x-3 text-foreground">
          <img
            src={extension.developer.avatar || "/placeholder.svg"}
            alt={extension.developer.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <div className="flex items-center space-x-2">
              <span>{extension.developer.name}</span>
              {extension.developer.verified && (
                <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 text-xs">
                  ✓ Verified
                </Badge>
              )}
            </div>
            <p className="text-sm text-muted-foreground">Software Engineer</p>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3 text-sm">
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Total Extensions:</span>
            <span className="text-foreground">6</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Total Downloads:</span>
            <span className="text-foreground">84K+</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Average Rating:</span>
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-foreground">4.7</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
