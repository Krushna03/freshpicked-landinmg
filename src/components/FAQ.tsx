"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "How does Fresh Picked work?",
      answer:
        "Fresh Picked is a mobile marketplace that connects vegetable buyers with local sellers. You can browse listings, chat with sellers, negotiate prices, and arrange pickup or delivery. It's like having a local vegetable market in your pocket!",
    },
    {
      question: "Is Fresh Picked free to use?",
      answer:
        "Yes! Fresh Picked is completely free to download and use. There are no listing fees for sellers and no transaction fees for buyers. We believe in keeping the platform accessible to everyone.",
    },
    {
      question: "How do I pay for vegetables?",
      answer:
        "Currently, all payments are handled directly between buyers and sellers through cash transactions during pickup. This allows for better price negotiations and builds trust within the community.",
    },
    {
      question: "How do I know if a seller is trustworthy?",
      answer:
        "All sellers have profiles with ratings and reviews from previous buyers. You can also chat with them directly to ask questions about their produce, farming methods, and pickup arrangements.",
    },
    {
      question: "Can I sell my own vegetables on Fresh Picked?",
      answer:
        "Anyone can become a seller on Fresh Picked. Simply create an account, add photos and descriptions of your vegetables, set your prices, and start connecting with buyers in your area.",
    },
    {
      question: "What areas does Fresh Picked cover?",
      answer:
        "Fresh Picked is currently available in 150+ cities across India and growing rapidly. You can find sellers and buyers in both urban and rural areas through our location-based search feature.",
    },
    {
      question: "How fresh are the vegetables?",
      answer:
        "Since vegetables are sold directly by local farmers and growers, they're typically much fresher than supermarket produce. Many sellers harvest their vegetables the same day they list them!",
    },
    {
      question: "What if I have issues with a transaction?",
      answer:
        "We have a dedicated support team available 24/7 to help resolve any issues. You can also use our rating system to provide feedback and help maintain quality standards in the community.",
    },
    {
      question: "Can I schedule regular deliveries?",
      answer:
        "While the app doesn't have automated scheduling yet, you can build relationships with regular sellers and arrange recurring purchases through the chat feature.",
    },
    {
      question: "Is there a minimum order requirement?",
      answer:
        "No minimum orders! You can buy as little or as much as you need. This is perfect for small families or those who prefer to buy fresh vegetables more frequently.",
    },
  ]

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-black text-gray-900 mb-6">Frequently Asked Questions</h2>
          <p className="text-2xl text-gray-600 leading-relaxed">Everything you need to know about Fresh Picked</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <button
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h3 className="text-xl font-bold text-gray-900 pr-4">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="h-6 w-6 text-green-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-6 w-6 text-gray-400 flex-shrink-0" />
                )}
              </button>

              {openIndex === index && (
                <div className="px-8 pb-6">
                  <p className="text-gray-600 text-lg leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Still have questions?</h3>
            <p className="text-gray-600 mb-6">Our support team is here to help you 24/7</p>
            <button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
