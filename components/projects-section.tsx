"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Server, Users, Shield, Settings, ChevronRight, ExternalLink } from "lucide-react"

const projectDetails = {
  overview: {
    title: "Vue d'ensemble",
    icon: Server,
    content: [
      "Machine virtuelle Oracle VirtualBox",
      "Windows Server 2019 Standard",
      "4 Go RAM, 2 vCPU, 50 Go stockage",
      "Domaine: esup.local",
      "Serveur: SRV-AD (192.168.1.10)"
    ]
  },
  users: {
    title: "Gestion Utilisateurs",
    icon: Users,
    content: [
      "Creation d'Unites d'Organisation (OU)",
      "Import CSV des utilisateurs via PowerShell",
      "Groupes: Informatique, Etudiants, Direction, Comptabilite",
      "Console ADUC pour verification",
      "Gestion centralisee des comptes"
    ]
  },
  security: {
    title: "Securite",
    icon: Shield,
    content: [
      "GPO-MotDePasse: 10 caracteres minimum",
      "GPO-Verrouillage: ecran de veille securise",
      "Duree de vie max: 60 jours",
      "Historique: 5 mots de passe",
      "Complexite obligatoire"
    ]
  },
  audit: {
    title: "Audit & Monitoring",
    icon: Settings,
    content: [
      "Audit des connexions utilisateurs",
      "Surveillance des evenements systeme",
      "Microsoft Advanced Threat Analytics",
      "Journaux Securite/Systeme/Application",
      "Detection menaces Active Directory"
    ]
  }
}

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeTab, setActiveTab] = useState<keyof typeof projectDetails>("overview")

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
            <span className="font-mono text-primary text-sm">03.</span>
            <h2 className="text-3xl md:text-4xl font-bold">Projets</h2>
            <div className="flex-1 h-[1px] bg-border max-w-xs" />
          </div>
        </motion.div>

        {/* Featured Project */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          {/* Project card */}
          <div className="relative border border-border rounded-3xl bg-card/50 backdrop-blur-sm overflow-hidden">
            {/* Header */}
            <div className="p-6 md:p-8 border-b border-border">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <span className="inline-block px-3 py-1 text-xs font-mono text-primary bg-primary/10 rounded-full mb-3">
                    PROJET BTS SIO SISR
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold">Active Directory</h3>
                  <p className="text-muted-foreground mt-2">
                    Installation et configuration complete d&apos;un environnement Active Directory
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="px-3 py-1.5 text-xs font-mono border border-border rounded-lg">Windows Server</span>
                  <span className="px-3 py-1.5 text-xs font-mono border border-border rounded-lg">AD DS</span>
                  <span className="px-3 py-1.5 text-xs font-mono border border-border rounded-lg">GPO</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="grid md:grid-cols-[280px_1fr]">
              {/* Tabs */}
              <div className="border-b md:border-b-0 md:border-r border-border p-4">
                <nav className="flex md:flex-col gap-2">
                  {Object.entries(projectDetails).map(([key, { title, icon: Icon }]) => (
                    <button
                      key={key}
                      onClick={() => setActiveTab(key as keyof typeof projectDetails)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-300 ${
                        activeTab === key
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-secondary text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <Icon className="w-5 h-5 shrink-0" />
                      <span className="font-medium text-sm whitespace-nowrap">{title}</span>
                      <ChevronRight className={`w-4 h-4 ml-auto shrink-0 transition-transform ${activeTab === key ? "rotate-90" : ""}`} />
                    </button>
                  ))}
                </nav>
              </div>

              {/* Tab content */}
              <div className="p-6 md:p-8">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    {(() => {
                      const Icon = projectDetails[activeTab].icon
                      return <Icon className="w-5 h-5 text-primary" />
                    })()}
                    {projectDetails[activeTab].title}
                  </h4>
                  <ul className="space-y-3">
                    {projectDetails[activeTab].content.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.05 }}
                        className="flex items-start gap-3 text-muted-foreground"
                      >
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* Terminal preview */}
                <div className="mt-8 p-4 bg-background rounded-xl border border-border font-mono text-sm">
                  <div className="flex items-center gap-2 mb-3 pb-3 border-b border-border">
                    <div className="w-3 h-3 rounded-full bg-destructive/50" />
                    <div className="w-3 h-3 rounded-full bg-chart-4/50" />
                    <div className="w-3 h-3 rounded-full bg-chart-3/50" />
                    <span className="ml-2 text-xs text-muted-foreground">PowerShell</span>
                  </div>
                  <div className="space-y-1 text-xs">
                    <p><span className="text-primary">PS C:\&gt;</span> Get-ADDomain</p>
                    <p className="text-muted-foreground">Name: esup</p>
                    <p className="text-muted-foreground">DNSRoot: esup.local</p>
                    <p className="text-muted-foreground">DomainMode: Windows2016Domain</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 md:p-8 border-t border-border bg-secondary/20">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>Services: AD DS, DNS, Netlogon, KDC</span>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors">
                  Voir le rapport complet
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

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
