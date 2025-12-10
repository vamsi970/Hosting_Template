"use client"

import { useEffect, useState } from "react"

export default function GlobalPresence() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-secondary relative overflow-hidden">
      <div className="absolute inset-0 opacity-30 animate-fade-slow">
        <img src="/map2.svg" alt="World Map Background" className="w-full h-full object-cover" />
      </div>

      {/* Gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/50 to-transparent opacity-70"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-balance animate-fadeInUp">Our Global Presence</h2>
        <p className="text-muted-foreground text-lg mb-12 max-w-2xl animate-fadeIn" style={{ animationDelay: "0.1s" }}>
          Ixus Sourcing Group works with retailers and boutique stores across North America, Europe, Middle East,
          Australia and Asia. Our sourcing expertise allows us to meet diverse design, compliance and volume
          requirements worldwide.
        </p>

        <div
          className="rounded-2xl overflow-hidden border border-border"
          style={{
            animation: isVisible ? "fadeInUp 0.6s ease-out 0.2s both" : "none",
          }}
        >
          <img src="/map2.svg" alt="Global Presence Map" className="w-full h-auto bg-muted" />
        </div>
      </div>
    </section>
  )
}
