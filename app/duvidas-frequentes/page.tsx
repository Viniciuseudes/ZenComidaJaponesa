// app/duvidas-frequentes/page.tsx

"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

// Perguntas e respostas fornecidas por você
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

      {/* FAQ Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Coluna Esquerda: Categorias */}
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-bold text-white mb-4">Categorias</h2>
              <p className="text-gray-400 mb-6">
                Navegue pelos tópicos para encontrar rapidamente o que procura.
              </p>
              <div className="space-y-3">
                {Object.keys(faqs).map((category) => (
                  <a
                    key={category}
                    href={`#${category.replace(/\s+/g, "-")}`}
                    className="block text-gray-300 hover:text-red-500 transition-colors"
                  >
                    {category}
                  </a>
                ))}
              </div>
            </div>

            {/* Coluna Direita: Accordion */}
            <div className="lg:col-span-2">
              {Object.entries(faqs).map(([category, questions]) => (
                <div
                  key={category}
                  id={category.replace(/\s+/g, "-")}
                  className="mb-12"
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
                        <AccordionTrigger className="text-lg text-left hover:no-underline hover:text-red-400">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-400 leading-relaxed pt-2">
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
