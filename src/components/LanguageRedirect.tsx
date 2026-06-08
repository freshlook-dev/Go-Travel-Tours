"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import type { Language } from "@/components/LanguageProvider";

export function LanguageRedirect({ language }: { language: Language }) {
  const router = useRouter();

  useEffect(() => {
    window.localStorage.setItem("go-travel-language", language);
    document.documentElement.lang = language;
    router.replace("/");
  }, [language, router]);

  return (
    <section className="flex min-h-[55vh] items-center justify-center bg-white px-4 text-center">
      <p className="text-sm font-black uppercase tracking-[0.18em] text-gold">
        {language === "sq" ? "Duke hapur faqen..." : "Opening website..."}
      </p>
    </section>
  );
}
