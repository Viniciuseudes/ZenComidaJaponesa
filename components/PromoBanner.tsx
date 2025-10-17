"use client"

import { useState, useEffect } from "react"
import { X, Gift, Clock, Star } from "lucide-react"

const promos = [
  {
    id: 1,
    icon: Gift,
    title: "Combo Família",
    description: "30% OFF em combos para 4 pessoas",
    code: "FAMILIA30",
  },
  {
    id: 2,
    icon: Clock,
    title: "Happy Hour",
    description: "Desconto especial das 17h às 19h",
    code: "HAPPY17",
  },
  {
    id: 3,
    icon: Star,
    title: "Primeira Compra",
    description: "20% OFF para novos clientes",
    code: "NOVO20",
  },
]

export default function PromoBanner() {
  const [currentPromo, setCurrentPromo] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPromo((prev) => (prev + 1) % promos.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  if (!isVisible) return null

  const promo = promos[currentPromo]
  const Icon = promo.icon

  return (
    <div
      className="text-white py-3 relative overflow-hidden"
      style={{
        backgroundImage: "url('/sushi-pattern-bg.png')",
        backgroundSize: "400px 400px",
        backgroundRepeat: "repeat",
      }}
    >
      <div className="absolute inset-0 bg-red-600/90"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-center space-x-4">
          <Icon className="w-5 h-5" />
          <div className="text-center">
            <span className="font-bold">{promo.title}:</span>
            <span className="ml-2">{promo.description}</span>
            <span className="ml-2 bg-white/20 px-2 py-1 rounded text-sm">Código: {promo.code}</span>
          </div>
        </div>
      </div>

      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 hover:bg-white/20 rounded-full p-1 z-20"
      >
        <X className="w-4 h-4" />
      </button>

      {/* Progress indicators */}
      <div className="absolute bottom-0 left-0 right-0 flex space-x-1 z-10">
        {promos.map((_, index) => (
          <div
            key={index}
            className={`h-1 flex-1 transition-colors ${index === currentPromo ? "bg-white" : "bg-white/30"}`}
          />
        ))}
      </div>
    </div>
  )
}
