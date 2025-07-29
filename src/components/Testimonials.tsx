import { Star, Quote } from "lucide-react"

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Home Cook & Mother",
      location: "Mumbai",
      content:
        "Fresh Picked has completely changed how I shop for vegetables. The quality is amazing and I love supporting local farmers. My family is eating healthier than ever!",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Rajesh Kumar",
      role: "Vegetable Farmer",
      location: "Punjab",
      content:
        "I can now sell directly to customers without middlemen taking huge cuts. My income has increased by 60% and I have regular customers who appreciate my organic produce!",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Anita Patel",
      role: "Working Professional",
      location: "Bangalore",
      content:
        "So convenient! I can order fresh vegetables during my lunch break and pick them up on my way home. The chat feature makes it easy to coordinate with sellers.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Suresh Reddy",
      role: "Retired Teacher",
      location: "Hyderabad",
      content:
        "At my age, I appreciate the personal touch. Sellers are so friendly and helpful. It's like shopping at the old neighborhood market but with modern convenience.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Meera Joshi",
      role: "Nutritionist",
      location: "Delhi",
      content:
        "I recommend Fresh Picked to all my clients. The vegetables are fresher, more nutritious, and you can actually talk to the growers about their farming practices.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Arjun Singh",
      role: "Restaurant Owner",
      location: "Jaipur",
      content:
        "For my restaurant, quality and freshness are everything. Fresh Picked connects me with the best local suppliers. My customers can taste the difference!",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  return (
    <section id="testimonials" className="py-24 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-black text-gray-900 mb-6">What Our Community Says</h2>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Join thousands of satisfied customers who have transformed their vegetable shopping experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group">
              <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-100 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 relative">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-10">
                  <Quote className="h-12 w-12 text-green-600" />
                </div>

                {/* Rating */}
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-600 text-lg leading-relaxed mb-8 italic">"{testimonial.content}"</p>

                {/* Author */}
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-green-100"
                  />
                  <div>
                    <div className="font-bold text-gray-900 text-lg">{testimonial.name}</div>
                    <div className="text-green-600 font-medium">{testimonial.role}</div>
                    <div className="text-gray-500 text-sm">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-3xl p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Trusted by Thousands</h3>
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl font-black text-green-600 mb-2">4.8/5</div>
                <div className="text-gray-600">App Store Rating</div>
              </div>
              <div>
                <div className="text-4xl font-black text-blue-600 mb-2">4.9/5</div>
                <div className="text-gray-600">Google Play Rating</div>
              </div>
              <div>
                <div className="text-4xl font-black text-purple-600 mb-2">98%</div>
                <div className="text-gray-600">Customer Satisfaction</div>
              </div>
              <div>
                <div className="text-4xl font-black text-orange-600 mb-2">24/7</div>
                <div className="text-gray-600">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
