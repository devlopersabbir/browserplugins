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
import RegisterForm from "../_components/register-form";

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="flex items-center justify-center p-4 min-h-[calc(100vh-80px)]">
        <div className="w-full max-w-md">
          <AuthLogo />

          <Card className="bg-card/50 backdrop-blur-xl border border-border text-foreground">
            <CardHeader>
              <CardTitle className="text-foreground">
                Create your account
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Join BrowserPlugins to access premium browser extensions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <RegisterForm />
              <Separator className="my-6 bg-border" />

              <div className="text-center">
                <p className="text-sm text-muted-foreground">
                  Already have an account?{" "}
                  <Link
                    href="/login"
                    className="text-primary hover:underline font-medium"
                  >
                    Sign in
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
