import { useState } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Leaf, ArrowLeft, Sparkles } from "lucide-react";

export const Route = createFileRoute("/signup")({
  component: SignUp,
});

function SignUp() {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const trimmedName = fullName.trim();
    if (!trimmedName) {
      setError("Full name is required.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);

    const { error: signUpError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback`,
        data: {
          full_name: trimmedName,
        },
      },
    });

    setLoading(false);

    if (signUpError) {
      setError(signUpError.message);
      return;
    }

    setSuccess(true);
  };

  if (success) {
    return (
      <div className="relative flex min-h-screen items-center justify-center overflow-hidden px-4">
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <Leaf className="absolute -left-16 top-20 h-48 w-48 rotate-[30deg] text-primary/4 animate-float" />
          <Leaf
            className="absolute -bottom-20 -right-20 h-64 w-64 -rotate-[20deg] text-bloom/5 animate-float"
            style={{ animationDelay: "2s", animationDuration: "8s" }}
          />
          <Sparkles className="absolute left-1/3 top-1/4 h-5 w-5 text-accent/15" />
        </div>

        <Link
          to="/"
          className="group fixed left-6 top-6 z-10 flex items-center gap-2 rounded-full bg-card/70 px-4 py-2 text-sm font-medium text-muted-foreground shadow-soft backdrop-blur-sm transition-all hover:bg-card hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
          Back to home
        </Link>

        <div className="w-full max-w-md">
          <div className="rounded-3xl bg-card/80 p-8 text-center shadow-soft backdrop-blur-sm sm:p-10">
            <span className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-primary to-leaf text-primary-foreground shadow-lg shadow-primary/25">
              <Leaf className="h-7 w-7" />
            </span>
            <h1 className="mt-6 text-2xl font-semibold">Check your email</h1>
            <p className="mt-3 text-muted-foreground">
              We sent a confirmation link to <strong>{email}</strong>. Click it to complete your
              signup, then sign in.
            </p>
            <Button className="mt-6" asChild>
              <Link to="/signin">Sign in</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

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
            <h1 className="mt-5 text-2xl font-semibold">Create your account</h1>
            <p className="mt-1 text-sm text-muted-foreground">Join the Leaf & Bloom community.</p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <Input
              placeholder="Full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              type="password"
              placeholder="Password (min 8 characters)"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={8}
            />
            <Input
              type="password"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />

            {error && <p className="text-sm text-destructive">{error}</p>}

            <Button type="submit" disabled={loading} className="w-full">
              {loading ? (
                <span className="flex items-center gap-2">
                  <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                  Creating account…
                </span>
              ) : (
                "Sign up"
              )}
            </Button>
          </form>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link
              to="/signin"
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
