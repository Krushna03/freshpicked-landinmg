"use client"

import { useState, useEffect } from "react"
import { ThemeProvider } from "./context/ThemeContext"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Features from "./components/Features"
import VideoReels from "./components/VideoReels"
import HowItWorks from "./components/HowItWorks"
import Benefits from "./components/Benefits"
import Stats from "./components/Stats"
import AboutUs from "./components/AboutUs"
import Testimonials from "./components/Testimonials"
import FAQ from "./components/FAQ"
import Newsletter from "./components/Newsletter"
import CTA from "./components/CTA"
import Footer from "./components/Footer"
import "./App.css"

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-400 via-green-500 to-green-600 flex items-center justify-center">
        <div className="text-center">
          <div className="relative">
            <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-2xl animate-bounce">
              <span className="text-4xl">🥬</span>
            </div>
            <div className="absolute inset-0 w-32 h-32 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
          </div>
          <h1 className="text-4xl font-black text-white mt-8 animate-pulse">Fresh Picked</h1>
          <p className="text-white/80 mt-2">Loading your fresh experience...</p>
        </div>
      </div>
    )
  }

  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <Header />
        <Hero />
        <Features />
        <VideoReels />
        <HowItWorks />
        <Benefits />
        <Stats />
        <AboutUs />
        <Testimonials />
        <FAQ />
        <Newsletter />
        <CTA />
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
