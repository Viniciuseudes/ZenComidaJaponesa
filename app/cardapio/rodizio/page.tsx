"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, Users, CheckCircle } from "lucide-react";
import Link from "next/link";

const rodizioInfo = {
  price: 89.9,
  duration: "2 horas",
  includes: [
    "Variedade de sushis tradicionais",
    "Sashimis frescos do dia",
    "Hot rolls especiais",
    "Temakis variados",
    "Yakisoba tradicional",
    "Sobremesas japonesas",
    "Refrigerantes e sucos",
  ],
  // 👇 IMAGENS ATUALIZADAS AQUI
  images: ["/rodizio1.jpg", "/rodizio4.jpg", "/rodizio2.jpg", "/rodizio3.jpg"],
};

export default function RodizioPage() {
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
          <h1 className="text-4xl font-bold text-white mb-2">
            Rodízio Tradicional
          </h1>
          <p className="text-xl text-gray-300">
            Experimente uma variedade de pratos em nosso rodízio tradicional
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Info */}
            <div>
              <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 mb-8">
                <div className="text-center mb-8">
                  <div className="text-5xl font-bold text-red-400 mb-2">
                    R$ {rodizioInfo.price.toFixed(2)}
                  </div>
                  <p className="text-gray-300">por pessoa</p>
                </div>

                <div className="flex items-center justify-center space-x-8 mb-8">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-red-400" />
                    <span className="text-white">{rodizioInfo.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-5 h-5 text-red-400" />
                    <span className="text-white">Ilimitado</span>
                  </div>
                </div>

                <Button
                  className="w-full text-white text-lg py-4 shadow-lg relative overflow-hidden"
                  style={{
                    backgroundImage: "url('/sushi-pattern-bg.png')",
                    backgroundSize: "300px 300px",
                    backgroundRepeat: "repeat",
                  }}
                >
                  <div className="absolute inset-0 bg-red-600/90"></div>
                  <span className="relative z-10">Reservar Mesa</span>
                </Button>
              </div>

              <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
                <h3 className="text-2xl font-bold text-white mb-6">
                  O que está incluso:
                </h3>
                <div className="space-y-4">
                  {rodizioInfo.includes.map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Images (CÓDIGO CORRIGIDO) */}
            <div>
              <div className="grid grid-cols-2 gap-4">
                {rodizioInfo.images.map((image, index) => (
                  <div
                    key={index}
                    className="relative aspect-square rounded-2xl overflow-hidden border border-gray-800"
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`Rodízio ${index + 1}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-gray-900 rounded-2xl p-6 border border-gray-800">
                <h4 className="text-xl font-bold text-white mb-4">
                  Informações Importantes:
                </h4>
                <div className="space-y-3 text-gray-300">
                  <p>• Tempo limite de 2 horas por mesa</p>
                  <p>• Não é permitido levar comida para casa</p>
                  <p>• Crianças até 6 anos não pagam</p>
                  <p>• Crianças de 7 a 10 anos pagam 50%</p>
                  <p>• Reservas recomendadas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
