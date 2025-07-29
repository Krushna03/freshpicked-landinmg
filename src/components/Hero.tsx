"use client"

import { useState, useEffect } from "react"
import { Play, Apple, Star, ArrowRight, Zap } from "lucide-react"
import { useTheme } from "../context/ThemeContext"

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)
  const { isDark } = useTheme()

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300)
    return () => clearTimeout(timer)
  }, [])

  const handleAppStoreClick = () => {
    window.open("https://apps.apple.com/app/fresh-picked", "_blank")
  }

  const handleGooglePlayClick = () => {
    window.open("https://play.google.com/store/apps/details?id=com.freshpicked", "_blank")
  }

  return (
    <section
      className={`relative py-32 px-4 overflow-hidden transition-colors duration-300 ${
        isDark
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
          : "bg-gradient-to-br from-green-50 via-white to-green-50"
      }`}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse"></div>
      </div>

      <div className="container mx-auto text-center relative z-10 pt-20">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Animated Badge */}
          <div
            className={`inline-flex items-center px-8 py-4 rounded-full mb-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-bounce-slow ${
              isDark
                ? "bg-gradient-to-r from-green-900 to-green-800 text-green-200"
                : "bg-gradient-to-r from-green-100 to-green-200 text-green-800"
            }`}
          >
            <Zap className="h-5 w-5 mr-2 animate-pulse" />
            <span className="font-bold text-lg">🥬 Fresh • Local • Direct</span>
          </div>

          {/* Main Heading with Gradient Animation */}
          <h1
            className={`text-6xl md:text-8xl font-black mb-8 leading-tight ${isDark ? "text-white" : "text-gray-900"}`}
          >
            Your Local
            <span className="block bg-gradient-to-r from-green-400 via-green-500 to-green-600 bg-clip-text text-transparent animate-gradient-x bg-300% mt-4">
              Vegetable Marketplace
            </span>
          </h1>

          {/* Enhanced Subheading */}
          <p
            className={`text-2xl mb-12 max-w-4xl mx-auto leading-relaxed font-medium ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Buy fresh vegetables from local sellers or sell your own produce. Connect directly with your community
            through our easy-to-use mobile app with{" "}
            <span className="text-green-500 font-bold animate-pulse">chat-based negotiations</span>.
          </p>

          {/* Animated Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {["🛒 Buy Fresh", "🏪 Sell Direct", "📍 Location Based", "💬 Chat & Negotiate"].map((feature, index) => (
              <div
                key={index}
                className={`px-6 py-3 rounded-full shadow-xl border transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 animate-fadeInUp ${
                  isDark
                    ? "bg-gray-800 border-gray-700 text-gray-200 hover:bg-gray-700"
                    : "bg-white border-green-100 text-gray-700 hover:bg-green-50"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="font-semibold text-lg">{feature}</span>
              </div>
            ))}
          </div>

          {/* Enhanced App Download Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button
              onClick={handleAppStoreClick}
              className="group relative overflow-hidden bg-black hover:bg-gray-800 text-white px-12 py-6 rounded-3xl flex items-center space-x-4 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Apple className="h-10 w-10 relative z-10 group-hover:animate-bounce" />
              <div className="text-left relative z-10">
                <div className="text-sm opacity-80">Download on the</div>
                <div className="text-2xl font-bold">App Store</div>
              </div>
              <ArrowRight className="h-6 w-6 relative z-10 group-hover:translate-x-2 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </button>

            <button
              onClick={handleGooglePlayClick}
              className="group relative overflow-hidden bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:from-green-600 hover:via-green-700 hover:to-green-800 text-white px-12 py-6 rounded-3xl flex items-center space-x-4 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Play className="h-10 w-10 relative z-10 group-hover:animate-bounce" />
              <div className="text-left relative z-10">
                <div className="text-sm opacity-90">Get it on</div>
                <div className="text-2xl font-bold">Google Play</div>
              </div>
              <ArrowRight className="h-6 w-6 relative z-10 group-hover:translate-x-2 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </button>
          </div>

          {/* Enhanced Rating Display */}
          <div className="flex items-center justify-center space-x-3 mb-12 animate-fadeInUp">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-8 w-8 text-yellow-400 fill-current animate-twinkle"
                  style={{ animationDelay: `${i * 100}ms` }}
                />
              ))}
            </div>
            <span className={`text-xl font-bold ${isDark ? "text-gray-300" : "text-gray-600"}`}>
              4.8/5 from 25,000+ users
            </span>
          </div>

          {/* Enhanced Hero Image */}
          <div className="relative max-w-lg mx-auto animate-fadeInUp">
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 rounded-3xl blur-2xl opacity-30 animate-pulse"></div>
            <div className="relative bg-gradient-to-br from-green-400 via-green-500 to-green-600 p-10 rounded-3xl shadow-2xl transform hover:rotate-1 transition-all duration-500 hover:shadow-3xl">
              <div className={`rounded-2xl p-8 shadow-inner ${isDark ? "bg-gray-800" : "bg-white"}`}>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="bg-green-600 p-2 rounded-lg animate-pulse">
                      <span className="text-white font-bold text-lg">FP</span>
                    </div>
                    <span className={`font-bold text-xl ${isDark ? "text-white" : "text-gray-900"}`}>Fresh Picked</span>
                  </div>
                  <div className="flex space-x-1">
                    <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
                    <div className="w-4 h-4 bg-yellow-500 rounded-full animate-pulse delay-100"></div>
                    <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse delay-200"></div>
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    { name: "Fresh Tomatoes", price: "₹40/kg", distance: "2km away", emoji: "🍅" },
                    { name: "Organic Spinach", price: "₹30/kg", distance: "1km away", emoji: "🥬" },
                    { name: "Green Capsicum", price: "₹50/kg", distance: "3km away", emoji: "🫑" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className={`bg-gradient-to-r p-4 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105 animate-slideInLeft ${
                        isDark ? "from-green-900/30 to-green-800/30" : "from-green-50 to-green-100"
                      }`}
                      style={{ animationDelay: `${index * 200}ms` }}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="text-3xl animate-bounce" style={{ animationDelay: `${index * 100}ms` }}>
                          {item.emoji}
                        </div>
                        <div className="flex-1">
                          <div className={`font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>{item.name}</div>
                          <div className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                            {item.price} • {item.distance}
                          </div>
                        </div>
                        <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                          Chat
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
