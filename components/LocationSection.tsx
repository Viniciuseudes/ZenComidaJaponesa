"use client";

import { useState } from "react";
import { MapPin, Clock, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const locations = [
  {
    id: 1,
    name: "Zen Piedade",
    address: "R. Osório Borba, 167 - Piedade",
    cep: "CEP: 54.400-120 - Recife/PE",
    phone: "(81) 3094-5028",
    hours: {
      weekdays: "Seg-Sex: 11h30 às 15h00 • 18h00 às 23h00",
      weekend: "Sáb-Dom: 11h30 às 23h00",
    },
    // CORREÇÃO: Invertido para a imagem que corresponde a Piedade (anteriormente estava no Espinheiro)
    image: "/zen-espinheiro-exterior.png",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.778893973907!2d-34.8986256240212!3d-8.124233181189448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab1f5c6b653773%3A0x2633e2133499426f!2sZen%20-%20Comida%20Japonesa!5e0!3m2!1spt-BR!2sbr",
  },
  {
    id: 2,
    name: "Zen Espinheiro",
    address: "Rua da Hora, 295 - Espinheiro",
    cep: "CEP: 52.020-010 - Recife/PE",
    phone: "(81) 3427-3377",
    hours: {
      weekdays: "Seg-Sex: 11h30 às 15h00 • 18h00 às 23h00",
      weekend: "Sáb-Dom: 11h30 às 23h00",
    },
    // CORREÇÃO: Invertido para a imagem que corresponde ao Espinheiro (anteriormente estava em Piedade)
    image: "/zen-piedade-interior.png",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.4190479717757!2d-34.89704082402194!3d-8.058316180376378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab19a3b2b419cb%3A0xe5452a2332616428!2sZen%20Comida%20Japonesa%20Espinheiro!5e0!3m2!1spt-BR!2sbr",
  },
];

export default function LocationSection() {
  const [selectedLocation, setSelectedLocation] = useState(locations[0]);

  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Nossas Unidades
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Encontre a unidade Zen mais próxima de você em Recife e desfrute da
            melhor experiência gastronômica japonesa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
          {locations.map((location) => (
            <div
              key={location.id}
              className="bg-black rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-red-500/10 transition-all duration-300 border border-gray-700"
            >
              <div
                className="h-48 bg-cover bg-center relative"
                style={{ backgroundImage: `url(${location.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-4">
                  {location.name}
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-gray-300 block">
                        {location.address}
                      </span>
                      <span className="text-gray-400 text-sm">
                        {location.cep}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-red-400" />
                    <span className="text-gray-300">{location.phone}</span>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                    <div className="text-gray-300">
                      <div className="mb-1">{location.hours.weekdays}</div>
                      <div className="text-sm text-gray-400">
                        {location.hours.weekend}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-2 mt-6">
                  <Button
                    className="flex-1 text-white shadow-lg relative overflow-hidden"
                    style={{
                      backgroundImage: "url('/sushi-pattern-bg.png')",
                      backgroundSize: "200px 200px",
                      backgroundRepeat: "repeat",
                    }}
                  >
                    <div className="absolute inset-0 bg-red-600/90"></div>
                    <span className="relative z-10">Ver Rota</span>
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 border-red-500 text-red-400 hover:bg-red-500 hover:text-white bg-transparent"
                  >
                    Ligar
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Seção do Mapa Interativo */}
        <div className="bg-black border border-gray-700 rounded-2xl p-6">
          <h3 className="text-2xl font-semibold text-white mb-4 text-center">
            Mapa Interativo
          </h3>

          {/* Botões para selecionar a unidade */}
          <div className="flex justify-center gap-4 mb-6">
            {locations.map((location) => (
              <Button
                key={location.id}
                onClick={() => setSelectedLocation(location)}
                variant={
                  selectedLocation.id === location.id ? "default" : "outline"
                }
                className={
                  selectedLocation.id === location.id
                    ? "bg-red-600 hover:bg-red-700 text-white"
                    : "border-red-500 text-red-400 hover:bg-red-500 hover:text-white bg-transparent"
                }
              >
                <MapPin className="w-4 h-4 mr-2" />
                {location.name}
              </Button>
            ))}
          </div>

          {/* Iframe do mapa que muda dinamicamente */}
          <div className="aspect-video w-full">
            <iframe
              src={selectedLocation.embedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <div className="bg-black rounded-2xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-4">
              Informações Importantes
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-2xl mx-auto">
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-semibold mb-1">
                    Horário Especial
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Funcionamento com pausa no almoço durante a semana (15h00 às
                    18h00)
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-semibold mb-1">Reservas</h4>
                  <p className="text-gray-400 text-sm">
                    Recomendamos ligar com antecedência para garantir sua mesa
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
