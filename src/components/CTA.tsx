import { Play, Apple, ArrowRight, Star } from "lucide-react"

const CTA = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-green-600 via-green-700 to-green-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-green-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      
      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-6xl font-black text-white mb-8 leading-tight">
            Ready to Transform Your
            <span className="block text-green-300">Vegetable Shopping?</span>
          </h2>
          
          <p className="text-2xl text-green-100 mb-12 leading-relaxed">
            Join over 25,000 happy users who are already enjoying fresh, local vegetables at great prices
          </p>

          {/* Rating Display */}
          <div className="flex items-center justify-center space-x-2 mb-12">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-8 w-8 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="text-white text-xl font-semibold ml-4">4.8/5 from 10,000+ reviews</span>
          </div>

          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button className="group bg-white text-green-600 hover:bg-gray-100 px-12 py-6 rounded-2xl flex items-center space-x-4 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
              <Apple className="h-10 w-10" />
              <div className="text-left">
                <div className="text-sm opacity-70">Download on the</div>
                <div className="text-2xl font-bold">App Store</div>
              </div>
              <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="group bg-black hover:bg-gray-800 text-white px-12 py-6 rounded-2xl flex items-center space-x-4 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
              <Play className="h-10 w-10" />
              <div className="text-left">
                <div className="text-sm opacity-70">Get it on</div>
                <div className="text-2xl font-bold">Google Play</div>
              </div>
              <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Features Highlight */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
            <h3\
