import { ExtensionProps } from "@/@types";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";
import { Check, Shield } from "lucide-react";

export default function ExtensionDetails({ extension }: ExtensionProps) {
  return (
    <div className="bg-card/50 backdrop-blur-xl rounded-3xl border border-border overflow-hidden">
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-5 bg-input/10 border-b border-border">
          <TabsTrigger
            value="overview"
            className="text-muted-foreground data-[state=active]:text-foreground data-[state=active]:bg-accent"
          >
            Overview
          </TabsTrigger>
          <TabsTrigger
            value="features"
            className="text-muted-foreground data-[state=active]:text-foreground data-[state=active]:bg-accent"
          >
            Features
          </TabsTrigger>
          <TabsTrigger
            value="screenshots"
            className="text-muted-foreground data-[state=active]:text-foreground data-[state=active]:bg-accent"
          >
            Screenshots
          </TabsTrigger>
          <TabsTrigger
            value="permissions"
            className="text-muted-foreground data-[state=active]:text-foreground data-[state=active]:bg-accent"
          >
            Permissions
          </TabsTrigger>
          <TabsTrigger
            value="changelog"
            className="text-muted-foreground data-[state=active]:text-foreground data-[state=active]:bg-accent"
          >
            Changelog
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="p-8">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                About this extension
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {extension.longDescription}
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-3">
                Key Highlights
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                {extension.features.slice(0, 6).map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="features" className="p-8">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Complete Feature List
            </h3>
            <div className="grid gap-4">
              {extension.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-4 bg-card/5 rounded-xl border border-border"
                >
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-muted-foreground font-medium">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="screenshots" className="p-8">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Screenshots
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {extension.screenshots.map((screenshot, index) => (
                <div key={index} className="relative group">
                  <img
                    src={screenshot || "/placeholder.svg"}
                    alt={`Screenshot ${index + 1}`}
                    className="w-full rounded-xl border border-border shadow-lg group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors rounded-xl"></div>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="permissions" className="p-8">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Required Permissions
            </h3>
            <p className="text-muted-foreground mb-6">
              This extension requires the following permissions to function
              properly:
            </p>
            <div className="space-y-4">
              {extension.permissions.map((permission, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-4 bg-card/5 rounded-xl border border-border"
                >
                  <Shield className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{permission}</span>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="changelog" className="p-8">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Version History
            </h3>
            <div className="space-y-6">
              {extension.changelog &&
                extension.changelog.map((version, index) => (
                  <div
                    key={index}
                    className="border-l-2 border-primary pl-6 pb-6"
                  >
                    <div className="flex items-center space-x-3 mb-3">
                      <Badge className="bg-primary/20 text-primary border-primary/30">
                        v{version.version}
                      </Badge>
                      <span className="text-muted-foreground text-sm">
                        {version.date}
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {version.changes.map((change, changeIndex) => (
                        <li
                          key={changeIndex}
                          className="text-muted-foreground flex items-start space-x-2"
                        >
                          <span className="text-green-400 mt-1">•</span>
                          <span>{change}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
