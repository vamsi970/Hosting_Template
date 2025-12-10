"use client"

import { useEffect, useRef, useState } from "react"

interface CardProps {
  title: string
  description: string
  index: number
}

function Card({ title, description, index }: CardProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
      }
    })

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="group"
      style={{
        animation: isVisible ? `fadeInUp 0.6s ease-out ${index * 0.15}s both` : "none",
      }}
    >
      <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-xl transition-all duration-300 h-full group-hover:scale-105 group-hover:-translate-y-2">
        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

export default function WhyChooseUs() {
  const cards = [
    {
      title: "Speed to Market",
      description:
        "Our wide network of factories rapidly converts global trends into ready products with reliable lead times.",
    },
    {
      title: "Wide Product Range",
      description:
        "We offer access to thousands of curated designs across furniture, décor, textiles, apparel, rugs and more.",
    },
    {
      title: "Trusted Partnerships",
      description: "We prioritize transparency, quality and long-term relationships with every client we work with.",
    },
  ]

  return (
    <section id="about" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-balance animate-fadeInUp">
          Why Choose Us
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {cards.map((card, index) => (
            <Card key={index} {...card} index={index} />
          ))}
        </div>

        {/* Global Map Illustration */}
        <div className="mt-16 rounded-2xl overflow-hidden border border-border">
          <svg viewBox="0 0 1200 400" className="w-full h-auto bg-muted">
            <defs>
              <pattern id="dots" x="20" y="20" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="2" fill="currentColor" opacity="0.1" />
              </pattern>
            </defs>
            <rect width="1200" height="400" fill="url(#dots)" />
            <text x="600" y="200" textAnchor="middle" fontSize="24" fill="currentColor" opacity="0.3">
              Global Presence • Spanning 50+ Countries
            </text>
          </svg>
        </div>
      </div>
    </section>
  )
}
