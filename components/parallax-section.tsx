"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"

interface ParallaxSectionProps {
  backgroundImage: string
  children: React.ReactNode
  overlayOpacity?: number
  className?: string
}

export function ParallaxSection({
  backgroundImage,
  children,
  overlayOpacity = 0.5,
  className = "",
}: ParallaxSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 0.3 })

  return (
    <section
      ref={ref}
      className={`relative min-h-screen w-full flex items-center justify-center ${className}`}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed transition-opacity duration-1000"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          opacity: isInView ? 1 : 0.3,
        }}
      />
      
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-background transition-opacity duration-700"
        style={{ opacity: isInView ? overlayOpacity : 0.8 }}
      />
      
      {/* Content */}
      <div
        className={`relative z-10 transition-all duration-1000 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {children}
      </div>
    </section>
  )
}
