"use client"

import React from "react"
import { ShoppingCart, Store, MapPin, MessageCircle, Shield, Clock, Users, Zap } from "lucide-react"
import { useTheme } from "../context/ThemeContext"

const Features = () => {
  const { isDark } = useTheme()

  const features = [
    {
      icon: <ShoppingCart className="h-10 w-10" />,
      title: "Buy Fresh Vegetables",
      description: "Browse and purchase fresh vegetables from local sellers in your area with guaranteed quality",
      color: "from-green-400 to-green-500",
      id: "buy-vegetables",
    },
    {
      icon: <Store className="h-10 w-10" />,
      title: "Sell Your Produce",
      description: "List your own vegetables and reach customers in your neighborhood to maximize your profits",
      color: "from-blue-400 to-blue-500",
      id: "sell-produce",
    },
    {
      icon: <MapPin className="h-10 w-10" />,
      title: "Location-Based Listings",
      description: "Find products nearby or explore listings from your entire region with smart location filtering",
      color: "from-purple-400 to-purple-500",
      id: "location-based",
    },
    {
      icon: <MessageCircle className="h-10 w-10" />,
      title: "Direct Chat",
      description: "Negotiate prices and arrange purchases through built-in messaging system",
      color: "from-orange-400 to-orange-500",
      id: "direct-chat",
    },
    {
      icon: <Shield className="h-10 w-10" />,
      title: "Secure Transactions",
      description: "Safe and secure platform with verified sellers and buyers for peace of mind",
      color: "from-red-400 to-red-500",
      id: "secure-transactions",
    },
    {
      icon: <Clock className="h-10 w-10" />,
      title: "Real-Time Updates",
      description: "Get instant notifications about new listings, messages, and price changes",
      color: "from-indigo-400 to-indigo-500",
      id: "real-time-updates",
    },
    {
      icon: <Users className="h-10 w-10" />,
      title: "Community Driven",
      description: "Join a thriving community of vegetable lovers, farmers, and health-conscious buyers",
      color: "from-pink-400 to-pink-500",
      id: "community-driven",
    },
    {
      icon: <Zap className="h-10 w-10" />,
      title: "Quick & Easy",
      description: "Simple interface designed for all age groups with intuitive navigation and features",
      color: "from-yellow-400 to-yellow-500",
      id: "quick-easy",
    },
  ]

  const handleFeatureClick = (featureId: string) => {
    console.log(`Feature clicked: ${featureId}`)
    // Add your navigation logic here
  }

  return (
    <section
      id="features"
      className={`py-24 px-4 transition-colors duration-300 ${isDark ? "bg-gray-900" : "bg-white"}`}
    >
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <h2 className={`text-5xl font-black mb-6 animate-fadeInUp ${isDark ? "text-white" : "text-gray-900"}`}>
            Why Choose Fresh Picked?
          </h2>
          <p
            className={`text-2xl max-w-4xl mx-auto leading-relaxed animate-fadeInUp ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
            style={{ animationDelay: "200ms" }}
          >
            Experience the future of vegetable shopping with our innovative marketplace that connects communities
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              onClick={() => handleFeatureClick(feature.id)}
              className={`group relative border rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 cursor-pointer animate-fadeInUp ${
                isDark ? "bg-gray-800 border-gray-700 hover:bg-gray-750" : "bg-white border-gray-100 hover:bg-gray-50"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}
              ></div>

              <div className="relative z-10">
                <div className="mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  <div
                    className={`p-4 rounded-2xl bg-gradient-to-br ${feature.color} shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                  >
                    {React.cloneElement(feature.icon, { className: "h-10 w-10 text-white" })}
                  </div>
                </div>
                <h3
                  className={`text-2xl font-bold mb-4 text-center group-hover:text-green-600 transition-colors duration-300 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  {feature.title}
                </h3>
                <p className={`text-center leading-relaxed ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                  {feature.description}
                </p>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
