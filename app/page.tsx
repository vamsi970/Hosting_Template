"use client"

import Header from "@/components/header"
import Hero from "@/components/hero"
import WhyChooseUs from "@/components/why-choose-us"
import Services from "@/components/services"
import ProductCategories from "@/components/product-categories"
import FactoryNetwork from "@/components/factory-network"
import GlobalPresence from "@/components/global-presence"
import Clients from "@/components/clients"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <WhyChooseUs />
      <Services />
      <ProductCategories />
      <FactoryNetwork />
      <GlobalPresence />
      <Clients />
      <Contact />
      <Footer />
    </main>
  )
}
