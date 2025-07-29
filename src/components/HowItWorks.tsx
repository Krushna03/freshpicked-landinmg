import React from "react"
import { ArrowRight, Download, Search, MessageSquare, CheckCircle } from "lucide-react"

const HowItWorks = () => {
  const steps = [
    {
      step: "01",
      icon: <Download className="h-8 w-8" />,
      title: "Download & Register",
      description:
        "Get the Fresh Picked app from App Store or Google Play and create your account with email and password",
      color: "from-blue-400 to-blue-500",
    },
    {
      step: "02",
      icon: <Search className="h-8 w-8" />,
      title: "Browse or List",
      description: "Buy fresh vegetables from nearby sellers or list your own produce with photos and descriptions",
      color: "from-green-400 to-green-500",
    },
    {
      step: "03",
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Chat & Negotiate",
      description: "Connect with buyers/sellers through our secure chat feature to discuss prices and arrange pickup",
      color: "from-purple-400 to-purple-500",
    },
    {
      step: "04",
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Complete Transaction",
      description: "Finalize your deal, meet in person, and enjoy fresh, local vegetables at great prices",
      color: "from-orange-400 to-orange-500",
    },
  ]

  return (
    <section id="how-it-works" className="py-24 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-black text-gray-900 mb-6">How It Works</h2>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Get started with Fresh Picked in just four simple steps and join thousands of happy users
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-100 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
                {/* Step Number */}
                <div
                  className={`bg-gradient-to-br ${step.color} text-white w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-black mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  {step.step}
                </div>

                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className={`bg-gradient-to-br ${step.color} p-3 rounded-xl shadow-lg`}>
                    {React.cloneElement(step.icon, { className: "h-8 w-8 text-white" })}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{step.title}</h3>
                <p className="text-gray-600 text-center leading-relaxed">{step.description}</p>
              </div>

              {/* Arrow */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ArrowRight className="h-8 w-8 text-green-400" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-10 py-4 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
            Start Your Journey Today
          </button>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
