import { useState } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Leaf, ArrowLeft, Sparkles } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/signin")({
  component: SignIn,
});

function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const { error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (signInError) {
      if (signInError.message.includes("Invalid login credentials")) {
        setError("Invalid email or password. Please try again.");
      } else {
        setError(signInError.message);
      }
      return;
    }

    navigate({ to: "/profile" });
  };

  const handleForgot = async () => {
    const trimmed = email.trim();
    if (!trimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setError("Please enter a valid email address first.");
      return;
    }

    setError("");
    const { error: resetError } = await supabase.auth.resetPasswordForEmail(trimmed);

    if (resetError) {
      setError(resetError.message);
    } else {
      toast.success("Check your email for the password reset link.");
    }
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden px-4">
      {/* Decorative background elements */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <Leaf className="absolute -left-16 top-20 h-48 w-48 rotate-[30deg] text-primary/4 animate-float" />
        <Leaf
          className="absolute -bottom-20 -right-20 h-64 w-64 -rotate-[20deg] text-bloom/5 animate-float"
          style={{ animationDelay: "2s", animationDuration: "8s" }}
        />
        <Sparkles className="absolute right-1/4 top-1/4 h-5 w-5 text-accent/15" />
        <Sparkles className="absolute left-1/3 bottom-1/4 h-4 w-4 text-accent/12" />
      </div>

      <Link
        to="/"
        className="group fixed left-6 top-6 z-10 flex items-center gap-2 rounded-full bg-card/70 px-4 py-2 text-sm font-medium text-muted-foreground shadow-soft backdrop-blur-sm transition-all hover:bg-card hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
        Back to home
      </Link>

      <div className="w-full max-w-sm">
        <div className="rounded-3xl bg-card/80 p-8 shadow-soft backdrop-blur-sm sm:p-10">
          <div className="text-center">
            <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-primary to-leaf text-primary-foreground shadow-lg shadow-primary/25">
              <Leaf className="h-6 w-6" />
            </span>
            <h1 className="mt-5 text-2xl font-semibold">Welcome back</h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Sign in to your Leaf & Bloom account.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            {error && <p className="text-sm text-destructive">{error}</p>}

            <Button type="submit" disabled={loading} className="w-full">
              {loading ? (
                <span className="flex items-center gap-2">
                  <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                  Signing in…
                </span>
              ) : (
                "Sign in"
              )}
            </Button>
          </form>

          <div className="mt-6 flex items-center justify-between text-sm">
            <Link
              to="/signup"
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              Create an account
            </Link>
            <button
              type="button"
              onClick={handleForgot}
              className="text-muted-foreground underline-offset-4 hover:underline"
            >
              Forgot password?
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
