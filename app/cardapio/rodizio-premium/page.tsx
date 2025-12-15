"use client";

import Image from "next/image";
import { ArrowLeft, ChefHat, Crown } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

// Tipo para os itens do menu
type RodizioItem = {
  name: string;
  description: string;
  image: string;
  chef?: string | null;
};

// Dados completos do menu do rodízio
const rodizioMenu: Record<string, RodizioItem[]> = {
  "PRATOS PREMIUM": [
    {
      name: "Tuna Goma",
      description:
        "Atum selado em crosta de gergelim, com crocante de panko e cebola crispy, finalizado com trio de molhos.",
      image: "/image_3f2abc.jpg",
      chef: null,
    },
    {
      name: "Ebi Oriental",
      description:
        "Massa com camarão, refogado na manteiga de gengibre e molho oriental.",
      image: "/ebioriental.png",
      chef: null,
    },
    {
      name: "Ebi Love",
      description: "Camarões empanados envolvidos em lâmina de salmão.",
      image: "/ebilove.png",
      chef: null,
    },
    {
      name: "Chiri Zen",
      description: "Carpaccio de salmão com cream cheese e geleia de pimenta.",
      image: "/chirizen.png",
      chef: null,
    },
    {
      name: "Zen Maki",
      description:
        "Alho-poró grelhado envolto em lâminas de salmão maçaricadas com molho especial.",
      image: "/zenmaki.png",
      chef: null,
    },
    {
      name: "Tataki de Atum",
      description: "Atum marinado no molho shoyu, gengibre e gergelim.",
      image: "/tatakiatum.png",
      chef: null,
    },
    {
      name: "Ebi Joy",
      description:
        "Enrolado de arroz com lâmina de salmão, cream cheese e camarão maçaricado.",
      image: "/ebijoy.png",
      chef: null,
    },
  ],
  "PRATOS DOS CHEFS": [
    {
      name: "Surpresa Zen",
      description:
        "Lâmina de peixe maçaricado, cream cheese, recheado com ebi skin, regado ao molho especial da casa.",
      chef: null,
      image: "/image_3f9a5e.jpg",
    },
    {
      name: "Mar de Noronha",
      description:
        "Peixe branco empanado com farofa de camarão, acompanhado com salada especial de manga, cenoura e azeite.",
      chef: "Auricélio Romão",
      image: "/image_3f9a5e.jpg",
    },
    {
      name: "Viva ao Zen",
      description:
        "Tapioca com gergelim, tartar de salmão com um toque de wasabi e camarão.",
      chef: "César Santos",
      image: "/image_3f9a5e.jpg",
    },
    {
      name: "Luxo Instantâneo",
      description:
        "Macarrão com calda de frutos do mar flambado, camarão e pimenta biquinho.",
      chef: "Felipe Barreto",
      image: "/image_3f975b.jpg",
    },
    {
      name: "Petit Tranche",
      description:
        "Cubos de peixe maçaricado, sobre tartar de alga, batata-doce, regado a molho de ostra e teriyaki.",
      chef: "Kiko Selva",
      image: "/image_3f975b.jpg",
    },
  ],
  ENTRADAS: [
    {
      name: "Missoshiro",
      description:
        "Sopa de pasta de soja, cubos de queijo Tofu e cebolinha. Contém tempero de peixe.",
      image: "/image_3f9b3a.jpg",
      chef: null,
    },
    {
      name: "Salada à Moda da Casa",
      description: "Legumes, camarões refogados no azeite, com molho rosé.",
      image: "/image_3f9b3a.jpg",
      chef: null,
    },
    {
      name: "Mini Sunomono",
      description: "Pepino agridoce com mix de gergelim.",
      image: "/image_3f9b3a.jpg",
      chef: null,
    },
    {
      name: "Ceviche",
      description: "Cubos de peixes, marinados no leite de tigre.",
      image: "/image_3f9b3a.jpg",
      chef: null,
    },
    {
      name: "Pastel Zen",
      description:
        "Recheado com carne, azeitona e champignon, empanado no panko. Acompanhado de molho de ervas finas.",
      image: "/image_3f9af6.jpg",
      chef: null,
    },
    {
      name: "Frango ao Zen",
      description: "Cubos de frango empanados. Acompanhado de molho Zen.",
      image: "/image_3f9af6.jpg",
      chef: null,
    },
    {
      name: "Crocante de Peixe",
      description: "Massa crocante com pasta de peixe e cream cheese.",
      image: "/image_3f9af6.jpg",
      chef: null,
    },
    {
      name: "Crocante do Chef",
      description: "Roll crocante de kani, pasta de peixe e cebolinha.",
      image: "/image_3f9af6.jpg",
      chef: null,
    },
    {
      name: "Harumaki",
      description: "Massa fina crocante.",
      image: "/image_3f9ab9.jpg",
      chef: null,
    },
    {
      name: "Kakiague",
      description: "Empanado de vegetais, camarão e molho do tentsuyu.",
      image: "/image_3f9ab9.jpg",
      chef: null,
    },
    {
      name: "Guioza",
      description: "Preparada no vapor e finalizada na chapa.",
      image: "/image_3f9ab9.jpg",
      chef: null,
    },
    {
      name: "Mini Robata",
      description: "Espeto com molho especial.",
      image: "/image_3f9ab9.jpg",
      chef: null,
    },
  ],
  "HOSSOMAKI | URAMAKI": [
    {
      name: "Maguro Perfumado",
      description: "Atum maçaricado e regados ao azeite de ervas finas.",
      image: "/image_3f96be.jpg",
      chef: null,
    },
    {
      name: "Canapemaki",
      description: "Canapé Roll.",
      image: "/image_3f96be.jpg",
      chef: null,
    },
    {
      name: "Tekkamaki",
      description: "Roll recheado de peixe e cream cheese.",
      image: "/image_3f96be.jpg",
      chef: null,
    },
    {
      name: "Tempura Roll",
      description: "Camarão empanado e cream cheese.",
      image: "/image_3f96be.jpg",
      chef: null,
    },
    {
      name: "Uramaki Zen",
      description: "Crisp de camarão, cream cheese e molho teriyaki.",
      image: "/image_3f967f.jpg",
      chef: null,
    },
    {
      name: "Philadelphia",
      description: "Salmão, Atum, Pasta de Peixe, Joy.",
      image: "/image_3f967f.jpg",
      chef: null,
    },
    {
      name: "Uramaki Califórnia",
      description: "Manga, pepino e kani.",
      image: "/image_3f967f.jpg",
      chef: null,
    },
    {
      name: "Cheese Crocante de Cebola",
      description: "Empanado de cebola e cream cheese.",
      image: "/image_3f44e1.jpg",
      chef: null,
    },
    {
      name: "Cheese Crocante de Alho",
      description: "Empanado de alho e cream cheese.",
      image: "/image_3f44e1.jpg",
      chef: null,
    },
    {
      name: "Joy",
      description:
        "Enrolado de arroz com lâmina de salmão, coberto com pasta de peixe.",
      image: "/image_3f44e1.jpg",
      chef: null,
    },
  ],
  HOTS: [
    {
      name: "Kami Zen",
      description: "Banana crocante, bacalhau, molho aioli e azeite de ervas.",
      image: "/image_3f44a3.jpg",
      chef: null,
    },
    {
      name: "Canapé Crock",
      description: "Roll crocante de kani, pasta de peixe e cebolinha.",
      image: "/image_3f44a3.jpg",
      chef: null,
    },
    {
      name: "Crock Ebi",
      description: "Roll crocante de camarão, cream cheese e molho teriyaki.",
      image: "/image_3f44a3.jpg",
      chef: null,
    },
    {
      name: "Paulista",
      description: "Pasta de peixe, molho agridoce, cebolinha e gergelim.",
      image: "/image_3f44a3.jpg",
      chef: null,
    },
    {
      name: "Tuna Zen Fry",
      description:
        "Atum empanado regado com teriyaki, azeite de tomate e ervas finas.",
      image: "/image_3f9714.jpg",
      chef: null,
    },
    {
      name: "Ebi Zen Baterá",
      description:
        "Baterá de salmão, camarão, cream cheese, maionese de pimenta sriracha e farofa de panko.",
      image: "/image_3f9714.jpg",
      chef: null,
    },
    {
      name: "Atsumaki",
      description:
        "Hossomaki recheado de salmão e cream cheese, empanado em crosta de gergelim.",
      image: "/image_3f9714.jpg",
      chef: null,
    },
    {
      name: "Carioca",
      description: "Roll empanado de salmão e cream cheese.",
      image: "/image_3f38de.jpg",
      chef: null,
    },
    {
      name: "Carioca de Salmão e Morango",
      description: "Roll empanado de salmão, morango e cream cheese.",
      image: "/image_3f38de.jpg",
      chef: null,
    },
    {
      name: "Romeu e Julieta",
      description: "Roll empanado de goiabada e cream cheese.",
      image: "/image_3f38de.jpg",
      chef: null,
    },
    {
      name: "Cartola",
      description: "Roll empanado de banana e cream cheese.",
      image: "/image_3f38de.jpg",
      chef: null,
    },
  ],
  "SASHIMIS | NIGUIRIS": [
    {
      name: "Sashimis",
      description:
        "Salmão, Atum, Peixe Branco, Camarão, Polvo. Mínimo 02 opções e no máximo 04.",
      image: "/image_3f35ff.jpg",
      chef: null,
    },
    {
      name: "Niguiri",
      description:
        "Salmão, Atum, Peixe Branco, Camarão, Kani, Skin, Peixe Branco Grelhado.",
      image: "/image_3f35ff.jpg",
      chef: null,
    },
  ],
  TEMAKIS: [
    {
      name: "Temakis Variados",
      description:
        "Opções diversas como Salmão, Atum, Kani, Vegetariano, e criações especiais.",
      image: "/image_3f35bf.jpg",
      chef: null,
    },
  ],
};

export default function RodizioPremiumPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="py-24 bg-black border-b border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <Link
            href="/cardapio"
            className="inline-flex items-center text-amber-400 hover:text-amber-300 mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar ao Cardápio
          </Link>
          <h1 className="text-5xl font-bold font-horizont mb-4">
            Rodízio Premium
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Uma experiência exclusiva com todos os itens do rodízio tradicional,
            mais uma seleção de pratos premium criados pelo nosso chef.
          </p>
          <div className="inline-block bg-gray-900 border border-gray-800 rounded-lg px-6 py-3">
            <span className="text-3xl font-bold text-amber-400">R$ 149,90</span>
            <span className="text-gray-400"> por pessoa</span>
          </div>
        </div>
      </section>

      {/* Seção do Menu do Rodízio */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          {Object.entries(rodizioMenu).map(([category, items]) => (
            <div key={category} className="mb-20">
              <h2
                className={cn(
                  "text-3xl font-bold text-white border-l-4 pl-4 mb-12",
                  category === "PRATOS PREMIUM"
                    ? "border-amber-400"
                    : "border-red-500"
                )}
              >
                {category}
              </h2>
              <div className="space-y-16">
                {items.map((item, index) => (
                  <div
                    key={item.name}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center animate-fade-in"
                  >
                    {/* Imagem do Prato */}
                    <div
                      className={cn(
                        "relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-2xl",
                        index % 2 === 1 && "md:order-2",
                        category === "PRATOS PREMIUM"
                          ? "shadow-amber-900/20"
                          : "shadow-red-900/10"
                      )}
                    >
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                      {category === "PRATOS DOS CHEFS" && (
                        <div className="absolute top-3 left-3 bg-red-600/90 text-white px-3 py-1 text-sm font-semibold rounded-full flex items-center gap-2">
                          <ChefHat className="w-4 h-4" />
                          <span>Do Chef</span>
                        </div>
                      )}
                      {category === "PRATOS PREMIUM" && (
                        <div className="absolute top-3 right-3 bg-black/50 text-amber-300 px-3 py-1 text-sm font-semibold rounded-full flex items-center gap-2 border border-amber-400/50 backdrop-blur-sm">
                          <Crown className="w-4 h-4" />
                          <span>Exclusivo Premium</span>
                        </div>
                      )}
                    </div>
                    {/* Descrição do Prato */}
                    <div
                      className={cn(
                        "flex flex-col",
                        index % 2 === 1 && "md:order-1"
                      )}
                    >
                      <h3 className="text-3xl font-bold text-white mb-3">
                        {item.name}
                      </h3>
                      <p className="text-gray-400 mb-4">{item.description}</p>
                      {item.chef && (
                        <p
                          className={cn(
                            "text-xl",
                            category === "PRATOS PREMIUM"
                              ? "text-amber-400"
                              : "text-red-500"
                          )}
                          style={{ fontFamily: "var(--font-dancing-script)" }}
                        >
                          {item.chef}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
