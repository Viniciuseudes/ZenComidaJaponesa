"use client"

import Image from "next/image"
import Link from "next/link"
import { Utensils, Crown, Star } from "lucide-react"

const menuOptions = [
  {
    id: "a-la-carte",
    title: "À La Carte",
    description: "Escolha seus pratos favoritos do nosso cardápio tradicional",
    icon: Utensils,
    image: "/placeholder.svg?height=400&width=600&text=A+La+Carte",
    href: "/cardapio/a-la-carte",
    features: ["Pratos individuais", "Sushis e sashimis", "Yakisoba e temakis", "Bebidas especiais"],
  },
  {
    id: "rodizio",
    title: "Rodízio",
    description: "Experimente uma variedade de pratos em nosso rodízio tradicional",
    icon: Star,
    image: "/placeholder.svg?height=400&width=600&text=Rodizio",
    href: "/cardapio/rodizio",
    features: ["Variedade de sushis", "Sashimis frescos", "Hot rolls", "Sobremesas inclusas"],
  },
  {
    id: "rodizio-premium",
    title: "Rodízio Premium",
    description: "A experiência mais completa com pratos exclusivos e ingredientes premium",
    icon: Crown,
    image: "/placeholder.svg?height=400&width=600&text=Rodizio+Premium",
    href: "/cardapio/rodizio-premium",
    features: ["Peixes nobres", "Pratos exclusivos", "Bebidas premium", "Atendimento VIP"],
  },
]

export default function CardapioPage() {
  return (
    <main className="min-h-screen bg-black">
      {/* Header Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Nosso Cardápio</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Escolha a experiência gastronômica perfeita para você
          </p>
        </div>
      </section>

      {/* Menu Options */}
      <section className="py-8 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {menuOptions.map((option) => {
              const Icon = option.icon
              return (
                <Link key={option.id} href={option.href}>
                  <div className="bg-gray-900 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-300 border border-gray-800 group cursor-pointer h-full">
                    <div className="relative h-64">
                      <Image
                        src={option.image || "/placeholder.svg"}
                        alt={option.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                      <div className="absolute bottom-4 left-4">
                        <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mb-3">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </div>

                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-white mb-4">{option.title}</h3>
                      <p className="text-gray-300 mb-6 leading-relaxed">{option.description}</p>

                      <div className="space-y-3">
                        {option.features.map((feature, index) => (
                          <div key={index} className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-red-400 rounded-full flex-shrink-0"></div>
                            <span className="text-gray-300 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-8">
                        <div
                          className="w-full py-3 px-6 rounded-lg text-white font-medium text-center transition-all duration-300 group-hover:shadow-lg relative overflow-hidden"
                          style={{
                            backgroundImage: "url('/sushi-pattern-bg.png')",
                            backgroundSize: "200px 200px",
                            backgroundRepeat: "repeat",
                          }}
                        >
                          <div className="absolute inset-0 bg-red-600/90"></div>
                          <span className="relative z-10">Ver Cardápio</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}
