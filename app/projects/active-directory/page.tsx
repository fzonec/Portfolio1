"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Server, Users, Shield, Settings, ChevronRight, ExternalLink } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import Image from "next/image"

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

const screenshots: { src: string; alt: string; caption: string }[] = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-yh74fdndhiINm5XvPYjSVsddRJHx1R.png",
    alt: "Bureau Windows Server 2019",
    caption: "Bureau Windows Server 2019 - Environnement de travail du serveur SRV-AD"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-P2CgGNr6jERhQwV2OEcMBS1dz8JP0o.png",
    alt: "Gestionnaire de serveur",
    caption: "Gestionnaire de serveur - Proprietes du serveur SRV-AD (192.168.1.10, domaine esup.local)"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-5SUBv7FRxqE2Qim4Fe5KwTvYec8Vb4.png",
    alt: "Active Directory Users and Computers",
    caption: "Console ADUC - Structure des OU: Comptabilite, Direction, Etudiants, Informatique"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-GaB6yrPsm6Rkn8DIvIL4iNl2GubUcd.png",
    alt: "Gestion des strategies de groupe",
    caption: "Console GPMC - GPO configurees: Default Domain Policy, GPO-MotDePasse, GPO-Verrouillage"
  }
]

export default function ActiveDirectoryProject() {
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
            <span className="inline-block px-3 py-1 text-xs font-mono text-primary bg-primary/10 rounded-full mb-4">
              PROJET BTS SIO SISR
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Active Directory</h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Installation et configuration complete d&apos;un environnement Active Directory 
              avec Windows Server 2019, gestion des utilisateurs, GPO et securite.
            </p>
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
                  Telecharger le rapport complet
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Screenshots Section */}
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

    </main>
  )
}
