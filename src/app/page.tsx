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

export default function Home() {
  const view = useSiteStore((s) => s.view);

  // Update the document title when the active view changes for basic SEO.
  React.useEffect(() => {
    const titles: Record<typeof view, string> = {
      home: "Camel Calculator | How Many Camels Are You Worth?",
      about: "About | Camel Calculator",
      "how-it-works": "How It Works | Camel Calculator",
      faq: "FAQ | Camel Calculator",
      contact: "Contact | Camel Calculator",
      privacy: "Privacy Policy | Camel Calculator",
      terms: "Terms of Use | Camel Calculator",
    };
    document.title = titles[view];

    const metaDesc: Record<typeof view, string> = {
      home:
        "A fun camel calculator that turns a few simple details about you into a playful camel score. Try the online camel value test and find out how many camels you are worth.",
      about:
        "Learn about the Camel Calculator: a free, friendly online tool that gives you a fun camel value based on simple details. Built and written by Jacob Moses.",
      "how-it-works":
        "How the Camel Calculator works: your input, the scoring system, the result, and why the camel score is only for fun.",
      faq:
        "Quick answers to common questions about the camel calculator, the camel score, how it works, and what the result means.",
      contact:
        "Contact the Camel Calculator team with feedback, questions, or bug reports. We read every message.",
      privacy:
        "Privacy Policy for the Camel Calculator. Learn what data is used, what is stored, and what is not.",
      terms:
        "Terms of Use for the Camel Calculator. The site is for fun and entertainment, and results are not real measures of value.",
    };
    let tag = document.querySelector('meta[name="description"]');
    if (!tag) {
      tag = document.createElement("meta");
      tag.setAttribute("name", "description");
      document.head.appendChild(tag);
    }
    tag.setAttribute("content", metaDesc[view]);
  }, [view]);

  return (
    <div className="flex min-h-screen flex-col bg-background">
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
