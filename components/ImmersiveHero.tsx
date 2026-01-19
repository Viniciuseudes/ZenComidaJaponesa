"use client";

import { useState, useEffect, useRef } from "react";
// import Image from "next/image";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button"; // Importando buttonVariants
import { Play, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils"; // Importando cn para mesclar classes
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth",
      });
    }
  };

  let videoSectionScrollProgress = 0;
  if (typeof window !== "undefined") {
    videoSectionScrollProgress = Math.max(
      0,
      Math.min(
        1,
        (scrollY - window.innerHeight * 0.5) / (window.innerHeight * 0.5),
      ),
    );
  }

  return (
    <>
      {/* --- Seção 1: Hero Principal (COM VÍDEO DE FUNDO) --- */}
      <section
        ref={heroRef}
        className="relative h-screen overflow-hidden bg-black"
      >
        {/* Background de Vídeo */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            style={{ transform: `translateY(${scrollY * 0.5}px)` }}
          >
            <source src="/videoprincipa.mp4" type="video/mp4" />
            Seu navegador não suporta a tag de vídeo.
          </video>
          <div className="absolute inset-0 bg-black/60 z-0"></div>
        </div>

        {/* Conteúdo */}
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

              {/* --- BOTÕES FUNCIONAIS (CORRIGIDOS) --- */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                {/* 1. Botão Fazer Pedido (TÉCNICA BLINDADA: Sem asChild) */}
                <DropdownMenu modal={false}>
                  <DropdownMenuTrigger
                    className={cn(
                      // Usamos buttonVariants para pegar o estilo base de botão do shadcn
                      buttonVariants({ size: "lg" }),
                      // Adicionamos as classes personalizadas do seu projeto
                      "text-white text-lg px-8 py-4 shadow-2xl relative overflow-hidden w-full sm:w-auto min-w-[200px] cursor-pointer h-auto border-none",
                    )}
                    style={{
                      backgroundImage: "url('/sushi-pattern-bg.png')",
                      backgroundSize: "400px 400px",
                      backgroundRepeat: "repeat",
                    }}
                  >
                    <div className="absolute inset-0 bg-red-600/90 pointer-events-none"></div>
                    <span className="relative z-10 flex items-center gap-2">
                      Fazer Pedido <ChevronDown className="w-4 h-4" />
                    </span>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent className="bg-black border-gray-700 text-white z-50 min-w-[200px]">
                    <DropdownMenuItem asChild>
                      <a
                        href="https://loja.neemo.com.br/zencomidajaponesa"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-pointer w-full py-2 hover:bg-gray-800 focus:bg-gray-800 rounded-sm px-2 flex"
                      >
                        📍 Zona Norte
                      </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <a
                        href="https://loja.neemo.com.br/zencomidajaponesa-boaviagem"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-pointer w-full py-2 hover:bg-gray-800 focus:bg-gray-800 rounded-sm px-2 flex"
                      >
                        📍 Zona Sul
                      </a>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                {/* 2. Botão Ver Cardápio */}
                <Link href="/cardapio" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full border-2 border-white/80 text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-4 bg-black/20 backdrop-blur-sm min-w-[200px] h-auto"
                  >
                    <Play className="w-5 h-5 mr-2" />
                    Ver Cardápio
                  </Button>
                </Link>
              </div>
              {/* --- FIM DOS BOTÕES --- */}
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

      {/* --- Seção 2: Vídeo com Animação de Zoom --- */}
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
