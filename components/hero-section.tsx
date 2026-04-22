"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { useLang } from "@/contexts/language-context"

const translations = {
  fr: {
    subtitle: "Technicien Systèmes & Réseaux",
    apprentice: "BTS SIO SISR | Apprenti @ Tunzini",
    tags: ["Active Directory", "Windows Server", "VMware", "Réseaux", "Sécurité"],
    cta1: "Voir mes projets",
    cta2: "Me contacter",
    scroll: "scroll"
  },
  en: {
    subtitle: "Systems & Networks Technician",
    apprentice: "BTS SIO SISR | Apprentice @ Tunzini",
    tags: ["Active Directory", "Windows Server", "VMware", "Networking", "Security"],
    cta1: "View my projects",
    cta2: "Contact me",
    scroll: "scroll"
  }
}

export function HeroSection() {
  const { lang } = useLang()
  const t = translations[lang]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--grid-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-color)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
        
        <motion.div 
          className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent"
          initial={{ top: "0%" }}
          animate={{ top: "100%" }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4"
        >
          <span className="text-foreground">Mohamed</span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-primary animate-pulse-glow">
            Hemamda
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8"
        >
          <p className="text-xl md:text-2xl text-muted-foreground font-light">
            {t.subtitle}
          </p>

          {/* 🔥 LIGNE QUI NE SE TRADUISAIT PAS — FIXÉE */}
          <p className="text-lg text-primary/70 font-mono mt-2">
            {t.apprentice}
          </p>
        </motion.div>

        {/* Tech stack badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {t.tags.map((tech, i) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.7 + i * 0.1 }}
              className="px-4 py-2 text-sm font-mono border border-primary/20 rounded-lg bg-card/30 backdrop-blur-sm text-foreground/80 hover:border-primary/50 hover:text-primary transition-all duration-300"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#projects"
            className="group relative px-8 py-4 font-medium overflow-hidden rounded-lg bg-primary text-primary-foreground transition-all duration-300 hover:shadow-[0_0_30px_var(--glow-cyan)]"
          >
            <span className="relative z-10">{t.cta1}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/20 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
          </a>

          <a
            href="#contact"
            className="px-8 py-4 font-medium border border-primary/30 rounded-lg text-foreground hover:border-primary hover:bg-primary/10 transition-all duration-300"
          >
            {t.cta2}
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs font-mono">{t.scroll}</span>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  )
}
