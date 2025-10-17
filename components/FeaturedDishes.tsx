"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Star, Heart, ChevronLeft, ChevronRight } from "lucide-react"

const allFeaturedDishes = [
  {
    id: 1,
    name: "Temaki Zen",
    description:
      "Alga recheada com arroz especial do Zen, recheada com pasta especial de salmão, camarão empanado, cream cheese, cebolinho e gergelim.",
    price: "R$ 39,90",
    originalPrice: null,
    image: "/temaki-zen.png",
    rating: 4.9,
    isPopular: true,
  },
  {
    id: 2,
    name: "Ceviche Zen",
    description: "Mix de peixes, camarão e kani temperados em marinada cítrica.",
    price: "R$ 45,90",
    originalPrice: null,
    image: "/ceviche-zen.png",
    rating: 4.8,
    isPopular: true,
  },
  {
    id: 3,
    name: "Yakisoba de Vegetais",
    description:
      "Macarrão especial, vegetais sempre fresquinhos, legumes puxado no wok chinês cobertos com o nosso exclusivo molho yakisoba de dar água na boca!",
    price: "R$ 35,90",
    originalPrice: null,
    image: "/yakisoba-vegetais.png",
    rating: 4.7,
    isPopular: false,
  },
  {
    id: 4,
    name: "Joy com Geléia de Damasco - 02 Unidades",
    description:
      "Enrolado de arroz envolvido com lâmina de salmão, maçaricado e coberto com pasta de peixes, geleia de damasco, cebolinho gergelim e molho teriyaki",
    price: "R$ 18,90",
    image: "/joy-damasco.png",
    rating: 4.9,
    isPopular: false,
  },
  {
    id: 5,
    name: "Ramen Tradicional",
    description: "Caldo encorpado com macarrão, chashu e ovo",
    price: "R$ 28,90",
    image: "/placeholder.svg?height=300&width=400&text=Ramen+Tradicional",
    rating: 4.6,
    isPopular: false,
  },
  {
    id: 6,
    name: "Combo Vegetariano",
    description: "Opções veganas e vegetarianas selecionadas",
    price: "R$ 45,90",
    image: "/placeholder.svg?height=300&width=400&text=Combo+Vegetariano",
    rating: 4.5,
    isPopular: false,
  },
]

// Limit to 3 featured dishes for the carousel
const featuredDishes = allFeaturedDishes.slice(0, 3)

export default function FeaturedDishes() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(true)
  const carouselRef = useRef<HTMLDivElement>(null)

  // Duplicate dishes for infinite loop effect
  const carouselItems = [...featuredDishes, ...featuredDishes] // [d1, d2, d3, d1, d2, d3]

  const slideWidth = 100 / featuredDishes.length // Assuming 3 items visible at a time

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        // If we are at the start of the duplicated items,
        // smoothly transition to the actual start (index 0)
        // then immediately snap back to the real start without transition
        if (prevIndex === featuredDishes.length) {
          setIsTransitioning(false) // Disable transition for snap back
          return 0 // Snap back to the first real item
        }
        setIsTransitioning(true) // Enable transition for normal slide
        return prevIndex + 1
      })
    }, 5000) // Slide every 5 seconds

    return () => clearInterval(interval)
  }, [featuredDishes.length])

  // Handle the snap back after the transition
  useEffect(() => {
    if (currentIndex === 0 && !isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(true)
      }, 50) // A small delay to ensure the transition is re-enabled after snap
      return () => clearTimeout(timer)
    }
  }, [currentIndex, isTransitioning])

  const handlePrev = () => {
    setIsTransitioning(true)
    setCurrentIndex((prevIndex) => {
      if (prevIndex === 0) {
        // If at the beginning, jump to the duplicated end, then slide back
        setIsTransitioning(false)
        return featuredDishes.length // Jump to the start of duplicated items
      }
      return prevIndex - 1
    })
  }

  const handleNext = () => {
    setIsTransitioning(true)
    setCurrentIndex((prevIndex) => {
      if (prevIndex === featuredDishes.length) {
        // If at the end of real items (start of duplicated), jump to real start
        setIsTransitioning(false)
        return 0
      }
      return prevIndex + 1
    })
  }

  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Pratos em Destaque</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Descubra nossos pratos mais populares, preparados com ingredientes frescos e técnicas tradicionais japonesas
          </p>
        </div>

        <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-gray-700">
          <div
            ref={carouselRef}
            className={`flex ${isTransitioning ? "transition-transform duration-1000 ease-in-out" : ""}`}
            style={{ transform: `translateX(-${currentIndex * slideWidth}%)` }}
          >
            {carouselItems.map((dish, index) => (
              <div
                key={`${dish.id}-${index}`} // Unique key for duplicated items
                className="flex-none w-full md:w-1/2 lg:w-1/3 p-4" // Adjust width for 3 visible items
              >
                <div className="bg-black rounded-2xl shadow-lg overflow-hidden group border border-gray-700">
                  <div className="relative">
                    <Image
                      src={dish.image || "/placeholder.svg"}
                      alt={dish.name}
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {dish.isPopular && (
                      <div
                        className="absolute top-4 left-4 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg relative overflow-hidden"
                        style={{
                          backgroundImage: "url('/sushi-pattern-bg.png')",
                          backgroundSize: "200px 200px",
                          backgroundRepeat: "repeat",
                        }}
                      >
                        <div className="absolute inset-0 bg-red-600/90"></div>
                        <span className="relative z-10">Popular</span>
                      </div>
                    )}
                    <button className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors backdrop-blur-sm">
                      <Heart className="w-5 h-5 text-white hover:text-red-400" />
                    </button>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-white">{dish.name}</h3>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-300">{dish.rating}</span>
                      </div>
                    </div>

                    <p className="text-gray-400 mb-4">{dish.description}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-red-400">{dish.price}</span>
                        {dish.originalPrice && (
                          <span className="text-lg text-gray-500 line-through">{dish.originalPrice}</span>
                        )}
                      </div>
                      <Button
                        className="text-white shadow-lg relative overflow-hidden"
                        style={{
                          backgroundImage: "url('/sushi-pattern-bg.png')",
                          backgroundSize: "200px 200px",
                          backgroundRepeat: "repeat",
                        }}
                      >
                        <div className="absolute inset-0 bg-red-600/90"></div>
                        <span className="relative z-10">Pedir Agora</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 rounded-full p-3 transition-all backdrop-blur-sm"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 rounded-full p-3 transition-all backdrop-blur-sm"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-red-500 text-red-400 hover:bg-red-500 hover:text-white bg-transparent"
          >
            Ver Cardápio Completo
          </Button>
        </div>
      </div>
    </section>
  )
}
