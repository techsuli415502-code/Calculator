"use client";

import * as React from "react";
import { useSiteStore, type ViewId } from "@/lib/siteStore";
import { CamelSvg } from "./CamelSvg";
import { Card, CardContent } from "@/components/ui/card";

export interface PageShellProps {
  /** Visible page title shown as H1. */
  title: string;
  /** Short subtitle shown under the title. */
  subtitle?: string;
  /** Optional breadcrumbs as a list of (label, viewId | "current") pairs. */
  breadcrumbs?: { label: string; view?: ViewId }[];
  /** Optional small hero illustration. */
  showHero?: boolean;
  /** Main content. */
  children: React.ReactNode;
}

export function PageShell({
  title,
  subtitle,
  breadcrumbs,
  showHero = true,
  children,
}: PageShellProps) {
  const setView = useSiteStore((s) => s.setView);

  return (
    <div className="view-fade-in bg-desert">
      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-5">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground">
              {breadcrumbs.map((item, idx) => {
                const isLast = idx === breadcrumbs.length - 1;
                return (
                  <li key={idx} className="flex items-center gap-1.5">
                    {item.view ? (
                      <button
                        onClick={() => item.view && setView(item.view)}
                        className="hover:text-primary hover:underline"
                      >
                        {item.label}
                      </button>
                    ) : (
                      <span aria-current="page" className="text-foreground/80">
                        {item.label}
                      </span>
                    )}
                    {!isLast && <span aria-hidden>/</span>}
                  </li>
                );
              })}
            </ol>
          </nav>
        )}

        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
          <div className="flex-1">
            <h1 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-3 text-base text-muted-foreground">{subtitle}</p>
            )}
          </div>
          {showHero && (
            <CamelSvg
              className="w-28 h-24 shrink-0 sm:w-36 sm:h-32"
              title={`${title} decoration`}
            />
          )}
        </div>

        <div className="mt-8 space-y-8">{children}</div>
      </div>
    </div>
  );
}

export function ContentBlock({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-xl border border-border bg-card p-5 shadow-sm sm:p-7">
      {title && (
        <h2 className="font-display text-xl font-semibold text-foreground sm:text-2xl mb-3">
          {title}
        </h2>
      )}
      <div className="space-y-3 text-sm leading-relaxed text-foreground/90 sm:text-base">
        {children}
      </div>
    </section>
  );
}

export function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-primary/30 bg-secondary/60 p-4 text-sm text-foreground/90 sm:p-5">
      {children}
    </div>
  );
}
