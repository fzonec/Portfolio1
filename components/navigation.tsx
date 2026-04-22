"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useState, useEffect } from "react"
import { Menu, X, Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"
import { useLang } from "@/contexts/language-context"

const navItems = {
  fr: [
    { label: "A propos", href: "#about" },
    { label: "Competences", href: "#skills" },
    { label: "Certifications", href: "#certifications" },
    { label: "Projets", href: "#projects" },
    { label: "Contact", href: "#contact" }
  ],
  en: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Certifications", href: "#certifications" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" }
  ]
}

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme, setTheme } = useTheme()
  const { lang, setLang } = useLang()
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 100], [0, 1])

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50)
    })
    return unsubscribe
  }, [scrollY])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "py-4" : "py-6"
        }`}
      >
        <motion.div 
          style={{ opacity }}
          className="absolute inset-0 bg-background/80 backdrop-blur-lg border-b border-border"
        />
        
        <nav className="relative container mx-auto px-4 max-w-6xl">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="relative group">
              <span className="font-bold text-xl tracking-tight">
                <span className="text-primary">M</span>
                <span className="text-foreground">H</span>
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-300" />
            </a>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-1">
              {navItems[lang].map((item, i) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="group relative px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <span className="font-mono text-primary text-xs mr-1">0{i + 1}.</span>
                  {item.label}
                  <span className="absolute bottom-0 left-4 right-4 h-[1px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </a>
              ))}
            </div>

            <div className="flex items-center gap-2">
              {/* Language toggle */}
              <button
                onClick={() => setLang(lang === "fr" ? "en" : "fr")}
                className="p-2 text-foreground hover:text-primary transition-colors font-mono text-sm font-bold"
              >
                {lang === "fr" ? "EN" : "FR"}
              </button>

              {/* Theme toggle */}
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 text-foreground hover:text-primary transition-colors"
              >
                {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <motion.div
        initial={{ opacity: 0, x: "100%" }}
        animate={{ 
          opacity: isOpen ? 1 : 0,
          x: isOpen ? 0 : "100%"
        }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-40 md:hidden"
      >
        <div className="absolute inset-0 bg-background/95 backdrop-blur-lg" />
        <nav className="relative flex flex-col items-center justify-center h-full gap-8">
          {navItems[lang].map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-medium text-foreground hover:text-primary transition-colors"
            >
              <span className="font-mono text-primary text-sm mr-2">0{i + 1}.</span>
              {item.label}
            </a>
          ))}
        </nav>
      </motion.div>
    </>
  )
}