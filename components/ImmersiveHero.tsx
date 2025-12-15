"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Play, ChevronDown } from "lucide-react";

export default function ImmersiveHero() {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToNext = () => {
    // Verificação de segurança adicionada aqui também, por precaução
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth",
      });
    }
  };

  // CORREÇÃO AQUI: Inicializa com 0 para o servidor
  let videoSectionScrollProgress = 0;

  // Só faz o cálculo se a "window" existir (navegador)
  if (typeof window !== "undefined") {
    videoSectionScrollProgress = Math.max(
      0,
      Math.min(
        1,
        (scrollY - window.innerHeight * 0.5) / (window.innerHeight * 0.5)
      )
    );
  }

  return (
    <>
      {/* --- Seção 1: Hero Principal (sem alterações) --- */}
      <section
        ref={heroRef}
        className="relative h-screen overflow-hidden bg-black"
      >
        <div
          className="absolute inset-0 bg-black"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        >
          <div className="absolute inset-0 bg-gradient-radial from-red-900/20 via-black to-black"></div>
        </div>
        <div className="relative z-10 h-full flex items-center justify-center text-center text-white">
          <div className="container mx-auto px-4">
            <div
              className="max-w-4xl mx-auto"
              style={{
                transform: `translateY(${scrollY * 0.1}px)`,
                opacity: Math.max(0, 1 - scrollY / 500),
              }}
            >
              <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold mb-8 animate-fade-in text-shadow-lg font-horizont">
                <span className="block text-red-500">ZEN</span>
                <span className="block text-white">COMIDA JAPONESA</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl mb-12 opacity-90 text-shadow max-w-2xl mx-auto">
                Tradição milenar em cada prato. Descubra a autêntica culinária
                japonesa.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button
                  size="lg"
                  className="text-white text-lg px-8 py-4 shadow-2xl relative overflow-hidden"
                  style={{
                    backgroundImage: "url('/sushi-pattern-bg.png')",
                    backgroundSize: "400px 400px",
                    backgroundRepeat: "repeat",
                  }}
                >
                  <div className="absolute inset-0 bg-red-600/90"></div>
                  <span className="relative z-10">Fazer Pedido</span>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/80 text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-4 bg-black/20 backdrop-blur-sm"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Ver Cardápio
                </Button>
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce"
        >
          <ChevronDown className="w-8 h-8 text-white/70 hover:text-white transition-colors" />
        </button>
      </section>

      {/* --- Seção 2: Vídeo com Animação de Zoom (AJUSTADO) --- */}
      <section className="relative h-screen bg-black flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover transition-transform duration-300 ease-out"
            style={{
              filter: "brightness(0.6)",
              // O vídeo começa um pouco afastado (scale(1)) e aproxima (scale(1.1)) conforme o usuário rola
              transform: `scale(${1 + videoSectionScrollProgress * 0.1})`,
            }}
          >
            <source
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vi%CC%81deo_Animado_com_Efeitos_Cinematogra%CC%81ficos-HFmkql00ZJnQmTjcAZyrNveUw68SyX.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div
          className="relative z-10 text-center text-white max-w-4xl px-4 transition-opacity duration-500"
          style={{
            // O texto só começa a aparecer quando a rolagem na seção do vídeo começa
            opacity: videoSectionScrollProgress,
          }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 md:mb-8">
            Experiência Completa
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl opacity-90 mb-12 max-w-2xl mx-auto">
            Ambiente acolhedor, atendimento excepcional e sabores autênticos que
            transportam você ao Japão
          </p>
        </div>
      </section>
    </>
  );
}
