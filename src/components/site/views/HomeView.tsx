"use client";

import * as React from "react";
import { Hero } from "../Hero";
import { CamelCalculator } from "../CamelCalculator";
import { CamelSvg } from "../CamelSvg";
import { useSiteStore } from "@/lib/siteStore";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const HOME_FAQ: { q: string; a: string }[] = [
  {
    q: "What is a camel calculator?",
    a: "It is a fun online tool that turns a few simple details about you into a playful camel score. Think of it like a quiz with a number at the end.",
  },
  {
    q: "How is the camel score calculated?",
    a: "Each answer in the form has a fixed point value. The calculator adds up the points from your answers and turns the total into a camel count between 1 and 99.",
  },
  {
    q: "Is the result real?",
    a: "No. The camel score is just for fun. It is not a real or scientific measure of any person or their value.",
  },
  {
    q: "Can I use the camel calculator on my phone?",
    a: "Yes. The calculator is built to work on phones, tablets and desktops. The form is split into short steps so it is easy to use on small screens.",
  },
];

export function HomeView() {
  const setView = useSiteStore((s) => s.setView);

  return (
    <div className="view-fade-in">
      <Hero />

      {/* Calculator */}
      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mb-6 text-center">
          <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
            Try the Camel Calculator
          </h2>
          <p className="mt-2 text-sm text-muted-foreground sm:text-base">
            Answer a few simple questions about yourself. No names, no email,
            nothing personal. Just easy appearance details.
          </p>
        </div>
        <CamelCalculator />
      </section>

      {/* Content sections */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-14 pb-8">
        <ContentSection
          id="what-is"
          title="What Is a Camel Calculator?"
          intro="A camel calculator is a light, friendly web tool that takes a few simple facts about you and turns them into a fun number called a camel score."
        >
          <p>
            You answer quick questions about your age, height, hair, eyes and a
            few other easy things. The calculator then adds up the points from
            each answer and gives you a final camel count. That number is your
            playful camel value for the day.
          </p>
          <p>
            People use these tools to laugh with friends, share a fun result on
            social media, or just pass a few minutes with something silly. The
            camel calculator is not a real test of any kind. It is just a fun
            online quiz with a desert theme.
          </p>
        </ContentSection>

        <ContentSection
          id="how-does-work"
          title="How Does the Camel Calculator Work?"
          intro="The tool uses a simple, transparent scoring system that anyone can understand."
        >
          <p>
            Each question has a list of options. Every option has a fixed point
            value set ahead of time. When you pick an answer, the calculator
            adds that points value to your running total.
          </p>
          <p>
            After you finish the last question, the tool adds up all your
            points. The total is then turned into a camel count between 1 and 99.
            A higher total means a higher camel score, and a lower total means a
            lower camel score.
          </p>
          <p>
            The full list of options and their point values is shown in plain
            sight in our source code. There is no hidden math and no random
            roll. If you run the calculator twice with the same answers, you
            will get the same result.
          </p>
        </ContentSection>

        <ContentSection
          id="how-to-use"
          title="How to Use the Camel Calculator"
          intro="The tool is built to be simple. Here is the full process in four short steps."
        >
          <ol className="space-y-3">
            <li className="flex gap-3">
              <StepBadge>1</StepBadge>
              <div>
                <h3 className="font-semibold text-foreground">Pick your gender</h3>
                <p className="text-sm text-muted-foreground">
                  This only decides which questions come next. It does not
                  change your base score.
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <StepBadge>2</StepBadge>
              <div>
                <h3 className="font-semibold text-foreground">Answer each step</h3>
                <p className="text-sm text-muted-foreground">
                  Go through age, height, hair, eyes, body type and a few other
                  easy picks. The progress bar shows how far you are.
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <StepBadge>3</StepBadge>
              <div>
                <h3 className="font-semibold text-foreground">Get your camel score</h3>
                <p className="text-sm text-muted-foreground">
                  Hit the final button and your result appears on screen with a
                  friendly message and your camel count.
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <StepBadge>4</StepBadge>
              <div>
                <h3 className="font-semibold text-foreground">Share or start again</h3>
                <p className="text-sm text-muted-foreground">
                  Use the share or copy buttons to send your result to a friend.
                  You can also click start again to try different answers.
                </p>
              </div>
            </li>
          </ol>
          <p className="text-sm text-muted-foreground mt-4">
            The whole flow takes about a minute from start to finish. You can
            read more about the steps on our{" "}
            <button
              className="font-medium text-primary hover:underline"
              onClick={() => setView("how-it-works")}
            >
              How It Works
            </button>{" "}
            page.
          </p>
        </ContentSection>

        <ContentSection
          id="what-score-means"
          title="What Does the Camel Score Mean?"
          intro="The short answer: not much. The longer answer is below."
        >
          <p>
            Your camel score is just a number that comes out of a fun scoring
            system. It is not a rating of you, your looks, your worth or your
            value as a person. It is a playful label that you can share with
            friends for a laugh.
          </p>
          <p>
            The result falls into one of five friendly tiers, from a small herd
            all the way up to a legend of the dunes. Each tier comes with a short
            line of text that is meant to be warm, not serious.
          </p>
          <p>
            If you get a low score, that is fine. If you get a high score, that
            is also fine. The score is meant to spark a smile, not a verdict on
            who you are.
          </p>
        </ContentSection>

        <ContentSection
          id="why-use"
          title="Why Do People Use Camel Calculators?"
          intro="The short answer is simple: it is a quick, silly way to pass the time."
        >
          <p>
            A camel calculator is the kind of tool you find, try once, and send
            to a friend. The result is a small number with a funny label, which
            is easy to drop into a chat or a social post.
          </p>
          <p>
            People also use it as an ice breaker at parties, a fun first date
            game, or a quick break from work. It gives you a tiny story to tell
            (for example, you are worth 42 camels) without any real stakes.
          </p>
          <p>
            Some users like to compare results with their group, see who ends up
            with the highest camel count, and laugh about the very idea of
            measuring a person in camels. That is the whole point.
          </p>
        </ContentSection>

        <ContentSection
          id="is-accurate"
          title="Is the Camel Calculator Accurate?"
          intro="No, and that is by design. The tool is not meant to be accurate."
        >
          <p>
            There is no real science behind the camel score. The point values
            are friendly numbers we picked to give fun, varied results. They do
            not come from a study, a survey, or any kind of real research.
          </p>
          <p>
            Your camel score can also change if you change your answers. That is
            expected, since each answer has a different point value. It does
            not mean the new score is more right than the old one.
          </p>
          <p>
            Please treat the result as a joke, not as a real value test. You can
            read our{" "}
            <button
              className="font-medium text-primary hover:underline"
              onClick={() => setView("terms")}
            >
              Terms of Use
            </button>{" "}
            for the full details.
          </p>
        </ContentSection>

        {/* FAQ section */}
        <ContentSection
          id="faq"
          title="Camel Calculator FAQ"
          intro="A few quick questions and answers. For the full list, see our"
          introTail={
            <button
              className="font-medium text-primary hover:underline"
              onClick={() => setView("faq")}
            >
              FAQ page
            </button>
          }
        >
          <Accordion type="single" collapsible className="w-full">
            {HOME_FAQ.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-base font-medium">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ContentSection>

        {/* Final CTA */}
        <section className="rounded-2xl border border-border bg-card p-6 text-center shadow-sm sm:p-10">
          <div className="flex justify-center mb-4">
            <CamelSvg className="w-28 h-24" />
          </div>
          <h2 className="font-display text-2xl font-bold text-foreground">
            Ready to find your camel score?
          </h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
            It only takes a minute. No sign up, no email, no personal data
            stored. Just answer the questions and get your fun camel value.
          </p>
          <button
            onClick={() => {
              const el = document.getElementById("calculator");
              if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className="mt-5 inline-flex h-11 items-center justify-center rounded-lg bg-primary px-6 text-base font-semibold text-primary-foreground shadow-md transition-colors hover:bg-primary/90"
          >
            Start Calculator
          </button>
        </section>
      </div>
    </div>
  );
}

function ContentSection({
  id,
  title,
  intro,
  introTail,
  children,
}: {
  id: string;
  title: string;
  intro: string;
  introTail?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20">
      <div className="mb-4">
        <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
          {title}
        </h2>
        <p className="mt-2 text-sm text-muted-foreground sm:text-base">
          {intro} {introTail}
        </p>
      </div>
      <div className="space-y-4 text-sm leading-relaxed text-foreground/90 sm:text-base">
        {children}
      </div>
    </section>
  );
}

function StepBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
      {children}
    </span>
  );
}
