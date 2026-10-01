"use client";

import * as React from "react";
import {
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  RefreshCw,
  Share2,
  Copy,
  Check,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import {
  FormState,
  initialForm,
  FIELDS,
  getVisibleFields,
  calculateResult,
  getAnswerSummary,
  buildShareText,
  type FieldDef,
} from "@/lib/calculatorScoring";
import { CamelSvg } from "./CamelSvg";
import { cn } from "@/lib/utils";
import { toast } from "@/hooks/use-toast";

export function CamelCalculator() {
  const [form, setForm] = React.useState<FormState>(initialForm);
  const [step, setStep] = React.useState(0);
  const [result, setResult] = React.useState<ReturnType<typeof calculateResult> | null>(null);
  const [error, setError] = React.useState<string | null>(null);
  const [copied, setCopied] = React.useState(false);

  const visibleFields = React.useMemo(() => getVisibleFields(form), [form]);
  const totalSteps = visibleFields.length;
  const safeStep = Math.min(step, totalSteps - 1);
  const currentField = visibleFields[safeStep];
  const progress = ((safeStep + 1) / totalSteps) * 100;

  const updateField = (key: keyof FormState, value: string) => {
    setForm((f) => {
      // When gender changes, drop the beard answer if it is no longer relevant.
      if (key === "gender" && value !== "male") {
        return { ...f, gender: value as FormState["gender"], beard: "" };
      }
      return { ...f, [key]: value };
    });
    setError(null);
  };

  const nextStep = () => {
    if (!currentField) return;
    const value = form[currentField.id];
    if (!value) {
      setError("Please pick an option to continue.");
      return;
    }
    setError(null);
    if (safeStep < totalSteps - 1) {
      setStep((s) => s + 1);
    } else {
      // last step -> compute
      const finalForm = form;
      const r = calculateResult(finalForm);
      setResult(r);
      // smooth scroll up to result
      setTimeout(() => {
        const el = document.getElementById("result-card");
        if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 80);
    }
  };

  const prevStep = () => {
    setError(null);
    if (safeStep > 0) setStep((s) => s - 1);
  };

  const reset = () => {
    setForm(initialForm);
    setStep(0);
    setResult(null);
    setError(null);
    setCopied(false);
    setTimeout(() => {
      const el = document.getElementById("calculator");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  };

  const recalculate = () => {
    setResult(null);
    setStep(0);
    setTimeout(() => {
      const el = document.getElementById("calculator");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  };

  const share = async () => {
    if (!result) return;
    const text = buildShareText(result.camelCount, result.tier);
    const url = typeof window !== "undefined" ? window.location.href : "";
    if (navigator.share) {
      try {
        await navigator.share({ title: "Camel Calculator", text, url });
      } catch {
        // user dismissed, no problem
      }
    } else {
      try {
        await navigator.clipboard.writeText(`${text} ${url}`);
        toast({ title: "Copied", description: "Result copied to clipboard. Share it anywhere you like." });
      } catch {
        toast({ title: "Sharing not supported", description: "Try the copy button instead." });
      }
    }
  };

  const copy = async () => {
    if (!result) return;
    const text = buildShareText(result.camelCount, result.tier);
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      toast({ title: "Copied", description: "Result copied to clipboard." });
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast({ title: "Copy failed", description: "Please copy the text by hand." });
    }
  };

  // Result view
  if (result) {
    const summary = getAnswerSummary(form);
    return (
      <div
        id="result-card"
        className="view-fade-in rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8"
      >
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
            Your camel score
          </p>
          <div className="mt-3 flex items-center justify-center gap-3">
            <span className="result-pop font-display text-6xl font-bold text-primary sm:text-7xl">
              {result.camelCount}
            </span>
            <span className="font-display text-3xl font-semibold text-foreground sm:text-4xl">
              camels
            </span>
          </div>
          <p className="mt-4 text-lg font-medium text-foreground">
            {result.tier.title}
          </p>
          <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
            {result.tier.description}
          </p>

          <div className="mt-6 flex justify-center">
            <CamelSvg className="w-40 h-32" />
          </div>
        </div>

        {/* Answers review */}
        <div className="mt-8 border-t border-border pt-6">
          <h3 className="text-sm font-semibold text-foreground mb-3">Your answers</h3>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {summary.map((row) => (
              <div
                key={row.field}
                className="flex items-start justify-between rounded-lg bg-secondary/60 px-3 py-2 text-sm"
              >
                <span className="text-muted-foreground">{row.field}</span>
                <span className="font-medium text-foreground text-right">{row.answer}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action buttons */}
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Button onClick={recalculate} variant="default" className="gap-2">
            <RefreshCw className="h-4 w-4" />
            Recalculate
          </Button>
          <Button onClick={reset} variant="secondary" className="gap-2">
            <RotateCcw className="h-4 w-4" />
            Start Again
          </Button>
          <Button onClick={share} variant="secondary" className="gap-2">
            <Share2 className="h-4 w-4" />
            Share
          </Button>
          <Button onClick={copy} variant="secondary" className="gap-2">
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            {copied ? "Copied" : "Copy"}
          </Button>
        </div>

        <p className="mt-6 text-xs text-muted-foreground text-center max-w-md mx-auto">
          This calculator is made for fun and entertainment. It is not a real
          measure of human value.
        </p>
      </div>
    );
  }

  // Form view
  return (
    <div
      id="calculator"
      className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8 scroll-mt-20"
    >
      {/* Progress */}
      <div className="mb-6">
        <div className="mb-2 flex items-center justify-between text-xs text-muted-foreground">
          <span>
            Step {safeStep + 1} of {totalSteps}
          </span>
          <span>{Math.round(progress)}% done</span>
        </div>
        <Progress value={progress} className="h-2" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100} />
      </div>

      {currentField && (
        <fieldset className="space-y-4">
          <legend className="font-display text-2xl font-semibold text-foreground">
            {currentField.label}
          </legend>
          {currentField.hint && (
            <p className="text-sm text-muted-foreground">{currentField.hint}</p>
          )}

          {currentField.control === "select" ? (
            <SelectField
              field={currentField}
              value={form[currentField.id]}
              onChange={(v) => updateField(currentField.id, v)}
            />
          ) : (
            <RadioCardField
              field={currentField}
              value={form[currentField.id]}
              onChange={(v) => updateField(currentField.id, v)}
            />
          )}

          {error && (
            <div
              role="alert"
              className="flex items-center gap-2 rounded-lg bg-destructive/10 px-3 py-2 text-sm text-destructive"
            >
              <AlertCircle className="h-4 w-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}
        </fieldset>
      )}

      <div className="mt-6 flex items-center justify-between gap-2">
        <Button
          type="button"
          variant="ghost"
          onClick={prevStep}
          disabled={safeStep === 0}
          className="gap-1.5"
          aria-label="Previous step"
        >
          <ChevronLeft className="h-4 w-4" />
          Back
        </Button>
        <Button
          type="button"
          onClick={nextStep}
          className="gap-1.5"
          aria-label={safeStep === totalSteps - 1 ? "See my result" : "Next step"}
        >
          {safeStep === totalSteps - 1 ? "See my result" : "Next"}
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Quick reset link */}
      <div className="mt-4 text-center">
        <button
          onClick={reset}
          className="text-xs text-muted-foreground hover:text-primary hover:underline"
        >
          Start over
        </button>
      </div>
    </div>
  );
}

/* ---------- Field renderers ---------- */

function RadioCardField({
  field,
  value,
  onChange,
}: {
  field: FieldDef;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <RadioGroup
      value={value}
      onValueChange={onChange}
      className="grid gap-2 sm:grid-cols-2"
      aria-label={field.label}
    >
      {field.options.map((opt) => {
        const id = `${field.id}-${opt.id}`;
        const checked = value === opt.id;
        return (
          <Label
            key={opt.id}
            htmlFor={id}
            className={cn(
              "flex cursor-pointer items-center gap-3 rounded-xl border p-3.5 text-sm transition-colors",
              checked
                ? "border-primary bg-secondary/60 ring-1 ring-primary/30"
                : "border-border bg-card hover:bg-accent/60"
            )}
          >
            <RadioGroupItem value={opt.id} id={id} className="sr-only" />
            <span
              className={cn(
                "flex h-5 w-5 items-center justify-center rounded-full border-2 transition-colors",
                checked ? "border-primary bg-primary" : "border-border"
              )}
              aria-hidden
            >
              {checked && <span className="h-2 w-2 rounded-full bg-primary-foreground" />}
            </span>
            <span className="font-medium text-foreground">{opt.label}</span>
          </Label>
        );
      })}
    </RadioGroup>
  );
}

function SelectField({
  field,
  value,
  onChange,
}: {
  field: FieldDef;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-full" aria-label={field.label}>
        <SelectValue placeholder={`Pick your ${field.label.toLowerCase()}`} />
      </SelectTrigger>
      <SelectContent>
        {field.options.map((opt) => (
          <SelectItem key={opt.id} value={opt.id}>
            {opt.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
