import { Target, Eye, Award, Users } from "lucide-react"

const AboutUs = () => {
  return (
    <section id="about" className="py-24 px-4 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-5xl font-black text-gray-900 mb-8">About Fresh Picked</h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Fresh Picked was born from a simple idea: connecting vegetable buyers directly with local sellers to
              create a healthier, more sustainable food ecosystem. We believe that everyone deserves access to fresh,
              affordable vegetables while supporting local farmers and entrepreneurs.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Our platform eliminates middlemen, reduces food waste, and creates economic opportunities for thousands of
              sellers across India. Through innovative chat-based negotiations and location-based listings, we're
              building the future of local commerce.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-green-100">
                <Target className="h-8 w-8 text-green-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Our Mission</h3>
                <p className="text-gray-600">To democratize access to fresh vegetables and empower local communities</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100">
                <Eye className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Our Vision</h3>
                <p className="text-gray-600">
                  A world where healthy food is accessible, affordable, and sustainable for all
                </p>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-3xl p-8 text-white">
              <Award className="h-12 w-12 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Award Winning Platform</h3>
              <p className="text-green-100 mb-6">
                Recognized as "Best Social Impact Startup" by Startup India and featured in leading publications
              </p>
              <div className="flex items-center space-x-4">
                <div className="bg-white/20 px-4 py-2 rounded-full">
                  <span className="font-semibold">2023 Winner</span>
                </div>
                <div className="bg-white/20 px-4 py-2 rounded-full">
                  <span className="font-semibold">Top 10 Startup</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl p-8 text-white">
              <Users className="h-12 w-12 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Community First</h3>
              <p className="text-blue-100 mb-6">
                Built by the community, for the community. Every feature is designed based on user feedback
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>24/7 Community Support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Regular User Meetups</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Feedback-Driven Development</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
