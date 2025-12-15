"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  MapPin,
  Clock,
  Phone,
  Star,
  Navigation,
  X,
  Mail,
  Users,
} from "lucide-react";

const restaurants = [
  {
    id: 1,
    name: "Zen Piedade",
    city: "Recife",
    state: "PE",
    address: "R. Osório Borba, 167 - Piedade",
    fullAddress: "R. Osório Borba, 167 - Piedade, Recife - PE, 54400-120",
    phone: "(81) 3094-5028",
    email: "piedade@zencomidajaponesa.com.br",
    rating: 4.8,
    reviews: 324,
    hours: {
      weekdays: "Segunda a Sexta: 11h30 às 15h00 • 18h00 às 23h00",
      weekend: "Sábado e Domingo: 11h30 às 23h00",
      special: "Pausa para almoço: 15h00 às 18h00 (Seg-Sex)",
    },
    images: [
      "/zen-espinheiro-exterior.png", // CORREÇÃO: Imagem trocada
      "/placeholder.svg?height=300&width=400&text=Zen+Piedade+2",
      "/placeholder.svg?height=300&width=400&text=Zen+Piedade+3",
    ],
    mainImage: "/zen-espinheiro-exterior.png", // CORREÇÃO: Imagem trocada
    description:
      "Nossa primeira unidade, localizada no coração da Piedade. Ambiente aconchegante e tradicional, perfeito para momentos especiais em família.",
    features: [
      "Wi-Fi Gratuito",
      "Estacionamento",
      "Cartão de Crédito",
      "Reservas",
      "Delivery",
    ],
    capacity: 80,
    googleMapsUrl:
      "https://maps.google.com/?q=R.+Osório+Borba,+167+-+Piedade,+Recife+-+PE",
  },
  {
    id: 2,
    name: "Zen Espinheiro",
    city: "Recife",
    state: "PE",
    address: "Rua da Hora, 295 - Espinheiro",
    fullAddress: "Rua da Hora, 295 - Espinheiro, Recife - PE, 52020-010",
    phone: "(81) 3427-3377",
    email: "espinheiro@zencomidajaponesa.com.br",
    rating: 4.9,
    reviews: 456,
    hours: {
      weekdays: "Segunda a Sexta: 11h30 às 15h00 • 18h00 às 23h00",
      weekend: "Sábado e Domingo: 11h30 às 23h00",
      special: "Pausa para almoço: 15h00 às 18h00 (Seg-Sex)",
    },
    images: [
      "/zen-piedade-interior.png", // CORREÇÃO: Imagem trocada
      "/placeholder.svg?height=300&width=400&text=Zen+Espinheiro+2",
      "/placeholder.svg?height=300&width=400&text=Zen+Espinheiro+3",
    ],
    mainImage: "/zen-piedade-interior.png", // CORREÇÃO: Imagem trocada
    description:
      "Nossa unidade mais moderna, com arquitetura contemporânea e vista privilegiada. Ideal para encontros de negócios e ocasiões especiais.",
    features: [
      "Wi-Fi Gratuito",
      "Estacionamento Valet",
      "Cartão de Crédito",
      "Reservas",
      "Delivery",
      "Área VIP",
    ],
    capacity: 120,
    googleMapsUrl:
      "https://maps.google.com/?q=Rua+da+Hora,+295+-+Espinheiro,+Recife+-+PE",
  },
];

const cities = [
  "Todas as Cidades",
  ...Array.from(new Set(restaurants.map((r) => r.city))),
];
const states = [
  "Todos os Estados",
  ...Array.from(new Set(restaurants.map((r) => r.state))),
];

export default function RestaurantesPage() {
  const [selectedCity, setSelectedCity] = useState("Todas as Cidades");
  const [selectedState, setSelectedState] = useState("Todos os Estados");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRestaurant, setSelectedRestaurant] = useState<
    (typeof restaurants)[0] | null
  >(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const filteredRestaurants = restaurants.filter((restaurant) => {
    const matchesCity =
      selectedCity === "Todas as Cidades" || restaurant.city === selectedCity;
    const matchesState =
      selectedState === "Todos os Estados" ||
      restaurant.state === selectedState;
    const matchesSearch =
      restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      restaurant.address.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCity && matchesState && matchesSearch;
  });

  const handleDirections = (googleMapsUrl: string) => {
    window.open(googleMapsUrl, "_blank");
  };

  return (
    <main className="min-h-screen">
      {/* Simple Header */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Nossos Restaurantes
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Encontre a unidade Zen mais próxima de você e desfrute da melhor
            experiência gastronômica japonesa
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-black border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
            <Input
              type="text"
              placeholder="Buscar por nome ou endereço..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="max-w-xs bg-gray-800 border-gray-700 text-white placeholder-gray-400"
            />

            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>

            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              {states.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Restaurants Grid */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRestaurants.map((restaurant) => (
              <div
                key={restaurant.id}
                className="bg-black rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-red-500/10 transition-all duration-300 border border-gray-700 cursor-pointer"
                onClick={() => setSelectedRestaurant(restaurant)}
              >
                <div className="relative h-48">
                  <Image
                    src={restaurant.mainImage || "/placeholder.svg"}
                    alt={restaurant.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm rounded-full px-3 py-1">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-white text-sm">
                        {restaurant.rating}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {restaurant.name}
                  </h3>
                  <div className="flex items-center space-x-2 text-gray-400 mb-4">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{restaurant.address}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-gray-400">
                      <Users className="w-4 h-4" />
                      <span className="text-sm">
                        {restaurant.capacity} lugares
                      </span>
                    </div>
                    <Button
                      size="sm"
                      className="text-white shadow-lg relative overflow-hidden"
                      style={{
                        backgroundImage: "url('/sushi-pattern-bg.png')",
                        backgroundSize: "200px 200px",
                        backgroundRepeat: "repeat",
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedRestaurant(restaurant);
                      }}
                    >
                      <div className="absolute inset-0 bg-red-600/90"></div>
                      <span className="relative z-10">Ver Detalhes</span>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredRestaurants.length === 0 && (
            <div className="text-center py-12">
              <MapPin className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                Nenhum restaurante encontrado
              </h3>
              <p className="text-gray-400">Tente ajustar os filtros de busca</p>
            </div>
          )}
        </div>
      </section>

      {/* Restaurant Detail Modal */}
      {selectedRestaurant && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-black rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-700">
            {/* Header */}
            <div className="relative">
              <div className="h-64 relative">
                <Image
                  src={
                    selectedRestaurant.images[selectedImageIndex] ||
                    "/placeholder.svg"
                  }
                  alt={selectedRestaurant.name}
                  fill
                  className="object-cover rounded-t-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                {/* Close Button */}
                <button
                  onClick={() => setSelectedRestaurant(null)}
                  className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors backdrop-blur-sm"
                >
                  <X className="w-6 h-6 text-white" />
                </button>

                {/* Rating Badge */}
                <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm rounded-full px-3 py-1">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-white text-sm">
                      {selectedRestaurant.rating}
                    </span>
                    <span className="text-gray-300 text-sm">
                      ({selectedRestaurant.reviews} avaliações)
                    </span>
                  </div>
                </div>
              </div>

              {/* Image Thumbnails */}
              <div className="absolute bottom-4 left-4 flex space-x-2">
                {selectedRestaurant.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === selectedImageIndex
                        ? "bg-red-500 scale-125"
                        : "bg-white/50 hover:bg-white/70"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column */}
                <div>
                  <h2 className="text-3xl font-bold text-white mb-4">
                    {selectedRestaurant.name}
                  </h2>
                  <p className="text-gray-300 mb-6">
                    {selectedRestaurant.description}
                  </p>

                  {/* Address */}
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                      <MapPin className="w-5 h-5 text-red-400 mr-2" />
                      Endereço
                    </h3>
                    <p className="text-gray-300 mb-3">
                      {selectedRestaurant.fullAddress}
                    </p>
                    <Button
                      onClick={() =>
                        handleDirections(selectedRestaurant.googleMapsUrl)
                      }
                      className="text-white shadow-lg relative overflow-hidden"
                      style={{
                        backgroundImage: "url('/sushi-pattern-bg.png')",
                        backgroundSize: "200px 200px",
                        backgroundRepeat: "repeat",
                      }}
                    >
                      <div className="absolute inset-0 bg-red-600/90"></div>
                      <Navigation className="w-4 h-4 mr-2 relative z-10" />
                      <span className="relative z-10">Como Chegar</span>
                    </Button>
                  </div>

                  {/* Contact */}
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                      <Phone className="w-5 h-5 text-red-400 mr-2" />
                      Contato
                    </h3>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Phone className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-300">
                          {selectedRestaurant.phone}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-300">
                          {selectedRestaurant.email}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div>
                  {/* Hours */}
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                      <Clock className="w-5 h-5 text-red-400 mr-2" />
                      Horário de Funcionamento
                    </h3>
                    <div className="space-y-2">
                      <p className="text-gray-300">
                        {selectedRestaurant.hours.weekdays}
                      </p>
                      <p className="text-gray-300">
                        {selectedRestaurant.hours.weekend}
                      </p>
                      <p className="text-gray-400 text-sm italic">
                        {selectedRestaurant.hours.special}
                      </p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-white mb-3">
                      Comodidades
                    </h3>
                    <div className="grid grid-cols-2 gap-2">
                      {selectedRestaurant.features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-2"
                        >
                          <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                          <span className="text-gray-300 text-sm">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Capacity */}
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                      <Users className="w-5 h-5 text-red-400 mr-2" />
                      Capacidade
                    </h3>
                    <p className="text-gray-300">
                      {selectedRestaurant.capacity} lugares disponíveis
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <Button
                      className="w-full text-white shadow-lg relative overflow-hidden"
                      style={{
                        backgroundImage: "url('/sushi-pattern-bg.png')",
                        backgroundSize: "200px 200px",
                        backgroundRepeat: "repeat",
                      }}
                    >
                      <div className="absolute inset-0 bg-red-600/90"></div>
                      <span className="relative z-10">Reservar Mesa</span>
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full border-red-500 text-red-400 hover:bg-red-500 hover:text-white bg-transparent"
                    >
                      Fazer Pedido
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
