import { useEffect, useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { Leaf, Menu, X, LogOut, User } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

const links = [
  { href: "#about", label: "About" },
  { href: "/our-story", label: "Our Story" },
  { href: "#categories", label: "Categories" },
  { href: "#featured", label: "Shop" },
  { href: "#care", label: "Care" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSignOut = async () => {
    await signOut();
    navigate({ to: "/" });
    setOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div
          className={`flex items-center justify-between rounded-full px-5 py-3 transition-all duration-500 ${
            scrolled ? "glass" : "bg-transparent"
          }`}
        >
          <a href="#top" className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground">
              <Leaf className="h-4 w-4" />
            </span>
            <span className="font-display text-lg font-semibold tracking-tight">
              Leaf <span className="text-leaf italic">&</span> Bloom
            </span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-foreground/70 transition-colors hover:text-primary"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            {user ? (
              <div className="flex items-center gap-3">
                <Link
                  to="/profile"
                  className="flex items-center gap-2 rounded-full bg-secondary/60 px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary"
                >
                  <User className="h-4 w-4" />
                  {user.user_metadata?.full_name || "Account"}
                </Link>
                <button
                  onClick={handleSignOut}
                  className="rounded-full p-2 text-foreground/60 transition-colors hover:text-foreground"
                  aria-label="Sign out"
                >
                  <LogOut className="h-4 w-4" />
                </button>
              </div>
            ) : (
              <>
                <Link
                  to="/signin"
                  className="text-sm text-foreground/70 transition-colors hover:text-primary"
                >
                  Sign in
                </Link>
                <Link
                  to="/signup"
                  className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-105"
                >
                  Sign up
                </Link>
              </>
            )}
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full glass md:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="mt-2 rounded-3xl glass p-4 md:hidden">
            <nav className="flex flex-col gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-foreground/80 hover:bg-secondary"
                >
                  {l.label}
                </a>
              ))}
              <hr className="my-2 border-foreground/10" />
              {user ? (
                <>
                  <Link
                    to="/profile"
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-medium text-foreground/80 hover:bg-secondary"
                  >
                    <User className="h-4 w-4" />
                    {user.user_metadata?.full_name || "My Account"}
                  </Link>
                  <button
                    onClick={handleSignOut}
                    className="flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-medium text-foreground/60 hover:bg-secondary"
                  >
                    <LogOut className="h-4 w-4" />
                    Sign out
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/signin"
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-4 py-3 text-sm font-medium text-foreground/80 hover:bg-secondary"
                  >
                    Sign in
                  </Link>
                  <Link
                    to="/signup"
                    onClick={() => setOpen(false)}
                    className="mt-2 rounded-xl bg-primary px-4 py-3 text-center text-sm font-medium text-primary-foreground"
                  >
                    Sign up
                  </Link>
                </>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
