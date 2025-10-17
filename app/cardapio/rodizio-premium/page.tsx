"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Clock,
  Users,
  CheckCircle,
  Crown,
  Star,
} from "lucide-react";
import Link from "next/link";

const premiumInfo = {
  price: 149.9,
  duration: "3 horas",
  includes: [
    "Todos os itens do rodízio tradicional",
    "Peixes nobres (atum, linguado, robalo)",
    "Pratos exclusivos do chef",
    "Ostras e frutos do mar premium",
    "Sakes e vinhos selecionados",
    "Sobremesas gourmet",
    "Atendimento personalizado",
    "Mesa reservada com vista privilegiada",
  ],
  exclusives: [
    "Tuna Goma",
    "Ebi Oriental",
    "Ebi Love",
    "Chiri Zen",
    "Zen Maki",
    "Tataki de Atum",
    "Ebi Joy",
  ],
  // 👇 IMAGENS ATUALIZADAS AQUI
  images: ["/premium1.jpg", "/premium2.jpg", "/premium3.jpg", "/premium4.jpg"],
};

export default function RodizioPremiumPage() {
  return (
    <main className="min-h-screen bg-black">
      {/* Header */}
      <section className="py-8 bg-black border-b border-gray-800">
        <div className="container mx-auto px-4">
          <Link
            href="/cardapio"
            className="inline-flex items-center text-red-400 hover:text-red-300 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar ao Cardápio
          </Link>
          <div className="flex items-center space-x-3 mb-2">
            <Crown className="w-8 h-8 text-yellow-400" />
            <h1 className="text-4xl font-bold text-white">Rodízio Premium</h1>
          </div>
          <p className="text-xl text-gray-300">
            A experiência mais completa com pratos exclusivos e ingredientes
            premium
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Info */}
            <div>
              <div className="bg-gradient-to-br from-yellow-900/20 to-red-900/20 rounded-2xl p-8 border border-yellow-600/30 mb-8">
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center space-x-2 mb-4">
                    <Crown className="w-8 h-8 text-yellow-400" />
                    <span className="text-yellow-400 font-semibold">
                      EXPERIÊNCIA VIP
                    </span>
                  </div>
                  <div className="text-5xl font-bold text-yellow-400 mb-2">
                    R$ {premiumInfo.price.toFixed(2)}
                  </div>
                  <p className="text-gray-300">por pessoa</p>
                </div>

                <div className="flex items-center justify-center space-x-8 mb-8">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-yellow-400" />
                    <span className="text-white">{premiumInfo.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-5 h-5 text-yellow-400" />
                    <span className="text-white">Ilimitado</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="w-5 h-5 text-yellow-400" />
                    <span className="text-white">VIP</span>
                  </div>
                </div>

                <Button className="w-full text-black text-lg py-4 shadow-lg bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 font-semibold">
                  Reservar Experiência Premium
                </Button>
              </div>

              <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 mb-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Incluso na experiência:
                </h3>
                <div className="space-y-4">
                  {premiumInfo.includes.map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-red-900/20 to-yellow-900/20 rounded-2xl p-8 border border-yellow-600/30">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Crown className="w-6 h-6 text-yellow-400 mr-2" />
                  Pratos Exclusivos Premium:
                </h3>
                <div className="space-y-4">
                  {premiumInfo.exclusives.map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Star className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                      <span className="text-gray-300 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Images (CÓDIGO CORRIGIDO) */}
            <div>
              <div className="grid grid-cols-2 gap-4">
                {premiumInfo.images.map((image, index) => (
                  <div
                    key={index}
                    className="relative aspect-square rounded-2xl overflow-hidden border border-yellow-600/30"
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`Premium ${index + 1}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2 right-2">
                      <Crown className="w-6 h-6 text-yellow-400" />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-gray-900 rounded-2xl p-6 border border-gray-800">
                <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 mr-2" />
                  Benefícios VIP:
                </h4>
                <div className="space-y-3 text-gray-300">
                  <p>• Mesa reservada com vista privilegiada</p>
                  <p>• Atendimento personalizado com sommelier</p>
                  <p>• Tempo estendido de 3 horas</p>
                  <p>• Degustação guiada pelo chef</p>
                  <p>• Estacionamento valet gratuito</p>
                  <p>• Brinde especial de aniversário</p>
                </div>
              </div>

              <div className="mt-6 bg-gradient-to-r from-yellow-900/20 to-red-900/20 rounded-2xl p-6 border border-yellow-600/30">
                <p className="text-center text-yellow-400 font-semibold">
                  ⭐ Limitado a 20 pessoas por noite ⭐
                </p>
                <p className="text-center text-gray-300 text-sm mt-2">
                  Reservas com 48h de antecedência
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
