"use client";

import * as React from "react";
import { PageShell, ContentBlock, Callout } from "../PageShell";
import { useSiteStore } from "@/lib/siteStore";

export function TermsView() {
  const setView = useSiteStore((s) => s.setView);

  return (
    <PageShell
      title="Terms of Use"
      subtitle="The rules for using the Camel Calculator. Please read them before you use the tool. Last updated on October 1, 2026."
      breadcrumbs={[
        { label: "Home", view: "home" },
        { label: "Terms of Use" },
      ]}
    >
      <ContentBlock title="Accepting these terms">
        <p>
          By using the Camel Calculator website, you agree to these terms. If
          you do not agree, please do not use the site. These terms apply to
          all pages and features of the site.
        </p>
        <p>
          You do not need to sign up or share any personal data to use the
          calculator. Using the tool is free. These rules are here to keep
          the tool friendly and clear for everyone.
        </p>
      </ContentBlock>

      <ContentBlock title="The site is for entertainment">
        <p>
          The Camel Calculator is an entertainment tool. Its only purpose is
          to give you a fun camel score based on a few simple details you
          enter. The site is not a service for advice of any kind.
        </p>
        <p>
          Please use the site in good humor. Share your result with friends
          as a joke. Do not use the result to make any decision about
          yourself or anyone else.
        </p>
      </ContentBlock>

      <ContentBlock title="Results are not scientific">
        <p>
          The camel score comes from a fixed set of point values for each
          answer option. The values are friendly picks made by the author.
          They do not come from a study, a survey, or any real research.
        </p>
        <p>
          The scoring system is fully visible in the source code. There is
          no hidden math and no random roll. But the values themselves are
          just for fun. They are not based on any scientific or medical
          standard.
        </p>
      </ContentBlock>

      <ContentBlock title="Results are not advice">
        <p>
          The camel score is not financial advice. It is not legal advice.
          It is not medical, health or relationship advice. It is not
          personal advice of any kind.
        </p>
        <p>
          If you need help with money, health, work, or your personal life,
          please reach out to a qualified professional. The Camel Calculator
          is not a substitute for any real service.
        </p>
      </ContentBlock>

      <ContentBlock title="Do not treat camel scores as real human value">
        <p>
          This is the most important rule on this page. The camel score is
          not a measure of a person's worth, beauty, character, intelligence
          or value.
        </p>
        <p>
          Please do not use the result to compare yourself to others in a
          serious way. Do not use it to judge, rank, or shame anyone. Do not
          use it to bully, harass, or hurt another person.
        </p>
        <p>
          A low score does not mean a person is worth less. A high score
          does not mean a person is worth more. Every person has value that
          no quiz can measure.
        </p>
      </ContentBlock>

      <ContentBlock title="Site content and tool limits">
        <p>
          We work hard to keep the site clear, correct and up to date. But
          we cannot promise that every page is free of typos or that the
          tool will work perfectly on every device at all times.
        </p>
        <p>
          You use the site at your own risk. We may change, update or remove
          parts of the site at any time without notice. We may also stop
          running the site at some point in the future.
        </p>
        <p>
          The text on this site is original work. Please do not copy large
          parts of it for your own project without asking first. The camel
          artwork and the calculator scoring system are also original work.
        </p>
      </ContentBlock>

      <ContentBlock title="Acceptable use">
        <p>
          You agree to use the site in a lawful and friendly way. In
          particular, you agree not to:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Use the tool to bully, shame or harass another person</li>
          <li>Try to break, hack, or overload the site in any way</li>
          <li>Scrape or copy large parts of the site without permission</li>
          <li>Use automated tools to spam the contact form</li>
          <li>Pretend the result is a real rating of a real person</li>
        </ul>
        <p>
          If we see behavior that breaks these rules, we may block access
          from the affected device or network. We may also update the site
          to prevent the same abuse in the future.
        </p>
      </ContentBlock>

      <Callout>
        <p className="font-medium text-foreground">In one line</p>
        <p className="mt-1">
          The Camel Calculator is a fun tool. Its result is not a real value
          test. Use it for a laugh, share it as a joke, and treat other
          people with respect.
        </p>
      </Callout>

      <ContentBlock title="Questions about these terms">
        <p>
          If you have any question about these terms, please use the{" "}
          <button
            className="font-medium text-primary hover:underline"
            onClick={() => setView("contact")}
          >
            Contact
          </button>{" "}
          page. We are happy to explain any part of these rules. You can
          also read our{" "}
          <button
            className="font-medium text-primary hover:underline"
            onClick={() => setView("privacy")}
          >
            Privacy Policy
          </button>{" "}
          for details on data.
        </p>
      </ContentBlock>
    </PageShell>
  );
}
