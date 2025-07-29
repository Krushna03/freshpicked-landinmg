"use client"

import type React from "react"
import { useState } from "react"
import { Mail, Bell, Gift } from "lucide-react"

const Newsletter = () => {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setEmail("")
    }
  }

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-green-600 via-green-700 to-green-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] opacity-5"></div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
            <div className="flex justify-center mb-8">
              <div className="bg-white/20 p-4 rounded-2xl">
                <Mail className="h-12 w-12 text-white" />
              </div>
            </div>

            <h2 className="text-5xl font-black text-white mb-6">Stay Fresh with Updates</h2>
            <p className="text-2xl text-green-100 mb-12 leading-relaxed">
              Get the latest news, tips, and exclusive offers delivered to your inbox
            </p>

            {!isSubscribed ? (
              <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="flex-1 px-6 py-4 rounded-xl text-gray-900 text-lg font-medium focus:outline-none focus:ring-4 focus:ring-white/30"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Subscribe Now
                  </button>
                </div>
              </form>
            ) : (
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <div className="bg-green-400 p-2 rounded-full">
                    <Gift className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Welcome to the Family!</h3>
                </div>
                <p className="text-green-100 text-lg">
                  Thank you for subscribing! Check your email for a special welcome offer.
                </p>
              </div>
            )}

            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="text-center">
                <div className="bg-white/20 p-3 rounded-xl w-fit mx-auto mb-4">
                  <Bell className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Weekly Updates</h3>
                <p className="text-green-100">Get notified about new features and seasonal vegetables</p>
              </div>
              <div className="text-center">
                <div className="bg-white/20 p-3 rounded-xl w-fit mx-auto mb-4">
                  <Gift className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Exclusive Offers</h3>
                <p className="text-green-100">Special discounts and early access to new features</p>
              </div>
              <div className="text-center">
                <div className="bg-white/20 p-3 rounded-xl w-fit mx-auto mb-4">
                  <span className="text-2xl">🥬</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Fresh Tips</h3>
                <p className="text-green-100">Cooking tips, storage advice, and nutrition facts</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Newsletter
