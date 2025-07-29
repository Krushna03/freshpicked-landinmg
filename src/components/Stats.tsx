"use client"

import { useState, useEffect } from "react"

const Stats = () => {
  const [counters, setCounters] = useState({
    users: 0,
    products: 0,
    cities: 0,
    transactions: 0,
  })

  const finalStats = {
    users: 25000,
    products: 15000,
    cities: 150,
    transactions: 50000,
  }

  useEffect(() => {
    const duration = 2000
    const steps = 60
    const increment = {
      users: finalStats.users / steps,
      products: finalStats.products / steps,
      cities: finalStats.cities / steps,
      transactions: finalStats.transactions / steps,
    }

    let currentStep = 0
    const timer = setInterval(() => {
      if (currentStep < steps) {
        setCounters({
          users: Math.floor(increment.users * currentStep),
          products: Math.floor(increment.products * currentStep),
          cities: Math.floor(increment.cities * currentStep),
          transactions: Math.floor(increment.transactions * currentStep),
        })
        currentStep++
      } else {
        setCounters(finalStats)
        clearInterval(timer)
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [])

  const stats = [
    {
      number: counters.users.toLocaleString() + "+",
      label: "Happy Users",
      description: "Active buyers and sellers",
      icon: "👥",
      color: "from-blue-400 to-blue-500",
    },
    {
      number: counters.products.toLocaleString() + "+",
      label: "Products Listed",
      description: "Fresh vegetables available",
      icon: "🥬",
      color: "from-green-400 to-green-500",
    },
    {
      number: counters.cities.toLocaleString() + "+",
      label: "Cities Covered",
      description: "Across India",
      icon: "🏙️",
      color: "from-purple-400 to-purple-500",
    },
    {
      number: counters.transactions.toLocaleString() + "+",
      label: "Successful Deals",
      description: "Completed transactions",
      icon: "🤝",
      color: "from-orange-400 to-orange-500",
    },
  ]

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-green-600 via-green-700 to-green-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] opacity-10"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-600/90 to-green-800/90"></div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-white mb-6">Our Growing Impact</h2>
          <p className="text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed">
            Join thousands of satisfied users who are already part of the Fresh Picked revolution
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="group">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 hover:bg-white/20 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
                <div className="text-center">
                  <div className="text-6xl mb-4">{stat.icon}</div>
                  <div className="text-5xl font-black text-white mb-2">{stat.number}</div>
                  <div className="text-2xl font-bold text-green-100 mb-2">{stat.label}</div>
                  <div className="text-green-200">{stat.description}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              "Fresh Picked has revolutionized how India buys and sells vegetables"
            </h3>
            <p className="text-xl text-green-100">- Featured in Economic Times, Business Standard, and Startup India</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stats
