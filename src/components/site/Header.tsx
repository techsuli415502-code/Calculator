"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useSiteStore, type ViewId } from "@/lib/siteStore";
import { CamelMark } from "./CamelSvg";
import { cn } from "@/lib/utils";

const NAV: { id: ViewId; label: string }[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "how-it-works", label: "How It Works" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contact" },
];

export function Header() {
  const view = useSiteStore((s) => s.view);
  const setView = useSiteStore((s) => s.setView);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleNav = (id: ViewId) => {
    setView(id);
    setMobileOpen(false);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/65">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => handleNav("home")}
          className="flex items-center gap-2.5 transition-opacity hover:opacity-90"
          aria-label="Camel Calculator home"
        >
          <CamelMark className="h-9 w-9" />
          <span className="font-display text-lg font-semibold tracking-tight text-foreground">
            Camel Calculator
          </span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
          {NAV.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              aria-current={view === item.id ? "page" : undefined}
              className={cn(
                "rounded-md px-3.5 py-2 text-sm font-medium transition-colors",
                view === item.id
                  ? "bg-secondary text-secondary-foreground"
                  : "text-foreground/75 hover:bg-accent hover:text-accent-foreground"
              )}
            >
              {item.label}
            </button>
          ))}
          <Link
            href="#calculator"
            onClick={(e) => {
              e.preventDefault();
              handleNav("home");
              // wait for view to swap then scroll
              setTimeout(() => {
                const el = document.getElementById("calculator");
                if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
              }, 80);
            }}
            className="ml-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
          >
            Start Calculator
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="inline-flex md:hidden h-10 w-10 items-center justify-center rounded-md text-foreground hover:bg-accent"
          aria-label="Open menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((o) => !o)}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3" aria-label="Mobile navigation">
            {NAV.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={cn(
                  "rounded-md px-3 py-2.5 text-left text-base font-medium transition-colors",
                  view === item.id
                    ? "bg-secondary text-secondary-foreground"
                    : "text-foreground/80 hover:bg-accent"
                )}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => {
                setMobileOpen(false);
                setView("home");
                setTimeout(() => {
                  const el = document.getElementById("calculator");
                  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                }, 80);
              }}
              className="mt-1 rounded-md bg-primary px-3 py-2.5 text-left text-base font-medium text-primary-foreground shadow-sm"
            >
              Start Calculator
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
