import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Clock, Truck, Shield, Star } from "lucide-react"

const deliverySteps = [
  {
    step: 1,
    icon: "📱",
    title: "Faça seu Pedido",
    description: "Escolha seus pratos favoritos pelo iFood ou WhatsApp",
  },
  {
    step: 2,
    icon: "👨‍🍳",
    title: "Preparamos com Carinho",
    description: "Nossos chefs preparam seu pedido com ingredientes frescos",
  },
  {
    step: 3,
    icon: "🚚",
    title: "Entrega Rápida",
    description: "Entregamos em até 45 minutos na sua casa",
  },
  {
    step: 4,
    icon: "🍱",
    title: "Desfrute!",
    description: "Saboreie a autêntica culinária japonesa no conforto do seu lar",
  },
]

const deliveryFeatures = [
  {
    icon: Clock,
    title: "Entrega Rápida",
    description: "Até 45 minutos para sua casa",
  },
  {
    icon: Shield,
    title: "Embalagem Segura",
    description: "Produtos bem acondicionados e lacrados",
  },
  {
    icon: Truck,
    title: "Rastreamento",
    description: "Acompanhe seu pedido em tempo real",
  },
  {
    icon: Star,
    title: "Qualidade Garantida",
    description: "Mesma qualidade do restaurante",
  },
]

export default function Delivery() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
            <div>
              <h1 className="text-5xl font-bold mb-6">Delivery Zen</h1>
              <p className="text-xl mb-8 opacity-90">
                A autêntica culinária japonesa agora na sua casa! Entrega rápida e segura em toda a região.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
                  Pedir pelo iFood
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-red-600 bg-transparent"
                >
                  Pedir pelo WhatsApp
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Delivery Zen"
                width={500}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Como Funciona</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Processo simples e rápido para você receber sua comida japonesa favorita
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {deliverySteps.map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">{step.icon}</span>
                </div>
                <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Por que Escolher Nosso Delivery?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {deliveryFeatures.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow"
                >
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Pronto para Pedir?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Não perca tempo! Faça seu pedido agora e receba a melhor comida japonesa da cidade na sua casa em até 45
            minutos.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-md mx-auto">
            <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 flex-1">
              <Image src="/placeholder.svg?height=24&width=24" alt="iFood" width={24} height={24} className="mr-2" />
              Pedir no iFood
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-red-600 flex-1 bg-transparent"
            >
              Pedir no WhatsApp
            </Button>
          </div>

          <div className="mt-8 text-sm opacity-75">
            <p>Taxa de entrega: R$ 5,90 • Pedido mínimo: R$ 35,00</p>
          </div>
        </div>
      </section>
    </main>
  )
}
