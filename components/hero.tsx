"use client"

import { useEffect, useState } from "react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-secondary to-background">
      <div className="absolute inset-0 opacity-50 animate-fade-slow">
        <img src="/map2.svg" alt="World Map" className="w-full h-full object-cover" />
      </div>

      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60"></div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-3 h-3 bg-primary rounded-full opacity-40 animate-pulse-slow"></div>
        <div
          className="absolute top-40 right-20 w-2 h-2 bg-primary rounded-full opacity-30 animate-pulse-slow"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute bottom-32 left-1/4 w-2 h-2 bg-accent rounded-full opacity-30 animate-pulse-slow"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/3 right-1/4 w-2 h-2 bg-primary rounded-full opacity-25"
          style={{ animation: "float-smooth 5s ease-in-out infinite" }}
        ></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div style={{ animation: isVisible ? "fadeInUp 0.8s ease-out" : "none" }}>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight mb-6">
            Your Trusted Sourcing <span className="text-primary">Partner</span> in India
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground text-balance mb-8 max-w-3xl mx-auto">
            We help international buyers source premium, sustainable trend-setting products from trusted factories
            across India — with full support from development to delivery.
          </p>
        </div>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12"
          style={{ animation: isVisible ? "fadeInUp 0.8s ease-out 0.2s both" : "none" }}
        >
          <button className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300">
            Explore Solutions
          </button>
          <button className="px-8 py-4 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300">
            Learn More
          </button>
        </div>

        <div
          className="grid grid-cols-3 gap-8 mt-20 pt-12 border-t border-border"
          style={{ animation: isVisible ? "fadeInUp 0.8s ease-out 0.4s both" : "none" }}
        >
          <div className="hover:scale-110 transition-transform duration-300 cursor-default">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2 animate-pulse-slow">500+</div>
            <p className="text-muted-foreground">Factory Partners</p>
          </div>
          <div className="hover:scale-110 transition-transform duration-300 cursor-default">
            <div
              className="text-3xl md:text-4xl font-bold text-primary mb-2 animate-pulse-slow"
              style={{ animationDelay: "0.3s" }}
            >
              50+
            </div>
            <p className="text-muted-foreground">Countries Served</p>
          </div>
          <div className="hover:scale-110 transition-transform duration-300 cursor-default">
            <div
              className="text-3xl md:text-4xl font-bold text-primary mb-2 animate-pulse-slow"
              style={{ animationDelay: "0.6s" }}
            >
              1000+
            </div>
            <p className="text-muted-foreground">Global Clients</p>
          </div>
        </div>
      </div>
    </section>
  )
}
