"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Store, MapPin, MessageCircle, Leaf, Star, ArrowRight, Play, Apple } from "lucide-react"

export default function LandingPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const features = [
    {
      icon: <ShoppingCart className="h-8 w-8 text-green-600" />,
      title: "Buy Fresh Vegetables",
      description: "Browse and purchase fresh vegetables from local sellers in your area",
    },
    {
      icon: <Store className="h-8 w-8 text-green-600" />,
      title: "Sell Your Produce",
      description: "List your own vegetables and reach customers in your neighborhood",
    },
    {
      icon: <MapPin className="h-8 w-8 text-green-600" />,
      title: "Location-Based Listings",
      description: "Find products nearby or explore listings from your entire region",
    },
    {
      icon: <MessageCircle className="h-8 w-8 text-green-600" />,
      title: "Direct Chat",
      description: "Negotiate prices and arrange purchases through built-in messaging",
    },
  ]

  const steps = [
    {
      step: "01",
      title: "Download & Register",
      description: "Get the app and create your account with email and password",
    },
    {
      step: "02",
      title: "Browse or List",
      description: "Buy fresh vegetables or list your own produce for sale",
    },
    {
      step: "03",
      title: "Chat & Negotiate",
      description: "Connect with buyers/sellers through our chat feature",
    },
    {
      step: "04",
      title: "Complete Transaction",
      description: "Finalize your deal and enjoy fresh, local vegetables",
    },
  ]

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Home Cook",
      content:
        "Fresh Picked has revolutionized how I buy vegetables. The quality is amazing and I love supporting local farmers!",
      rating: 5,
    },
    {
      name: "Rajesh Kumar",
      role: "Vegetable Farmer",
      content: "I can now sell directly to customers without middlemen. My income has increased significantly!",
      rating: 5,
    },
    {
      name: "Anita Patel",
      role: "Working Professional",
      content: "So convenient! I can order fresh vegetables during my lunch break and pick them up on my way home.",
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-green-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="bg-green-600 p-2 rounded-lg">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-900">Fresh Picked</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-700 hover:text-green-600 transition-colors">
                Features
              </a>
              <a href="#how-it-works" className="text-gray-700 hover:text-green-600 transition-colors">
                How It Works
              </a>
              <a href="#testimonials" className="text-gray-700 hover:text-green-600 transition-colors">
                Reviews
              </a>
              <Button className="bg-green-600 hover:bg-green-700">Download App</Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <Badge className="bg-green-100 text-green-800 mb-6 px-4 py-2">🥬 Fresh • Local • Direct</Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Your Local
              <span className="text-green-600 block">Vegetable Marketplace</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Buy fresh vegetables from local sellers or sell your own produce. Connect directly with your community
              through our easy-to-use mobile app.
            </p>

            {/* App Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button
                size="lg"
                className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-xl flex items-center space-x-3"
              >
                <Apple className="h-6 w-6" />
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-lg font-semibold">App Store</div>
                </div>
              </Button>
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl flex items-center space-x-3"
              >
                <Play className="h-6 w-6" />
                <div className="text-left">
                  <div className="text-xs">Get it on</div>
                  <div className="text-lg font-semibold">Google Play</div>
                </div>
              </Button>
            </div>

            {/* Hero Image/Phone Mockup */}
            <div className="relative max-w-md mx-auto">
              <div className="bg-gradient-to-br from-green-400 to-green-600 p-8 rounded-3xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="bg-white rounded-2xl p-6 shadow-inner">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="bg-green-600 p-1 rounded">
                        <Leaf className="h-4 w-4 text-white" />
                      </div>
                      <span className="font-semibold text-gray-900">Fresh Picked</span>
                    </div>
                    <div className="flex space-x-1">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-green-50 p-3 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-green-200 rounded-full"></div>
                        <div>
                          <div className="text-sm font-medium">Fresh Tomatoes</div>
                          <div className="text-xs text-gray-500">₹40/kg • 2km away</div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-green-200 rounded-full"></div>
                        <div>
                          <div className="text-sm font-medium">Organic Spinach</div>
                          <div className="text-xs text-gray-500">₹30/kg • 1km away</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Fresh Picked?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the future of vegetable shopping with our innovative marketplace
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-green-100 hover:border-green-300 transition-all duration-300 hover:shadow-lg group"
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4 bg-green-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Get started in just a few simple steps</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                {index < steps.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute top-8 -right-4 h-6 w-6 text-green-400" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-green-600">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <div className="text-green-100">Happy Users</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5,000+</div>
              <div className="text-green-100">Products Listed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-green-100">Cities Covered</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Users Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join thousands of satisfied customers who love Fresh Picked
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-green-100 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-600 to-green-700">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join the Fresh Picked community today and experience the future of vegetable shopping
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-xl flex items-center space-x-3"
            >
              <Apple className="h-6 w-6" />
              <div className="text-left">
                <div className="text-xs">Download on the</div>
                <div className="text-lg font-semibold">App Store</div>
              </div>
            </Button>
            <Button
              size="lg"
              className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-xl flex items-center space-x-3"
            >
              <Play className="h-6 w-6" />
              <div className="text-left">
                <div className="text-xs">Get it on</div>
                <div className="text-lg font-semibold">Google Play</div>
              </div>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-green-600 p-2 rounded-lg">
                  <Leaf className="h-6 w-6 text-white" />
                </div>
                <span className="text-2xl font-bold">Fresh Picked</span>
              </div>
              <p className="text-gray-400">Connecting communities through fresh, local vegetables.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Features</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Buy Vegetables</li>
                <li>Sell Produce</li>
                <li>Location-Based</li>
                <li>Direct Chat</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Help Center</li>
                <li>Contact Us</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Download</h3>
              <div className="space-y-3">
                <Button
                  variant="outline"
                  className="w-full justify-start text-gray-400 border-gray-700 hover:bg-gray-800 bg-transparent"
                >
                  <Apple className="h-5 w-5 mr-2" />
                  App Store
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start text-gray-400 border-gray-700 hover:bg-gray-800 bg-transparent"
                >
                  <Play className="h-5 w-5 mr-2" />
                  Google Play
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Fresh Picked. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
