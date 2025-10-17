"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AnniversarySection() {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = sectionRef.current;
    if (!currentRef) return;

    // Esta é a lógica corrigida do observer
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Quando o elemento entra na tela
        if (entry.isIntersecting) {
          setIsInView(true); // Ativa a animação
          observer.unobserve(currentRef); // E para de observar para não repetir a animação
        }
      },
      {
        threshold: 0.1, // A animação começa quando 10% da seção está visível
      }
    );

    observer.observe(currentRef);

    return () => {
      // Limpeza: para de observar se o componente for desmontado
      observer.unobserve(currentRef);
    };
  }, []); // O array vazio garante que o código rode apenas uma vez, quando o componente é montado

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-black text-white overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/cozy-place-hero.png"
          alt="Ambiente elegante do Restaurante Zen"
          fill
          className={`object-cover transition-transform duration-1000 ease-out ${
            isInView ? "scale-105" : "scale-100"
          }`}
          quality={100}
        />
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center flex flex-col items-center">
        <div className="max-w-3xl">
          <h2
            className={`text-5xl md:text-6xl font-bold font-horizont mb-4 text-shadow-lg transition-all duration-700 ease-out ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            <span className="text-red-500">25 Anos</span> de Tradição e Sabor
          </h2>
          <p
            className={`text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto text-shadow transition-all duration-700 ease-out delay-200 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            Desde 1999, celebramos a autêntica culinária japonesa, unindo a
            precisão da tradição com a paixão por ingredientes frescos. Uma
            jornada de sabor que orgulhosamente compartilhamos com você.
          </p>
          <Link href="/quem-somos" passHref>
            <div
              className={`transition-all duration-700 ease-out delay-400 ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5"
              }`}
            >
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/80 text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-4 bg-transparent backdrop-blur-sm"
              >
                Conheça Nossa História
              </Button>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
