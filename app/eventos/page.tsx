"use client";

import type React from "react";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Users,
  Heart,
  Building,
  Star,
  Play,
  X,
  Briefcase,
  User,
  Mail,
  Phone,
} from "lucide-react";

const eventTypes = [
  { icon: Building, title: "Eventos Corporativos" },
  { icon: Heart, title: "Casamentos e Celebrações" },
  { icon: Star, title: "Aniversários e Festas" },
  { icon: Users, title: "Confraternizações" },
];

// Array ATUALIZADO com a propriedade "poster" para os vídeos
const gallery = [
  {
    id: 1,
    type: "video",
    src: "/ev7.MOV",
    poster: "/ev7_poster.png", // <-- Adicione uma imagem de capa para seu vídeo
    title: "Confraternização",
    description: "Faça a sua confraternização aqui",
  },
  {
    id: 2,
    type: "video",
    src: "/ev.MOV",
    poster: "/ev_poster.png", // <-- Adicione uma imagem de capa para seu vídeo
    title: "Aniversário",
    description: "Comemoração para 50 convidados",
  },
  {
    id: 3,
    type: "image",
    src: "/ev1.JPG",
    title: "Aniversário Familiar",
    description: "Espaço para diversão",
  },
  {
    id: 4,
    type: "image",
    src: "/ev9.JPG",
    title: "Evento Coorporativo",
    description: "Crie um momento único com seus colaboradores",
  },
  {
    id: 5,
    type: "video",
    src: "/ev6.MOV",
    poster: "/ev6_poster.png", // <-- Adicione uma imagem de capa para seu vídeo
    title: "Making Of",
    description: "Bastidores da preparação",
  },
  {
    id: 6,
    type: "image",
    src: "/cozy-place-hero.png",
    title: "Nosso Ambiente",
    description: "Conforto e sofisticação",
  },
];

export default function EventosPage() {
  const [selectedGalleryItem, setSelectedGalleryItem] = useState<
    (typeof gallery)[0] | null
  >(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Event form submitted:", formData);
    alert(
      "Obrigado pelo interesse! Nossa equipe de eventos entrará em contato em breve."
    );
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section com altura reduzida */}
      <section
        className="relative h-[60vh] text-white overflow-hidden flex items-center justify-center text-center"
        style={{
          backgroundImage: "url('/sushi-pattern-bg.png')",
          backgroundSize: "600px 600px",
          backgroundRepeat: "repeat",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/80 to-black/90"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in text-shadow-lg">
              Eventos Inesquecíveis
            </h1>
            <p className="text-lg md:text-xl opacity-90 text-shadow">
              Transforme seus momentos especiais em experiências únicas com a
              sofisticação da culinária japonesa.
            </p>
          </div>
        </div>
      </section>

      {/* Seção "Tipos de Eventos" com hover vermelho */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Celebre no Zen
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Oferecemos o ambiente perfeito para todos os tipos de celebrações.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {eventTypes.map((eventType, index) => {
              const Icon = eventType.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="w-24 h-24 bg-gray-900 border-2 border-gray-800 rounded-full flex items-center justify-center mb-4 transition-all duration-300 group-hover:border-red-500 group-hover:scale-105">
                    <Icon className="w-10 h-10 text-gray-400 transition-colors duration-300 group-hover:text-red-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-white transition-colors duration-300 group-hover:text-red-500">
                    {eventType.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Seção da Galeria com hover vermelho */}
      <section className="py-24 bg-black border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Galeria de Inspirações
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Veja a magia dos eventos realizados em nosso espaço.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {gallery.map((item) => (
              <div
                key={item.id}
                className="relative group cursor-pointer rounded-xl overflow-hidden aspect-[9/16] border-2 border-gray-800 hover:border-red-500 transition-all duration-300"
                onClick={() => setSelectedGalleryItem(item)}
              >
                {/* LÓGICA ATUALIZADA AQUI */}
                <Image
                  src={
                    item.type === "video" && item.poster
                      ? item.poster
                      : item.src
                  }
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-3">
                  <h3 className="text-white text-sm font-semibold text-shadow opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.title}
                  </h3>
                </div>
                {item.type === "video" && (
                  <div className="absolute top-3 right-3 bg-black/50 rounded-full p-1.5">
                    <Play className="w-4 h-4 text-white fill-current" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal da Galeria (sem alterações) */}
      {selectedGalleryItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          onClick={() => setSelectedGalleryItem(null)}
        >
          <div
            className="relative max-w-[24rem] w-full aspect-[9/16] bg-black rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedGalleryItem(null)}
              className="absolute top-4 right-4 z-20 bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors"
            >
              <X className="w-5 h-5 text-white" />
            </button>
            {selectedGalleryItem.type === "image" ? (
              <Image
                src={selectedGalleryItem.src}
                alt={selectedGalleryItem.title}
                fill
                className="object-cover"
              />
            ) : (
              <video
                src={selectedGalleryItem.src}
                autoPlay
                loop
                muted
                controls
                className="w-full h-full object-cover"
              />
            )}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
              <h3 className="text-2xl font-bold text-white mb-1">
                {selectedGalleryItem.title}
              </h3>
              <p className="text-gray-300">{selectedGalleryItem.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* Seção do Formulário com botão vermelho */}
      <section
        className="py-24 text-white relative overflow-hidden"
        style={{
          backgroundImage: "url('/sushi-pattern-bg.png')",
          backgroundSize: "600px 600px",
          backgroundRepeat: "repeat",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/80 to-black/90"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Planeje Seu Evento</h2>
              <p className="text-xl opacity-90">
                Entre em contato conosco e nossa equipe criará uma proposta
                personalizada.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">
                      Nome *
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Seu nome completo"
                      required
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">
                      E-mail *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="seu@email.com"
                      required
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">
                    Telefone
                  </label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(00) 90000-0000"
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">
                    Detalhes do Evento
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Conte-nos sobre seu evento, data, número de convidados..."
                    rows={4}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
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
                  <span className="relative z-10">Solicitar Proposta</span>
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
