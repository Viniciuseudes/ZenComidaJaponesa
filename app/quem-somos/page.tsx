"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  Users,
  Award,
  Heart,
  Globe,
  Flame,
  Sparkles,
  TrendingUp,
  MapPin,
  Shield,
  Crown,
  Play,
} from "lucide-react";

// Os dados da nova linha do tempo, baseados na sua história
const timeline = [
  {
    year: "2000",
    title: "O Início de Tudo",
    description:
      "Após a dissolução de uma sociedade, o Zen nasce em outubro com um espírito de inovação, trazendo o formato de delivery para a culinária japonesa no Recife.",
    icon: Flame,
  },
  {
    year: "2001-2006",
    title: "A Inovação do Rodízio",
    description:
      "Em meio a uma crise, o Zen revoluciona o mercado com o rodízio à la carte, servindo pratos frescos e preparados na hora, conquistando o público pela qualidade.",
    icon: Sparkles,
  },
  {
    year: "2007-2010",
    title: "Consolidação e Expansão",
    description:
      "O sucesso se consolida com a abertura da unidade no Espinheiro e a criação de um centro de processamento exclusivo para fortalecer o delivery.",
    icon: TrendingUp,
  },
  {
    year: "2013",
    title: "Chegada à Zona Sul",
    description:
      "Após uma grande reforma, a aguardada unidade de Piedade é inaugurada, marcando a expansão do Zen para a Zona Sul do Recife.",
    icon: MapPin,
  },
  {
    year: "2020-2022",
    title: "Resiliência e Reinvenção",
    description:
      "Superando crises e a pandemia, a marca se fortalece, centraliza operações e lança seu bem-sucedido modelo de franquias, expandindo a força do delivery.",
    icon: Shield,
  },
  {
    year: "2025",
    title: "25 Anos de Legado",
    description:
      "O Zen celebra suas bodas de prata, consolidado como uma referência em rodízio de sushi em Pernambuco e parte da história de gerações.",
    icon: Crown,
  },
];

// Dados da seção "Nossos Valores" (mantidos)
const values = [
  {
    icon: Heart,
    title: "Paixão pela Culinária",
    description: "Cada prato é preparado com amor e dedicação aos detalhes",
  },
  {
    icon: Award,
    title: "Qualidade Premium",
    description: "Ingredientes selecionados e técnicas tradicionais japonesas",
  },
  {
    icon: Users,
    title: "Experiência Única",
    description: "Ambiente acolhedor que proporciona momentos especiais",
  },
  {
    icon: Globe,
    title: "Tradição Autêntica",
    description:
      "Receitas milenares preservadas e adaptadas ao paladar brasileiro",
  },
];

export default function QuemSomos() {
  const [inView, setInView] = useState(false);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section (mantida) */}
      <section className="relative h-96 bg-black text-white">
        <Image
          src="/placeholder.svg?height=400&width=1200"
          alt="História do Zen"
          fill
          className="object-cover opacity-50"
        />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold mb-6">Nossa História</h1>
            <p className="text-xl opacity-90">
              Mais de 25 anos dedicados à autêntica culinária japonesa,
              preservando tradições e criando experiências inesquecíveis.
            </p>
          </div>
        </div>
      </section>

      {/* --- NOVA LINHA DO TEMPO VISUALMENTE ATRATIVA --- */}
      <section ref={timelineRef} className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Nossa Jornada
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A evolução do Zen Comida Japonesa ao longo dos anos, marcada por
              inovação e resiliência.
            </p>
          </div>

          <div className="relative max-w-3xl mx-auto">
            {/* A linha vertical da timeline */}
            <div className="absolute left-4 top-0 h-full w-0.5 bg-gray-700" />

            {timeline.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className={`relative flex items-start mb-12 transition-all duration-700 ease-out ${
                    inView
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-5"
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }} // Efeito cascata
                >
                  {/* O ponto e o ícone na linha */}
                  <div className="absolute left-0 top-1 flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center -translate-x-[15px] ring-8 ring-black">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  {/* O conteúdo do marco histórico */}
                  <div className="ml-12 pl-4">
                    <p className="text-sm font-semibold text-red-400 mb-1">
                      {item.year}
                    </p>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- SEÇÕES RESTANTES (MANTIDAS COMO ESTAVAM) --- */}

      {/* Values Section */}
      <section className="py-16 bg-black border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Nossos Valores
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Os princípios que guiam nossa paixão pela culinária japonesa
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-400">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Conheça Nossa Essência
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Assista ao vídeo e descubra como mantemos viva a tradição da
              culinária japonesa.
            </p>
            <div className="relative aspect-video bg-gray-800 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/placeholder.svg?height=400&width=800"
                alt="Vídeo Institucional"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                <button className="w-20 h-20 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-colors">
                  <Play className="w-8 h-8 text-white ml-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
