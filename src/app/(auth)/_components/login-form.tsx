"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormEvent } from "react";

export default function Loginform() {
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    console.log(Object.fromEntries(formData));
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
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
          placeholder="Enter your password"
          required
          className="bg-input/10 border-input text-foreground placeholder-muted-foreground"
        />
      </div>

      <Button
        type="submit"
        className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0"
      >
        Sign In
      </Button>
    </form>
  );
}
