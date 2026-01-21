"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"

const heroSlides = [
  {
    id: 1,
    image: "/authentic-sushi-hero.jpeg", // Imagem atualizada aqui
    title: "Autêntica Culinária Japonesa",
    subtitle: "Tradição milenar em cada prato",
    cta: "Fazer Pedido",
  },
  {
    id: 2,
    image: "/sushi-rolls-hero.png",
    title: "Sushis Frescos Diariamente",
    subtitle: "Ingredientes selecionados e preparo artesanal",
    cta: "Ver Cardápio",
  },
  {
    id: 3,
    image: "/cozy-place-hero.png", // Imagem atualizada aqui
    title: "Local aconchegante, perfeito para você", // Texto atualizado aqui
    subtitle: "Experiência gastronômica única",
    cta: "Reservar Mesa",
  },
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  return (
    <section className="relative h-screen overflow-hidden bg-black">
      {/* Background Slides */}
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image || "/placeholder.svg"}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in text-shadow-lg">
              {heroSlides[currentSlide].title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 text-shadow">{heroSlides[currentSlide].subtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="text-white text-lg px-8 py-4 shadow-2xl relative overflow-hidden"
                style={{
                  backgroundImage: "url('/sushi-pattern-bg.png')",
                  backgroundSize: "400px 400px",
                  backgroundRepeat: "repeat",
                }}
              >
                <div className="absolute inset-0 bg-red-600/90"></div>
                <span className="relative z-10">{heroSlides[currentSlide].cta}</span>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/80 text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-4 bg-black/20 backdrop-blur-sm"
              >
                <Play className="w-5 h-5 mr-2" />
                Assistir Vídeo
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 rounded-full p-3 transition-all backdrop-blur-sm"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 rounded-full p-3 transition-all backdrop-blur-sm"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? "bg-red-500 scale-125" : "bg-white/50 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  )
}
