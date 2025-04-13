import React from 'react'
import { Hero, ContactSection, FeaturesProducts } from "@/components"
const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <FeaturesProducts />
      <ContactSection />
    </>
  )
}

export default Home