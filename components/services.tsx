"use client"

import { useEffect, useRef, useState } from "react"
import { X } from "lucide-react"

interface ServiceProps {
  title: string
  description: string
  index: number
}

function ServiceCard({ title, description, index }: ServiceProps) {
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
        animation: isVisible ? `fadeInUp 0.6s ease-out ${index * 0.1}s both` : "none",
      }}
    >
      <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 h-full flex flex-col border border-border hover:border-primary cursor-pointer hover:scale-105 hover:shadow-2xl">
        <h3 className="text-lg font-bold text-foreground mb-3">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed flex-grow">{description}</p>
      </div>
    </div>
  )
}

export default function Services() {
  const [selectedService, setSelectedService] = useState<number | null>(null)

  const services = [
    {
      title: "Design & Trend Forecasting",
      description: "Seasonal catalog curation, moodboards, trend reports and bespoke design solutions.",
    },
    {
      title: "Product Development",
      description: "Material sourcing, prototyping, sampling, custom finishes and personalized branding.",
    },
    {
      title: "Compliance & Quality Control",
      description: "Factory audits, lab tests, inline & final inspection, packaging validation and AQL checks.",
    },
    {
      title: "Production Management",
      description: "Lead-time tracking, vendor management, order consolidation and workflow optimization.",
    },
    {
      title: "Logistics & Delivery",
      description: "Export documentation, custom clearance, shipping, last-mile delivery and coordination.",
    },
    {
      title: "Private Label & Branding",
      description: "Tags, packaging, barcodes, inserts and brand-specific production workflows.",
    },
  ]

  return (
    <section id="services" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance animate-fadeInUp">Our Services</h2>
        <p className="text-muted-foreground text-lg mb-12 max-w-2xl animate-fadeIn" style={{ animationDelay: "0.1s" }}>
          End-to-end sourcing solutions designed to accelerate your business growth
        </p>

        {selectedService === null ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn auto-rows-max">
            {services.map((service, index) => (
              <div key={index} onClick={() => setSelectedService(index)} className="h-full">
                <ServiceCard {...service} index={index} />
              </div>
            ))}
          </div>
        ) : (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
            <div className="bg-card rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-scaleIn shadow-2xl">
              <div className="sticky top-0 flex justify-between items-center p-6 border-b border-border bg-card">
                <h2 className="text-3xl font-bold text-foreground">{services[selectedService].title}</h2>
                <button
                  onClick={() => setSelectedService(null)}
                  className="p-2 hover:bg-muted rounded-lg transition-colors duration-200 hover:scale-110"
                >
                  <X className="w-6 h-6 text-foreground" />
                </button>
              </div>

              <div className="p-8">
                <div className="mb-8 p-6 bg-primary/10 rounded-2xl border border-primary/20">
                  <p className="text-lg text-foreground leading-relaxed">{services[selectedService].description}</p>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-3">Key Benefits</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-3">
                        <span className="text-primary font-bold">✓</span>
                        <span>Professional expertise and industry knowledge</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary font-bold">✓</span>
                        <span>Streamlined processes and faster turnaround</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary font-bold">✓</span>
                        <span>Cost optimization without compromising quality</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary font-bold">✓</span>
                        <span>End-to-end support from concept to delivery</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-primary mb-3">Our Approach</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We combine industry best practices with innovative solutions to deliver exceptional results. Our
                      dedicated team works closely with you to understand your unique requirements and deliver tailored
                      solutions that exceed expectations.
                    </p>
                  </div>

                  <button
                    onClick={() => setSelectedService(null)}
                    className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-bold transition-all duration-300 hover:shadow-lg hover:scale-105"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
