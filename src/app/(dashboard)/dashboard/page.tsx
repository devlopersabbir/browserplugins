"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Chrome,
  ChromeIcon as Firefox,
  Download,
  Key,
  Calendar,
  Mail,
  Heart,
} from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { allExtensions } from "@/constants/all-extensions";

export default function DashboardPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [wishlist, setWishlist] = useState<number[]>([]);

  // Mock data - in real app, fetch based on user's purchases
  const user = {
    email: "user@example.com",
    joinDate: "Dec 2024",
  };

  const purchases = allExtensions.filter((ext) => ext.status === "active");

  // Load wishlist from localStorage on mount
  useEffect(() => {
    const storedWishlist = localStorage.getItem("browserplugins_wishlist");
    if (storedWishlist) {
      setWishlist(JSON.parse(storedWishlist));
    }
  }, []);

  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("browserplugins_wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const toggleWishlist = (id: number) => {
    setWishlist((prevWishlist) => {
      if (prevWishlist.includes(id)) {
        return prevWishlist.filter((itemId) => itemId !== id);
      } else {
        return [...prevWishlist, id];
      }
    });
  };

  const wishlistExtensions = allExtensions.filter((ext) =>
    wishlist.includes(ext.id)
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 text-foreground">
            My Dashboard
          </h1>
          <p className="text-muted-foreground">
            Manage your purchased extensions and downloads
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="bg-card/50 backdrop-blur-xl border border-border text-foreground">
              <CardHeader>
                <CardTitle className="text-lg text-foreground">
                  Account Info
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">{user.email}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">Joined {user.joinDate}</span>
                </div>
                <div className="pt-2">
                  <Badge
                    variant="secondary"
                    className="bg-secondary text-secondary-foreground"
                  >
                    {purchases.length} Extensions
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="extensions" className="w-full">
              <TabsList className="grid w-full grid-cols-3 lg:grid-cols-4 bg-input/10 border border-border rounded-xl">
                <TabsTrigger
                  value="extensions"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm text-muted-foreground hover:text-foreground"
                >
                  My Extensions
                </TabsTrigger>
                <TabsTrigger
                  value="downloads"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm text-muted-foreground hover:text-foreground"
                >
                  Downloads
                </TabsTrigger>
                <TabsTrigger
                  value="licenses"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm text-muted-foreground hover:text-foreground"
                >
                  License Keys
                </TabsTrigger>
                <TabsTrigger
                  value="wishlist"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm text-muted-foreground hover:text-foreground"
                >
                  Wishlist
                </TabsTrigger>
              </TabsList>

              <TabsContent value="extensions" className="mt-6">
                <div className="grid gap-4">
                  {purchases.map((purchase) => (
                    <Card
                      key={purchase.id}
                      className="bg-card/50 backdrop-blur-xl border border-border text-foreground"
                    >
                      <CardContent className="pt-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            {purchase.browser === "chrome" ? (
                              <Chrome className="w-8 h-8 text-green-600" />
                            ) : (
                              <Firefox className="w-8 h-8 text-orange-600" />
                            )}
                            <div>
                              <h3 className="font-semibold">{purchase.name}</h3>
                              <p className="text-sm text-muted-foreground capitalize">
                                {purchase.browser} Extension
                              </p>
                              <p className="text-xs text-muted-foreground">
                                Purchased on{" "}
                                {new Date(
                                  purchase.purchaseDate
                                ).toLocaleDateString()}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Badge
                              variant={
                                purchase.status === "active"
                                  ? "default"
                                  : "secondary"
                              }
                              className={
                                purchase.status === "active"
                                  ? "bg-primary text-primary-foreground"
                                  : "bg-secondary text-secondary-foreground"
                              }
                            >
                              {purchase.status}
                            </Badge>
                            <Button
                              asChild
                              size="sm"
                              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0"
                            >
                              <a href={purchase.downloadUrl} download>
                                <Download className="w-4 h-4 mr-1" />
                                Download
                              </a>
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="downloads" className="mt-6">
                <Card className="bg-card/50 backdrop-blur-xl border border-border text-foreground">
                  <CardHeader>
                    <CardTitle className="text-foreground">
                      Download History
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      All your extension downloads in one place
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {purchases.map((purchase) => (
                        <div
                          key={purchase.id}
                          className="flex items-center justify-between py-3 border-b border-border last:border-b-0"
                        >
                          <div className="flex items-center space-x-3">
                            {purchase.browser === "chrome" ? (
                              <Chrome className="w-5 h-5 text-green-600" />
                            ) : (
                              <Firefox className="w-5 h-5 text-orange-600" />
                            )}
                            <div>
                              <p className="font-medium">{purchase.name}</p>
                              <p className="text-sm text-muted-foreground">
                                Last downloaded:{" "}
                                {new Date(
                                  purchase.purchaseDate
                                ).toLocaleDateString()}
                              </p>
                            </div>
                          </div>
                          <Button
                            asChild
                            variant="outline"
                            size="sm"
                            className="border-border text-muted-foreground hover:bg-accent hover:text-foreground bg-transparent"
                          >
                            <a href={purchase.downloadUrl} download>
                              <Download className="w-4 h-4 mr-1" />
                              Re-download
                            </a>
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="licenses" className="mt-6">
                <Card className="bg-card/50 backdrop-blur-xl border border-border text-foreground">
                  <CardHeader>
                    <CardTitle className="text-foreground">
                      License Keys
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      Your extension license keys for activation
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {purchases.map((purchase) => (
                        <div
                          key={purchase.id}
                          className="p-4 border border-border rounded-lg"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center space-x-2">
                              <Key className="w-4 h-4 text-muted-foreground" />
                              <span className="font-medium">
                                {purchase.name}
                              </span>
                            </div>
                            <Badge
                              variant="outline"
                              className="capitalize border-border text-muted-foreground"
                            >
                              {purchase.browser}
                            </Badge>
                          </div>
                          <div className="bg-input/10 p-3 rounded font-mono text-sm text-foreground">
                            {purchase.licenseKey}
                          </div>
                          <p className="text-xs text-muted-foreground mt-2">
                            Use this key to activate your extension after
                            installation
                          </p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="wishlist" className="mt-6">
                <Card className="bg-card/50 backdrop-blur-xl border border-border text-foreground">
                  <CardHeader>
                    <CardTitle className="text-foreground">
                      My Wishlist
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      Extensions you've saved for later
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {wishlistExtensions.length === 0 ? (
                      <div className="text-center py-8 text-muted-foreground">
                        <Heart className="w-12 h-12 mx-auto mb-4" />
                        <p>
                          Your wishlist is empty. Start adding some extensions!
                        </p>
                        <Link
                          href="/"
                          className="text-primary hover:underline mt-4 inline-block"
                        >
                          Browse Extensions
                        </Link>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        {wishlistExtensions.map((ext) => (
                          <div
                            key={ext.id}
                            className="flex items-center justify-between py-3 border-b border-border last:border-b-0"
                          >
                            <div className="flex items-center space-x-3">
                              {ext.browser === "chrome" ? (
                                <Chrome className="w-5 h-5 text-green-600" />
                              ) : (
                                <Firefox className="w-5 h-5 text-orange-600" />
                              )}
                              <div>
                                <p className="font-medium">{ext.name}</p>
                                <p className="text-sm text-muted-foreground">
                                  {ext.description}
                                </p>
                                <p className="text-xs text-muted-foreground">
                                  ${ext.price}
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => toggleWishlist(ext.id)}
                                className="text-red-500 hover:bg-red-500/10"
                              >
                                <Heart
                                  className="w-4 h-4"
                                  fill="currentColor"
                                />
                              </Button>
                              <Link href={`/extension/${ext.id}`}>
                                <Button
                                  size="sm"
                                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                                >
                                  View
                                </Button>
                              </Link>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
