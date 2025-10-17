"use client";

import { useState } from "react";
import Image from "next/image";
import {
  UtensilsCrossed,
  Fish,
  Flame,
  CookingPot,
  Soup,
  Beef,
  Wheat,
  Star,
} from "lucide-react";
import type React from "react";
import { cn } from "@/lib/utils";

// Tipos para o menu
type MenuOption = {
  type: string;
  description?: string;
  price: string;
};

type MenuItem = {
  name: string;
  description?: string;
  price?: string;
  options?: MenuOption[];
  image?: string; // Propriedade de imagem para os pratos especiais
};

type MenuCategory = {
  icon: React.ElementType;
  image: string;
  items: MenuItem[];
};

type MenuData = {
  [key: string]: MenuCategory;
};

// Dados do menu com imagens para cada categoria e para os pratos especiais
const menuData: MenuData = {
  ESPECIAIS: {
    icon: Star,
    image: "/premium2.jpg", // Imagem de fallback caso não haja itens
    items: [
      {
        name: "Ebizen Baterá",
        description:
          "PORÇÃO 10 UNIDADES | Baterá de salmão e camarão com cream cheese, ao molho de maionese sriracha coberto com massa de tempurá.",
        price: "R$ 32,00",
        image: "/image_4019e3.jpg",
      },
      {
        name: "Tuna Zen Fry",
        description:
          "PORÇÃO 10 UNIDADES | Atum especial empanado, regado ao molho de azeite de tomate e ervas finas.",
        price: "R$ 29,00",
        image: "/image_4016bd.jpg",
      },
      {
        name: "Kami Zen",
        description:
          "PORÇÃO 10 UNIDADES | Banana e bacalhau desfiado, ao molho aiolli e azeite de ervas finas.",
        price: "R$ 29,90",
        image: "/image_401713.jpg",
      },
      {
        name: "Tamago Zen",
        description:
          "PORÇÃO 8 UNIDADES | Legumes selecionados e frango empanado, enrolados com massa de tamago ao molho de maionese sriracha e molho missô.",
        price: "R$ 29,90",
        image: "/image_40131a.jpg",
      },
      {
        name: "Kakiague",
        description:
          "PORÇÃO 4 UNIDADES | Camarão e vegetais selecionados ao molho tentsuyu cream.",
        price: "R$ 25,00",
        image: "/image_4012de.jpg",
      },
    ],
  },
  COMBOS: {
    icon: UtensilsCrossed,
    image: "/rodizio1.jpg",
    items: [
      {
        name: "Combinado Zen",
        description:
          "Combinado servido com 03 Lâminas de Sashimi de Salmão, 03 Joy maçaricado com geléia, 03 Tempura Roll, 04 Philadelfia de Salmão, 04 Carioca de Salmão e 03 Crock Ebi. Total: 18 Peças",
        price: "R$ 73,00",
      },
      {
        name: "Combinado do cheff",
        description:
          "Combinado servido com 03 Philadelfia de salmão, 03 Crock ebi, 02 Niguiri de camarão, 02 Niguiri de salmão, 02 Joy maçaricado de geléia e 01 Temaki de salmão. Total: 12 peças + 01 Temaki",
        price: "R$ 75,00",
      },
      {
        name: "Combinado Zen Concept",
        description:
          "Combinado servido com 02 Lâminas de sashimi de salmão, 02 Hot Roll, 02 Atsun Maki, 02 Joy de camarão, 02 Joy Ebi, 02 Niguiri de Salmão maçaricado e 01 Temaki Zen. Total: 12 peças + 01 Temaki",
        price: "R$ 75,00",
      },
      {
        name: "Combinado Digital",
        description:
          "Combinado servido com 02 Joy salmão, 04 Philadelfia de salmão, 04 Niguiri de salmão e 01 Temaki de salmão. Total: 12 peças + 01 Temaki",
        price: "R$ 73,00",
      },
      {
        name: "Combinado Melhores do Zen",
        description:
          "Combinado servido com 02 Philadelfia de Salmão, 02 Carioca de Salmão, 02 Ebi Zen Baterá, 02 Joy natural, 01 Temaki Zen e 01 Mini Ceviche. Total: 12 peças + 01 Temaki + 01 Mini Ceviche",
        price: "R$ 86,00",
      },
      {
        name: "Combinado Jo Joy",
        description:
          "Combinado servido com 12 Joy Maçaricado com Geléia e 01 Temaki Jo Joy. Total: 12 peças + 01 Temaki",
        price: "R$ 89,00",
      },
    ],
  },
  ENTRADAS: {
    icon: Soup,
    image: "/ceviche-zen.png",
    items: [
      {
        name: "Sonomono",
        description:
          "Pepino especial acompanhado de isca de frutos do mar com gergelim.",
        options: [
          {
            type: "ESPECIAL: Salmão, atum, kani, polvo e peixe branco",
            price: "R$ 45,00",
          },
          { type: "SALMÃO", price: "R$ 43,00" },
          { type: "POLVO", price: "R$ 55,90" },
          { type: "CAMARÃO", price: "R$ 43,00" },
          { type: "PEIXE: Salmão, atum e peixe branco", price: "R$ 41,00" },
          { type: "KANI", price: "R$ 32,00" },
          { type: "PEPINO: Pepino com gergelim", price: "R$ 29,00" },
        ],
      },
      {
        name: "Ceviche",
        description: "Peixe e camarão cortados em cubos, marinados em limão",
        price: "R$ 47,00",
      },
      {
        name: "Missô Shiro",
        description:
          "Sopa de pasta de soja com cubos de queijo tofu e cebolinho. Contém tempero de peixe",
        price: "R$ 16,00",
      },
      {
        name: "Salada à Moda da Casa",
        description:
          "Legumes pré-cozidos, molho rosé, camarões refogados no azeite e champignons",
        price: "R$ 32,00",
      },
      {
        name: "Salada Zen Trodical",
        description:
          "Folhas, manga Tommy, peito de ave defumado e molho especial de mostarda",
        price: "R$ 24,00",
      },
      {
        name: "Guioza",
        description:
          "PORÇÃO 6 UNIDADE | Massa recheadacom acelga, preparada no vapor e selada na chapa",
        options: [
          { type: "CAMARÃO", price: "R$ 38,00" },
          { type: "CARNE", price: "R$ 36,00" },
        ],
      },
      {
        name: "Frango ao Zen",
        description: "Cubos de frango empanados, acompanhados de molho ZEN",
        price: "R$ 26,00",
      },
      {
        name: "Pastel Zen",
        description:
          "PORÇÃO 2 UNIDADE | Massa crocante com recheio refogado na cebola com cream cheese",
        options: [
          { type: "CAMARÃO", price: "R$ 26,00" },
          { type: "FILÉ", price: "R$ 24,00" },
          { type: "FRANGO", price: "R$ 24,00" },
          { type: "CREAM CHEESE", price: "R$ 19,00" },
        ],
      },
      {
        name: "Harumaki",
        description: "PORÇÃO 2 UNIDADE | Massa fina crocante",
        options: [
          { type: "CARNE COM LEGUMES", price: "R$ 23,00" },
          { type: "CAMARÃO COM LEGUMES", price: "R$ 25,00" },
          { type: "LEGUMES", price: "R$ 17,00" },
          { type: "CREAM CHEESE", price: "R$ 19,00" },
        ],
      },
      {
        name: "Robata",
        description: "PORÇÃO 1 UNIDADE | Espetinho",
        options: [
          { type: "CAMARÃO", price: "R$ 14,00" },
          { type: "PEIXE (Atum / Salmão / Peixe Branco)", price: "R$ 19,00" },
          { type: "FRUTOS DO MAR (Peixe e Camarão)", price: "R$ 16,00" },
          { type: "SALMÃO", price: "R$ 21,00" },
        ],
      },
    ],
  },
  "PRATOS QUENTES": {
    icon: CookingPot,
    image: "/yakisoba-vegetais.png",
    items: [
      {
        name: "Penne Oriental",
        description:
          "Massa penne acompanhada com filé, camarão e champignon ao molho oriental",
        price: "R$ 54,00",
      },
      {
        name: "Yakissoba",
        description:
          "Macarrão oriental, legumes grelhados, molho especial de soja e gergelim",
        options: [
          { type: "MISTO", price: "R$ 64,00" },
          { type: "FILÉ", price: "R$ 59,00" },
          { type: "CAMARÃO", price: "R$ 59,00" },
          { type: "FRANGO", price: "R$ 51,00" },
          { type: "LEGUMES", price: "R$ 44,00" },
        ],
      },
      {
        name: "Sukiaky de Frutos do Mar",
        description:
          "Camarão, peixe, polvo, kani e legumes com macarrão, preparados com molho shoyo, realçados com vinho e arroz aromático. (Acompanha goham)",
        price: "R$ 59,00",
      },
      {
        name: "Sukiaky de Filé",
        description:
          "Fatias finas de filé e legumes com macarrão, preparados com molho shoyo, realçados com vinho e arroz aromático. (Acompanha goham)",
        price: "R$ 59,00",
      },
      {
        name: "Tepan Yaki",
        description:
          "Grelhado acompanhado de arroz yakimeshi ou gohan, legumes e batatas.",
        options: [
          { type: "SALMÃO", price: "R$ 59,00" },
          { type: "CAMARÃO", price: "R$ 56,00" },
          { type: "ATUM", price: "R$ 56,00" },
          { type: "PEIXE BRANCO", price: "R$ 56,00" },
          { type: "FRANGO", price: "R$ 51,00" },
        ],
      },
      {
        name: "Filé Zen",
        description:
          "Filé alto grelhado, acompanhado de arroz yakimeshi ou gohan, batatas e molho nas opções madeira ou mostarda.",
        price: "R$ 64,00",
      },
      {
        name: "Tempurá",
        description:
          "PORÇÃO 8 UNIDADE | Empanados acompanhados de molho quente.",
        options: [
          { type: "CAMARÃO", price: "R$ 69,00" },
          { type: "MISTO", price: "R$ 64,00" },
          { type: "PEIXE", price: "R$ 64,00" },
          { type: "LEGUMES", price: "R$ 42,00" },
        ],
      },
      {
        name: "Salmão e Arte",
        description:
          "File de salmão acompanhado de legumes pré-cozidos e realçados ao molho especial, arroz e batata.",
        price: "R$ 62,00",
      },
      {
        name: "Risoto do Chef",
        description:
          "Risoto de camarão, acompanhado de batata tepan yaki e grelhado com capa de gergelim torrado.",
        options: [
          { type: "SALMÃO", price: "R$ 62,00" },
          { type: "CAMARÃO", price: "R$ 59,00" },
          { type: "ATUM", price: "R$ 57,00" },
          { type: "PEIXE BRANCO", price: "R$ 59,00" },
        ],
      },
      {
        name: "Peixe do Chef",
        description:
          "Arroz aromático com champignon, acompanhado de filé de peixe grelhados no azeite e grelhado com molho de camarão.",
        options: [
          { type: "SALMÃO", price: "R$ 59,00" },
          { type: "ATUM", price: "R$ 54,00" },
          { type: "PEIXE BRANCO", price: "R$ 56,00" },
        ],
      },
    ],
  },
  EMPANADOS: {
    icon: Flame,
    image: "/joy-damasco.png",
    items: [
      {
        name: "Canapé Crock",
        description:
          "Massa fina crocante, arroz, kani, cream cheese, pasta de salmão e cebolinho",
        price: "R$ 33,00",
      },
      {
        name: "Carioca",
        description: "Salmão / Atum / Kani e Cream Cheese",
        price: "R$ 33,00",
      },
      {
        name: "Carioca Crock Ebi",
        description:
          "Massa fina crocante, arroz, camarão, cream cheese e molho teriyaki",
        price: "R$ 33,00",
      },
      {
        name: "Carioca Salmão com Morango",
        description: "Salmão, morango, cream cheese e molho teriyaki",
        price: "R$ 33,00",
      },
      {
        name: "Carioca Cartola",
        description: "Doce de banana, cream cheese e canela",
        price: "R$ 33,00",
      },
      {
        name: "Carioca Romeu e Julieta",
        description: "Doce de goiaba, cream cheese e canela",
        price: "R$ 33,00",
      },
      {
        name: "Paulista",
        description:
          "Pasta especial de atum com maionese, molho agridoce, cebolinho e gergelim",
        price: "R$ 33,00",
      },
    ],
  },
  "HOSSOMAKIS | URAMAKIS": {
    icon: Beef,
    image: "/rodizio4.jpg",
    items: [
      {
        name: "Philadelfia",
        description: "Atum / Salmão / Skin / Kani, Morango e cream cheese",
        price: "R$ 22,00",
      },
      {
        name: "Tempurá Roll",
        description: "Camarão empanado e cream cheese",
        price: "R$ 22,00",
      },
      {
        name: "Tekkamaki",
        description: "Atum / Salmão / Kani",
        price: "R$ 18,00",
      },
      {
        name: "Canamaki",
        description: "Pasta de atum / Salmão / Kani",
        price: "R$ 18,00",
      },
      {
        name: "Acelcamaki",
        description:
          "Enrolado em acelga, recheado com maionese, salmão e cebolinho",
        price: "R$ 17,00",
      },
      {
        name: "Califórnia Uramaki",
        description: "Kani, pepino e manga",
        price: "R$ 22,00",
      },
      {
        name: "Cheese Crocante Cebola",
        description: "Cebola triturada empanada e cream cheese",
        price: "R$ 22,00",
      },
      {
        name: "Cheese Crocante Alho",
        description: "Alho triturado empanado e cream cheese",
        price: "R$ 22,00",
      },
      {
        name: "Uramaki Zen",
        description: "Cream cheese, casca de camarão crocante e molho teriyaki",
        price: "R$ 22,00",
      },
      {
        name: "Uramaki Pasta de Atum",
        description: "Atum cozido, maionese e cebolinho",
        price: "R$ 22,00",
      },
      {
        name: "Uramaki Joi",
        description: "Salmão, maionese e cebolinho",
        price: "R$ 22,00",
      },
      {
        name: "Uramaki Tae",
        description: "Salmão, atum, cebolinho, cheddar e molho picante",
        price: "R$ 22,00",
      },
      {
        name: "Hot Roll",
        description:
          "Empanado recheado com cream cheese, camarão, kani, salmão e cebolinho",
        price: "R$ 43,00",
      },
      {
        name: "Jo-Joi",
        description:
          "Enrolados com lâmina de salmão, coberto com pasta de salmão, cebolinho e maionese",
        price: "R$ 45,00",
      },
      {
        name: "Joi Maçaricado",
        options: [
          {
            type: "Camarão",
            description:
              "Enrolado de arroz, envolvida com lâmina de salmão, maçaricado e coberto com cream cheese, camarão, cebolinho, gergelim e molho teriyaki",
            price: "R$ 59,00",
          },
          {
            type: "Geleia",
            description:
              "Enrolado de arroz, envolvida com lâmina de salmão, maçaricado e coberto com pasta de peixes, geleia de damasco, cebolinho, gergelim e molho teriyaki",
            price: "R$ 56,00",
          },
        ],
      },
    ],
  },
  "SUSHI | SASHIMI": {
    icon: Fish,
    image: "/rodizio1.jpg",
    items: [
      {
        name: "Dupla de Niguiris",
        options: [
          { type: "POLVO", price: "R$ 21,00" },
          { type: "CAMARÃO", price: "R$ 16,00" },
          {
            type: "HOT POLAR",
            description:
              "Peixe branco grelhado, queijo cheddar e molho levemente picante",
            price: "R$ 16,00",
          },
          { type: "SALMÃO", price: "R$ 16,00" },
          { type: "ATUM", price: "R$ 15,00" },
          { type: "PEIXE BRANCO", price: "R$ 15,00" },
          { type: "KANI", price: "R$ 11,00" },
          { type: "PEIXE BRANCO GRELHADO", price: "R$ 16,00" },
          { type: "SKIN", price: "R$ 11,00" },
        ],
      },
      {
        name: "Sashimi | PORÇÃO 06 UNIDADE",
        options: [
          { type: "POLVO", price: "R$ 34,00" },
          { type: "CAMARÃO", price: "R$ 25,00" },
          { type: "SALMÃO", price: "R$ 29,00" },
          { type: "ATUM", price: "R$ 25,00" },
          { type: "PEIXE BRANCO", price: "R$ 25,00" },
          { type: "KANI", price: "R$ 21,00" },
        ],
      },
      {
        name: "Sashimi Maçaricado | PORÇÃO 12 UNIDADE",
        description: "Fatias de peixes maçaricados com molho especial",
        options: [
          { type: "SALMÃO", price: "R$ 53,00" },
          { type: "ATUM", price: "R$ 51,00" },
          { type: "PEIXE BRANCO", price: "R$ 51,00" },
        ],
      },
    ],
  },
  TEMAKIS: {
    icon: Wheat,
    image: "/temaki-zen.png",
    items: [
      {
        name: "Temaki Zen",
        description:
          "Rechado com pasta especial de salmão, camarão empanado, cebolinho, cream cheese, molho teriyaki e gergelim",
        price: "R$ 29,00",
      },
      {
        name: "Temaki Ebi Skin",
        description:
          "Recheado com casca de camarão crocante, cream cheese e molho teriyaki",
        price: "R$ 18,00",
      },
      {
        name: "Temaki Cheese Crocante Alho",
        description: "Alho triturado empanado e cream cheese",
        price: "R$ 18,00",
      },
      {
        name: "Temaki Cheese Crocante Cebola",
        description: "Cebola empanada e cream cheese",
        price: "R$ 18,00",
      },
      {
        name: "Temaki Califórnia",
        description: "Recheado com kani, pepino e manga",
        price: "R$ 18,00",
      },
      {
        name: "Temaki Vegetariano",
        description: "Recheado com legumes grelhados",
        price: "R$ 18,00",
      },
      {
        name: "Temaki Jo-Joi",
        description:
          "Recheado com pasta de salmão com maionese, cebolinho e gergelim",
        price: "R$ 29,00",
      },
      {
        name: "Temaki Peixe Branco Grelhado",
        description:
          "Recheado com peixe grelhado, cream cheese e molho teriyaki",
        price: "R$ 22,00",
      },
      {
        name: "Temaki Paulista",
        description:
          "Massa fina crocante, recheada com pasta de atum cozido com maionese, coberto com molho agridoce, cebolinho e gergelim",
        price: "R$ 22,00",
      },
      {
        name: "Temaki Romeu e Julieta",
        description:
          "Massa fina crocante, arroz, cream cheese, doce de goiaba e canela",
        price: "R$ 18,00",
      },
      {
        name: "Temaki Cartola",
        description:
          "Massa fina crocante, recheada com doce de banana, canela e cream cheese",
        price: "R$ 18,00",
      },
      {
        name: "Temaki Salmão Fruit",
        description:
          "Massa fina crocante, recheada com queijo cheddar, pasta de salmão com maionese e cebolinho, fatias de morango, kiwi e molho teriyaki",
        price: "R$ 22,00",
      },
      {
        name: "Temaki Salmão",
        description: "Opcional: Cream cheese",
        price: "R$ 25,00",
      },
      {
        name: "Temaki Atum",
        description: "Opcional: Cream cheese",
        price: "R$ 22,00",
      },
      {
        name: "Temaki Peixe Branco",
        description: "Opcional: Cream cheese",
        price: "R$ 18,00",
      },
      {
        name: "Temaki Kani Kama",
        description: "Opcional: Cream cheese",
        price: "R$ 18,00",
      },
      {
        name: "Temaki Camarão",
        description: "Opcional: Cream cheese",
        price: "R$ 22,00",
      },
      {
        name: "Temaki Skin Philadelfia",
        description:
          "Recheado com pele de salmão grelhada, cream cheese e molho teriyaki",
        price: "R$ 18,00",
      },
    ],
  },
};

export default function ALaCartePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("ESPECIAIS");

  const categoryData = menuData[selectedCategory];

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="py-24 bg-black border-b border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold font-horizont mb-4">
            Cardápio À La Carte
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Explore nossa seleção de pratos individuais, preparados com os
            ingredientes mais frescos e a tradição que você já conhece.
          </p>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          {/* Seção de Categorias */}
          <div className="mb-12">
            <h2 className="text-center text-3xl font-bold text-white mb-8">
              Navegue pelas Categorias
            </h2>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {Object.keys(menuData).map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={cn(
                    "px-6 py-3 rounded-full font-semibold transition-colors duration-300 ease-in-out",
                    selectedCategory === category
                      ? "bg-red-600 text-white shadow-lg"
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
                  )}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Seção de Conteúdo da Categoria Selecionada */}
          {selectedCategory && categoryData && (
            <div className="animate-fade-in max-w-5xl mx-auto">
              {selectedCategory === "ESPECIAIS" ? (
                <div className="space-y-16">
                  <div className="text-center mb-4">
                    <p className="text-lg italic text-gray-300">Por</p>
                    <p
                      className="text-4xl"
                      style={{ fontFamily: "var(--font-dancing-script)" }}
                    >
                      Márcio Fushimi
                    </p>
                  </div>
                  {categoryData.items.map((item, index) => (
                    <div
                      key={index}
                      className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center"
                    >
                      {/* Alterna a posição da imagem */}
                      <div
                        className={cn(
                          "relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-2xl shadow-red-900/10",
                          index % 2 === 1 && "md:order-2"
                        )}
                      >
                        {item.image && (
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover"
                          />
                        )}
                      </div>
                      <div
                        className={cn(
                          "flex flex-col",
                          index % 2 === 1 && "md:order-1"
                        )}
                      >
                        <h4 className="text-3xl font-bold text-white mb-3">
                          {item.name}
                        </h4>
                        <p className="text-gray-400 mb-4">{item.description}</p>
                        <p className="text-3xl font-semibold text-red-500">
                          {item.price}
                        </p>
                      </div>
                    </div>
                  ))}
                  {categoryData.items.length === 0 && (
                    <p className="text-center text-gray-500 italic text-lg">
                      Criações exclusivas do nosso chef em breve. Fique de olho!
                    </p>
                  )}
                </div>
              ) : (
                <div>
                  <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden mb-12 shadow-lg">
                    <Image
                      src={categoryData.image}
                      alt={`Imagem da categoria ${selectedCategory}`}
                      fill
                      className="object-cover"
                      quality={90}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                  <div className="space-y-6">
                    {categoryData.items.map((item, index) => (
                      <div
                        key={index}
                        className="py-4 border-b border-dashed border-gray-800"
                      >
                        <div className="flex justify-between items-start gap-4">
                          <div className="flex-grow">
                            <h4 className="text-xl font-semibold text-white">
                              {item.name}
                            </h4>
                            {item.description && (
                              <p className="text-gray-400 mt-1 text-sm">
                                {item.description}
                              </p>
                            )}
                          </div>
                          {item.price && (
                            <p className="text-xl font-semibold text-gray-300 flex-shrink-0">
                              {item.price}
                            </p>
                          )}
                        </div>
                        {item.options && (
                          <div className="mt-3 space-y-2">
                            {item.options.map((option, optIndex) => (
                              <div
                                key={optIndex}
                                className="flex justify-between items-start text-sm ml-4"
                              >
                                <div>
                                  <p className="text-gray-300">{option.type}</p>
                                  {option.description && (
                                    <p className="text-gray-500 mt-1 text-xs">
                                      {option.description}
                                    </p>
                                  )}
                                </div>
                                <p className="text-gray-300 font-medium">
                                  {option.price}
                                </p>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
