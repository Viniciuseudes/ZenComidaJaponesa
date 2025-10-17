import Image from "next/image"
import { Users, Award, Heart, Globe } from "lucide-react"

export default function QuemSomos() {
  const timeline = [
    {
      year: "1995",
      title: "Fundação",
      description: "Primeira unidade aberta na Vila Madalena por mestres japoneses",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      year: "2005",
      title: "Expansão",
      description: "Abertura da segunda unidade nos Jardins",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      year: "2015",
      title: "Modernização",
      description: "Renovação completa do conceito e cardápio",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      year: "2024",
      title: "Presente",
      description: "Mais de 10 unidades e programa de franquias",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const values = [
    {
      icon: Heart,
      title: "Paixão pela Culinária",
      description: "Cada prato é preparado com amor e dedicação aos detalhes",
    },
    {
      icon: Award,
      title: "Qualidade Premium",
      description: "Ingredientes selecionados e técnicas tradicionais japonesas",
    },
    {
      icon: Users,
      title: "Experiência Única",
      description: "Ambiente acolhedor que proporciona momentos especiais",
    },
    {
      icon: Globe,
      title: "Tradição Autêntica",
      description: "Receitas milenares preservadas e adaptadas ao paladar brasileiro",
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 bg-black text-white">
        <Image
          src="/placeholder.svg?height=400&width=1200"
          alt="História do Zen"
          fill
          className="object-cover opacity-50"
        />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold mb-6">Nossa História</h1>
            <p className="text-xl opacity-90">
              Mais de 25 anos dedicados à autêntica culinária japonesa, preservando tradições e criando experiências
              inesquecíveis.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Nossa Jornada</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Acompanhe a evolução do Zen Comida Japonesa ao longo dos anos
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-red-200"></div>

            {timeline.map((item, index) => (
              <div
                key={item.year}
                className={`flex items-center mb-12 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                  <div className="bg-black p-6 rounded-2xl shadow-lg">
                    <div className="text-3xl font-bold text-red-600 mb-2">{item.year}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      width={300}
                      height={200}
                      className="w-full h-40 object-cover rounded-lg"
                    />
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-red-600 rounded-full border-4 border-white shadow-lg"></div>

                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Nossos Valores</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Os princípios que guiam nossa paixão pela culinária japonesa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Conheça Nossa História</h2>
            <p className="text-xl text-gray-600 mb-8">
              Assista ao vídeo institucional e descubra como mantemos viva a tradição da culinária japonesa
            </p>

            <div className="relative aspect-video bg-gray-200 rounded-2xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=800"
                alt="Vídeo Institucional"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-20 h-20 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-colors">
                  <div className="w-0 h-0 border-l-8 border-l-white border-t-6 border-t-transparent border-b-6 border-b-transparent ml-1"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
