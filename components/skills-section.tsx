"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { useLang } from "@/contexts/language-context"
import { Server, Shield, Monitor, Wrench, Network, Database } from "lucide-react"

// ─── Traductions FR/EN ─────────────────────────────────────────────
const translations = {
  fr: {
    title: "Compétences",
    subtitle:
      "Technologies et outils que je maîtrise dans le domaine des systèmes et réseaux.",
    techStackTitle: "OUTILS & TECHNOLOGIES",
  },
  en: {
    title: "Skills",
    subtitle:
      "Technologies and tools I master in the field of systems and networking.",
    techStackTitle: "TOOLS & TECHNOLOGIES",
  },
} as const

export function SkillsSection() {
  const { lang } = useLang()
  const t = translations[lang]

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skills = [
    {
      category: {
        fr: "Systèmes & Réseaux",
        en: "Systems & Networking",
      },
      icon: Server,
      items: [
        {
          fr: "Installation et configuration de postes",
          en: "Workstation installation and configuration",
        },
        {
          fr: "Mise en place de serveurs et switchs",
          en: "Server and switch deployment",
        },
        {
          fr: "Gestion des tables de routage",
          en: "Routing table management",
        },
        {
          fr: "Configuration de téléphonie IP",
          en: "IP telephony configuration",
        },
      ],
    },
    {
      category: {
        fr: "Sécurité Informatique",
        en: "Cybersecurity",
      },
      icon: Shield,
      items: [
        {
          fr: "Paramétrage de pare‑feu",
          en: "Firewall configuration",
        },
        {
          fr: "Gestion antivirus",
          en: "Antivirus management",
        },
        {
          fr: "Gestion des sauvegardes",
          en: "Backup management",
        },
        {
          fr: "Bonnes pratiques sécurité",
          en: "Security best practices",
        },
      ],
    },
    {
      category: {
        fr: "Administration",
        en: "Administration",
      },
      icon: Database,
      items: [
        {
          fr: "Active Directory",
          en: "Active Directory",
        },
        {
          fr: "GPO (Group Policy)",
          en: "GPO (Group Policy)",
        },
        {
          fr: "DNS et DHCP",
          en: "DNS and DHCP",
        },
        {
          fr: "Gestion utilisateurs",
          en: "User management",
        },
      ],
    },
    {
      category: {
        fr: "Virtualisation",
        en: "Virtualization",
      },
      icon: Monitor,
      items: [
        {
          fr: "VMware",
          en: "VMware",
        },
        {
          fr: "Oracle VirtualBox",
          en: "Oracle VirtualBox",
        },
        {
          fr: "Windows Server 2019",
          en: "Windows Server 2019",
        },
        {
          fr: "Machines virtuelles",
          en: "Virtual machines",
        },
      ],
    },
    {
      category: {
        fr: "Support & Maintenance",
        en: "Support & Maintenance",
      },
      icon: Wrench,
      items: [
        {
          fr: "Diagnostic et réparation",
          en: "Diagnostics and repair",
        },
        {
          fr: "Support utilisateur",
          en: "User support",
        },
        {
          fr: "Rédaction de procédures",
          en: "Procedure writing",
        },
        {
          fr: "Formation courte",
          en: "Short training sessions",
        },
      ],
    },
    {
      category: {
        fr: "Analyse Réseaux",
        en: "Network Analysis",
      },
      icon: Network,
      items: [
        {
          fr: "Wireshark",
          en: "Wireshark",
        },
        {
          fr: "Protocoles ARP, IP, ICMP",
          en: "ARP, IP, ICMP protocols",
        },
        {
          fr: "DHCP",
          en: "DHCP",
        },
        {
          fr: "Analyse de trames",
          en: "Packet analysis",
        },
      ],
    },
  ]

  const techStack = [
    "Windows Server",
    "Active Directory",
    "VMware",
    "Wireshark",
    "DNS",
    "DHCP",
    "PowerShell",
    "VirtualBox",
    "Word",
    "Excel",
  ]

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
            <h2 className="text-3xl md:text-4xl font-bold">{t.title}</h2>
            <div className="flex-1 h-[1px] bg-border max-w-xs" />
          </div>
          <p className="text-muted-foreground max-w-xl">{t.subtitle}</p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category[lang]}
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
                  <h3 className="font-semibold">{skill.category[lang]}</h3>
                </div>

                {/* Skill items */}
                <ul className="space-y-2">
                  {skill.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <span className="w-1 h-1 rounded-full bg-primary" />
                      {item[lang]}
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
          <h3 className="text-center text-sm font-mono text-primary mb-6">
            {t.techStackTitle}
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, i) => (
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