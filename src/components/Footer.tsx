"use client"

import { Leaf, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube, Heart } from "lucide-react"
import { useTheme } from "../context/ThemeContext"

const Footer = () => {
  const { isDark } = useTheme()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  const handleHelpCenter = () => {
    // Navigate to help center
    window.open("/help-center", "_blank")
  }

  return (
    <footer
      className={`py-16 px-4 transition-colors duration-300 ${
        isDark
          ? "bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800"
          : "bg-gradient-to-br from-green-800 via-green-900 to-green-800"
      }`}
    >
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-green-400 to-green-600 p-3 rounded-2xl shadow-xl">
                <Leaf className="h-8 w-8 text-white" />
              </div>
              <div>
                <span className="text-3xl font-black text-white">Fresh Picked</span>
                <div className="text-green-300 text-sm">Your Local Marketplace</div>
              </div>
            </div>
            <p className="text-green-100 leading-relaxed text-lg">
              Connecting communities through fresh, local vegetables. Building a healthier, more sustainable future
              together.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, index) => (
                <button
                  key={index}
                  className="bg-white/10 hover:bg-white/20 p-3 rounded-xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                >
                  <Icon className="h-6 w-6 text-white" />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {[
                { label: "Features", id: "features" },
                { label: "How It Works", id: "how-it-works" },
                { label: "About Us", id: "about" },
                { label: "Testimonials", id: "testimonials" },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-green-200 hover:text-white transition-colors duration-300 text-lg font-medium hover:translate-x-2 transform transition-transform"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Support</h3>
            <ul className="space-y-4">
              {[
                { label: "Help Center", action: handleHelpCenter },
                { label: "Contact Us", action: () => window.open("mailto:support@freshpicked.com") },
                { label: "Privacy Policy", action: () => window.open("/privacy") },
                { label: "Terms of Service", action: () => window.open("/terms") },
                { label: "FAQ", action: () => scrollToSection("faq") },
              ].map((item, index) => (
                <li key={index}>
                  <button
                    onClick={item.action}
                    className="text-green-200 hover:text-white transition-colors duration-300 text-lg font-medium hover:translate-x-2 transform transition-transform"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="bg-white/10 p-2 rounded-lg">
                  <Mail className="h-5 w-5 text-green-300" />
                </div>
                <span className="text-green-100">support@freshpicked.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-white/10 p-2 rounded-lg">
                  <Phone className="h-5 w-5 text-green-300" />
                </div>
                <span className="text-green-100">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-white/10 p-2 rounded-lg">
                  <MapPin className="h-5 w-5 text-green-300" />
                </div>
                <span className="text-green-100">Mumbai, India</span>
              </div>
            </div>

            {/* App Download */}
            <div className="mt-8 space-y-3">
              <h4 className="text-white font-semibold text-lg">Download Now</h4>
              <div className="space-y-3">
                <button className="w-full bg-black hover:bg-gray-800 text-white px-4 py-3 rounded-xl flex items-center space-x-3 transition-all duration-300 transform hover:scale-105">
                  <div className="text-2xl">📱</div>
                  <div className="text-left">
                    <div className="text-xs opacity-80">Download on</div>
                    <div className="font-bold">App Store</div>
                  </div>
                </button>
                <button className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-xl flex items-center space-x-3 transition-all duration-300 transform hover:scale-105">
                  <div className="text-2xl">🤖</div>
                  <div className="text-left">
                    <div className="text-xs opacity-80">Get it on</div>
                    <div className="font-bold">Google Play</div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-green-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-green-200">
              <span>&copy; 2025 Fresh Picked. All rights reserved.</span>
              <Heart className="h-4 w-4 text-red-400 animate-pulse" />
            </div>
            <div className="flex items-center space-x-6 text-green-200">
              <span>Made with ❤️ in India</span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm">25,000+ Happy Users</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
