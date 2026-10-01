"use client";

import * as React from "react";
import Link from "next/link";
import { useSiteStore } from "@/lib/siteStore";
import { CamelSvg } from "./CamelSvg";

export function Hero() {
  const setView = useSiteStore((s) => s.setView);

  const scrollToCalculator = () => {
    const el = document.getElementById("calculator");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative overflow-hidden bg-desert">
      {/* Subtle dune shapes at bottom */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 overflow-hidden" aria-hidden>
        <div className="absolute -bottom-12 left-1/2 h-40 w-[120%] -translate-x-1/2 rounded-[50%] bg-accent/40" />
        <div className="absolute -bottom-16 left-1/4 h-32 w-1/2 rounded-[50%] bg-secondary/60" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Free fun camel value test
            </span>
            <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Camel Calculator
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base text-muted-foreground sm:text-lg lg:mx-0">
              How many camels are you worth? Use our camel calculator to get a
              fun camel value based on a few simple details about you. The whole
              thing takes about a minute and the result is easy to share.
            </p>
            <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row lg:justify-start justify-center">
              <button
                onClick={scrollToCalculator}
                className="inline-flex h-12 w-full items-center justify-center rounded-lg bg-primary px-6 text-base font-semibold text-primary-foreground shadow-md transition-all hover:bg-primary/90 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:w-auto"
              >
                Start Calculator
              </button>
              <button
                onClick={() => setView("how-it-works")}
                className="inline-flex h-12 w-full items-center justify-center rounded-lg border border-border bg-card px-6 text-base font-medium text-foreground shadow-sm transition-colors hover:bg-accent/60 sm:w-auto"
              >
                How it works
              </button>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              No sign up. No personal data stored. Just a quick fun camel quiz.
            </p>
          </div>

          <div className="flex justify-center lg:justify-end">
            <CamelSvg
              className="camel-bob w-64 h-52 sm:w-80 sm:h-64 lg:w-96 lg:h-72"
              title="Friendly desert camel"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
