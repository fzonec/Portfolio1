"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Server, Network, ArrowRight } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    id: "active-directory",
    title: "Active Directory",
    category: "PROJET BTS SIO SISR",
    description: "Installation et configuration complete d'un environnement Active Directory avec Windows Server 2019, gestion des utilisateurs, GPO et securite.",
    icon: Server,
    tags: ["Windows Server", "AD DS", "GPO", "PowerShell"],
    color: "from-primary to-primary/60"
  },
  {
    id: "vlan-packet-tracer",
    title: "VLAN Packet Tracer",
    category: "PROJET RESEAU",
    description: "Conception et deploiement d'une infrastructure reseau complete avec VLANs, routage inter-VLAN, serveurs DHCP/DNS et supervision SNMP.",
    icon: Network,
    tags: ["Cisco", "VLAN", "Routage", "DHCP", "DNS"],
    color: "from-chart-3 to-chart-3/60"
  }
]

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--glow-cyan),transparent_60%)] opacity-30" />

      <div ref={ref} className="container mx-auto px-4 max-w-6xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <h2 className="text-3xl md:text-4xl font-bold">Projets</h2>
            <div className="flex-1 h-[1px] bg-border max-w-xs" />
          </div>
          <p className="text-muted-foreground max-w-xl">
            Decouvrez mes projets techniques realises dans le cadre de mon BTS SIO SISR.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Link href={`/projects/${project.id}`} className="block group">
                <div className="relative border border-border rounded-3xl bg-card/50 backdrop-blur-sm overflow-hidden hover:border-primary/50 transition-all duration-500 h-full">
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Header with icon */}
                  <div className="p-6 md:p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 rounded-2xl bg-gradient-to-br ${project.color} text-primary-foreground`}>
                        <project.icon className="w-6 h-6" />
                      </div>
                      <span className="inline-block px-3 py-1 text-xs font-mono text-primary bg-primary/10 rounded-full">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-6 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1.5 text-xs font-mono border border-border rounded-lg bg-secondary/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center gap-2 text-primary font-medium">
                      <span>Voir le projet</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>

                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden rounded-tr-3xl">
                    <div className="absolute top-0 right-0 w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
                    <div className="absolute top-0 right-0 w-12 h-[1px] bg-gradient-to-l from-primary to-transparent" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Additional experience cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 grid md:grid-cols-2 gap-6"
        >
          <div className="p-6 border border-border rounded-2xl bg-card/30 backdrop-blur-sm hover:border-primary/50 transition-colors">
            <span className="text-xs font-mono text-primary">EXPERIENCE TUNZINI</span>
            <h4 className="text-lg font-semibold mt-2 mb-3">Support Infrastructure</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-primary" />
                Configuration de postes et deploiement
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-primary" />
                Mise en place serveurs et switchs
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-primary" />
                Support quotidien utilisateurs
              </li>
            </ul>
          </div>

          <div className="p-6 border border-border rounded-2xl bg-card/30 backdrop-blur-sm hover:border-primary/50 transition-colors">
            <span className="text-xs font-mono text-primary">COMPETENCES ACQUISES</span>
            <h4 className="text-lg font-semibold mt-2 mb-3">Maintenance & Reparation</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-primary" />
                Diagnostic et reparation traceurs
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-primary" />
                Configuration telephonie IP
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-primary" />
                Redaction procedures techniques
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
