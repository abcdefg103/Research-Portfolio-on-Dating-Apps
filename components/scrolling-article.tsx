"use client"

import { useRef, useState, useEffect } from "react"
import { useScroll, useTransform, motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Menu, X } from "lucide-react"

interface ArticleSection {
  id: string
  title: string
  subtitle?: string
  content: string
  backgroundImage: string
  alignment?: "left" | "center" | "right"
}

const sections: ArticleSection[] = [
  {
    id: "hero",
    title: "Sensations of Loneliness",
    subtitle: "American Adults on Online Dating Platforms",
    content: "By Inhoo Chang | AP Seminar | February 2026",
    backgroundImage: "https://images.unsplash.com/photo-1492127042590-8094c493b510?q=80&w=2070",
    alignment: "center",
  },
  {
    id: "introduction",
    title: "A Digital Paradox",
    subtitle: "Introduction",
    content: "Dating apps have skyrocketed in use over the past decade, with the United States user base reaching 60.5 million in 2024. While 30% of all adults report having used dating apps, these platforms remain riddled with negative effects — the most prominent being the loneliness arising from overuse. Online connections lack authenticity at their foundational basis, hindering \"real\" connections from occurring between individuals.",
    backgroundImage: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1920&q=80",
    alignment: "left",
  },
  {
    id: "appeal",
    title: "The Appeal of Dating Apps",
    subtitle: "Why We Swipe",
    content: "Many individuals continue to use dating apps as a result of perceived positive effects. More than 50% of users reported that dating apps had a net positive effect on their self-esteem. When we \"swipe\" through profiles and find a \"match,\" our brains perceive this as a reward, triggering dopamine bursts and elevating feelings of enjoyment. Yet many authors argue that dating apps damage self-esteem through constant comparison, pressure for perfection, and internalized rejection.",
    backgroundImage: "https://images.unsplash.com/photo-1522543558187-768b6df7c25c?w=1920&q=80",
    alignment: "right",
  },
  {
    id: "authenticity",
    title: "The Crisis of Authenticity",
    subtitle: "Causes of Loneliness",
    content: "Dating app users, in an attempt to receive validation, present an altered version of themselves — posting photos that highlight positive traits they might not necessarily possess. This behavior comes at the cost of authenticity. The majority of online communications serve as \"performative relationships\" rather than \"meaningful, human connections.\" Our fears of being criticized create a sense of disconnection, constantly fueling the pressure to solely post positive attributes of our lives.",
    backgroundImage: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=1920&q=80",
    alignment: "center",
  },
  {
    id: "ghosting",
    title: "The Silent Epidemic",
    subtitle: "Ghosting & Its Effects",
    content: "When individuals feel that a dating profile is not authentic, they lose trust, making a relationship less likely to succeed. This often leads to ghosting — suddenly cutting off communications without explanation. 60% of all adults in the United States report having been ghosted. This behavior elevates anxiety, decreases self-esteem, and causes increased feelings of loneliness. According to the US Surgeon General, the mortality comparison odds of lacking social connection are greater than smoking 15 cigarettes a day.",
    backgroundImage: "https://images.unsplash.com/photo-1563182150-7abad4f9d362?q=80&w=2071",
    alignment: "left",
  },
  {
    id: "corporations",
    title: "Profit Over Connection",
    subtitle: "Corporate Strategies",
    content: "Most dating platforms are designed to maximize revenue by increasing user retention. Many dating apps liken themselves to gambling products, constantly exposing users to paid features that lock them into using these apps. Longer usage is directly correlated with higher levels of depression and anxiety. Dating companies do not want users to enter committed relationships, as this causes adults to stop using these apps. As a result, companies have no incentives to increase authenticity.",
    backgroundImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1920&q=80",
    alignment: "right",
  },
  {
    id: "solutions",
    title: "Offline Elements Online",
    subtitle: "A Path Forward",
    content: "In-person interactions can help alleviate feelings of loneliness. By incorporating elements of offline relationships into online platforms, we can prevent the rise in loneliness. Setting daily limits on profiles viewed would reduce choice overload and ghosting behavior. Preventing users from seeing profile pictures until after meaningful conversation would increase the significance of personality over superficial characteristics. Apps like CoffeeMeetsBagel and S'more have pioneered these approaches.",
    backgroundImage: "https://images.unsplash.com/photo-1543807535-eceef0bc6599?w=1920&q=80",
    alignment: "center",
  },
  {
    id: "conclusion",
    title: "Finding Real Connection",
    subtitle: "Conclusion",
    content: "Dating apps have increasingly grown into one of the principal methods to meet new people and enter relationships. However, this has created increased feelings of loneliness, primarily due to the lack of authenticity in relationships generated by these platforms. To avoid these feelings, we must add components of offline dating into the online sphere through legal mandates. By adopting these principles, we can begin to move on from the heavy feelings of loneliness that dating apps afflict onto their users.",
    backgroundImage: "https://images.unsplash.com/photo-1474552226712-ac0f0961a954?w=1920&q=80",
    alignment: "left",
  },
]

function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.8 }}
      className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
    >
      <span className="text-xs uppercase tracking-[0.3em] text-foreground/60">Scroll to explore</span>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="h-5 w-5 text-primary" />
      </motion.div>
    </motion.div>
  )
}

const navItems = [
  { href: "/", label: "Home" },
  { href: "/stakeholders", label: "Stakeholders" },
  { href: "/video", label: "Video" },
  { href: "/reflection", label: "Reflection" },
  { href: "/references", label: "References" },
]

function HamburgerNav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
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
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-background/80 backdrop-blur-md"
              onClick={() => setIsOpen(false)}
            />

            {/* Nav Panel */}
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
                    <a
                      href={item.href}
                      className="w-full block py-4 px-4 text-xl font-serif text-foreground hover:text-primary hover:bg-primary/10 rounded-lg transition-all duration-200"
                    >
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

interface SectionContentProps {
  section: ArticleSection
  index: number
  isActive: boolean
  isPrev: boolean
  isNext: boolean
}

function SectionContent({ section, index, isActive, isPrev, isNext }: SectionContentProps) {
  const alignmentClasses = {
    left: "items-start text-left pl-8 md:pl-16 lg:pl-24",
    center: "items-center text-center px-6",
    right: "items-end text-right pr-8 md:pr-16 lg:pr-24",
  }

  const isHero = index === 0

  return (
    <motion.div
      className={`absolute inset-0 flex flex-col justify-center ${alignmentClasses[section.alignment || "center"]}`}
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: isActive ? 1 : 0,
        y: isActive ? 0 : isPrev ? -40 : isNext ? 40 : 0,
        scale: isActive ? 1 : 0.98,
      }}
      transition={{ 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className="max-w-4xl">
        {section.subtitle && (
          <motion.span 
            className="text-primary text-sm uppercase tracking-[0.3em] mb-4 font-sans block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {section.subtitle}
          </motion.span>
        )}
        
        <motion.h2 
          className={`font-serif text-foreground leading-tight mb-6 text-balance ${
            isHero 
              ? "text-5xl md:text-7xl lg:text-8xl" 
              : "text-4xl md:text-5xl lg:text-6xl"
          }`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 30 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          {section.title}
        </motion.h2>

        {section.content && (
          <motion.p 
            className="text-lg md:text-xl text-foreground/80 max-w-2xl leading-relaxed font-sans"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 30 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {section.content}
          </motion.p>
        )}

        {isHero && isActive && <ScrollIndicator />}
      </div>

      {/* Section Number */}
      {!isHero && (
        <motion.div 
          className="absolute bottom-8 right-8 text-foreground/10 font-serif text-8xl md:text-9xl pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: isActive ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {String(index).padStart(2, "0")}
        </motion.div>
      )}
    </motion.div>
  )
}

function BackgroundLayer({ 
  image, 
  isActive, 
  isPrev 
}: { 
  image: string
  isActive: boolean
  isPrev: boolean
}) {
  return (
    <motion.div
      className="absolute inset-0"
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: isActive ? 1 : isPrev ? 0.3 : 0,
        scale: isActive ? 1 : 1.05,
      }}
      transition={{ 
        duration: 1.2, 
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
      {/* Gradient overlay for smooth blending */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/50 to-background/70" />
    </motion.div>
  )
}
export function ScrollingArticle() {
  const containerRef = useRef<HTMLDivElement>(null)
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([])
  const [activeIndex, setActiveIndex] = useState(0)
  const { scrollYProgress } = useScroll({ container: containerRef })

  // Use IntersectionObserver to detect which section is most visible
  useEffect(() => {
    const observers: IntersectionObserver[] = []
    
    sectionRefs.current.forEach((ref, index) => {
      if (!ref) return
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            // When a section is more than 50% visible, make it active
            if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
              setActiveIndex(index)
            }
          })
        },
        {
          root: containerRef.current,
          threshold: 0.5,
        }
      )
      
      observer.observe(ref)
      observers.push(observer)
    })
    
    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [])

  return (
    <main className="relative h-screen overflow-hidden">
      {/* Hamburger Navigation */}
      <HamburgerNav />

      {/* Progress Bar */}
      <ProgressBar progress={scrollYProgress} />
      
      {/* Fixed Background Container with Crossfade */}
      <div className="fixed inset-0">
        {sections.map((section, index) => (
          <BackgroundLayer
            key={section.id}
            image={section.backgroundImage}
            isActive={index === activeIndex}
            isPrev={index === activeIndex - 1}
          />
        ))}
      </div>

      {/* Fixed Content Container */}
      <div className="fixed inset-0 z-10 pointer-events-none">
        {sections.map((section, index) => (
          <SectionContent
            key={section.id}
            section={section}
            index={index}
            isActive={index === activeIndex}
            isPrev={index < activeIndex}
            isNext={index > activeIndex}
          />
        ))}
      </div>

      {/* Scroll Container with Snap */}
      <div 
        ref={containerRef}
        className="relative h-screen overflow-y-auto snap-y snap-mandatory scrollbar-hide"
        style={{ scrollBehavior: 'smooth' }}
      >
        {sections.map((section, index) => (
          <div 
            key={section.id}
            ref={(el) => { sectionRefs.current[index] = el }}
            className="h-screen w-full snap-start snap-always"
            aria-label={section.title}
          />
        ))}
      </div>

      {/* Section Indicators */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-3">
        {sections.map((section, index) => (
          <button
            key={section.id}
            onClick={() => {
              if (containerRef.current) {
                const scrollPosition = (index / sections.length) * containerRef.current.scrollHeight
                containerRef.current.scrollTo({ top: scrollPosition, behavior: 'smooth' })
              }
            }}
            className={`w-2 h-2 rounded-full transition-all duration-500 ${
              index === activeIndex 
                ? "bg-primary scale-150" 
                : "bg-foreground/30 hover:bg-foreground/50"
            }`}
            aria-label={`Go to ${section.title}`}
          />
        ))}
      </div>
    </main>
  )
}

function ProgressBar({ progress }: { progress: ReturnType<typeof useScroll>["scrollYProgress"] }) {
  const scaleX = useTransform(progress, [0, 1], [0, 1])
  
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-50"
      style={{ scaleX }}
    />
  )
}
