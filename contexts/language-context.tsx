"use client"

import { createContext, useContext, useState } from "react"

type Language = "fr" | "en"

const LanguageContext = createContext<{
  lang: Language
  setLang: (l: Language) => void
}>({ lang: "fr", setLang: () => {} })

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>("fr")
  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLang = () => useContext(LanguageContext)