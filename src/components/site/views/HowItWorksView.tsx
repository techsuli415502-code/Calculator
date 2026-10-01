"use client";

import * as React from "react";
import { PageShell, ContentBlock, Callout } from "../PageShell";
import { useSiteStore } from "@/lib/siteStore";
import { Card, CardContent } from "@/components/ui/card";
import { RESULT_TIERS } from "@/lib/calculatorScoring";

export function HowItWorksView() {
  const setView = useSiteStore((s) => s.setView);

  return (
    <PageShell
      title="How the Camel Calculator Works"
      subtitle="A clear, step by step look at what happens from your first click to your final camel score."
      breadcrumbs={[
        { label: "Home", view: "home" },
        { label: "How It Works" },
      ]}
    >
      <ContentBlock title="1. Your input">
        <p>
          The process starts with you. The calculator asks a short set of
          questions about easy, surface level details. None of the questions
          ask for your name, email, phone, address, or any sensitive data.
        </p>
        <p>
          The questions cover your gender, age range, height range, hair
          color, eye color, hair style, glasses, body type, skin tone, tattoos
          and piercings. If you pick Male as your gender, you also see one
          extra question about your beard. That is the only branching path.
        </p>
        <p>
          Each question shows its options as either friendly radio cards or a
          simple drop down. You pick one option per question, then hit the
          next button.
        </p>
      </ContentBlock>

      <ContentBlock title="2. The score system">
        <p>
          Each option in each question has a fixed point value set ahead of
          time. The values are visible in the source code, so there is no
          hidden math. When you pick an answer, the tool adds the matching
          point value to your running total.
        </p>
        <p>
          The point values are friendly and balanced. Every option has a fair
          score. Skin tone scores the same across all options on purpose, so
          no skin tone is favored over another. The same is true for gender.
        </p>
        <p>
          Here is how the point ranges break down for the main fields:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Age range: 4 to 8 points</li>
          <li>Height range: 5 to 8 points</li>
          <li>Hair color: 5 to 8 points</li>
          <li>Eye color: 6 to 8 points</li>
          <li>Hair style: 6 to 8 points</li>
          <li>Body type: 7 to 8 points</li>
          <li>Beard (if shown): 6 to 8 points</li>
          <li>Tattoos and piercings: 6 to 7 points each</li>
        </ul>
        <p>
          The tool tracks the maximum possible score for your set of visible
          questions. Your raw total is then divided by that maximum to get a
          ratio from 0 to 1.
        </p>
      </ContentBlock>

      <ContentBlock title="3. The result">
        <p>
          After the last question, the tool turns your ratio into a camel
          count between 1 and 99. The formula is simple: multiply the ratio
          by 90, round to the nearest whole number, then add 5. The final
          number is clamped so it never goes below 1 or above 99.
        </p>
        <p>
          The result card shows your camel count, a friendly tier label, a
          short message, and your full list of answers. You also get four
          buttons: recalculate, start again, share and copy.
        </p>
        <p>
          The result appears in place, with no page reload. The number pops
          into view with a small animation. The whole thing takes less than a
          second after your last click.
        </p>
      </ContentBlock>

      <ContentBlock title="The five result tiers">
        <p>
          Your camel count lands in one of five friendly tiers. Each tier has
          a short label and a short message. Here is the full list:
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {RESULT_TIERS.map((tier) => (
            <div
              key={tier.title}
              className="rounded-xl border border-border bg-secondary/40 p-4"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  {tier.camels}
                </span>
                <span className="text-xs font-medium text-primary">
                  {tier.min === 76 ? "76+" : `${tier.min} to ${tier.max}`}
                </span>
              </div>
              <h3 className="mt-1 font-display text-base font-semibold text-foreground">
                {tier.title}
              </h3>
              <p className="mt-1 text-xs text-muted-foreground">{tier.description}</p>
            </div>
          ))}
        </div>
      </ContentBlock>

      <ContentBlock title="4. Why the result is only for fun">
        <p>
          The camel score is a playful label, not a real rating. It does not
          measure beauty, charm, intelligence, kindness or value as a person.
          The point values are friendly numbers I picked, not the result of a
          study.
        </p>
        <p>
          If you change even one answer, your score might change. That is
          expected, since each answer has a different point value. It does not
          mean the new score is more right or more wrong than the old one.
        </p>
        <p>
          Please do not use the result to compare yourself to friends in a
          serious way. Share it as a joke, laugh about it, and move on. For
          the full rules of use, see our{" "}
          <button
            className="font-medium text-primary hover:underline"
            onClick={() => setView("terms")}
          >
            Terms of Use
          </button>
          .
        </p>
      </ContentBlock>

      <Callout>
        <p className="font-medium text-foreground">In short</p>
        <p className="mt-1">
          You answer easy questions. The tool adds up fixed point values. The
          total becomes a fun camel count. The result is for a smile, not a
          verdict.
        </p>
      </Callout>

      <div className="text-center pt-2">
        <button
          onClick={() => setView("home")}
          className="inline-flex h-11 items-center justify-center rounded-lg bg-primary px-6 text-base font-semibold text-primary-foreground shadow-md transition-colors hover:bg-primary/90"
        >
          Try the Camel Calculator
        </button>
      </div>
    </PageShell>
  );
}
