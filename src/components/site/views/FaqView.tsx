"use client";

import * as React from "react";
import { PageShell, ContentBlock } from "../PageShell";
import { useSiteStore } from "@/lib/siteStore";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface QA { q: string; a: string; }

const FAQS: QA[] = [
  {
    q: "What is a camel calculator?",
    a: "A camel calculator is a fun online tool that takes a few simple details about you and turns them into a playful camel score. You answer short questions about your age, height, hair, eyes and a few other easy things, and the tool gives you a number between 1 and 99 as your camel value.",
  },
  {
    q: "How does a camel calculator work?",
    a: "Each answer in the form has a fixed point value set ahead of time. The tool adds up your points, turns the total into a ratio of the max possible score, and then maps that ratio to a camel count. The math is simple and visible in the source code.",
  },
  {
    q: "Is the camel calculator free?",
    a: "Yes, fully free. There is no sign up, no paid plan and no hidden upgrade. You can use the tool as many times as you want, on any device, without paying.",
  },
  {
    q: "How is the camel score calculated?",
    a: "The score starts at zero. For each question you answer, the tool adds the point value of your chosen option to the running total. After the last question, the tool works out your ratio of points to the max possible, multiplies by 90, rounds it and adds 5. That gives your final camel count.",
  },
  {
    q: "Is the result real?",
    a: "No. The result is just for fun. It is not a real measure of your worth, your looks, your value or anything else about you. Treat it as a joke.",
  },
  {
    q: "Can I use the calculator more than once?",
    a: "Yes. You can run the calculator as many times as you like. After you see your result, hit Start Again to clear the form and try different answers, or hit Recalculate to walk through the same form again from the start.",
  },
  {
    q: "Can I share my camel score?",
    a: "Yes. The result card has Share and Copy buttons. The Share button uses your device sharing sheet if your browser supports it. The Copy button puts a short text version of your result on the clipboard so you can paste it into any chat or post.",
  },
  {
    q: "Does age affect the result?",
    a: "Yes. The age range you pick has a small effect on your camel score. Each age range has a different point value. None of the age ranges is bad. They are all friendly and balanced.",
  },
  {
    q: "Does height affect the result?",
    a: "Yes. The height range you pick also has a small effect on your final camel count. As with age, each option has a fixed point value and none of them is a bad choice.",
  },
  {
    q: "Is the camel calculator scientific?",
    a: "No. There is no science behind the camel score. The point values are friendly numbers I picked to give fun, varied results. They do not come from a study, a survey, or any real research.",
  },
  {
    q: "Can I use it on my phone?",
    a: "Yes. The calculator is built to work well on phones, tablets and desktops. The form is split into short steps so it fits easily on small screens. Buttons and tap targets are large enough for touch use.",
  },
  {
    q: "Why does my result change?",
    a: "Your result changes if you change your answers. Each answer has a different point value, so any change to your input can move your final camel count up or down. That is expected and does not mean either result is more correct.",
  },
  {
    q: "Does the tool store my answers?",
    a: "No. The tool runs in your browser. Your answers and your result are kept only in your current page. When you close the page or refresh, your data is gone. We do not have a back end that saves your form input.",
  },
  {
    q: "Who made the camel calculator?",
    a: "The Camel Calculator is built and written by Jacob Moses, who also writes the content on this site. You can read more on the About page.",
  },
];

export function FaqView() {
  const setView = useSiteStore((s) => s.setView);

  // FAQ structured data (JSON-LD)
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  return (
    <PageShell
      title="Camel Calculator FAQ"
      subtitle="Quick answers to the most common questions about the camel calculator, the camel score and how the tool works."
      breadcrumbs={[
        { label: "Home", view: "home" },
        { label: "FAQ" },
      ]}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <ContentBlock>
        <p>
          Here are answers to the questions people ask most about the camel
          calculator. If your question is not on this list, please use the{" "}
          <button
            className="font-medium text-primary hover:underline"
            onClick={() => setView("contact")}
          >
            Contact
          </button>{" "}
          page and we will get back to you.
        </p>
      </ContentBlock>

      <ContentBlock title="Frequently asked questions">
        <Accordion type="single" collapsible className="w-full">
          {FAQS.map((item, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left text-base font-medium">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground sm:text-base">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </ContentBlock>

      <ContentBlock title="Still have questions?">
        <p>
          If you want to know more about how the tool works, see our{" "}
          <button
            className="font-medium text-primary hover:underline"
            onClick={() => setView("how-it-works")}
          >
            How It Works
          </button>{" "}
          page. If you have feedback, a bug to report, or a question that is
          not covered here, please reach out through the{" "}
          <button
            className="font-medium text-primary hover:underline"
            onClick={() => setView("contact")}
          >
            Contact
          </button>{" "}
          page. We read every message and we try to reply within a few days.
        </p>
      </ContentBlock>
    </PageShell>
  );
}
