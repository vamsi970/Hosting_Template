"use client"

import { useEffect, useRef, useState } from "react"

interface FactoryCardProps {
  title: string
  description: string
  index: number
}

function FactoryCard({ title, description, index }: FactoryCardProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={{
        animation: isVisible ? `fadeInUp 0.6s ease-out ${index * 0.15}s both` : "none",
      }}
    >
      <div className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-bold text-foreground mb-3">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

export default function FactoryNetwork() {
  const factories = [
    {
      title: "Pan-India Coverage",
      description:
        "Our partner factories span Delhi NCR, Moradabad, Jaipur, Jodhpur, Panipat, Karur, Tiruppur and Mumbai.",
    },
    {
      title: "Certified & Compliant Units",
      description:
        "We work with SEDEX, BSCI, ISO and FSC-certified factories ensuring social & environmental responsibility.",
    },
    {
      title: "Specialized Production Hubs",
      description:
        "Each region specializes in categories like wood furniture, metal décor, textiles, rugs, ceramics and accessories.",
    },
  ]

  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance animate-fadeInUp">Factory Network Overview</h2>
        <p className="text-muted-foreground text-lg mb-12 max-w-2xl animate-fadeIn" style={{ animationDelay: "0.1s" }}>
          A trusted network of certified manufacturing partners across India
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {factories.map((factory, index) => (
            <FactoryCard key={index} {...factory} index={index} />
          ))}
        </div>

        {/* Certifications */}
        <div className="bg-secondary rounded-2xl p-12">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center animate-fadeInUp">
            Certifications & Compliance
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {["ISO Certified Partners", "SEDEX / BSCI", "FSC Certified Wood"].map((cert, index) => (
              <div
                key={index}
                className="text-center p-6 bg-card rounded-xl border border-border"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.15}s both`,
                }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✓</span>
                </div>
                <h4 className="font-bold text-foreground">{cert}</h4>
                <p className="text-sm text-muted-foreground mt-2">Quality & Compliance Standards</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
