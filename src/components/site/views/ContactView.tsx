"use client";

import * as React from "react";
import { PageShell, ContentBlock } from "../PageShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { Mail, Send, CheckCircle2 } from "lucide-react";

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export function ContactView() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [errors, setErrors] = React.useState<FormErrors>({});
  const [submitting, setSubmitting] = React.useState(false);
  const [sent, setSent] = React.useState(false);

  const validate = (): boolean => {
    const next: FormErrors = {};
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    if (!trimmedName) {
      next.name = "Please add your name.";
    } else if (trimmedName.length < 2) {
      next.name = "Your name looks too short.";
    }

    if (!trimmedEmail) {
      next.email = "Please add your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      next.email = "That email does not look right.";
    }

    if (!trimmedMessage) {
      next.message = "Please add a short message.";
    } else if (trimmedMessage.length < 10) {
      next.message = "Your message is too short. Tell us a bit more.";
    } else if (trimmedMessage.length > 4000) {
      next.message = "Your message is too long. Please keep it under 4000 characters.";
    }

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (sent) return;
    if (!validate()) {
      toast({ title: "Check the form", description: "Please fix the highlighted fields." });
      return;
    }
    setSubmitting(true);
    // Simulated submission. There is no back end that stores contact form data,
    // so we just show a success state and clear the form.
    setTimeout(() => {
      setSubmitting(false);
      setSent(true);
      setName("");
      setEmail("");
      setMessage("");
      toast({
        title: "Message sent",
        description: "Thanks for reaching out. We will get back to you soon.",
      });
    }, 600);
  };

  return (
    <PageShell
      title="Contact Us"
      subtitle="Questions, feedback or a bug to report? Send us a short note and we will get back to you."
      breadcrumbs={[
        { label: "Home", view: "home" },
        { label: "Contact" },
      ]}
    >
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="rounded-xl border border-border bg-card p-5 shadow-sm sm:p-7">
            <h2 className="font-display text-xl font-semibold text-foreground sm:text-2xl mb-4">
              Send a message
            </h2>

            {sent ? (
              <div className="rounded-lg border border-primary/30 bg-secondary/60 p-5 text-sm">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Your message was sent.</p>
                    <p className="mt-1 text-muted-foreground">
                      Thanks for reaching out. We will reply to your email as
                      soon as we can, usually within a few days.
                    </p>
                    <button
                      onClick={() => setSent(false)}
                      className="mt-3 inline-flex h-9 items-center rounded-md border border-border bg-card px-4 text-sm font-medium hover:bg-accent"
                    >
                      Send another message
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p id="name-error" className="text-xs text-destructive" role="alert">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    placeholder="you@example.com"
                  />
                  {errors.email && (
                    <p id="email-error" className="text-xs text-destructive" role="alert">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : "message-help"}
                    placeholder="Tell us what is on your mind."
                    rows={6}
                  />
                  {errors.message ? (
                    <p id="message-error" className="text-xs text-destructive" role="alert">
                      {errors.message}
                    </p>
                  ) : (
                    <p id="message-help" className="text-xs text-muted-foreground">
                      Please keep your message clear and short. Max 4000 characters.
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={submitting}
                  className="gap-2 w-full sm:w-auto"
                >
                  {submitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Send message
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>

        <div className="space-y-4">
          <ContentBlock title="Direct email">
            <p className="flex items-start gap-2">
              <Mail className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <a
                href="mailto:techsuli415502@gmail.com"
                className="font-medium text-primary hover:underline break-all"
              >
                techsuli415502@gmail.com
              </a>
            </p>
            <p className="mt-2">
              You can also email us directly. We read every message and reply
              as soon as we can, usually within a few days.
            </p>
          </ContentBlock>

          <ContentBlock title="What to include">
            <ul className="list-disc pl-5 space-y-1">
              <li>Your name and a working email</li>
              <li>A short note about your question or feedback</li>
              <li>The device and browser you used, if you saw a bug</li>
              <li>Any steps that help us see the issue</li>
            </ul>
            <p className="mt-2">
              We never ask for your camel score, your form answers, or any
              payment details. Please do not send that kind of data.
            </p>
          </ContentBlock>
        </div>
      </div>
    </PageShell>
  );
}
