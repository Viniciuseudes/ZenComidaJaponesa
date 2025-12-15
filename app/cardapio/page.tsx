"use client";

import Link from "next/link";
import { Utensils, Crown, Star } from "lucide-react";
import { Button } from "@/components/ui/button"; // Importando o componente de botão

const menuOptions = [
  {
    id: "a-la-carte",
    title: "À La Carte",
    description:
      "Escolha seus pratos favoritos do nosso cardápio tradicional, com opções individuais e combinados.",
    icon: Utensils,
    href: "/cardapio/a-la-carte",
  },
  {
    id: "rodizio",
    title: "Rodízio",
    description:
      "Experimente mais de 70 opções de pratos da autêntica culinária japonesa, servidos à vontade na sua mesa.",
    icon: Star,
    href: "/cardapio/rodizio",
  },
  {
    id: "rodizio-premium",
    title: "Rodízio Premium",
    description:
      "A experiência mais completa com todos os itens do rodízio tradicional mais uma seleção de pratos exclusivos do chef.",
    icon: Crown,
    href: "/cardapio/rodizio-premium",
  },
];

export default function CardapioPage() {
  return (
    <main className="min-h-screen bg-black">
      {/* Seção de Cabeçalho */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6 font-horizont">
            Nosso Cardápio
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Escolha a experiência gastronômica perfeita para você.
          </p>
        </div>
      </section>

      {/* Opções de Menu com Botão */}
      <section className="py-8 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {menuOptions.map((option) => {
              const Icon = option.icon;
              return (
                <Link key={option.id} href={option.href} className="flex">
                  {/* Card de Navegação com Botão */}
                  <div className="w-full bg-black rounded-2xl border border-gray-800 p-10 transition-all duration-300 hover:border-red-500 hover:shadow-lg hover:shadow-red-500/10 flex flex-col text-center items-center group">
                    <div className="mb-6">
                      <Icon className="w-10 h-10 text-gray-500 transition-colors group-hover:text-red-500" />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4 font-horizont">
                      {option.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed flex-grow">
                      {option.description}
                    </p>

                    {/* Botão adicionado aqui */}
                    <div className="mt-8 w-full">
                      <Button
                        variant="outline"
                        className="w-full border-gray-700 text-gray-300 group-hover:border-red-500 group-hover:bg-red-500 group-hover:text-white transition-colors duration-300"
                        tabIndex={-1} // Impede que o botão seja focado separadamente do link
                      >
                        Ver Cardápio
                      </Button>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
