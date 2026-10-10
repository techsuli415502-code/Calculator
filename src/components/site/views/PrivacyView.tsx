"use client";

import * as React from "react";
import { PageShell, ContentBlock } from "../PageShell";
import { useSiteStore } from "@/lib/siteStore";

export function PrivacyView() {
  const setView = useSiteStore((s) => s.setView);

  return (
    <PageShell
      title="Privacy Policy"
      subtitle="What data is used by the Camel Calculator and what is not. Last updated on October 10, 2026."
      breadcrumbs={[
        { label: "Home", view: "home" },
        { label: "Privacy Policy" },
      ]}
    >
      <ContentBlock title="The short version">
        <p>
          The Camel Calculator does not have a user account system. It does not
          ask for your name, email, phone, or any other personal contact
          detail. Your answers in the calculator stay in your browser. When
          you close or refresh the page, that data is gone.
        </p>
        <p>
          The contact form on this site opens your own email app with your
          message pre-filled. Your message is sent from your email account
          straight to our inbox. The form itself does not store any data on
          this site or its servers.
        </p>
      </ContentBlock>

      <ContentBlock title="What data you may enter">
        <p>
          The calculator asks for light, surface level details about your
          appearance. This includes your gender, age range, height range, hair
          color, eye color, hair style, beard status (if relevant), glasses,
          body type, skin tone, tattoos and piercings.
        </p>
        <p>
          None of these fields are personally identifying on their own. We do
          not ask for your name, email, phone, address, photo, real birthday,
          or any payment information inside the calculator.
        </p>
      </ContentBlock>

      <ContentBlock title="Whether calculator inputs are stored">
        <p>
          No. The calculator runs fully in your browser. The answers you pick
          are held in memory only for as long as the page is open. When you
          close the tab, refresh the page, or click Start Again, that data is
          cleared.
        </p>
        <p>
          We do not send your answers to a back end. We do not keep a copy of
          your result on our side. We do not link your result to your device
          or to any account.
        </p>
      </ContentBlock>

      <ContentBlock title="Cookies">
        <p>
          This site does not set any tracking cookies of its own. The site
          does not use sign in cookies, because there is no sign in.
        </p>
        <p>
          If we add analytics in the future, it may use a cookie to track
          aggregate page views. We will update this policy before that
          happens, and we will give you a clear way to opt out.
        </p>
      </ContentBlock>

      <ContentBlock title="Analytics">
        <p>
          We may use a privacy friendly analytics tool to count page views in
          aggregate. This tells us which pages are useful and which need work.
          Aggregate analytics does not show us who you are. It only shows us
          broad patterns like country or device type.
        </p>
        <p>
          If we add such a tool, this page will list it by name. At the time
          of writing, no third party analytics runs on this site.
        </p>
      </ContentBlock>

      <ContentBlock title="Third party services">
        <p>
          The Camel Calculator is built with standard web tools. The site
          loads fonts from a font service. The site may load images or assets
          from a content delivery network.
        </p>
        <p>
          We do not run ads on this site. We do not sell your data. We do not
          share your data with marketing partners.
        </p>
      </ContentBlock>

      <ContentBlock title="Contact form data">
        <p>
          The contact form on this site lets you write a message to us. The
          form asks for your name, your email, and your message text. When
          you press send, the form opens your own email app with your
          message pre-filled. You then press send inside your email app to
          deliver the message to our inbox at techsuli415502@gmail.com.
        </p>
        <p>
          The form itself does not store your name, email, or message on
          this site or on any server we control. Your message is sent from
          your email account, through your email provider, to our inbox.
        </p>
        <p>
          Once your email reaches our inbox, we keep it only for as long as
          we need to resolve your question. We do not add you to a marketing
          list. We do not sell your contact details. If you ask us to
          delete your message, we will do so within a reasonable time.
        </p>
      </ContentBlock>

      <ContentBlock title="Your rights">
        <p>
          You have the right to ask what data we hold about you, to ask for a
          copy, and to ask us to correct or delete it. Because the calculator
          does not store your answers, there is nothing to delete on the
          calculator side.
        </p>
        <p>
          For the contact form, you can email us at{" "}
          <a
            href="mailto:techsuli415502@gmail.com"
            className="font-medium text-primary hover:underline break-all"
          >
            techsuli415502@gmail.com
          </a>{" "}
          with any such request. We will reply within a reasonable time,
          usually within a few days.
        </p>
        <p>
          You can also clear any data stored in your browser at any time
          using your browser settings, or by simply closing this site.
        </p>
      </ContentBlock>

      <ContentBlock title="Data security">
        <p>
          We use standard web security practices. The site is served over
          HTTPS. We do not store payment card details because we do not
          process payments.
        </p>
        <p>
          No method of transmission over the internet is fully secure. We
          work to keep the site safe, but we cannot promise perfect security.
          If a breach ever happens, we will update this page and notify
          affected users where we have their contact details.
        </p>
      </ContentBlock>

      <ContentBlock title="Policy updates">
        <p>
          We may update this policy from time to time. When we do, we will
          change the last updated date at the top of this page. If a change
          is significant, we will make it clear on this page.
        </p>
        <p>
          For the rules of use, please also read our{" "}
          <button
            type="button"
            className="font-medium text-primary hover:underline"
            onClick={() => setView("terms")}
          >
            Terms of Use
          </button>
          . For how the tool works, see our{" "}
          <button
            type="button"
            className="font-medium text-primary hover:underline"
            onClick={() => setView("how-it-works")}
          >
            How It Works
          </button>{" "}
          page.
        </p>
      </ContentBlock>
    </PageShell>
  );
}
