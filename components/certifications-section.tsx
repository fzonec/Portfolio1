"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Award, ExternalLink, X, ZoomIn } from "lucide-react"
import Image from "next/image"

// Certifications data - add your certifications here
const certifications: {
  name: string
  issuer: string
  date: string
  score?: string
  image?: string
  verifyUrl?: string
}[] = [
  {
    name: "Competences numeriques",
    issuer: "PIX",
    date: "28/03/2024",
    score: "169 PIX",
    image: "/pix.png", // Add your PIX certificate image URL here
    verifyUrl: ""
  }
]

export function CertificationsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedCert, setSelectedCert] = useState<typeof certifications[0] | null>(null)

  return (
    <>
      <section id="certifications" className="relative py-32 overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,var(--glow-cyan),transparent_50%)]" />

        <div ref={ref} className="container mx-auto px-4 max-w-6xl">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="flex items-center gap-4 mb-4">
              <h2 className="text-3xl md:text-4xl font-bold">Certifications</h2>
              <div className="flex-1 h-[1px] bg-border max-w-xs" />
            </div>
            <p className="text-muted-foreground max-w-2xl">
              Mes certifications professionnelles attestant de mes competences techniques.
            </p>
          </motion.div>

          {/* Certifications grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative border border-border rounded-2xl bg-card/50 backdrop-blur-sm overflow-hidden hover:border-primary/50 transition-all duration-300">
                  {/* Corner decorations */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity -translate-x-[1px] -translate-y-[1px] z-10" />
                  <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity translate-x-[1px] -translate-y-[1px] z-10" />
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity -translate-x-[1px] translate-y-[1px] z-10" />
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity translate-x-[1px] translate-y-[1px] z-10" />

                  {/* Certificate image */}
                  {cert.image ? (
                    <div 
                      className="relative aspect-[4/3] bg-secondary/30 cursor-pointer overflow-hidden"
                      onClick={() => setSelectedCert(cert)}
                    >
                      <Image
                        src={cert.image}
                        alt={cert.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <ZoomIn className="w-8 h-8 text-primary" />
                      </div>
                    </div>
                  ) : (
                    <div className="aspect-[4/3] bg-secondary/30 flex items-center justify-center">
                      <div className="text-center p-6">
                        <Award className="w-12 h-12 text-primary/50 mx-auto mb-3" />
                        <p className="text-sm text-muted-foreground">Image a venir</p>
                      </div>
                    </div>
                  )}

                  {/* Certificate info */}
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-xs font-mono text-primary mb-1">{cert.issuer}</p>
                        <h3 className="font-semibold text-lg leading-tight">{cert.name}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{cert.date}</p>
                        {cert.score && (
                          <p className="text-sm font-mono text-primary mt-2">{cert.score}</p>
                        )}
                      </div>
                      {cert.verifyUrl && (
                        <a
                          href={cert.verifyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 border border-border rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4 text-primary" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Placeholder for future certifications */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: certifications.length * 0.1 }}
              className="relative border border-dashed border-border/50 rounded-2xl bg-card/20 backdrop-blur-sm overflow-hidden"
            >
              <div className="aspect-[4/3] flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="w-12 h-12 rounded-full border-2 border-dashed border-primary/30 flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl text-primary/50">+</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Plus de certifications a venir</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Lightbox modal */}
      {selectedCert && selectedCert.image && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedCert(null)}
        >
          <button
            onClick={() => setSelectedCert(null)}
            className="absolute top-6 right-6 p-3 border border-border rounded-full hover:border-primary/50 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative max-w-4xl w-full max-h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[4/3] border border-border rounded-2xl overflow-hidden">
              <Image
                src={selectedCert.image}
                alt={selectedCert.name}
                fill
                className="object-contain bg-card"
              />
            </div>
            <div className="mt-4 text-center">
              <p className="text-xs font-mono text-primary">{selectedCert.issuer}</p>
              <h3 className="font-semibold text-xl">{selectedCert.name}</h3>
              <p className="text-muted-foreground">{selectedCert.date}</p>
              {selectedCert.score && (
                <p className="text-primary font-mono mt-1">{selectedCert.score}</p>
              )}
              {selectedCert.verifyUrl && (
                <a
                  href={selectedCert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 px-4 py-2 border border-primary rounded-lg text-primary hover:bg-primary/10 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Verifier le certificat
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  )
}
