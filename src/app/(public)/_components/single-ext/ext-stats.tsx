import { Extension } from "@/@types";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Download, Heart, Eye, Calendar } from "lucide-react";

type Props = {
  extension: Extension;
};
export default function ExtensionStats({ extension }: Props) {
  return (
    <Card className="bg-card/50 backdrop-blur-xl border-border text-foreground">
      <CardHeader>
        <CardTitle className="text-foreground">Extension Stats</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Download className="w-4 h-4 text-green-400" />
              <span className="text-muted-foreground">Downloads</span>
            </div>
            <span className="text-foreground font-medium">
              {extension.stats.downloads.toLocaleString()}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Heart className="w-4 h-4 text-red-400" />
              <span className="text-muted-foreground">Likes</span>
            </div>
            <span className="text-foreground font-medium">
              {extension.stats.likes.toLocaleString()}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Eye className="w-4 h-4 text-blue-400" />
              <span className="text-muted-foreground">Views</span>
            </div>
            <span className="text-foreground font-medium">
              {extension.stats.views.toLocaleString()}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4 text-purple-400" />
              <span className="text-muted-foreground">Last Updated</span>
            </div>
            <span className="text-foreground font-medium">
              {new Date(extension.lastUpdated).toLocaleDateString()}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
