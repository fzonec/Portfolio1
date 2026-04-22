"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Send, MapPin, ArrowUpRight } from "lucide-react"

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,var(--glow-cyan),transparent_50%)]" />

      <div ref={ref} className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Section header */}
          <div className="mb-8">
            <span className="font-mono text-primary text-sm">04. Contact</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">
              Travaillons ensemble
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              Actuellement en recherche d&apos;opportunites pour developper mes competences 
              en administration systemes et reseaux. N&apos;hesitez pas a me contacter.
            </p>
          </div>

          {/* Contact card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative p-8 md:p-12 border border-border rounded-3xl bg-card/50 backdrop-blur-sm mt-12"
          >
            {/* Corner decorations */}
            <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-primary -translate-x-[1px] -translate-y-[1px] rounded-tl-3xl" />
            <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-primary translate-x-[1px] -translate-y-[1px] rounded-tr-3xl" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-primary -translate-x-[1px] translate-y-[1px] rounded-bl-3xl" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-primary translate-x-[1px] translate-y-[1px] rounded-br-3xl" />

            {/* Info grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="text-left p-6 bg-secondary/30 rounded-2xl">
                <MapPin className="w-6 h-6 text-primary mb-3" />
                <h3 className="font-semibold mb-1">Localisation</h3>
                <p className="text-muted-foreground">Nanterre 92000, France</p>
                <p className="text-sm text-muted-foreground mt-1">Ile-de-France</p>
              </div>
              <div className="text-left p-6 bg-secondary/30 rounded-2xl">
                <Send className="w-6 h-6 text-primary mb-3" />
                <h3 className="font-semibold mb-1">Disponibilite</h3>
                <p className="text-muted-foreground">En alternance</p>
                <p className="text-sm text-muted-foreground mt-1">BTS SIO SISR 2025-2027</p>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:contact@example.com"
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 font-medium overflow-hidden rounded-xl bg-primary text-primary-foreground transition-all duration-300 hover:shadow-[0_0_40px_var(--glow-cyan)]"
              >
                <span className="relative z-10">Envoyer un message</span>
                <ArrowUpRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/20 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              </a>
            </div>

            {/* Status indicator */}
            <div className="mt-8 flex items-center justify-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </span>
              <span className="text-sm text-muted-foreground">Disponible pour de nouvelles opportunites</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
