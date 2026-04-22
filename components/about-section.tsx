"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { MapPin, Mail, GraduationCap, Briefcase, Languages } from "lucide-react"
import { useLang } from "@/contexts/language-context"

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
}

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const translations = {
  fr: {
    title: "A propos",
    bio1: <>Actuellement etudiant en 1ere annee de <span className="text-primary">BTS SIO option SISR</span>, apprenti chez <span className="text-primary">Tunzini</span> depuis janvier 2026. Passionne par l&apos;administration systemes et reseaux, je realise des missions operationnelles de support et d&apos;infrastructure.</>,
    bio2: "Rigoureux, autonome et oriente service utilisateur, je cherche a consolider mes competences techniques pour evoluer vers des postes d'administrateur systemes et reseaux.",
    location: "Localisation",
    email: "Email",
    emailValue: "Contact disponible",
    languagesTitle: "Langues",
    languages: [
      { lang: "Francais", level: "C2", percent: 100 },
      { lang: "Arabe", level: "C2", percent: 100 },
      { lang: "Espagnol", level: "C1", percent: 85 },
      { lang: "Anglais", level: "B2", percent: 70 }
    ],
    educationTitle: "Formation",
    education: [
      { year: "2025-2027", title: "BTS SIO SISR", school: "ESUP La Defense" },
      { year: "2024-2025", title: "Licence STAPS", school: "Paris Nanterre" },
      { year: "2023-2024", title: "Baccalaureat General", school: "Lycee Joliot Curie" }
    ],
    currentLabel: "POSTE ACTUEL",
    currentTitle: "Apprenti Technicien Systemes et Reseaux",
    currentCompany: "Tunzini",
    currentSince: "Depuis janvier 2026"
  },
  en: {
    title: "About",
    bio1: <>Currently a 1st year student in <span className="text-primary">BTS SIO SISR</span>, apprentice at <span className="text-primary">Tunzini</span> since January 2026. Passionate about systems and network administration, I carry out operational support and infrastructure missions.</>,
    bio2: "Rigorous, autonomous and user-oriented, I am looking to consolidate my technical skills to move towards systems and network administrator positions.",
    location: "Location",
    email: "Email",
    emailValue: "Contact available",
    languagesTitle: "Languages",
    languages: [
      { lang: "French", level: "C2", percent: 100 },
      { lang: "Arabic", level: "C2", percent: 100 },
      { lang: "Spanish", level: "C1", percent: 85 },
      { lang: "English", level: "B2", percent: 70 }
    ],
    educationTitle: "Education",
    education: [
      { year: "2025-2027", title: "BTS SIO SISR", school: "ESUP La Defense" },
      { year: "2024-2025", title: "Bachelor STAPS", school: "Paris Nanterre" },
      { year: "2023-2024", title: "French Baccalaureate", school: "Lycee Joliot Curie" }
    ],
    currentLabel: "CURRENT POSITION",
    currentTitle: "Apprentice Systems & Networks Technician",
    currentCompany: "Tunzini",
    currentSince: "Since January 2026"
  }
}

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { lang } = useLang()
  const t = translations[lang]

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--glow-cyan),transparent_50%)]" />

      <div ref={ref} className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={stagger}
        >
          {/* Section header */}
          <motion.div variants={fadeInUp} className="mb-16">
            <div className="flex items-center gap-4 mb-4">
              <h2 className="text-3xl md:text-4xl font-bold">{t.title}</h2>
              <div className="flex-1 h-[1px] bg-border max-w-xs" />
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left column - Bio */}
            <motion.div variants={fadeInUp} className="space-y-6">
              <div className="relative p-6 border border-border rounded-2xl bg-card/50 backdrop-blur-sm">
                {/* Corner decorations */}
                <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-primary -translate-x-[1px] -translate-y-[1px]" />
                <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-primary translate-x-[1px] -translate-y-[1px]" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-primary -translate-x-[1px] translate-y-[1px]" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-primary translate-x-[1px] translate-y-[1px]" />

                <p className="text-muted-foreground leading-relaxed">{t.bio1}</p>
                <p className="text-muted-foreground leading-relaxed mt-4">{t.bio2}</p>
              </div>

              {/* Info cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 border border-border/50 rounded-xl bg-card/30 backdrop-blur-sm group hover:border-primary/50 transition-colors">
                  <MapPin className="w-5 h-5 text-primary mb-2" />
                  <p className="text-sm text-muted-foreground">{t.location}</p>
                  <p className="font-medium">Nanterre 92000</p>
                </div>
                <div className="p-4 border border-border/50 rounded-xl bg-card/30 backdrop-blur-sm group hover:border-primary/50 transition-colors">
                  <Mail className="w-5 h-5 text-primary mb-2" />
                  <p className="text-sm text-muted-foreground">{t.email}</p>
                  <p className="font-medium text-sm">{t.emailValue}</p>
                </div>
              </div>
            </motion.div>

            {/* Right column */}
            <motion.div variants={fadeInUp} className="space-y-6">
              {/* Languages */}
              <div className="p-6 border border-border rounded-2xl bg-card/50 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-4">
                  <Languages className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold">{t.languagesTitle}</h3>
                </div>
                <div className="space-y-3">
                  {t.languages.map((item) => (
                    <div key={item.lang} className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>{item.lang}</span>
                        <span className="text-primary font-mono">{item.level}</span>
                      </div>
                      <div className="h-1 bg-secondary rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-primary to-primary/60"
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${item.percent}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: 0.5 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div className="p-6 border border-border rounded-2xl bg-card/50 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold">{t.educationTitle}</h3>
                </div>
                <div className="space-y-4">
                  {t.education.map((edu, i) => (
                    <div key={i} className="flex gap-4">
                      <span className="font-mono text-xs text-primary whitespace-nowrap">{edu.year}</span>
                      <div>
                        <p className="font-medium text-sm">{edu.title}</p>
                        <p className="text-xs text-muted-foreground">{edu.school}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Current position */}
              <div className="p-6 border border-primary/30 rounded-2xl bg-primary/5 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-2">
                  <Briefcase className="w-5 h-5 text-primary" />
                  <span className="text-xs font-mono text-primary">{t.currentLabel}</span>
                </div>
                <h3 className="font-semibold text-lg">{t.currentTitle}</h3>
                <p className="text-primary font-medium">{t.currentCompany}</p>
                <p className="text-sm text-muted-foreground mt-1">{t.currentSince}</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}