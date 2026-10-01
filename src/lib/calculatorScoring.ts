/**
 * Camel Calculator scoring engine.
 *
 * Each form field has a set of options with a fixed point value.
 * The total points are summed and then mapped to a final camel count.
 *
 * The system is fully transparent and intentionally playful.
 * It is not a scientific or real measure of any person.
 */

export type Gender = "female" | "male" | "other";

export interface FormState {
  gender: Gender | "";
  age: string;
  height: string; // stored as the option id, see HEIGHTS
  hairColor: string;
  eyeColor: string;
  hairStyle: string;
  beard: string; // only used when gender is male
  glasses: string;
  bodyType: string;
  skinTone: string;
  tattoos: string;
  piercings: string;
}

export const initialForm: FormState = {
  gender: "",
  age: "",
  height: "",
  hairColor: "",
  eyeColor: "",
  hairStyle: "",
  beard: "",
  glasses: "",
  bodyType: "",
  skinTone: "",
  tattoos: "",
  piercings: "",
};

export interface Option {
  id: string;
  label: string;
  /** Internal scoring value. */
  value: number;
}

export interface FieldDef {
  id: keyof FormState;
  label: string;
  hint?: string;
  options: Option[];
  /** Hide this field unless gender matches. */
  onlyWhenGender?: Gender;
  /** Render hint: "radio" (default) | "select". */
  control?: "radio" | "select";
}

// Each field has options with friendly, playful but balanced values.
// No option is "bad". Every choice gives a fair, friendly score.

export const AGE_OPTIONS: Option[] = [
  { id: "under18", label: "Under 18", value: 4 },
  { id: "18-24", label: "18 to 24", value: 7 },
  { id: "25-34", label: "25 to 34", value: 8 },
  { id: "35-44", label: "35 to 44", value: 7 },
  { id: "45-54", label: "45 to 54", value: 6 },
  { id: "55plus", label: "55 or older", value: 5 },
];

export const HEIGHT_OPTIONS: Option[] = [
  { id: "short", label: "Under 5 ft", value: 5 },
  { id: "average-short", label: "5 ft to 5 ft 4 in", value: 6 },
  { id: "average", label: "5 ft 5 in to 5 ft 8 in", value: 7 },
  { id: "tall", label: "5 ft 9 in to 6 ft", value: 8 },
  { id: "very-tall", label: "Over 6 ft", value: 7 },
];

export const HAIR_COLOR_OPTIONS: Option[] = [
  { id: "black", label: "Black", value: 6 },
  { id: "brown", label: "Brown", value: 7 },
  { id: "blonde", label: "Blonde", value: 8 },
  { id: "red", label: "Red", value: 8 },
  { id: "gray", label: "Gray", value: 6 },
  { id: "white", label: "White", value: 5 },
  { id: "other", label: "Other", value: 6 },
];

export const EYE_COLOR_OPTIONS: Option[] = [
  { id: "brown", label: "Brown", value: 6 },
  { id: "blue", label: "Blue", value: 7 },
  { id: "green", label: "Green", value: 8 },
  { id: "hazel", label: "Hazel", value: 7 },
  { id: "gray", label: "Gray", value: 7 },
  { id: "amber", label: "Amber", value: 7 },
  { id: "other", label: "Other", value: 6 },
];

export const HAIR_STYLE_OPTIONS: Option[] = [
  { id: "long-straight", label: "Long and straight", value: 7 },
  { id: "long-wavy", label: "Long and wavy", value: 8 },
  { id: "short", label: "Short", value: 6 },
  { id: "curly", label: "Curly", value: 7 },
  { id: "braided", label: "Braided", value: 7 },
  { id: "bald", label: "Bald or shaved", value: 6 },
  { id: "other", label: "Other", value: 6 },
];

export const BEARD_OPTIONS: Option[] = [
  { id: "full", label: "Full beard", value: 7 },
  { id: "stubble", label: "Stubble", value: 8 },
  { id: "goatee", label: "Goatee", value: 6 },
  { id: "mustache", label: "Mustache", value: 6 },
  { id: "clean", label: "Clean shaven", value: 6 },
];

export const GLASSES_OPTIONS: Option[] = [
  { id: "yes", label: "Yes, I wear glasses", value: 6 },
  { id: "sometimes", label: "Only for reading", value: 6 },
  { id: "no", label: "No glasses", value: 6 },
];

export const BODY_TYPE_OPTIONS: Option[] = [
  { id: "slim", label: "Slim", value: 7 },
  { id: "athletic", label: "Athletic", value: 8 },
  { id: "average", label: "Average", value: 7 },
  { id: "curvy", label: "Curvy", value: 8 },
  { id: "muscular", label: "Muscular", value: 8 },
  { id: "plus", label: "Plus size", value: 7 },
];

export const SKIN_TONE_OPTIONS: Option[] = [
  { id: "fair", label: "Fair", value: 7 },
  { id: "light", label: "Light", value: 7 },
  { id: "medium", label: "Medium", value: 7 },
  { id: "tan", label: "Tan", value: 7 },
  { id: "brown", label: "Brown", value: 7 },
  { id: "deep", label: "Deep", value: 7 },
];

export const TATTOO_OPTIONS: Option[] = [
  { id: "none", label: "No tattoos", value: 6 },
  { id: "one", label: "One or two", value: 7 },
  { id: "several", label: "Several", value: 7 },
  { id: "many", label: "Many", value: 6 },
];

export const PIERCING_OPTIONS: Option[] = [
  { id: "none", label: "No piercings", value: 6 },
  { id: "ears", label: "Ears only", value: 7 },
  { id: "several", label: "Several piercings", value: 7 },
  { id: "many", label: "Many piercings", value: 6 },
];

export const FIELDS: FieldDef[] = [
  {
    id: "gender",
    label: "Gender",
    hint: "Pick the option that fits you best. This only changes which questions come next.",
    control: "radio",
    options: [
      { id: "female", label: "Female", value: 0 },
      { id: "male", label: "Male", value: 0 },
      { id: "other", label: "Other", value: 0 },
    ],
  },
  {
    id: "age",
    label: "Age",
    hint: "We use your age range only. We never store your real birthday.",
    control: "select",
    options: AGE_OPTIONS,
  },
  {
    id: "height",
    label: "Height",
    control: "select",
    options: HEIGHT_OPTIONS,
  },
  {
    id: "hairColor",
    label: "Hair color",
    control: "radio",
    options: HAIR_COLOR_OPTIONS,
  },
  {
    id: "eyeColor",
    label: "Eye color",
    control: "radio",
    options: EYE_COLOR_OPTIONS,
  },
  {
    id: "hairStyle",
    label: "Hair style",
    control: "select",
    options: HAIR_STYLE_OPTIONS,
  },
  {
    id: "beard",
    label: "Beard",
    hint: "Shown only when you pick Male as your gender.",
    control: "radio",
    onlyWhenGender: "male",
    options: BEARD_OPTIONS,
  },
  {
    id: "glasses",
    label: "Glasses",
    control: "radio",
    options: GLASSES_OPTIONS,
  },
  {
    id: "bodyType",
    label: "Body type",
    control: "radio",
    options: BODY_TYPE_OPTIONS,
  },
  {
    id: "skinTone",
    label: "Skin tone",
    hint: "Every skin tone scores the same. This is here only for fun and to make the form feel complete.",
    control: "radio",
    options: SKIN_TONE_OPTIONS,
  },
  {
    id: "tattoos",
    label: "Tattoos",
    control: "radio",
    options: TATTOO_OPTIONS,
  },
  {
    id: "piercings",
    label: "Piercings",
    control: "radio",
    options: PIERCING_OPTIONS,
  },
];

export interface ResultTier {
  min: number;
  max: number;
  camels: string; // friendly message about the count
  title: string;
  description: string;
}

export const RESULT_TIERS: ResultTier[] = [
  {
    min: 0,
    max: 10,
    camels: "Few camels",
    title: "A small but proud herd",
    description:
      "Your camel score is on the lower side. That is totally fine. The calculator is just for fun and your real worth is not a number.",
  },
  {
    min: 11,
    max: 25,
    camels: "A handful of camels",
    title: "A friendly little caravan",
    description:
      "You land in the lower mid range. A nice small group of camels would happily walk with you across the dunes.",
  },
  {
    min: 26,
    max: 50,
    camels: "A solid herd",
    title: "Right in the middle of the desert",
    description:
      "Your score sits in the middle of the pack. Most people end up around here, so you are in good company.",
  },
  {
    min: 51,
    max: 75,
    camels: "A big herd",
    title: "A camel trader in the making",
    description:
      "Your camel score is high. The caravan is growing and the camels seem to like what they see.",
  },
  {
    min: 76,
    max: 999,
    camels: "A vast herd",
    title: "Legend of the dunes",
    description:
      "Your score is in the top range. A whole desert of camels would line up to walk with you.",
  },
];

export function getOptionValue(field: keyof FormState, optionId: string): number {
  const fieldDef = FIELDS.find((f) => f.id === field);
  if (!fieldDef) return 0;
  const opt = fieldDef.options.find((o) => o.id === optionId);
  return opt ? opt.value : 0;
}

export function isFieldVisible(field: FieldDef, form: FormState): boolean {
  if (!field.onlyWhenGender) return true;
  return form.gender === field.onlyWhenGender;
}

export function getVisibleFields(form: FormState): FieldDef[] {
  return FIELDS.filter((f) => isFieldVisible(f, form));
}

export interface CalcResult {
  rawScore: number;
  camelCount: number;
  tier: ResultTier;
}

/**
 * Maps a raw score (sum of option values) to a final camel count.
 *
 * The raw score max is around 80. We scale it down so results land in a fun,
 * believable range (roughly 5 to 95 camels), and we round to a clean number.
 *
 * Formula: camelCount = round( (rawScore / maxScore) * 90 ) + 5
 * Then clamp between 1 and 99.
 */
export function calculateResult(form: FormState): CalcResult {
  let raw = 0;
  for (const field of FIELDS) {
    if (!isFieldVisible(field, form)) continue;
    const optionId = form[field.id];
    if (!optionId) continue;
    raw += getOptionValue(field.id, optionId);
  }

  // Approximate max for this form (sum of max option values of visible fields).
  let maxPossible = 0;
  for (const field of FIELDS) {
    if (!isFieldVisible(field, form)) continue;
    const maxVal = Math.max(...field.options.map((o) => o.value));
    maxPossible += maxVal;
  }
  if (maxPossible === 0) maxPossible = 1;

  const ratio = raw / maxPossible;
  const camelCount = Math.max(1, Math.min(99, Math.round(ratio * 90) + 5));

  const tier =
    RESULT_TIERS.find((t) => camelCount >= t.min && camelCount <= t.max) ??
    RESULT_TIERS[RESULT_TIERS.length - 1];

  return { rawScore: raw, camelCount, tier };
}

/**
 * Returns a list of (field label, chosen option label) pairs.
 * Useful for the "your answers" review on the result page.
 */
export function getAnswerSummary(form: FormState): { field: string; answer: string }[] {
  const out: { field: string; answer: string }[] = [];
  for (const field of FIELDS) {
    if (!isFieldVisible(field, form)) continue;
    const opt = field.options.find((o) => o.id === form[field.id]);
    if (!opt) continue;
    out.push({ field: field.label, answer: opt.label });
  }
  return out;
}

/**
 * Builds a plain text summary string for the share and copy buttons.
 */
export function buildShareText(camelCount: number, tier: ResultTier): string {
  return `My Camel Calculator result: ${camelCount} camels. ${tier.title}. Try the Camel Calculator yourself.`;
}
