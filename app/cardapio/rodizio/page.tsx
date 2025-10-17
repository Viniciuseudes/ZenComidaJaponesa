"use client";

import Image from "next/image";
import { ArrowLeft, ChefHat } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

// CORREÇÃO: Definindo um tipo para os itens do menu para resolver o erro do TypeScript
type RodizioItem = {
  name: string;
  description: string;
  image: string;
  chef?: string | null;
};

// Dados do menu do rodízio, agora completos e tipados
const rodizioMenu: Record<string, RodizioItem[]> = {
  "PRATOS DOS CHEFS": [
    {
      name: "Surpresa Zen",
      description:
        "Lâmina de peixe maçaricado, cream cheese, recheado com ebi skin, regado ao molho especial da casa.",
      chef: null,
      image: "/surpresazen.png",
    },
    {
      name: "Mar de Noronha",
      description:
        "Peixe branco empanado com farofa de camarão, acompanhado com salada especial de manga, cenoura e azeite.",
      chef: "Auricélio Romão",
      image: "/noronha.png",
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
    },
    {
      name: "Salada à Moda da Casa",
      description: "Legumes, camarões refogados no azeite, com molho rosé.",
      image: "/image_3f9b3a.jpg",
    },
    {
      name: "Mini Sunomono",
      description: "Pepino agridoce com mix de gergelim.",
      image: "/image_3f9b3a.jpg",
    },
    {
      name: "Ceviche",
      description: "Cubos de peixes, marinados no leite de tigre.",
      image: "/image_3f9b3a.jpg",
    },
    {
      name: "Pastel Zen",
      description:
        "Recheado com carne, azeitona e champignon, empanado no panko. Acompanhado de molho de ervas finas.",
      image: "/image_3f9af6.jpg",
    },
    {
      name: "Frango ao Zen",
      description: "Cubos de frango empanados. Acompanhado de molho Zen.",
      image: "/image_3f9af6.jpg",
    },
    {
      name: "Crocante de Peixe",
      description: "Massa crocante com pasta de peixe e cream cheese.",
      image: "/image_3f9af6.jpg",
    },
    {
      name: "Crocante do Chef",
      description: "Roll crocante de kani, pasta de peixe e cebolinha.",
      image: "/image_3f9af6.jpg",
    },
    {
      name: "Harumaki",
      description: "Massa fina crocante.",
      image: "/image_3f9ab9.jpg",
    },
    {
      name: "Kakiague",
      description: "Empanado de vegetais, camarão e molho do tentsuyu.",
      image: "/image_3f9ab9.jpg",
    },
    {
      name: "Guioza",
      description: "Preparada no vapor e finalizada na chapa.",
      image: "/image_3f9ab9.jpg",
    },
    {
      name: "Mini Robata",
      description: "Espeto com molho especial.",
      image: "/image_3f9ab9.jpg",
    },
  ],
  "HOSSOMAKI | URAMAKI": [
    {
      name: "Maguro Perfumado",
      description: "Atum maçaricado e regados ao azeite de ervas finas.",
      image: "/image_3f96be.jpg",
    },
    {
      name: "Canapemaki",
      description: "Canapé Roll.",
      image: "/image_3f96be.jpg",
    },
    {
      name: "Tekkamaki",
      description: "Roll recheado de peixe e cream cheese.",
      image: "/image_3f96be.jpg",
    },
    {
      name: "Tempura Roll",
      description: "Camarão empanado e cream cheese.",
      image: "/image_3f96be.jpg",
    },
    {
      name: "Uramaki Zen",
      description: "Crisp de camarão, cream cheese e molho teriyaki.",
      image: "/image_3f967f.jpg",
    },
    {
      name: "Philadelphia",
      description: "Salmão, Atum, Pasta de Peixe, Joy.",
      image: "/image_3f967f.jpg",
    },
    {
      name: "Uramaki Califórnia",
      description: "Manga, pepino e kani.",
      image: "/image_3f967f.jpg",
    },
    {
      name: "Cheese Crocante de Cebola",
      description: "Empanado de cebola e cream cheese.",
      image: "/image_3f44e1.jpg",
    },
    {
      name: "Cheese Crocante de Alho",
      description: "Empanado de alho e cream cheese.",
      image: "/image_3f44e1.jpg",
    },
    {
      name: "Joy",
      description:
        "Enrolado de arroz com lâmina de salmão, coberto com pasta de peixe.",
      image: "/image_3f44e1.jpg",
    },
  ],
  HOTS: [
    {
      name: "Kami Zen",
      description: "Banana crocante, bacalhau, molho aioli e azeite de ervas.",
      image: "/image_3f44a3.jpg",
    },
    {
      name: "Canapé Crock",
      description: "Roll crocante de kani, pasta de peixe e cebolinha.",
      image: "/image_3f44a3.jpg",
    },
    {
      name: "Crock Ebi",
      description: "Roll crocante de camarão, cream cheese e molho teriyaki.",
      image: "/image_3f44a3.jpg",
    },
    {
      name: "Paulista",
      description: "Pasta de peixe, molho agridoce, cebolinha e gergelim.",
      image: "/image_3f44a3.jpg",
    },
    {
      name: "Tuna Zen Fry",
      description:
        "Atum empanado regado com teriyaki, azeite de tomate e ervas finas.",
      image: "/image_3f9714.jpg",
    },
    {
      name: "Ebi Zen Baterá",
      description:
        "Baterá de salmão, camarão, cream cheese, maionese de pimenta sriracha e farofa de panko.",
      image: "/image_3f9714.jpg",
    },
    {
      name: "Atsumaki",
      description:
        "Hossomaki recheado de salmão e cream cheese, empanado em crosta de gergelim.",
      image: "/image_3f9714.jpg",
    },
    {
      name: "Carioca",
      description: "Roll empanado de salmão e cream cheese.",
      image: "/image_3f38de.jpg",
    },
    {
      name: "Carioca de Salmão e Morango",
      description: "Roll empanado de salmão, morango e cream cheese.",
      image: "/image_3f38de.jpg",
    },
    {
      name: "Romeu e Julieta",
      description: "Roll empanado de goiabada e cream cheese.",
      image: "/image_3f38de.jpg",
    },
    {
      name: "Cartola",
      description: "Roll empanado de banana e cream cheese.",
      image: "/image_3f38de.jpg",
    },
  ],
  "SASHIMIS | NIGUIRIS": [
    {
      name: "Sashimis",
      description:
        "Salmão, Atum, Peixe Branco, Camarão, Polvo. Mínimo 02 opções e no máximo 04.",
      image: "/image_3f35ff.jpg",
    },
    {
      name: "Niguiri",
      description:
        "Salmão, Atum, Peixe Branco, Camarão, Kani, Skin, Peixe Branco Grelhado.",
      image: "/image_3f35ff.jpg",
    },
  ],
  TEMAKIS: [
    {
      name: "Temakis Variados",
      description:
        "Salmão, Peixe Branco, Atum, Kani, Vegetariano, Alho Crocante, Cebola Crocante, Ebi Skin, Philadelfia, Califórnia, Joy, Peixe Branco Grelhado, Paulista, Romeu e Julieta.",
      image: "/image_3f35bf.jpg",
    },
  ],
};

export default function RodizioPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="py-24 bg-black border-b border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <Link
            href="/cardapio"
            className="inline-flex items-center text-red-400 hover:text-red-300 mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar ao Cardápio
          </Link>
          <h1 className="text-5xl font-bold font-horizont mb-4">
            Rodízio Tradicional
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Uma experiência completa com mais de 70 pratos da autêntica
            culinária japonesa, servidos à vontade na sua mesa.
          </p>
          <div className="inline-block bg-gray-900 border border-gray-800 rounded-lg px-6 py-3">
            <span className="text-3xl font-bold text-red-500">R$ 89,90</span>
            <span className="text-gray-400"> por pessoa</span>
          </div>
        </div>
      </section>

      {/* Seção do Menu do Rodízio */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          {Object.entries(rodizioMenu).map(([category, items]) => (
            <div key={category} className="mb-20">
              <h2 className="text-3xl font-bold text-white border-l-4 border-red-500 pl-4 mb-12">
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
                        "relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-2xl shadow-red-900/10",
                        index % 2 === 1 && "md:order-2"
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
                          className="text-xl text-red-500"
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
