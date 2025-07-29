"use client"

import { useRef } from "react"
import { Play, Volume2 } from "lucide-react"
import { useTheme } from "../context/ThemeContext"

const VideoReels = () => {
  const { isDark } = useTheme()
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])

  const reelsData = [
    {
      id: 1,
      title: "Fresh Farm Vegetables",
      description: "Direct from farm to your table",
      likes: "2.3K",
      comments: "156",
    },
    {
      id: 2,
      title: "Local Seller Success",
      description: "How Ramesh doubled his income",
      likes: "1.8K",
      comments: "89",
    },
    {
      id: 3,
      title: "Organic Farming Tips",
      description: "Growing vegetables naturally",
      likes: "3.1K",
      comments: "234",
    },
    {
      id: 4,
      title: "Quick Vegetable Recipes",
      description: "Healthy meals in minutes",
      likes: "4.2K",
      comments: "312",
    },
  ]

  return (
    <section
      id="reels"
      className={`py-24 px-4 transition-colors duration-300 ${
        isDark
          ? "bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800"
          : "bg-gradient-to-br from-green-900 via-green-800 to-green-900"
      }`}
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-white mb-6">Watch Our Community in Action</h2>
          <p className="text-xl text-green-100 max-w-3xl mx-auto leading-relaxed">
            See how Fresh Picked is transforming lives - from farmers to families, everyone's winning!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reelsData.map((reel, index) => (
            <div key={reel.id} className="group relative">
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105">
                {/* Video Container */}
                <div className="relative aspect-[9/16] bg-gradient-to-br from-green-400 to-green-600">
                  <img
                    src={`/placeholder.svg?height=600&width=400&query=fresh vegetables ${reel.title.toLowerCase()}`}
                    alt={reel.title}
                    className="w-full h-full object-cover"
                  />

                  {/* Overlay Content */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-white font-bold text-xl mb-2">{reel.title}</h3>
                      <p className="text-gray-200 text-sm mb-4">{reel.description}</p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <span className="text-red-500">❤️</span>
                            <span className="text-white text-sm">{reel.likes}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <span className="text-blue-400">💬</span>
                            <span className="text-white text-sm">{reel.comments}</span>
                          </div>
                        </div>
                        <button className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors">
                          <Volume2 className="h-4 w-4 text-white" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-white/20 backdrop-blur-sm p-4 rounded-full hover:bg-white/30 transition-colors">
                      <Play className="h-8 w-8 text-white" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
            Create Your Own Success Story
          </button>
        </div>
      </div>
    </section>
  )
}

export default VideoReels
