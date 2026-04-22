"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Server, Shield, Monitor, Wrench, Network, Database } from "lucide-react"

const skills = [
  {
    category: "Systemes & Reseaux",
    icon: Server,
    items: [
      "Installation et configuration de postes",
      "Mise en place de serveurs et switchs",
      "Gestion des tables de routage",
      "Configuration de telephonie IP"
    ]
  },
  {
    category: "Securite Informatique",
    icon: Shield,
    items: [
      "Parametrage de pare-feu",
      "Gestion antivirus",
      "Gestion des sauvegardes",
      "Bonnes pratiques securite"
    ]
  },
  {
    category: "Administration",
    icon: Database,
    items: [
      "Active Directory",
      "GPO (Group Policy)",
      "DNS et DHCP",
      "Gestion utilisateurs"
    ]
  },
  {
    category: "Virtualisation",
    icon: Monitor,
    items: [
      "VMware",
      "Oracle VirtualBox",
      "Windows Server 2019",
      "Machines virtuelles"
    ]
  },
  {
    category: "Support & Maintenance",
    icon: Wrench,
    items: [
      "Diagnostic et reparation",
      "Support utilisateur",
      "Redaction de procedures",
      "Formation courte"
    ]
  },
  {
    category: "Analyse Reseaux",
    icon: Network,
    items: [
      "Wireshark",
      "Protocoles ARP, IP, ICMP",
      "DHCP",
      "Analyse de trames"
    ]
  }
]

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="relative py-32 overflow-hidden">
      {/* Background */}
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
            <span className="font-mono text-primary text-sm">02.</span>
            <h2 className="text-3xl md:text-4xl font-bold">Competences</h2>
            <div className="flex-1 h-[1px] bg-border max-w-xs" />
          </div>
          <p className="text-muted-foreground max-w-xl">
            Technologies et outils que je maitrise dans le domaine des systemes et reseaux.
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-6 border border-border rounded-2xl bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300"
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative">
                {/* Icon and title */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <skill.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold">{skill.category}</h3>
                </div>

                {/* Skill items */}
                <ul className="space-y-2">
                  {skill.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1 h-1 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-tr-2xl">
                <div className="absolute top-0 right-0 w-[1px] h-8 bg-gradient-to-b from-primary to-transparent transform translate-x-0" />
                <div className="absolute top-0 right-0 w-8 h-[1px] bg-gradient-to-l from-primary to-transparent" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech stack visualization */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 p-8 border border-border rounded-2xl bg-card/30 backdrop-blur-sm"
        >
          <h3 className="text-center text-sm font-mono text-primary mb-6">OUTILS & TECHNOLOGIES</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Windows Server", "Active Directory", "VMware", "Wireshark", 
              "DNS", "DHCP", "PowerShell", "VirtualBox", "Word", "Excel"
            ].map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: 0.8 + i * 0.05 }}
                className="px-4 py-2 font-mono text-sm border border-border rounded-full bg-secondary/50 hover:border-primary hover:text-primary transition-all duration-300 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
