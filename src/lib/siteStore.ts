import { create } from "zustand";

export type ViewId =
  | "home"
  | "about"
  | "how-it-works"
  | "faq"
  | "contact"
  | "privacy"
  | "terms";

interface SiteState {
  view: ViewId;
  /** Scroll target after a view change (e.g. "calculator" to scroll to the calculator). */
  scrollTarget: string | null;
  setView: (view: ViewId, scrollTarget?: string | null) => void;
}

export const useSiteStore = create<SiteState>((set) => ({
  view: "home",
  scrollTarget: null,
  setView: (view, scrollTarget = null) => set({ view, scrollTarget }),
}));
