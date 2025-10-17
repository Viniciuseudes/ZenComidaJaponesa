"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Star, ArrowLeft } from "lucide-react"
import Link from "next/link"

const categories = [
  { id: "all", name: "Todos", count: 45 },
  { id: "sushi", name: "Sushis", count: 12 },
  { id: "sashimi", name: "Sashimis", count: 8 },
  { id: "temaki", name: "Temakis", count: 6 },
  { id: "hot", name: "Hot Rolls", count: 10 },
  { id: "yakisoba", name: "Yakisoba", count: 4 },
  { id: "drinks", name: "Bebidas", count: 5 },
]

const menuItems = [
  {
    id: 1,
    category: "temaki",
    name: "Temaki Zen",
    description:
      "Alga recheada com arroz especial do Zen, recheada com pasta especial de salmão, camarão empanado, cream cheese, cebolinho e gergelim.",
    price: 39.9,
    image: "/temaki-zen.png",
    rating: 4.9,
    isPopular: true,
  },
  {
    id: 2,
    category: "sashimi",
    name: "Ceviche Zen",
    description: "Mix de peixes, camarão e kani temperados em marinada cítrica.",
    price: 45.9,
    image: "/ceviche-zen.png",
    rating: 4.8,
    isPopular: true,
  },
  {
    id: 3,
    category: "yakisoba",
    name: "Yakisoba de Vegetais",
    description:
      "Macarrão especial, vegetais sempre fresquinhos, legumes puxado no wok chinês cobertos com o nosso exclusivo molho yakisoba de dar água na boca!",
    price: 35.9,
    image: "/yakisoba-vegetais.png",
    rating: 4.7,
    isPopular: false,
  },
  {
    id: 4,
    category: "hot",
    name: "Joy com Geléia de Damasco - 02 Unidades",
    description:
      "Enrolado de arroz envolvido com lâmina de salmão, maçaricado e coberto com pasta de peixes, geleia de damasco, cebolinho gergelim e molho teriyaki",
    price: 18.9,
    image: "/joy-damasco.png",
    rating: 4.9,
    isPopular: false,
  },
  // Adicione mais itens conforme necessário
]

export default function ALaCartePage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [filteredItems, setFilteredItems] = useState(menuItems)

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId)
    if (categoryId === "all") {
      setFilteredItems(menuItems)
    } else {
      setFilteredItems(menuItems.filter((item) => item.category === categoryId))
    }
  }

  return (
    <main className="min-h-screen bg-black">
      {/* Header */}
      <section className="py-8 bg-black border-b border-gray-800">
        <div className="container mx-auto px-4">
          <Link href="/cardapio" className="inline-flex items-center text-red-400 hover:text-red-300 mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar ao Cardápio
          </Link>
          <h1 className="text-4xl font-bold text-white mb-2">À La Carte</h1>
          <p className="text-xl text-gray-300">Escolha seus pratos favoritos do nosso cardápio tradicional</p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-black border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-colors ${
                  selectedCategory === category.id
                    ? "bg-red-600 text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-gray-900 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl hover:shadow-red-500/10 transition-all duration-300 group border border-gray-800"
              >
                <div className="relative">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {item.isPopular && (
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
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-white">{item.name}</h3>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-300">{item.rating}</span>
                    </div>
                  </div>

                  <p className="text-gray-400 mb-4 text-sm">{item.description}</p>

                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-red-400">R$ {item.price.toFixed(2)}</span>
                    <Button
                      size="sm"
                      className="text-white shadow-lg relative overflow-hidden"
                      style={{
                        backgroundImage: "url('/sushi-pattern-bg.png')",
                        backgroundSize: "200px 200px",
                        backgroundRepeat: "repeat",
                      }}
                    >
                      <div className="absolute inset-0 bg-red-600/90"></div>
                      <span className="relative z-10">Pedir</span>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
