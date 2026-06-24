import { useEffect, useState } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { supabase } from "@/lib/supabase";
import { Leaf } from "lucide-react";

export const Route = createFileRoute("/auth/callback")({
  component: AuthCallback,
});

function AuthCallback() {
  const navigate = useNavigate();
  const [status, setStatus] = useState("Completing sign in...");

  useEffect(() => {
    const handleCallback = async () => {
      const hash = window.location.hash;
      const params = new URLSearchParams(hash.replace("#", "?"));

      const accessToken = params.get("access_token");
      const refreshToken = params.get("refresh_token");

      if (accessToken && refreshToken) {
        setStatus("Verifying your email...");
        const { error } = await supabase.auth.setSession({
          access_token: accessToken,
          refresh_token: refreshToken,
        });

        if (error) {
          setStatus("Something went wrong. Redirecting...");
        } else {
          setStatus("Email verified! Taking you to your account...");
        }

        setTimeout(() => navigate({ to: "/profile" }), 1500);
      } else {
        setStatus("No verification data found. Redirecting...");
        setTimeout(() => navigate({ to: "/signin" }), 1500);
      }
    };

    handleCallback();
  }, [navigate]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#FAF0E8]">
      <div className="text-center">
        <span className="mx-auto grid h-16 w-16 animate-pulse place-items-center rounded-2xl bg-gradient-to-br from-primary to-leaf text-primary-foreground shadow-lg">
          <Leaf className="h-7 w-7" />
        </span>
        <h1 className="mt-6 text-xl font-semibold text-[#2C1810]">{status}</h1>
      </div>
    </div>
  );
}
