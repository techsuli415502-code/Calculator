import { create } from "zustand";

export type ViewId =
  | "home"
  | "about"
  | "how-it-works"
  | "faq"
  | "contact"
  | "privacy"
  | "terms";

const VALID_VIEWS: ViewId[] = [
  "home",
  "about",
  "how-it-works",
  "faq",
  "contact",
  "privacy",
  "terms",
];

/**
 * Parse a URL hash into a ViewId. Returns "home" if the hash is empty or
 * does not match a known view.
 */
export function viewFromHash(hash: string): ViewId {
  const clean = hash.replace(/^#/, "");
  if (VALID_VIEWS.includes(clean as ViewId)) {
    return clean as ViewId;
  }
  return "home";
}

interface SiteState {
  view: ViewId;
  /** Scroll target after a view change (e.g. "calculator" to scroll to the calculator). */
  scrollTarget: string | null;
  setView: (view: ViewId, scrollTarget?: string | null) => void;
  /** Sync the store with a hash from the URL (used on initial mount). */
  syncFromHash: (hash: string) => void;
}

export const useSiteStore = create<SiteState>((set) => ({
  // Always start with "home" so the server-rendered HTML matches the first
  // client render (no hydration mismatch). The client reads the URL hash
  // after mount via syncFromHash.
  view: "home",
  scrollTarget: null,
  setView: (view, scrollTarget = null) => set({ view, scrollTarget }),
  syncFromHash: (hash) => {
    const next = viewFromHash(hash);
    set({ view: next });
  },
}));
