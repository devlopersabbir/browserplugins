import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import AuthLogo from "../_components/auth-logo";
import Loginform from "../_components/login-form";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="flex items-center justify-center p-4 min-h-[calc(100vh-80px)]">
        <div className="w-full max-w-md">
          <AuthLogo />

          <Card className="bg-card/50 backdrop-blur-xl border border-border text-foreground">
            <CardHeader>
              <CardTitle className="text-foreground">Welcome back</CardTitle>
              <CardDescription className="text-muted-foreground">
                Sign in to your account to access your extensions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Loginform />
              <div className="mt-4">
                <Link
                  href="/forgot-password"
                  className="text-primary hover:underline"
                >
                  Forgot your password?
                </Link>
              </div>

              <Separator className="my-6 bg-border" />

              <div className="text-center">
                <p className="text-sm text-muted-foreground">
                  Dont have an account?{" "}
                  <Link
                    href="/register"
                    className="text-primary hover:underline font-medium"
                  >
                    Sign up
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
