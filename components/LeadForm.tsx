"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Gift, Mail, Phone, User } from "lucide-react"

export default function LeadForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "newsletter",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui seria implementada a lógica de envio com UTM tracking
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      interest: "newsletter",
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Gift className="w-8 h-8" />
                <h2 className="text-4xl font-bold">Ganhe 15% OFF</h2>
              </div>

              <p className="text-xl mb-6 opacity-90">
                Cadastre-se em nossa newsletter e receba ofertas exclusivas, novidades do cardápio e convites para
                eventos especiais.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Promoções exclusivas toda semana</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Novidades do cardápio em primeira mão</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Convites para eventos e degustações</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Desconto especial no seu aniversário</span>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="bg-white rounded-2xl p-8 text-gray-900">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Nome Completo</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="pl-10"
                      placeholder="Seu nome completo"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">E-mail</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="pl-10"
                      placeholder="seu@email.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">WhatsApp</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="pl-10"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Interesse Principal</label>
                  <select
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  >
                    <option value="newsletter">Newsletter e Promoções</option>
                    <option value="events">Eventos e Degustações</option>
                    <option value="franchise">Informações sobre Franquia</option>
                    <option value="catering">Serviços de Eventos</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Mensagem (Opcional)</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Conte-nos mais sobre seu interesse..."
                    rows={3}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full text-white text-lg py-3 shadow-lg relative overflow-hidden"
                  style={{
                    backgroundImage: "url('/sushi-pattern-bg.png')",
                    backgroundSize: "300px 300px",
                    backgroundRepeat: "repeat",
                  }}
                >
                  <div className="absolute inset-0 bg-red-600/90"></div>
                  <span className="relative z-10">Ganhar Desconto de 15%</span>
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  Ao se cadastrar, você concorda com nossos termos de uso e política de privacidade.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
