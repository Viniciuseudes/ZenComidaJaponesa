import Image from "next/image"
import { Instagram, Play, Heart, MessageCircle } from "lucide-react"

const socialPosts = [
  {
    id: 1,
    platform: "instagram",
    image: "/placeholder.svg?height=300&width=300",
    likes: 1234,
    comments: 45,
    caption: "Bastidores da preparação dos nossos sushis frescos! 🍣",
  },
  {
    id: 2,
    platform: "instagram",
    image: "/placeholder.svg?height=300&width=300",
    likes: 987,
    comments: 32,
    caption: "Ramen tradicional que aquece o coração ❤️",
  },
  {
    id: 3,
    platform: "tiktok",
    image: "/placeholder.svg?height=300&width=300",
    likes: 2156,
    comments: 78,
    caption: "Técnica perfeita para o sushi roll! 🥢",
    isVideo: true,
  },
  {
    id: 4,
    platform: "instagram",
    image: "/placeholder.svg?height=300&width=300",
    likes: 756,
    comments: 23,
    caption: "Ambiente aconchegante para momentos especiais ✨",
  },
  {
    id: 5,
    platform: "tiktok",
    image: "/placeholder.svg?height=300&width=300",
    likes: 1543,
    comments: 56,
    caption: "Sobremesas japonesas irresistíveis! 🍡",
    isVideo: true,
  },
  {
    id: 6,
    platform: "instagram",
    image: "/placeholder.svg?height=300&width=300",
    likes: 1876,
    comments: 67,
    caption: "Seleção premium de sashimis frescos 🐟",
  },
]

export default function SocialFeed() {
  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Siga-nos nas Redes Sociais</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Acompanhe nossos bastidores, novidades e pratos especiais no Instagram e TikTok
          </p>

          <div className="flex justify-center space-x-4">
            <a
              href="https://instagram.com/zencomidajaponesa"
              className="flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 rounded-full hover:shadow-lg transition-shadow"
            >
              <Instagram className="w-5 h-5" />
              <span>@zencomidajaponesa</span>
            </a>
            <a
              href="https://tiktok.com/@zencomidajaponesa"
              className="flex items-center space-x-2 bg-black px-6 py-3 rounded-full hover:shadow-lg transition-shadow"
            >
              <div className="w-5 h-5 bg-white rounded-sm flex items-center justify-center">
                <span className="text-black text-xs font-bold">T</span>
              </div>
              <span>@zencomidajaponesa</span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {socialPosts.map((post) => (
            <div key={post.id} className="relative group cursor-pointer">
              <div className="aspect-square relative overflow-hidden rounded-lg">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.caption}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />

                {post.isVideo && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-black/50 rounded-full p-3">
                      <Play className="w-6 h-6 text-white fill-current" />
                    </div>
                  </div>
                )}

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <div className="flex items-center justify-between text-white text-sm">
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center space-x-1">
                          <Heart className="w-4 h-4" />
                          <span>{post.likes}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MessageCircle className="w-4 h-4" />
                          <span>{post.comments}</span>
                        </div>
                      </div>
                      <div className="w-4 h-4">
                        {post.platform === "instagram" ? (
                          <Instagram className="w-4 h-4" />
                        ) : (
                          <div className="w-4 h-4 bg-white rounded-sm flex items-center justify-center">
                            <span className="text-black text-xs font-bold">T</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-400">
            Marque <span className="text-red-400">@zencomidajaponesa</span> em suas fotos e apareça aqui!
          </p>
        </div>
      </div>
    </section>
  )
}
