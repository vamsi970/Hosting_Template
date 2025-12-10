"use client"

import { useEffect, useState } from "react"

export default function Clients() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const clients = ["Target", "TJX", "IKEA", "Wayfair", "Amazon", "Etsy"]

  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-balance animate-fadeInUp">Our Clients</h2>
        <p
          className="text-center text-muted-foreground text-lg mb-12 animate-fadeIn"
          style={{ animationDelay: "0.1s" }}
        >
          We proudly serve a global network of retailers, wholesalers and boutique brands
        </p>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center justify-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6 bg-card rounded-lg border border-border hover:shadow-lg transition-all duration-300 h-24"
              style={{
                animation: isVisible ? `fadeInUp 0.6s ease-out ${index * 0.08}s both` : "none",
              }}
            >
              <span className="font-semibold text-foreground text-center">{client}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
