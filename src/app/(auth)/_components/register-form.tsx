"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormEvent } from "react";

export default function RegisterForm() {
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    console.log(Object.fromEntries(formData));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="email" className="text-foreground">
          Email
        </Label>
        <Input
          id="email"
          type="email"
          name="email"
          placeholder="your@email.com"
          required
          className="bg-input/10 border-input text-foreground placeholder-muted-foreground"
        />
      </div>

      <div>
        <Label htmlFor="password" className="text-foreground">
          Password
        </Label>
        <Input
          id="password"
          type="password"
          name="password"
          placeholder="Create a password"
          required
          className="bg-input/10 border-input text-foreground placeholder-muted-foreground"
        />
      </div>

      {/* <div className="flex items-center space-x-2">
        <Checkbox
          id="terms"
          checked={agreeToTerms}
          onCheckedChange={(checked) => setAgreeToTerms(checked as boolean)}
          className="border-border data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
        />
        <Label htmlFor="terms" className="text-sm text-muted-foreground">
          I agree to the{" "}
          <Link href="/terms" className="text-primary hover:underline">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="/privacy" className="text-primary hover:underline">
            Privacy Policy
          </Link>
        </Label>
      </div> */}

      <Button
        type="submit"
        className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0"
      >
        Create Account
      </Button>
    </form>
  );
}
