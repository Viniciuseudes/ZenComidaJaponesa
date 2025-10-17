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
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Hero Principal (Mantido) */}
      <section
        ref={heroRef}
        className="relative h-screen overflow-hidden bg-black"
      >
        {/* Background com parallax */}
        <div
          className="absolute inset-0 bg-black"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-radial from-red-900/20 via-black to-black"></div>
        </div>

        {/* Sushi flutuante 1 */}
        <div
          className="absolute top-20 left-10 w-32 h-32 opacity-20"
          style={{
            transform: `translateY(${scrollY * 0.3}px) rotate(${
              scrollY * 0.1
            }deg)`,
          }}
        >
          <Image
            src="/placeholder.svg?height=128&width=128&text=🍣"
            alt="Sushi 1"
            fill
            className="object-contain"
          />
        </div>

        {/* Sushi flutuante 2 */}
        <div
          className="absolute top-40 right-20 w-24 h-24 opacity-15"
          style={{
            transform: `translateY(${scrollY * -0.2}px) rotate(${
              scrollY * -0.15
            }deg)`,
          }}
        >
          <Image
            src="/placeholder.svg?height=96&width=96&text=🍱"
            alt="Sushi 2"
            fill
            className="object-contain"
          />
        </div>

        {/* Sushi flutuante 3 */}
        <div
          className="absolute bottom-40 left-1/4 w-20 h-20 opacity-10"
          style={{
            transform: `translateY(${scrollY * 0.4}px) rotate(${
              scrollY * 0.2
            }deg)`,
          }}
        >
          <Image
            src="/placeholder.svg?height=80&width=80&text=🥢"
            alt="Sushi 3"
            fill
            className="object-contain"
          />
        </div>

        {/* Conteúdo principal */}
        <div className="relative z-10 h-full flex items-center justify-center text-center text-white">
          <div className="container mx-auto px-4">
            <div
              className="max-w-4xl mx-auto"
              style={{
                transform: `translateY(${scrollY * 0.1}px)`,
                opacity: Math.max(0, 1 - scrollY / 500),
              }}
            >
              <h1 className="text-6xl md:text-8xl font-bold mb-8 animate-fade-in text-shadow-lg font-horizont">
                <span className="block text-red-500">ZEN</span>
                <span className="block text-white">COMIDA JAPONESA</span>
              </h1>
              <p className="text-xl md:text-2xl mb-12 opacity-90 text-shadow max-w-2xl mx-auto">
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

        {/* Scroll indicator */}
        <button
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce"
        >
          <ChevronDown className="w-8 h-8 text-white/70 hover:text-white transition-colors" />
        </button>
      </section>

      {/* Seção de Ingredientes Frescos (AGORA ESTÁTICA) */}
      <section className="relative h-screen bg-black flex items-center justify-center overflow-hidden">
        {/* Imagem de Fundo Estática */}
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Co%CC%81pia%20de%20VictorMuzzi-1112.jpg-AHMENAKnAlCIgDI87Un3m3uB1ns1iy.jpeg"
          alt="Temaki Zen"
          fill
          className="object-cover opacity-40"
        />

        {/* Conteúdo de Texto Fixo por cima da imagem */}
        <div className="relative z-10 text-center text-white max-w-2xl px-4">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-shadow-lg">
            Ingredientes Frescos
          </h2>
          <p className="text-xl opacity-90 text-shadow">
            Selecionamos diariamente os melhores peixes e ingredientes para
            garantir a qualidade excepcional
          </p>
        </div>
      </section>

      {/* Seção de Variedades À La Carte (Mantida) */}
      <section className="relative h-screen bg-black overflow-hidden">
        {/* Grid de pratos que aparecem */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl px-8">
            {/* Sashimi */}
            <div
              className="relative w-80 h-80"
              style={{
                transform: `translateY(${Math.max(
                  -100,
                  Math.min(0, (scrollY - window.innerHeight * 2) / 5)
                )}px) rotate(${(scrollY - window.innerHeight * 2) * 0.02}deg)`,
                opacity: Math.max(
                  0,
                  Math.min(1, (scrollY - window.innerHeight * 2) / 200)
                ),
              }}
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/apenas%20a%20la%20carte%20.jpg-UXg2MmnPJKsgvHvnhb0YyXbtJfeX4r.jpeg"
                alt="Sashimi À La Carte"
                fill
                className="object-contain"
              />
            </div>

            {/* Temaki */}
            <div
              className="relative w-80 h-80"
              style={{
                transform: `translateY(${Math.max(
                  -100,
                  Math.min(0, (scrollY - window.innerHeight * 2) / 5 - 50)
                )}px) rotate(${(scrollY - window.innerHeight * 2) * -0.02}deg)`,
                opacity: Math.max(
                  0,
                  Math.min(1, (scrollY - window.innerHeight * 2 - 100) / 200)
                ),
              }}
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Co%CC%81pia%20de%20VictorMuzzi-1022.jpg-ULLbRuXdziMiQbWyPq7WVdGmXBBCC0.jpeg"
                alt="Temaki À La Carte"
                fill
                className="object-contain"
              />
            </div>

            {/* Robata */}
            <div
              className="relative w-80 h-80"
              style={{
                transform: `translateY(${Math.max(
                  -100,
                  Math.min(0, (scrollY - window.innerHeight * 2) / 5 - 100)
                )}px) rotate(${(scrollY - window.innerHeight * 2) * 0.03}deg)`,
                opacity: Math.max(
                  0,
                  Math.min(1, (scrollY - window.innerHeight * 2 - 200) / 200)
                ),
              }}
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Co%CC%81pia%20de%20MiniRobata-0674.jpg-vKqMJRAA52fjCSw2SkfLvxl8crspaR.jpeg"
                alt="Robata À La Carte"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Texto sobreposto */}
        <div
          className="absolute inset-0 flex items-center justify-center bg-black/50"
          style={{
            opacity: Math.max(
              0,
              Math.min(1, (scrollY - window.innerHeight * 2.5) / 300)
            ),
          }}
        >
          <div className="text-center text-white max-w-3xl px-4">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">À La Carte</h2>
            <p className="text-xl opacity-90 mb-8">
              Escolha entre sashimis frescos, temakis especiais e pratos robata
              únicos
            </p>
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
              <span className="relative z-10">Explorar Cardápio</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Seção Final - Vídeo do Ambiente (Mantida) */}
      <section className="relative h-screen bg-black flex items-center justify-center overflow-hidden">
        {/* Vídeo de fundo */}
        <div
          className="absolute inset-0"
          style={{
            transform: `scale(${
              1 + (scrollY - window.innerHeight * 3) / 2000
            })`,
            opacity: Math.max(
              0.7,
              1 - Math.abs(scrollY - window.innerHeight * 3.5) / 500
            ),
          }}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            style={{ filter: "brightness(0.6)" }}
          >
            <source
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vi%CC%81deo_Animado_com_Efeitos_Cinematogra%CC%81ficos-HFmkql00ZJnQmTjcAZyrNveUw68SyX.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Conteúdo final */}
        <div
          className="relative z-10 text-center text-white max-w-4xl px-4"
          style={{
            transform: `translateY(${Math.max(
              -50,
              Math.min(0, (scrollY - window.innerHeight * 3.2) / 10)
            )}px)`,
            opacity: Math.max(
              0,
              Math.min(1, (scrollY - window.innerHeight * 3.2) / 300)
            ),
          }}
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-8">
            Experiência Completa
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-12 max-w-2xl mx-auto">
            Ambiente acolhedor, atendimento excepcional e sabores autênticos que
            transportam você ao Japão
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
              <span className="relative z-10">Reservar Mesa</span>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/80 text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-4 bg-black/20 backdrop-blur-sm"
            >
              Conhecer Unidades
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
