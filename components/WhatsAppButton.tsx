"use client"

import { useState } from "react"
import { MessageCircle, X } from "lucide-react"

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false)

  const whatsappNumber = "5581989434811" // Número do WhatsApp atualizado
  const defaultMessage = "Olá! Gostaria de fazer um pedido no Zen Comida Japonesa."

  const handleWhatsAppClick = (message: string) => {
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
    window.open(whatsappUrl, "_blank")
    setIsOpen(false)
  }

  const quickMessages = [
    {
      title: "Fazer Pedido",
      message: "Olá! Gostaria de fazer um pedido no Zen Comida Japonesa.",
    },
    {
      title: "Reservar Mesa",
      message: "Olá! Gostaria de reservar uma mesa no Zen Comida Japonesa.",
    },
    {
      title: "Informações",
      message: "Olá! Gostaria de mais informações sobre o Zen Comida Japonesa.",
    },
    {
      title: "Delivery",
      message: "Olá! Gostaria de saber sobre o delivery do Zen Comida Japonesa.",
    },
  ]

  return (
    <>
      {/* Quick Messages Popup */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 z-50 bg-gray-800 rounded-2xl shadow-2xl p-4 w-80 max-w-[calc(100vw-2rem)] border border-gray-700 text-white">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Zen Comida Japonesa</h3>
                <p className="text-sm text-gray-400">Online agora</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-2">
            {quickMessages.map((msg, index) => (
              <button
                key={index}
                onClick={() => handleWhatsAppClick(msg.message)}
                className="w-full text-left p-3 rounded-lg hover:bg-gray-700 transition-colors border border-gray-700"
              >
                <span className="text-sm font-medium text-white">{msg.title}</span>
              </button>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-gray-700">
            <button
              onClick={() => handleWhatsAppClick(defaultMessage)}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-medium transition-colors"
            >
              Iniciar Conversa
            </button>
          </div>
        </div>
      )}

      {/* WhatsApp Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-green-600 hover:bg-green-700 text-white rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>

      {/* Overlay */}
      {isOpen && <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />}
    </>
  )
}
