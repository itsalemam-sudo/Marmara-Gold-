import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { en } from "./en";
import { ar } from "./ar";

export type Lang = "en" | "ar";

const dicts = { en, ar } as const;
export type Dict = typeof en;

type Ctx = {
  lang: Lang;
  t: Dict;
  setLang: (l: Lang) => void;
};

const I18nContext = createContext<Ctx | null>(null);

const STORAGE_KEY = "mg:lang:v1";

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Lang | null;
      if (saved === "en" || saved === "ar") return saved;
    } catch { /* ignore */ }
    return "en";
  });

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir  = lang === "ar" ? "rtl" : "ltr";
    try { localStorage.setItem(STORAGE_KEY, lang); } catch { /* ignore */ }
  }, [lang]);

  const value: Ctx = {
    lang,
    t: dicts[lang],
    setLang: (l) => setLangState(l),
  };

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): Ctx {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be inside <I18nProvider>");
  return ctx;
}
