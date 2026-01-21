"use client";

import Image from "next/image";
import { ArrowLeft, ChefHat } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

// TIPO ATUALIZADO
type RodizioItem = {
  name: string;
  description: string;
  image: string;
  chef?: string | null;
  chefImage?: string | null;
  chefBio?: string | null;
};

// DADOS DO MENU (Mantidos idênticos)
const rodizioMenu: Record<string, RodizioItem[]> = {
  "PRATOS DOS CHEFS": [
    {
      name: "Surpresa Zen",
      description:
        "Lâmina de peixe maçaricado, cream cheese, recheado com ebi skin, regado ao molho especial da casa.",
      chef: "Auricélio Romão",
      chefImage: "/auricelio.jpg",
      chefBio:
        "Auricélio Romão é um chef de cozinha renomado, conhecido por sua atuação em Fernando de Noronha, onde comanda os restaurantes Cacimba Bistrô e Casa do Auri. O chef oferece aos clientes uma experiência gastronômica diferenciada que celebra a criatividade e a sustentabilidade no uso de produtos locais.",
      image: "/surpresazen.png",
    },
    {
      name: "Mar de Noronha",
      description:
        "Peixe branco empanado com farofa de camarão, acompanhado com salada especial de manga, cenoura e azeite.",
      chef: "Auricélio Romão",
      chefImage: "/auricelio.jpg",
      chefBio:
        "Auricélio Romão é um chef de cozinha renomado, conhecido por sua atuação em Fernando de Noronha, onde comanda os restaurantes Cacimba Bistrô e Casa do Auri. O chef oferece aos clientes uma experiência gastronômica diferenciada que celebra a criatividade e a sustentabilidade no uso de produtos locais.",
      image: "/noronha.png",
    },
    {
      name: "Viva ao Zen",
      description:
        "Tapioca com gergelim, tartar de salmão com um toque de wasabi e camarão.",
      chef: "César Santos",
      chefImage: "/cesar.jpg",
      chefBio:
        "O chef César Santos é reconhecido no cenário gastronômico brasileiro, especialmente por sua inovação como chef do restaurante Oficina do Sabor, em Olinda. O seu trabalho como alquimista dos sabores valoriza a culinária nordestina, sempre buscando modernizar pratos tradicionais e agradando até os paladares mais exigentes.",
      image: "/image_3f9a5e.jpg",
    },
    {
      name: "Luxo Instantâneo",
      description:
        "Macarrão com calda de frutos do mar flambado, camarão e pimenta biquinho.",
      chef: "Felipe Barreto",
      chefImage: "/felipe barreto.jpg",
      chefBio:
        "Felipe Barreto é o chef responsável pelos restaurantes da rede La Trattoria, a qual possui unidades distribuídas no nordeste brasileiro. Os seus pratos apresentam como referência a tradicional culinária italiana com influências contemporâneas, o que reflete na criação de pratos autênticos que oferecem uma excelente experiência sensorial.",
      image: "/image_3f975b.jpg",
    },
    {
      name: "Petit Tranche",
      description:
        "Cubos de peixe maçaricado, sobre tartar de alga, batata-doce, regado a molho de ostra e teriyaki.",
      chef: "Kiko Selva",
      chefImage: "/kiko.png",
      chefBio:
        "Kiko Selva é o chef do Il Tavolo Ristorranti, um prestigiado restaurante italiano localizado em Recife. Sua atuação no setor gastronômico está ligada à sua paixão pela culinária, especialmente pela cozinha italiana. Essa trajetória de sucesso reflete seu compromisso em oferecer uma experiência contemporânea, sofisticada e exclusiva aos seus clientes.",
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
      chef: null,
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
            className="inline-flex items-center text-red-400 hover:text-red-300 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar ao Cardápio
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold font-horizont mb-6 text-white tracking-wide">
            Rodízio Tradicional
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-16 font-light leading-relaxed">
            Uma imersão completa na culinária japonesa. Mais de 70 opções
            servidas à vontade para você apreciar.
          </p>

          {/* PREÇIFICAÇÃO MINIMALISTA & PREMIUM (CLEAN DESIGN) */}
          <div className="max-w-4xl mx-auto border-t border-b border-zinc-900 py-12">
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-0">
              {/* Divisor Vertical Elegante (Apenas Desktop) */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-zinc-900" />

              {/* Coluna 1: Seg-Sex */}
              <div className="flex flex-col items-center justify-center text-center md:pr-12">
                <h3 className="text-red-500 font-medium tracking-[0.2em] text-xs uppercase mb-8 flex items-center gap-4">
                  SEGUNDA A SEXTA
                </h3>

                <div className="w-full max-w-xs space-y-6">
                  <div className="flex justify-between items-baseline group">
                    <span className="text-zinc-500 font-light text-lg group-hover:text-zinc-300 transition-colors">
                      Almoço
                    </span>
                    <div className="flex-1 mx-4 border-b border-dotted border-zinc-800 relative -top-1 opacity-50"></div>
                    <span className="text-2xl text-white font-light tracking-wide">
                      R$ 99,90
                    </span>
                  </div>
                  <div className="flex justify-between items-baseline group">
                    <span className="text-zinc-500 font-light text-lg group-hover:text-zinc-300 transition-colors">
                      Jantar
                    </span>
                    <div className="flex-1 mx-4 border-b border-dotted border-zinc-800 relative -top-1 opacity-50"></div>
                    <span className="text-2xl text-white font-light tracking-wide">
                      R$ 119,90
                    </span>
                  </div>
                </div>
              </div>

              {/* Coluna 2: Fim de Semana */}
              <div className="flex flex-col items-center justify-center text-center md:pl-12">
                <h3 className="text-red-500 font-medium tracking-[0.2em] text-xs uppercase mb-8 flex items-center gap-4">
                  SÁBADOS E DOMINGOS
                </h3>

                <div className="w-full max-w-xs h-full flex items-center">
                  <div className="flex justify-between items-baseline w-full group">
                    <span className="text-zinc-500 font-light text-lg group-hover:text-zinc-300 transition-colors">
                      Almoço e Jantar
                    </span>
                    <div className="flex-1 mx-4 border-b border-dotted border-zinc-800 relative -top-1 opacity-50"></div>
                    <span className="text-3xl text-white font-light tracking-wide">
                      R$ 119,90
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Fim da Preçificação */}
        </div>
      </section>

      {/* Seção do Menu do Rodízio */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          {Object.entries(rodizioMenu).map(([category, items]) => (
            <div key={category} className="mb-24">
              <div className="flex items-center gap-4 mb-12">
                <div className="h-px bg-zinc-800 flex-1"></div>
                <h2 className="text-3xl font-light text-white tracking-widest uppercase">
                  {category}
                </h2>
                <div className="h-px bg-zinc-800 flex-1"></div>
              </div>

              <div className="space-y-20">
                {items.map((item, index) => (
                  <div
                    key={item.name}
                    className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center animate-fade-in group"
                  >
                    {/* Imagem do Prato */}
                    <div
                      className={cn(
                        "relative w-full aspect-[4/3] overflow-hidden rounded-sm transition-transform duration-700 ease-out",
                        index % 2 === 1 && "md:order-2",
                      )}
                    >
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                      />
                      {category === "PRATOS DOS CHEFS" && (
                        <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-md border border-white/20 text-white px-3 py-1 text-xs font-medium tracking-wider uppercase">
                          Signature
                        </div>
                      )}
                    </div>

                    {/* Descrição do Prato & Chef */}
                    <div
                      className={cn(
                        "flex flex-col justify-center",
                        index % 2 === 1 && "md:order-1 text-right items-end",
                      )}
                    >
                      <h3 className="text-3xl text-white font-medium mb-4 group-hover:text-red-500 transition-colors duration-300">
                        {item.name}
                      </h3>
                      <div
                        className={cn(
                          "h-0.5 w-12 bg-red-600 mb-6",
                          index % 2 === 1 && "ml-auto",
                        )}
                      />
                      <p className="text-zinc-400 leading-relaxed font-light text-lg mb-8 max-w-md">
                        {item.description}
                      </p>

                      {/* CARD PREMIUM DO CHEF - Minimalista */}
                      {item.chef && item.chefBio && item.chefImage && (
                        <div
                          className={cn(
                            "mt-2 p-6 border-l-2 border-zinc-800 hover:border-red-900/50 transition-colors bg-gradient-to-r from-zinc-900/30 to-transparent",
                            index % 2 === 1
                              ? "border-l-0 border-r-2 text-right"
                              : "text-left",
                          )}
                        >
                          <div
                            className={cn(
                              "flex items-center gap-4 mb-3",
                              index % 2 === 1 && "flex-row-reverse",
                            )}
                          >
                            <div className="relative w-12 h-12 shrink-0 rounded-full overflow-hidden border border-zinc-700">
                              <Image
                                src={item.chefImage}
                                alt={item.chef}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div>
                              <p
                                className="text-xl text-white"
                                style={{
                                  fontFamily: "var(--font-dancing-script)",
                                }}
                              >
                                {item.chef}
                              </p>
                              <span className="text-xs text-red-500 uppercase tracking-widest font-semibold">
                                Chef Executivo
                              </span>
                            </div>
                          </div>
                          <p className="text-xs text-zinc-500 leading-relaxed max-w-sm italic">
                            "{item.chefBio.substring(0, 120)}..."
                          </p>
                        </div>
                      )}

                      {/* Fallback */}
                      {item.chef && !item.chefBio && (
                        <p
                          className="text-xl text-red-500 mt-2 opacity-80"
                          style={{ fontFamily: "var(--font-dancing-script)" }}
                        >
                          Assinado por {item.chef}
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
