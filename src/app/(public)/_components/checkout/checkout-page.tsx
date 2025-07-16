"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  Chrome,
  ChromeIcon as Firefox,
  CreditCard,
  Shield,
  Menu,
  X,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Browser } from "@/@types";

type Props = {
  browser: Browser;
  id: string;
};
export default function CheckoutPage({ browser, id }: Props) {
  const [email, setEmail] = useState("");
  const [processing, setProcessing] = useState(false);

  const extension = {
    name: "ProductivityPro",
    price: 29.99,
    browser: browser || "chrome",
  };

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      setProcessing(false);
      // Redirect to success page
      window.location.href = `/success?extension=${id}&email=${email}`;
    }, 2000);
  };

  return (
    <div className="grid md:grid-cols-2 gap-8">
      {/* Order Summary */}
      <Card className="bg-card/50 backdrop-blur-xl border border-border text-foreground">
        <CardHeader>
          <CardTitle className="text-foreground">Order Summary</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {extension.browser === "chrome" ? (
                <Chrome className="w-6 h-6 text-green-600" />
              ) : (
                <Firefox className="w-6 h-6 text-orange-600" />
              )}
              <div>
                <p className="font-medium">{extension.name}</p>
                <p className="text-sm text-muted-foreground capitalize">
                  {extension.browser} Extension
                </p>
              </div>
            </div>
            <span className="font-bold">${extension.price}</span>
          </div>

          <Separator className="bg-border" />

          <div className="flex justify-between items-center">
            <span>Subtotal</span>
            <span>${extension.price}</span>
          </div>
          <div className="flex justify-between items-center">
            <span>Tax</span>
            <span>$0.00</span>
          </div>

          <Separator className="bg-border" />

          <div className="flex justify-between items-center font-bold text-lg">
            <span>Total</span>
            <span>${extension.price}</span>
          </div>

          <div className="bg-green-500/10 p-3 rounded-lg text-sm text-green-700 border border-green-500/20">
            <div className="flex items-center space-x-2 mb-1">
              <Shield className="w-4 h-4" />
              <span className="font-medium">What you get:</span>
            </div>
            <ul className="space-y-1 ml-6">
              <li>• Instant download access</li>
              <li>• Lifetime license</li>
              <li>• Free updates</li>
              <li>• 30-day money-back guarantee</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Payment Form */}
      <Card className="bg-card/50 backdrop-blur-xl border border-border text-foreground">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-foreground">
            <CreditCard className="w-5 h-5" />
            <span>Payment Details</span>
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            Your payment information is secure and encrypted
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handlePayment} className="space-y-4">
            <div>
              <Label htmlFor="email" className="text-foreground">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="bg-input/10 border-input text-foreground placeholder-muted-foreground"
              />
              <p className="text-xs text-muted-foreground mt-1">
                Download link will be sent to this email
              </p>
            </div>

            <div>
              <Label htmlFor="card" className="text-foreground">
                Card Number
              </Label>
              <Input
                id="card"
                placeholder="1234 5678 9012 3456"
                required
                className="bg-input/10 border-input text-foreground placeholder-muted-foreground"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="expiry" className="text-foreground">
                  Expiry Date
                </Label>
                <Input
                  id="expiry"
                  placeholder="MM/YY"
                  required
                  className="bg-input/10 border-input text-foreground placeholder-muted-foreground"
                />
              </div>
              <div>
                <Label htmlFor="cvc" className="text-foreground">
                  CVC
                </Label>
                <Input
                  id="cvc"
                  placeholder="123"
                  required
                  className="bg-input/10 border-input text-foreground placeholder-muted-foreground"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="name" className="text-foreground">
                Cardholder Name
              </Label>
              <Input
                id="name"
                placeholder="John Doe"
                required
                className="bg-input/10 border-input text-foreground placeholder-muted-foreground"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0"
              size="lg"
              disabled={processing}
            >
              {processing ? "Processing..." : `Pay $${extension.price}`}
            </Button>

            <div className="text-xs text-muted-foreground text-center">
              By completing this purchase, you agree to our{" "}
              <Link href="/terms" className="text-primary hover:underline">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="text-primary hover:underline">
                Privacy Policy
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
