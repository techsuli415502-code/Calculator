"use client";

import * as React from "react";
import { useSiteStore, type ViewId } from "@/lib/siteStore";
import { CamelMark } from "./CamelSvg";

const FOOTER_NAV: { id: ViewId; label: string }[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "how-it-works", label: "How It Works" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contact" },
  { id: "privacy", label: "Privacy Policy" },
  { id: "terms", label: "Terms of Use" },
];

export function Footer() {
  const setView = useSiteStore((s) => s.setView);
  const year = new Date().getFullYear();

  const go = (id: ViewId) => {
    setView(id);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="mt-auto border-t border-border bg-secondary/50">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <CamelMark className="h-9 w-9" />
              <span className="font-display text-lg font-semibold text-foreground">
                Camel Calculator
              </span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              A simple, friendly online camel value test made for fun. Get your
              camel score in seconds and share it with your friends.
            </p>
          </div>

          {/* Nav */}
          <div>
            <h2 className="text-sm font-semibold text-foreground mb-3">Pages</h2>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
              {FOOTER_NAV.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => go(item.id)}
                    className="text-muted-foreground hover:text-primary hover:underline text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Disclaimer */}
          <div className="space-y-3">
            <h2 className="text-sm font-semibold text-foreground">Good to know</h2>
            <p className="text-xs text-muted-foreground leading-relaxed">
              This tool is for fun and entertainment. Its result is not a real
              measure of human value.
            </p>
            <p className="text-xs text-muted-foreground">
              Have feedback or a question? Use the contact page and we will get
              back to you.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground">
          <p>(c) {year} Camel Calculator. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <button onClick={() => go("privacy")} className="hover:text-primary hover:underline">
              Privacy
            </button>
            <button onClick={() => go("terms")} className="hover:text-primary hover:underline">
              Terms
            </button>
            <button onClick={() => go("contact")} className="hover:text-primary hover:underline">
              Contact
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
