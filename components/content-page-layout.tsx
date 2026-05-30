"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ArrowLeft } from "lucide-react"
import Link from "next/link"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/stakeholders", label: "Stakeholders" },
  { href: "/video", label: "Video" },
  { href: "/reflection", label: "Reflection" },
  { href: "/references", label: "References" },
]

interface ContentPageLayoutProps {
  title: string
  subtitle: string
  backgroundImage: string
  children: React.ReactNode
}

export function ContentPageLayout({ title, subtitle, backgroundImage, children }: ContentPageLayoutProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <main className="relative min-h-screen">
      {/* Background */}
      <div className="fixed inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 left-6 z-50 w-12 h-12 flex items-center justify-center rounded-full bg-card/80 backdrop-blur-sm border border-border hover:bg-card transition-colors"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              <X className="h-5 w-5 text-foreground" />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ opacity: 0, rotate: 90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: -90 }}
              transition={{ duration: 0.2 }}
            >
              <Menu className="h-5 w-5 text-foreground" />
            </motion.div>
          )}
        </AnimatePresence>
      </button>

      {/* Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-background/80 backdrop-blur-md"
              onClick={() => setIsOpen(false)}
            />

            <motion.nav
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 left-0 z-40 h-full w-80 max-w-[85vw] bg-card/95 backdrop-blur-lg border-r border-border p-8 pt-24"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-8">
                Navigate to
              </p>
              <ul className="flex flex-col gap-2">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      className="w-full block py-4 px-4 text-xl font-serif text-foreground hover:text-primary hover:bg-primary/10 rounded-lg transition-all duration-200"
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.nav>
          </>
        )}
      </AnimatePresence>

      {/* Back Button */}
      <Link
        href="/"
        className="fixed top-6 right-6 z-50 w-12 h-12 flex items-center justify-center rounded-full bg-card/80 backdrop-blur-sm border border-border hover:bg-card transition-colors"
        aria-label="Back to home"
      >
        <ArrowLeft className="h-5 w-5 text-foreground" />
      </Link>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Hero Header */}
        <header className="h-[50vh] flex flex-col items-center justify-center text-center px-6">
          <motion.span 
            className="text-primary text-sm uppercase tracking-[0.3em] mb-4 font-sans"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {subtitle}
          </motion.span>
          
          <motion.h1 
            className="font-serif text-foreground leading-tight text-4xl md:text-5xl lg:text-6xl text-balance"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {title}
          </motion.h1>
        </header>

        {/* Main Content */}
        <motion.div 
          className="flex-1 bg-background/95 backdrop-blur-sm"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="max-w-4xl mx-auto px-6 py-16">
            {children}
          </div>
        </motion.div>
      </div>
    </main>
  )
}
