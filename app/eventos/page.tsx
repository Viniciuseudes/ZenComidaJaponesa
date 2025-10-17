"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Users, Heart, Building, Star, Play, Quote, Phone, Mail, MessageCircle, X } from "lucide-react"

const eventTypes = [
  {
    icon: Building,
    title: "Eventos Corporativos",
    description: "Reuniões de negócios, confraternizações e lançamentos",
    features: ["Ambiente reservado", "Menu executivo", "Apresentação audiovisual", "Serviço personalizado"],
    capacity: "20-80 pessoas",
    image: "/placeholder.svg?height=300&width=400&text=Evento+Corporativo",
  },
  {
    icon: Heart,
    title: "Casamentos",
    description: "Celebre o amor com a sofisticação da culinária japonesa",
    features: ["Decoração temática", "Menu personalizado", "Cerimônia do sake", "Fotógrafo parceiro"],
    capacity: "50-120 pessoas",
    image: "/placeholder.svg?height=300&width=400&text=Casamento",
  },
  {
    icon: Star,
    title: "Aniversários de 15 Anos",
    description: "Uma festa única e inesquecível para essa data especial",
    features: ["Decoração oriental", "DJ especializado", "Menu jovem", "Espaço para dança"],
    capacity: "30-100 pessoas",
    image: "/placeholder.svg?height=300&width=400&text=15+Anos",
  },
  {
    icon: Users,
    title: "Eventos Familiares",
    description: "Aniversários, formaturas e comemorações especiais",
    features: ["Ambiente acolhedor", "Menu variado", "Espaço kids", "Flexibilidade de horários"],
    capacity: "15-60 pessoas",
    image: "/placeholder.svg?height=300&width=400&text=Evento+Familiar",
  },
]

const gallery = [
  {
    id: 1,
    type: "image",
    src: "/placeholder.svg?height=400&width=600&text=Casamento+Zen+1",
    title: "Casamento Elegante",
    description: "Cerimônia intimista com 80 convidados",
  },
  {
    id: 2,
    type: "video",
    src: "/placeholder.svg?height=400&width=600&text=Video+Corporativo",
    title: "Evento Corporativo",
    description: "Lançamento de produto para empresa multinacional",
  },
  {
    id: 3,
    type: "image",
    src: "/placeholder.svg?height=400&width=600&text=15+Anos+Festa",
    title: "Festa de 15 Anos",
    description: "Celebração temática oriental",
  },
  {
    id: 4,
    type: "image",
    src: "/placeholder.svg?height=400&width=600&text=Aniversario+Familia",
    title: "Aniversário Familiar",
    description: "Comemoração de 50 anos",
  },
  {
    id: 5,
    type: "video",
    src: "/placeholder.svg?height=400&width=600&text=Video+Casamento",
    title: "Making Of Casamento",
    description: "Bastidores da preparação",
  },
  {
    id: 6,
    type: "image",
    src: "/placeholder.svg?height=400&width=600&text=Evento+Empresa",
    title: "Confraternização",
    description: "Final de ano corporativo",
  },
]

const testimonials = [
  {
    name: "Marina Silva",
    event: "Casamento",
    rating: 5,
    text: "Nosso casamento no Zen foi perfeito! A equipe cuidou de cada detalhe e nossos convidados não pararam de elogiar a comida e o ambiente.",
    image: "/placeholder.svg?height=80&width=80&text=Marina",
  },
  {
    name: "Carlos Mendes",
    event: "Evento Corporativo",
    rating: 5,
    text: "Realizamos o lançamento do nosso produto no Zen e foi um sucesso total. Profissionalismo e qualidade excepcionais.",
    image: "/placeholder.svg?height=80&width=80&text=Carlos",
  },
  {
    name: "Ana Paula",
    event: "15 Anos da Filha",
    rating: 5,
    text: "A festa de 15 anos da minha filha foi um sonho realizado. O Zen transformou nossa celebração em algo mágico e inesquecível.",
    image: "/placeholder.svg?height=80&width=80&text=Ana",
  },
]

export default function EventosPage() {
  const [selectedGalleryItem, setSelectedGalleryItem] = useState<(typeof gallery)[0] | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    guests: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Event form submitted:", formData)
    alert("Obrigado pelo interesse! Nossa equipe de eventos entrará em contato em breve.")
    setFormData({
      name: "",
      email: "",
      phone: "",
      eventType: "",
      eventDate: "",
      guests: "",
      message: "",
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-screen text-white overflow-hidden"
        style={{
          backgroundImage: "url('/sushi-pattern-bg.png')",
          backgroundSize: "600px 600px",
          backgroundRepeat: "repeat",
        }}
      >
        <div className="absolute inset-0 bg-red-600/90"></div>
        <div className="relative z-10 h-full flex items-center justify-center text-center">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-6xl md:text-7xl font-bold mb-6 animate-fade-in text-shadow-lg">
                Eventos Inesquecíveis
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90 text-shadow">
                Transforme seus momentos especiais em experiências únicas com a sofisticação da culinária japonesa
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="text-white text-lg px-8 py-4 shadow-2xl bg-white/20 backdrop-blur-sm border-2 border-white/80 hover:bg-white hover:text-gray-900"
                >
                  Planejar Meu Evento
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/80 text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-4 bg-black/20 backdrop-blur-sm"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Ver Galeria
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Types Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Tipos de Eventos</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Oferecemos soluções completas para todos os tipos de celebrações e eventos corporativos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {eventTypes.map((eventType, index) => {
              const Icon = eventType.icon
              return (
                <div
                  key={index}
                  className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:shadow-2xl hover:shadow-red-500/10 transition-all duration-300"
                >
                  <div className="relative h-48">
                    <Image
                      src={eventType.image || "/placeholder.svg"}
                      alt={eventType.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mb-2">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-3">{eventType.title}</h3>
                    <p className="text-gray-300 mb-4">{eventType.description}</p>

                    <div className="mb-4">
                      <span className="text-red-400 font-semibold">Capacidade: </span>
                      <span className="text-gray-300">{eventType.capacity}</span>
                    </div>

                    <div className="space-y-2">
                      {eventType.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Galeria de Eventos</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Veja alguns dos eventos especiais que já realizamos no Zen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.map((item) => (
              <div
                key={item.id}
                className="relative group cursor-pointer rounded-2xl overflow-hidden border border-gray-700 hover:shadow-xl transition-all duration-300"
                onClick={() => setSelectedGalleryItem(item)}
              >
                <div className="aspect-video relative">
                  <Image src={item.src || "/placeholder.svg"} alt={item.title} fill className="object-cover" />

                  {item.type === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-black/50 rounded-full p-4">
                        <Play className="w-8 h-8 text-white fill-current" />
                      </div>
                    </div>
                  )}

                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full">
                      <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                      <p className="text-gray-300 text-sm">{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Depoimentos</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Veja o que nossos clientes falam sobre seus eventos no Zen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.event}</p>
                    <div className="flex space-x-1 mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>

                <Quote className="w-8 h-8 text-red-400 mb-4" />
                <p className="text-gray-300 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section
        className="py-16 text-white relative overflow-hidden"
        style={{
          backgroundImage: "url('/sushi-pattern-bg.png')",
          backgroundSize: "600px 600px",
          backgroundRepeat: "repeat",
        }}
      >
        <div className="absolute inset-0 bg-red-600/90"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Planeje Seu Evento</h2>
              <p className="text-xl opacity-90">
                Entre em contato conosco e nossa equipe especializada criará uma proposta personalizada para seu evento
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Contact Info */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Fale com Nossa Equipe</h3>

                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Telefone Eventos</h4>
                      <p className="opacity-90">(81) 3094-5028</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold">E-mail Eventos</h4>
                      <p className="opacity-90">eventos@zencomidajaponesa.com.br</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <MessageCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold">WhatsApp Eventos</h4>
                      <p className="opacity-90">(81) 98943-4811</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
                  <h4 className="font-semibold mb-3">Horário de Atendimento</h4>
                  <p className="opacity-90 mb-2">Segunda a Sexta: 9h às 18h</p>
                  <p className="opacity-90">Sábado: 9h às 14h</p>
                </div>
              </div>

              {/* Form */}
              <div className="bg-white rounded-2xl p-8 text-gray-900">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Nome Completo *</label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Seu nome completo"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">E-mail *</label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="seu@email.com"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Telefone *</label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(11) 99999-9999"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Tipo de Evento *</label>
                      <select
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                        required
                      >
                        <option value="">Selecione o tipo</option>
                        <option value="corporativo">Evento Corporativo</option>
                        <option value="casamento">Casamento</option>
                        <option value="15anos">Aniversário de 15 Anos</option>
                        <option value="familiar">Evento Familiar</option>
                        <option value="outro">Outro</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Data Pretendida</label>
                      <Input type="date" name="eventDate" value={formData.eventDate} onChange={handleChange} />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Número de Convidados</label>
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    >
                      <option value="">Selecione a quantidade</option>
                      <option value="15-30">15 a 30 pessoas</option>
                      <option value="30-50">30 a 50 pessoas</option>
                      <option value="50-80">50 a 80 pessoas</option>
                      <option value="80-120">80 a 120 pessoas</option>
                      <option value="120+">Mais de 120 pessoas</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Detalhes do Evento</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Conte-nos mais sobre seu evento: tema, preferências, necessidades especiais..."
                      rows={4}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full text-white text-lg py-4 shadow-lg relative overflow-hidden"
                    style={{
                      backgroundImage: "url('/sushi-pattern-bg.png')",
                      backgroundSize: "300px 300px",
                      backgroundRepeat: "repeat",
                    }}
                  >
                    <div className="absolute inset-0 bg-red-600/90"></div>
                    <span className="relative z-10">Solicitar Proposta</span>
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Modal */}
      {selectedGalleryItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setSelectedGalleryItem(null)}
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            <div className="aspect-video relative rounded-2xl overflow-hidden">
              <Image
                src={selectedGalleryItem.src || "/placeholder.svg"}
                alt={selectedGalleryItem.title}
                fill
                className="object-cover"
              />

              {selectedGalleryItem.type === "video" && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-20 h-20 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-colors">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </button>
                </div>
              )}
            </div>

            <div className="bg-gray-900 p-6 rounded-b-2xl">
              <h3 className="text-2xl font-bold text-white mb-2">{selectedGalleryItem.title}</h3>
              <p className="text-gray-300">{selectedGalleryItem.description}</p>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
