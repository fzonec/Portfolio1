"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative py-12 border-t border-border">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo and copyright */}
          <div className="text-center md:text-left">
            <p className="font-mono text-sm text-muted-foreground">
              <span className="text-primary">&lt;</span>
              Mohamed Hemamda
              <span className="text-primary">/&gt;</span>
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              BTS SIO SISR | 2025-2027
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="mailto:contact@example.com"
              whileHover={{ y: -2 }}
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </motion.a>
          </div>

          {/* Tech stack */}
          <p className="text-xs text-muted-foreground font-mono">
            Built with Next.js & Tailwind
          </p>
        </div>

        {/* Decorative line */}
        <div className="mt-8 flex items-center justify-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-[1px] bg-gradient-to-r from-transparent to-primary" />
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <div className="w-8 h-[1px] bg-gradient-to-l from-transparent to-primary" />
          </div>
        </div>
      </div>
    </footer>
  )
}
