// app/duvidas-frequentes/page.tsx

"use client";

import { useState, useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, PlayCircle } from "lucide-react";
import YouTube from "react-youtube";

// --- DADOS DOS VÍDEOS (IDs DO YOUTUBE SHORTS) ---
const videoStories = [
  {
    title: "Conheça o Zen",
    videoId: "72J0EJplfa0",
  },
  {
    title: "Nossa Adega",
    videoId: "dttSYyzMdOk",
  },
  {
    title: "Condições para Crianças",
    videoId: "NeYSHudvsM4",
  },
];

// Configurações base do player
const youtubeOpts = {
  height: "100%",
  width: "100%",
  playerVars: {
    autoplay: 0,
    controls: 0,
    rel: 0,
    showinfo: 0,
    modestbranding: 1,
    iv_load_policy: 3,
    fs: 0,
    playsinline: 1,
    loop: 1,
  },
};

const faqs = {
  "Rodízio e Cardápio": [
    {
      question:
        "Qual a diferença entre o Rodízio Tradicional e o Rodízio Premium?",
      answer:
        "O Rodízio Tradicional oferece mais de 70 opções de pratos da culinária japonesa. Já o Rodízio Premium inclui todas essas opções mais 7 pratos exclusivos do Zen, elaborados com ingredientes nobres e apresentações especiais.",
    },
    {
      question: "Há opções vegetarianas no rodízio?",
      answer:
        "Sim. Temos opções de pratos vegetarianos e veganos, tanto frios quanto quentes. Basta informar ao garçom no início do atendimento.",
    },
    {
      question: "O rodízio inclui bebidas e sobremesas?",
      answer:
        "O rodízio não inclui bebidas nem sobremesas. Esses itens podem ser pedidos à parte, no formato à la carte, conforme a preferência do cliente.",
    },
    {
      question: "O Zen oferece menu executivo?",
      answer:
        "Sim. De segunda a sexta-feira, durante o horário de almoço, oferecemos um Menu Executivo completo, com entrada, prato principal e sobremesa. Uma opção ideal para quem busca praticidade sem abrir mão da experiência Zen.",
    },
  ],
  "Políticas e Serviços": [
    {
      question: "Crianças pagam quanto?",
      answer:
        "Crianças de 0 a 4 anos não pagam o rodízio. De 5 a 10 anos, pagam metade do valor do rodízio tradicional: R$ 59,90. A partir de 11 anos, é cobrado o valor integral.",
    },
    {
      question: "O Zen oferece desconto para bariátricos?",
      answer:
        "Atualmente, não oferecemos desconto específico para bariátricos. No entanto, dispomos de um cardápio à la carte variado, ideal para quem prefere porções menores e pratos individualizados.",
    },
    {
      question: "Como funcionam as reservas?",
      answer:
        "As reservas são exclusivas para grupos a partir de 10 pessoas. Para grupos menores, o atendimento é realizado por ordem de chegada, conforme a disponibilidade das mesas no momento.",
    },
    {
      question: "É possível realizar um evento particular?",
      answer:
        "Sim. O Zen dispõe de um espaço exclusivo para eventos. Oferecemos diferentes opções de cardápio e ambientação. Entre em contato conosco para solicitar um orçamento personalizado.",
    },
    {
      question: "O Zen é pet friendly?",
      answer:
        "Sim. Possuímos áreas externas pet friendly, onde seu pet é bem-vindo para compartilhar bons momentos ao seu lado.",
    },
    {
      question: "O Zen possui estacionamento próprio?",
      answer:
        "Não possuímos estacionamento próprio. No entanto, contamos com serviço de manobrista para oferecer praticidade e conforto aos nossos clientes durante a visita.",
    },
    {
      question: "Quais são os horários de funcionamento?",
      answer:
        "Segunda a Sexta-feira (Espinheiro e Piedade): 11h30 às 15h00 e 18h00 às 23h00. Sábados e Domingos (ambas as unidades): 11h30 às 23h00 (sem intervalo).",
    },
    {
      question: "O restaurante cobra taxa de serviço?",
      answer:
        "Sim, é cobrada taxa de serviço opcional de 10%, destinada à equipe de atendimento.",
    },
    {
      question:
        "É permitido levar bolo ou alimentos externos para comemorações?",
      answer:
        "Sim, mediante taxa de rolha simbólica e aviso prévio. Nossa equipe pode auxiliar com louças e utensílios, conforme disponibilidade.",
    },
  ],
};

export default function DuvidasFrequentesPage() {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const playerRefs = useRef<any[]>([]);

  const handlePlayPause = (index: number) => {
    const currentPlayer = playerRefs.current[index];
    const prevPlayer =
      playingIndex !== null ? playerRefs.current[playingIndex] : null;

    if (!currentPlayer) return;

    if (playingIndex === index) {
      currentPlayer.pauseVideo();
      setPlayingIndex(null);
    } else {
      if (prevPlayer && playingIndex !== index) {
        prevPlayer.pauseVideo();
      }
      currentPlayer.playVideo();
      setPlayingIndex(index);
    }
  };

  const onPlayerReady = (index: number, event: any) => {
    playerRefs.current[index] = event.target;
  };

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="py-24 bg-black border-b border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <HelpCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <h1 className="text-5xl font-bold font-horizont mb-4">
            Dúvidas Frequentes
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Encontre aqui as respostas para as perguntas mais comuns sobre
            nossos serviços e políticas.
          </p>
        </div>
      </section>

      {/* --- SEÇÃO DE VÍDEOS --- */}
      <section className="py-16 border-b border-gray-800/50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-10 text-gray-200">
            Confira nossos destaques em vídeo
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-10 max-w-4xl mx-auto">
            {videoStories.map((story, index) => {
              const isPlaying = playingIndex === index;

              const currentVideoOpts: any = {
                ...youtubeOpts,
                playerVars: {
                  ...youtubeOpts.playerVars,
                  playlist: story.videoId,
                },
              };

              return (
                <div
                  key={index}
                  onClick={() => handlePlayPause(index)}
                  className={`group relative aspect-[9/16] rounded-2xl overflow-hidden border bg-gray-900 transition-all duration-300 cursor-pointer
                    ${
                      isPlaying
                        ? "border-red-500 shadow-[0_0_20px_rgba(239,68,68,0.3)]"
                        : "border-gray-800 hover:border-red-500/50"
                    }
                  `}
                >
                  <div className="absolute inset-0 pointer-events-none">
                    <YouTube
                      videoId={story.videoId}
                      opts={currentVideoOpts}
                      onReady={(e: any) => onPlayerReady(index, e)}
                      // ⬇️ NOVA TÉCNICA DE CORTE
                      // 1. [&>iframe]:h-[115%]: Aumenta a altura do player para além do container.
                      // 2. [&>iframe]:-translate-y-[13%]: Move o player para cima, escondendo a barra de título.
                      // 3. [&>iframe]:object-cover: Tenta manter a proporção.
                      className="w-full h-full [&>iframe]:w-full [&>iframe]:h-[115%] [&>iframe]:object-cover [&>iframe]:-translate-y-[13%]"
                      onEnd={() => setPlayingIndex(null)}
                      onPause={() => isPlaying && setPlayingIndex(null)}
                      onPlay={() => !isPlaying && setPlayingIndex(index)}
                    />
                  </div>

                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent transition-all duration-300 z-10
                    ${isPlaying ? "opacity-0 invisible" : "opacity-100 visible"}
                  `}
                  >
                    <div className="absolute bottom-0 left-0 p-6 w-full">
                      <h3 className="text-xl font-bold text-white leading-tight">
                        {story.title}
                      </h3>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <PlayCircle className="w-16 h-16 text-white/90 group-hover:text-red-500 fill-black/50 transition-colors" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-1 sticky top-8 self-start">
              <h2 className="text-3xl font-bold text-white mb-4">Categorias</h2>
              <p className="text-gray-400 mb-6">
                Navegue pelos tópicos para encontrar rapidamente o que procura.
              </p>
              <div className="space-y-3">
                {Object.keys(faqs).map((category) => (
                  <a
                    key={category}
                    href={`#${category.replace(/\s+/g, "-")}`}
                    className="block text-gray-300 hover:text-red-500 transition-colors p-2 rounded hover:bg-gray-900"
                  >
                    {category}
                  </a>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2">
              {Object.entries(faqs).map(([category, questions]) => (
                <div
                  key={category}
                  id={category.replace(/\s+/g, "-")}
                  className="mb-12 scroll-mt-24"
                >
                  <h3 className="text-2xl font-bold text-white border-l-4 border-red-500 pl-4 mb-8">
                    {category}
                  </h3>
                  <Accordion type="single" collapsible className="w-full">
                    {questions.map((faq, index) => (
                      <AccordionItem
                        key={index}
                        value={`item-${index}`}
                        className="border-gray-800"
                      >
                        <AccordionTrigger className="text-lg text-left hover:no-underline hover:text-red-400 data-[state=open]:text-red-500">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-400 leading-relaxed pt-2 text-base">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
