"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { MapPin, Mail, GraduationCap, Briefcase, Languages } from "lucide-react"

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

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

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
              <h2 className="text-3xl md:text-4xl font-bold">A propos</h2>
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

                <p className="text-muted-foreground leading-relaxed">
                  Actuellement etudiant en 1ere annee de <span className="text-primary">BTS SIO option SISR</span>, 
                  apprenti chez <span className="text-primary">Tunzini</span> depuis janvier 2026. 
                  Passionne par l&apos;administration systemes et reseaux, je realise des missions 
                  operationnelles de support et d&apos;infrastructure.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Rigoureux, autonome et oriente service utilisateur, je cherche a consolider 
                  mes competences techniques pour evoluer vers des postes d&apos;administrateur 
                  systemes et reseaux.
                </p>
              </div>

              {/* Info cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 border border-border/50 rounded-xl bg-card/30 backdrop-blur-sm group hover:border-primary/50 transition-colors">
                  <MapPin className="w-5 h-5 text-primary mb-2" />
                  <p className="text-sm text-muted-foreground">Localisation</p>
                  <p className="font-medium">Nanterre 92000</p>
                </div>
                <div className="p-4 border border-border/50 rounded-xl bg-card/30 backdrop-blur-sm group hover:border-primary/50 transition-colors">
                  <Mail className="w-5 h-5 text-primary mb-2" />
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium text-sm">Contact disponible</p>
                </div>
              </div>
            </motion.div>

            {/* Right column - Skills & Info */}
            <motion.div variants={fadeInUp} className="space-y-6">
              {/* Languages */}
              <div className="p-6 border border-border rounded-2xl bg-card/50 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-4">
                  <Languages className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold">Langues</h3>
                </div>
                <div className="space-y-3">
                  {[
                    { lang: "Francais", level: "C2", percent: 100 },
                    { lang: "Espagnol", level: "C1", percent: 85 },
                    { lang: "Anglais", level: "B2", percent: 70 }
                  ].map((item) => (
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
                  <h3 className="font-semibold">Formation</h3>
                </div>
                <div className="space-y-4">
                  {[
                    { year: "2025-2027", title: "BTS SIO SISR", school: "Lycee Montalembert" },
                    { year: "2024-2025", title: "Licence STAPS", school: "Paris Nanterre" },
                    { year: "2023-2024", title: "Baccalaureat General", school: "Lycee Joliot Curie" }
                  ].map((edu, i) => (
                    <div key={i} className="flex gap-4 group">
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
                  <span className="text-xs font-mono text-primary">POSTE ACTUEL</span>
                </div>
                <h3 className="font-semibold text-lg">Apprenti Technicien Systemes et Reseaux</h3>
                <p className="text-primary font-medium">Tunzini</p>
                <p className="text-sm text-muted-foreground mt-1">Depuis janvier 2026</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
