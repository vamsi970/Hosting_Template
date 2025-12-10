"use client"

import { useEffect, useRef, useState } from "react"
import { X } from "lucide-react"

interface CategoryProps {
  title: string
  description: string
  image: string
  index: number
}

function CategoryCard({ title, description, image, index }: CategoryProps) {
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
      <div className="group rounded-2xl overflow-hidden border border-border hover:border-primary transition-all duration-300 cursor-pointer hover:shadow-2xl hover:scale-105 h-full flex flex-col">
        <div className="bg-muted h-48 overflow-hidden relative flex-shrink-0">
          <div className="w-full h-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <img
              src={image || "/placeholder.svg"}
              alt={title}
              className="w-full h-full object-cover"
              onError={(e) => {
                ;(e.target as HTMLImageElement).src = "/placeholder.svg?height=200&width=400&query=" + title
              }}
            />
          </div>
        </div>
        <div className="bg-card p-6 flex-grow">
          <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default function ProductCategories() {
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null)

  const categories = [
    {
      title: "Furniture & Home Décor",
      description: "Wood, metal, resin, terracotta, glass and sustainable décor products crafted across India.",
      image: "/furniture-and-decor.jpg",
    },
    {
      title: "Home Textiles",
      description: "Bedding, cushions, throws, bath and table linens made with fine Indian craftsmanship.",
      image: "/home-textiles.jpg",
    },
    {
      title: "Clothing & Accessories",
      description: "Men's, women's, kids wear, gymwear, knitwear, bags, leather goods & scarves.",
      image: "/clothing-and-accessories.jpg",
    },
    {
      title: "Serveware & Kitchenware",
      description: "Premium ceramics, wooden serveware, stainless steel & contemporary kitchen accessories.",
      image: "/serveware-and-kitchenware.jpg",
    },
    {
      title: "Rugs & Carpets",
      description: "Hand-knotted, flatweave, tufted and artisanal rugs from India's rug-making hubs.",
      image: "/rugs-and-carpets.jpg",
    },
    {
      title: "Gifting & Handicrafts",
      description: "Paper goods, aroma products, candles, handicrafts and curated gifting collections.",
      image: "/gifting-and-handicrafts.jpg",
    },
  ]

  return (
    <section id="products" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-balance animate-fadeInUp">Product Categories</h2>

        {selectedProduct === null ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn">
            {categories.map((category, index) => (
              <div key={index} onClick={() => setSelectedProduct(index)} className="cursor-pointer h-full">
                <CategoryCard {...category} index={index} />
              </div>
            ))}
          </div>
        ) : (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
            <div className="bg-card rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-hidden animate-scaleIn shadow-2xl flex">
              <div className="w-1/2 bg-muted overflow-y-auto">
                <img
                  src={categories[selectedProduct].image || "/placeholder.svg"}
                  alt={categories[selectedProduct].title}
                  className="w-full h-full object-cover animate-fadeIn"
                  onError={(e) => {
                    ;(e.target as HTMLImageElement).src =
                      "/placeholder.svg?height=600&width=400&query=" + categories[selectedProduct].title
                  }}
                />
              </div>

              <div className="w-1/2 overflow-y-auto flex flex-col">
                <div className="sticky top-0 flex justify-between items-center p-6 border-b border-border bg-card">
                  <h2 className="text-3xl font-bold text-foreground">{categories[selectedProduct].title}</h2>
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="p-2 hover:bg-muted rounded-lg transition-colors duration-200 hover:scale-110"
                  >
                    <X className="w-6 h-6 text-foreground" />
                  </button>
                </div>

                <div className="p-8 flex-grow flex flex-col">
                  <div className="space-y-6 flex-grow">
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-3">Description</h3>
                      <p className="text-muted-foreground leading-relaxed text-lg">
                        {categories[selectedProduct].description}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-primary mb-3">Product Highlights</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-3">
                          <span className="text-primary font-bold">•</span>
                          <span>Premium quality materials sourced across India</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-primary font-bold">•</span>
                          <span>Expert craftsmanship with attention to detail</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-primary font-bold">•</span>
                          <span>Customization options available</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-primary font-bold">•</span>
                          <span>Competitive pricing and reliable delivery</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-bold transition-all duration-300 hover:shadow-lg hover:scale-105 mt-6"
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
