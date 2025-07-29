"use client"

import { useState, useEffect } from "react"
import { Leaf, Menu, X, Sun, Moon, Sparkles } from "lucide-react"
import { useTheme } from "../context/ThemeContext"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { isDark, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
      setIsMenuOpen(false)
    }
  }

  const navItems = [
    { label: "Features", id: "features" },
    { label: "Videos", id: "reels" },
    { label: "How It Works", id: "how-it-works" },
    { label: "About", id: "about" },
    { label: "Reviews", id: "testimonials" },
  ]

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? `${isDark ? "bg-gray-900/95" : "bg-white/95"} backdrop-blur-xl shadow-2xl border-b ${
              isDark ? "border-gray-700" : "border-green-100"
            }`
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Enhanced Logo */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="relative">
              <div className="bg-gradient-to-br from-green-400 via-green-500 to-green-600 p-3 rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-12">
                <Leaf className="h-8 w-8 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Sparkles className="h-4 w-4 text-yellow-400 animate-pulse" />
              </div>
            </div>
            <div>
              <span className="text-3xl font-black bg-gradient-to-r from-green-500 via-green-600 to-green-700 bg-clip-text text-transparent group-hover:from-green-400 group-hover:to-green-800 transition-all duration-300">
                Fresh Picked
              </span>
              <div className={`text-xs font-medium ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                Your Local Marketplace
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 font-semibold transition-all duration-300 group ${
                  isDark ? "text-gray-300 hover:text-white" : "text-gray-700 hover:text-green-600"
                }`}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-green-600 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-3 rounded-xl transition-all duration-300 transform hover:scale-110 ${
                isDark ? "bg-gray-800 hover:bg-gray-700 text-yellow-400" : "bg-gray-100 hover:bg-gray-200 text-gray-600"
              }`}
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            {/* Enhanced Download Button */}
            <button className="relative overflow-hidden bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:from-green-600 hover:via-green-700 hover:to-green-800 text-white px-8 py-3 rounded-2xl font-bold transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 group">
              <span className="relative z-10">Download App</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-all duration-300 ${
                isDark ? "bg-gray-800 text-yellow-400" : "bg-gray-100 text-gray-600"
              }`}
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-lg transition-all duration-300 ${isDark ? "text-white" : "text-gray-900"}`}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            className={`lg:hidden mt-4 pb-4 border-t rounded-2xl shadow-2xl transition-all duration-300 ${
              isDark
                ? "border-gray-700 bg-gray-900/95 backdrop-blur-xl"
                : "border-green-100 bg-white/95 backdrop-blur-xl"
            }`}
          >
            <nav className="flex flex-col space-y-4 pt-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left px-4 py-3 font-semibold transition-all duration-300 rounded-xl ${
                    isDark
                      ? "text-gray-300 hover:text-green-600 hover:bg-gray-800"
                      : "text-gray-700 hover:text-green-600 hover:bg-green-50"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-xl font-bold w-fit mx-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Download App
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
