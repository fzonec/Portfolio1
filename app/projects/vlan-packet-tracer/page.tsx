"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Network, Server, Shield, Settings, ChevronRight, ExternalLink, Wifi, MonitorSpeaker } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import Image from "next/image"

const projectDetails = {
  overview: {
    title: "Vue d'ensemble",
    icon: Network,
    content: [
      "Cisco Packet Tracer - Simulation reseau",
      "Architecture multi-sites avec WAN",
      "VLANs par departement (RH, Finances, IT)",
      "Routage inter-VLAN",
      "Services reseau complets"
    ]
  },
  infrastructure: {
    title: "Infrastructure",
    icon: Server,
    content: [
      "Switchs multicouche configures",
      "Routeurs avec tables de routage",
      "Serveur DHCP pour attribution IP",
      "Serveur DNS pour resolution noms",
      "Serveur HTTP pour tests"
    ]
  },
  vlan: {
    title: "Configuration VLAN",
    icon: Wifi,
    content: [
      "VLAN 10 - Accueil",
      "VLAN 20 - Gestion",
      "VLAN 30 - RH",
      "VLAN 40 - Finances", 
      "VLAN 50 - IT",
      "Trunks entre equipements"
    ]
  },
  supervision: {
    title: "Supervision",
    icon: MonitorSpeaker,
    content: [
      "SNMP pour monitoring",
      "Syslog pour journalisation",
      "ACLs pour controle d'acces",
      "Tests de connectivite",
      "Documentation des pannes"
    ]
  },
  security: {
    title: "Securite",
    icon: Shield,
    content: [
      "ACLs standard et etendues",
      "Isolation des VLANs",
      "Filtrage du trafic",
      "Procedures de depannage",
      "Bonnes pratiques Cisco"
    ]
  }
}

const levels = [
  {
    level: "Debutant",
    context: "Cabinet Comptafinance",
    objectives: ["2 VLANs (accueil, gestion)", "Serveur DHCP", "Imprimante partagee", "Acces internet simule"],
    duration: "6-7 heures"
  },
  {
    level: "Intermediaire", 
    context: "Societe StratAdvise",
    objectives: ["3 VLANs (RH, Finances, IT)", "Serveurs DHCP/DNS/HTTP", "SNMP supervision", "ACLs"],
    duration: "8-9 heures"
  },
  {
    level: "Expert",
    context: "PME NeoEdu",
    objectives: ["Multi-sites WAN", "Haute disponibilite", "Automatisation scripts", "SNMP/Syslog avance"],
    duration: "10 heures"
  }
]

const screenshots: { src: string; alt: string; caption: string }[] = []

export default function VLANProject() {
  const [activeTab, setActiveTab] = useState<keyof typeof projectDetails>("overview")

  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--glow-cyan),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--grid-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-color)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
        
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <Link 
            href="/#projects" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour aux projets
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 text-xs font-mono text-chart-3 bg-chart-3/10 rounded-full mb-4">
              PROJET RESEAU
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">VLAN Packet Tracer</h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Conception et deploiement d&apos;une infrastructure reseau complete avec VLANs, 
              routage inter-VLAN, serveurs DHCP/DNS et supervision SNMP sur Cisco Packet Tracer.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Levels */}
      <section className="py-16 border-b border-border">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="text-2xl font-bold mb-8">Niveaux de difficulte</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {levels.map((item, index) => (
                <motion.div
                  key={item.level}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="p-6 border border-border rounded-2xl bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-colors"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 text-xs font-mono rounded-full ${
                      index === 0 ? "bg-chart-3/20 text-chart-3" :
                      index === 1 ? "bg-chart-4/20 text-chart-4" :
                      "bg-chart-5/20 text-chart-5"
                    }`}>
                      {item.level}
                    </span>
                    <span className="text-sm text-muted-foreground">{item.duration}</span>
                  </div>
                  <h3 className="font-semibold mb-2">{item.context}</h3>
                  <ul className="space-y-2">
                    {item.objectives.map((obj, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="w-1 h-1 rounded-full bg-primary" />
                        {obj}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative border border-border rounded-3xl bg-card/50 backdrop-blur-sm overflow-hidden"
          >
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
                    <span className="ml-2 text-xs text-muted-foreground">Cisco IOS</span>
                  </div>
                  <div className="space-y-1 text-xs">
                    <p><span className="text-primary">Switch#</span> show vlan brief</p>
                    <p className="text-muted-foreground">VLAN Name                Status</p>
                    <p className="text-muted-foreground">---- ------------------- -------</p>
                    <p className="text-muted-foreground">10   Accueil             active</p>
                    <p className="text-muted-foreground">20   Gestion             active</p>
                    <p className="text-muted-foreground">30   RH                  active</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 md:p-8 border-t border-border bg-secondary/20">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>Services: DHCP, DNS, HTTP, SNMP, Syslog</span>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors">
                  Telecharger le fichier .pkt
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Screenshots Section */}
      {screenshots.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold mb-8">Captures d&apos;ecran</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {screenshots.map((screenshot, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="group relative rounded-2xl overflow-hidden border border-border bg-card/50"
                  >
                    <div className="aspect-video relative">
                      <Image
                        src={screenshot.src}
                        alt={screenshot.alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4 border-t border-border">
                      <p className="text-sm text-muted-foreground">{screenshot.caption}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Placeholder for screenshots */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="p-8 border border-dashed border-border rounded-3xl text-center"
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-chart-3/10 flex items-center justify-center">
              <Network className="w-8 h-8 text-chart-3" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Captures d&apos;ecran</h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              Ajoutez vos captures d&apos;ecran du projet VLAN Packet Tracer pour les afficher ici.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Livrables */}
      <section className="py-16 border-t border-border">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold mb-8">Livrables attendus</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Schema reseau annote (PDF/PNG)",
                "Fichier .pkt Packet Tracer",
                "Tableau d'adressage IP",
                "Guide de configuration",
                "Procedures de depannage",
                "Rapports d'incidents"
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.5 + i * 0.05 }}
                  className="flex items-center gap-3 p-4 border border-border rounded-xl bg-card/30"
                >
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-sm">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
