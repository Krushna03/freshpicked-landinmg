import { TrendingUp, Heart, Leaf, DollarSign } from "lucide-react"

const Benefits = () => {
  const benefits = [
    {
      icon: <Heart className="h-12 w-12 text-red-500" />,
      title: "Healthier Lifestyle",
      description:
        "Access to fresh, organic vegetables directly from local farmers ensures better nutrition for your family",
      stats: "95% fresher than supermarket produce",
    },
    {
      icon: <DollarSign className="h-12 w-12 text-green-500" />,
      title: "Better Prices",
      description: "Cut out the middleman and get vegetables at farm prices while sellers earn more profit",
      stats: "Save up to 40% on grocery bills",
    },
    {
      icon: <Leaf className="h-12 w-12 text-green-600" />,
      title: "Eco-Friendly",
      description: "Reduce carbon footprint by buying locally grown vegetables with minimal transportation",
      stats: "70% less carbon emissions",
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-blue-500" />,
      title: "Support Local Economy",
      description: "Help local farmers and small businesses thrive by connecting them directly with consumers",
      stats: "₹50,000+ earned by local farmers monthly",
    },
  ]

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-black text-gray-900 mb-6">Benefits That Matter</h2>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Fresh Picked isn't just an app - it's a movement towards healthier living and stronger communities
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                      {benefit.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                    <p className="text-gray-600 text-lg leading-relaxed mb-4">{benefit.description}</p>
                    <div className="bg-gradient-to-r from-green-100 to-blue-100 px-4 py-2 rounded-full inline-block">
                      <span className="text-green-700 font-semibold">{benefit.stats}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits
