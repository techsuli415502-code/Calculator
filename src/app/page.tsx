"use client";

import * as React from "react";
import { useSiteStore } from "@/lib/siteStore";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { HomeView } from "@/components/site/views/HomeView";
import { AboutView } from "@/components/site/views/AboutView";
import { HowItWorksView } from "@/components/site/views/HowItWorksView";
import { FaqView } from "@/components/site/views/FaqView";
import { ContactView } from "@/components/site/views/ContactView";
import { PrivacyView } from "@/components/site/views/PrivacyView";
import { TermsView } from "@/components/site/views/TermsView";

const SITE_URL = "https://camelcalculator.vercel.app";

const VIEW_META: Record<
  string,
  { title: string; description: string; canonical: string; ogType: string }
> = {
  home: {
    title: "Camel Calculator | How Many Camels Are You Worth?",
    description:
      "A fun camel calculator that turns a few simple details about you into a playful camel score. Try the online camel value test and find out how many camels you are worth.",
    canonical: SITE_URL + "/",
    ogType: "website",
  },
  about: {
    title: "About the Camel Calculator | Free Fun Online Tool",
    description:
      "Learn about the Camel Calculator: a free, friendly online tool that gives you a fun camel value based on simple details. Built and written by Jacob Moses.",
    canonical: SITE_URL + "/#about",
    ogType: "article",
  },
  "how-it-works": {
    title: "How the Camel Calculator Works | Scoring Explained",
    description:
      "How the Camel Calculator works: your input, the scoring system, the result, and why the camel score is only for fun. A clear step by step breakdown.",
    canonical: SITE_URL + "/#how-it-works",
    ogType: "article",
  },
  faq: {
    title: "Camel Calculator FAQ | Common Questions Answered",
    description:
      "Quick answers to common questions about the camel calculator, the camel score, how it works, and what the result means. 14 clear answers in one place.",
    canonical: SITE_URL + "/#faq",
    ogType: "article",
  },
  contact: {
    title: "Contact the Camel Calculator Team",
    description:
      "Contact the Camel Calculator team with feedback, questions, or bug reports. We read every message and reply as soon as we can.",
    canonical: SITE_URL + "/#contact",
    ogType: "website",
  },
  privacy: {
    title: "Privacy Policy | Camel Calculator",
    description:
      "Privacy Policy for the Camel Calculator. The tool runs in your browser and does not store your answers. Read what data is used and what is not.",
    canonical: SITE_URL + "/#privacy",
    ogType: "website",
  },
  terms: {
    title: "Terms of Use | Camel Calculator",
    description:
      "Terms of Use for the Camel Calculator. The site is for fun and entertainment, and results are not real measures of value.",
    canonical: SITE_URL + "/#terms",
    ogType: "website",
  },
};

function upsertMeta(selector: string, attr: string, value: string, createAttrs?: Record<string, string>) {
  let tag = document.querySelector(selector);
  if (!tag) {
    tag = document.createElement("meta");
    // Set the identifying attr first
    for (const [k, v] of Object.entries(createAttrs ?? {})) {
      tag.setAttribute(k, v);
    }
    document.head.appendChild(tag);
  }
  tag.setAttribute(attr, value);
}

function upsertLink(rel: string, href: string) {
  let link = document.querySelector(`link[rel="${rel}"]`);
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", rel);
    document.head.appendChild(link);
  }
  link.setAttribute("href", href);
}

export default function Home() {
  const view = useSiteStore((s) => s.view);
  const syncFromHash = useSiteStore((s) => s.syncFromHash);

  // On mount, read the URL hash so deep links like /#faq open the right view.
  React.useEffect(() => {
    syncFromHash(window.location.hash);
  }, []);

  // Update the document title, meta description, canonical URL, and OG tags
  // when the active view changes. This keeps each "page" of the SPA
  // indexable by search engines with its own metadata.
  React.useEffect(() => {
    const meta = VIEW_META[view];
    if (!meta) return;
    document.title = meta.title;

    upsertMeta('meta[name="description"]', "content", meta.description, {
      name: "description",
    });
    upsertMeta('meta[property="og:title"]', "content", meta.title, {
      property: "og:title",
    });
    upsertMeta('meta[property="og:description"]', "content", meta.description, {
      property: "og:description",
    });
    upsertMeta('meta[property="og:url"]', "content", meta.canonical, {
      property: "og:url",
    });
    upsertMeta('meta[property="og:type"]', "content", meta.ogType, {
      property: "og:type",
    });
    upsertMeta('meta[name="twitter:title"]', "content", meta.title, {
      name: "twitter:title",
    });
    upsertMeta('meta[name="twitter:description"]', "content", meta.description, {
      name: "twitter:description",
    });
    upsertLink("canonical", meta.canonical);
  }, [view]);

  // Keep the URL hash in sync with the current view so users can share or
  // bookmark a deep link to a specific page.
  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const targetHash = view === "home" ? "" : `#${view}`;
    if (window.location.hash !== targetHash) {
      const newUrl = window.location.pathname + targetHash + window.location.search;
      window.history.replaceState(null, "", newUrl);
    }
  }, [view]);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          const main = document.getElementById("main");
          if (main) {
            main.setAttribute("tabindex", "-1");
            main.focus();
            main.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }}
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-primary-foreground focus:shadow-lg"
      >
        Skip to main content
      </button>
      <Header />
      <main className="flex-1" id="main">
        {view === "home" && <HomeView />}
        {view === "about" && <AboutView />}
        {view === "how-it-works" && <HowItWorksView />}
        {view === "faq" && <FaqView />}
        {view === "contact" && <ContactView />}
        {view === "privacy" && <PrivacyView />}
        {view === "terms" && <TermsView />}
      </main>
      <Footer />
    </div>
  );
}

