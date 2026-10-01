"use client";

import * as React from "react";
import { PageShell, ContentBlock, Callout } from "../PageShell";
import { useSiteStore } from "@/lib/siteStore";
import { Card, CardContent } from "@/components/ui/card";

export function AboutView() {
  const setView = useSiteStore((s) => s.setView);

  return (
    <PageShell
      title="About the Camel Calculator"
      subtitle="A friendly online tool made for fun, sharing and a quick smile."
      breadcrumbs={[
        { label: "Home", view: "home" },
        { label: "About" },
      ]}
    >
      <ContentBlock title="What is the Camel Calculator?">
        <p>
          The Camel Calculator is a free, fun web tool that gives you a playful
          camel score based on a few simple details about you. It is built to
          be quick, easy and friendly, with no log in, no email and no
          personal data stored.
        </p>
        <p>
          You answer a short set of questions about your age, height, hair,
          eyes and a few other light details. The tool then adds up the points
          from your answers and turns the total into a camel count between 1
          and 99. That number is your camel value for the day.
        </p>
        <p>
          The whole thing runs in your browser. There is no back end saving
          your answers. When you close the page, your result is gone. That
          keeps the tool simple, fast and private.
        </p>
      </ContentBlock>

      <ContentBlock title="Why was it made?">
        <p>
          I built the Camel Calculator because I wanted a small, friendly web
          tool that does one thing well. The internet has plenty of serious
          calculators for math, loans and taxes. I wanted one that just makes
          people smile.
        </p>
        <p>
          The idea is not new. People have joked for years about measuring
          things in camels. My take is to keep the joke warm, simple and
          respectful. No body shaming, no harsh scores, no real claims about
          human worth. Just a fun number to share.
        </p>
        <p>
          I also wanted the tool to feel fast and clean. No big libraries, no
          pop ups, no sign up walls. You open the page, take the quiz, get
          your result and move on with your day.
        </p>
      </ContentBlock>

      <ContentBlock title="How the tool works">
        <p>
          The form is split into short steps. Each step asks one question.
          Each question has a set of options, and each option has a fixed
          point value. The values are set ahead of time, so the same answers
          always give the same result.
        </p>
        <p>
          After the last step, the tool adds up your points and turns the
          total into a camel count. The result card shows your number, a short
          friendly message, your list of answers, and four buttons to
          recalculate, start again, share or copy the result.
        </p>
        <p>
          You can read the full breakdown on the{" "}
          <button
            className="font-medium text-primary hover:underline"
            onClick={() => setView("how-it-works")}
          >
            How It Works
          </button>{" "}
          page.
        </p>
      </ContentBlock>

      <ContentBlock title="Why the result is just for fun">
        <p>
          The camel score is a number that comes out of a fixed set of point
          values. It is not a measure of beauty, value, character or
          anything real. The options and scores are friendly picks, not
          research.
        </p>
        <p>
          Please do not treat the result as a real rating. Do not use it to
          compare your worth to anyone else. The whole point is to laugh at
          the idea that a person could be measured in camels at all.
        </p>
      </ContentBlock>

      <ContentBlock title="The goal of the project">
        <p>
          The goal is simple. Build a small, useful, polished web tool that
          loads fast, works on any device, and gives people a quick smile. No
          dark patterns, no spam, no pressure to share.
        </p>
        <p>
          If the tool makes you laugh, or gives you a fun fact to send a
          friend, then it has done its job. That is the only metric I care
          about.
        </p>
      </ContentBlock>

      {/* E-E-A-T section */}
      <ContentBlock title="About the author">
        <p>
          Hi, I am Jacob Moses. I am the writer and builder of the Camel
          Calculator. My role here is Content Specialist, which means I write
          the words you read on this site, plan the user flow, and tweak the
          tool until it feels right.
        </p>
        <p>
          I spend my days making small, friendly web tools and writing clear
          content for them. I like simple language, fast pages and designs
          that get out of the way. When I am not writing or coding, I like
          long walks, bad jokes and a good cup of tea.
        </p>
        <p>
          I am not a researcher, a doctor, or a scientist. The Camel
          Calculator is not a research project. It is a fun side tool built to
          be honest about what it is and what it is not.
        </p>
        <p>
          You can read more about how the calculator works on the{" "}
          <button
            className="font-medium text-primary hover:underline"
            onClick={() => setView("how-it-works")}
          >
            How It Works
          </button>{" "}
          page, or check the{" "}
          <button
            className="font-medium text-primary hover:underline"
            onClick={() => setView("faq")}
          >
            FAQ
          </button>{" "}
          for quick answers. If you want to send feedback, please use the{" "}
          <button
            className="font-medium text-primary hover:underline"
            onClick={() => setView("contact")}
          >
            Contact
          </button>{" "}
          page.
        </p>
      </ContentBlock>

      <Callout>
        <p className="font-medium text-foreground">A quick note on trust</p>
        <p className="mt-1">
          I want this site to be honest. The tool is built by one person (me).
          The content is written by hand. The scoring is open and visible in
          the source code. Nothing here is meant to trick you, and no part of
          the result is a real claim about your value.
        </p>
      </Callout>
    </PageShell>
  );
}
