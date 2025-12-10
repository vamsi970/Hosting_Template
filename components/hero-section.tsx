"use client"

import { useEffect, useState } from "react"

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden">
      {/* Map Background */}
      <div
        className="absolute inset-0 opacity-20 z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1096 780'%3E%3Cpath fill='%23e5e7eb' d='M0 0h1096v780H0z'/%3E%3C/svg%3E")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* SVG Map - Map2 */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1096 780"
          className="w-full h-full opacity-60"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: "#10b981", stopOpacity: 0.3 }} />
              <stop offset="100%" style={{ stopColor: "#0d9488", stopOpacity: 0.1 }} />
            </linearGradient>
          </defs>

          {/* World Map Paths - Simplified representation */}
          <g fill="url(#mapGradient)" stroke="#d1d5db" strokeWidth="0.5">
            {/* North America */}
            <path d="M 150 200 L 250 150 L 280 250 L 220 280 Z" opacity="0.6" />
            {/* Europe */}
            <path d="M 420 180 L 480 150 L 490 220 L 450 240 Z" opacity="0.6" />
            {/* Asia */}
            <path d="M 600 200 L 800 180 L 820 300 L 620 320 Z" opacity="0.6" />
            {/* Africa */}
            <path d="M 480 320 L 550 300 L 580 450 L 500 460 Z" opacity="0.6" />
            {/* South America */}
            <path d="M 250 380 L 320 360 L 330 520 L 260 520 Z" opacity="0.6" />
            {/* Australia */}
            <path d="M 800 450 L 850 440 L 860 520 L 810 530 Z" opacity="0.6" />
          </g>

          {/* Connection points */}
          <g fill="#10b981" opacity="0.8">
            <circle cx="200" cy="230" r="4" />
            <circle cx="450" cy="210" r="4" />
            <circle cx="700" cy="250" r="4" />
            <circle cx="520" cy="380" r="4" />
            <circle cx="300" cy="430" r="4" />
            <circle cx="830" cy="480" r="4" />
          </g>

          {/* Connection lines */}
          <g stroke="#10b981" strokeWidth="1" opacity="0.3" fill="none">
            <line x1="200" y1="230" x2="450" y2="210" />
            <line x1="450" y1="210" x2="700" y2="250" />
            <line x1="200" y1="230" x2="520" y2="380" />
            <line x1="450" y1="210" x2="520" y2="380" />
            <line x1="520" y1="380" x2="830" y2="480" />
          </g>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex flex-col justify-center items-center text-center">
        <div
          className={`transition-all duration-1000 transform ${
            isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <h1
            className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight"
            style={{
              animation: "fadeInUp 0.8s ease-out forwards",
            }}
          >
            Your Global{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Sourcing Partner
            </span>
          </h1>

          <p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
            style={{
              animation: "fadeInUp 0.8s ease-out 0.2s forwards",
              opacity: 0,
            }}
          >
            Premium products and trusted partnerships for international buyers. We connect you with the best
            manufacturers and suppliers from around the world.
          </p>

          <div
            className="flex gap-4 justify-center flex-wrap"
            style={{
              animation: "fadeInUp 0.8s ease-out 0.4s forwards",
              opacity: 0,
            }}
          >
            <button className="px-8 py-4 bg-emerald-600 text-white font-semibold rounded-full hover:bg-emerald-700 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
              Start Partnership
            </button>
            <button className="px-8 py-4 bg-white text-emerald-600 font-semibold rounded-full border-2 border-emerald-600 hover:bg-emerald-50 hover:shadow-lg transition-all duration-300 cursor-pointer">
              Learn More
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          style={{
            animation: "fadeIn 0.8s ease-out 0.8s forwards",
            opacity: 0,
          }}
        >
          <svg
            className="w-6 h-6 text-emerald-600 animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-background to-transparent z-5" />
    </section>
  )
}
