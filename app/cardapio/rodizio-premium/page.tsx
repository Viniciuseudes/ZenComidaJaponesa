"use client";

import Image from "next/image";
import { ArrowLeft, ChefHat, Crown } from "lucide-react";
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

// DADOS DO MENU
const rodizioMenu: Record<string, RodizioItem[]> = {
  "PRATOS PREMIUM": [
    {
      name: "Tuna Goma",
      description:
        "Atum selado em crosta de gergelim, com crocante de panko e cebola crispy, finalizado com trio de molhos.",
      image: "/tunagoma.jpg",
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
      image: "/tatakiatum.jpg",
      chef: null,
    },
    {
      name: "Ebi Joy",
      description:
        "Enrolado de arroz com lâmina de salmão, cream cheese e camarão maçaricado.",
      image: "/eby.png",
      chef: null,
    },
    // NOVOS PRATOS ADICIONADOS AQUI:
    {
      name: "Carpaccio de Salmão",
      description: "Defumado no fogo, com molho cítrico.",
      image: "/carpacciodesalmao.png",
      chef: null,
    },
    {
      name: "Sashimi de Salmão",
      description: "Maçaricado ao molho de ervas com flor de sal.",
      image: "/sashimimac.png",
      chef: null,
    },
    {
      name: "Shake Zen",
      description: "Salmão em cubos com queijo brie.",
      image: "/shakezen.png",
      chef: null,
    },
    {
      name: "Uzusukuri",
      description: "De salmão, atum e peixe branco.",
      image: "/ussuzukuri.png",
      chef: null,
    },
    {
      name: "Régua com 6 Niguiris",
      description: "Especiais.",
      image: "/eguaniguirisespeciais.png",
      chef: null,
    },
  ],
  "PRATOS DOS CHEFS": [
    {
      name: "Surpresa Zen",
      description:
        "Lâmina de peixe maçaricado, cream cheese, recheado com ebi skin, regado ao molho especial da casa.",
      chef: "Auricélio Romão",
      chefImage: "/auricelio.jpg",
      chefBio:
        "Auricélio Romão é um chef de cozinha renomado, conhecido por sua atuação em Fernando de Noronha, onde comanda os restaurantes Cacimba Bistrô e Casa do Auri. O chef oferece aos clientes uma experiência gastronômica diferenciada que celebra a criatividade e a sustentabilidade no uso de produtos locais.",
      image: "/surpresazen.jpg",
    },
    {
      name: "Mar de Noronha",
      description:
        "Peixe branco empanado com farofa de camarão, acompanhado com salada especial de manga, cenoura e azeite.",
      chef: "Auricélio Romão",
      chefImage: "/auricelio.jpg",
      chefBio:
        "Auricélio Romão é um chef de cozinha renomado, conhecido por sua atuação em Fernando de Noronha, onde comanda os restaurantes Cacimba Bistrô e Casa do Auri. O chef oferece aos clientes uma experiência gastronômica diferenciada que celebra a criatividade e a sustentabilidade no uso de produtos locais.",
      image: "/mardenoronha.jpg",
    },
    {
      name: "Viva ao Zen",
      description:
        "Tapioca com gergelim, tartar de salmão com um toque de wasabi e camarão.",
      chef: "César Santos",
      chefImage: "/cesar.jpg",
      chefBio:
        "O chef César Santos é reconhecido no cenário gastronômico brasileiro, especialmente por sua inovação como chef do restaurante Oficina do Sabor, em Olinda. O seu trabalho como alquimista dos sabores valoriza a culinária nordestina, sempre buscando modernizar pratos tradicionais e agradando até os paladares mais exigentes.",
      image: "/viva.jpg",
    },
    {
      name: "Luxo Instantâneo",
      description:
        "Macarrão com calda de frutos do mar flambado, camarão e pimenta biquinho.",
      chef: "Felipe Barreto",
      chefImage: "/felipe.jpg",
      chefBio:
        "Felipe Barreto é o chef responsável pelos restaurantes da rede La Trattoria, a qual possui unidades distribuídas no nordeste brasileiro. Os seus pratos apresentam como referência a tradicional culinária italiana com influências contemporâneas, o que reflete na criação de pratos autênticos que oferecem uma excelente experiência sensorial.",
      image: "/luxo.jpg",
    },
    {
      name: "Petit Tranche",
      description:
        "Cubos de peixe maçaricado, sobre tartar de alga, batata-doce, regado a molho de ostra e teriyaki.",
      chef: "Kiko Selva",
      chefImage: "/kiko.PNG",
      chefBio:
        "Kiko Selva é o chef do Il Tavolo Ristorranti, um prestigiado restaurante italiano localizado em Recife. Sua atuação no setor gastronômico está ligada à sua paixão pela culinária, especialmente pela cozinha italiana. Essa trajetória de sucesso reflete seu compromisso em oferecer uma experiência contemporânea, sofisticada e exclusiva aos seus clientes.",
      image: "/petit.png",
    },
  ],
  ENTRADAS: [
    {
      name: "Missoshiro",
      description:
        "Sopa de pasta de soja, cubos de queijo Tofu e cebolinha. Contém tempero de peixe.",
      image: "/missoshiro.jpg",
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
      image: "/sunomono.jpg",
      chef: null,
    },
    {
      name: "Ceviche",
      description: "Cubos de peixes, marinados no leite de tigre.",
      image: "/CEVICHE.png",
      chef: null,
    },
    {
      name: "Pastel Zen",
      description:
        "Recheado com carne, azeitona e champignon, empanado no panko. Acompanhado de molho de ervas finas.",
      image: "/PASTEL.png",
      chef: null,
    },
    {
      name: "Frango ao Zen",
      description: "Cubos de frango empanados. Acompanhado de molho Zen.",
      image: "/frango.jpg",
      chef: null,
    },
    {
      name: "Crocante de Peixe",
      description: "Massa crocante com pasta de peixe e cream cheese.",
      image: "/crocantepeixe.jpg",
      chef: null,
    },
    {
      name: "Crocante do Chef",
      description: "Roll crocante de kani, pasta de peixe e cebolinha.",
      image: "/crocantechef.jpg",
      chef: null,
    },
    {
      name: "Harumaki",
      description: "Massa fina crocante.",
      image: "/harumaki.jpg",
      chef: null,
    },
    {
      name: "Kakiague",
      description: "Empanado de vegetais, camarão e molho do tentsuyu.",
      image: "/kakiague.jpg",
      chef: null,
    },
    {
      name: "Guioza",
      description: "Preparada no vapor e finalizada na chapa.",
      image: "/guioza.jpg",
      chef: null,
    },
    {
      name: "Mini Robata",
      description: "Espeto com molho especial.",
      image: "/Robata.jpg",
      chef: null,
    },
  ],
  "HOSSOMAKI | URAMAKI": [
    {
      name: "Maguro Perfumado",
      description: "Atum maçaricado e regados ao azeite de ervas finas.",
      image: "/maguro.jpg",
      chef: null,
    },
    {
      name: "Canapemaki",
      description: "Canapé Roll.",
      image: "/canapemaki.jpg",
      chef: null,
    },
    {
      name: "Tekkamaki",
      description: "Roll recheado de peixe e cream cheese.",
      image: "/tekkamaki.jpg",
      chef: null,
    },
    {
      name: "Tempura Roll",
      description: "Camarão empanado e cream cheese.",
      image: "/tempura.jpg",
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
      image: "/phila.jpg",
      chef: null,
    },
    {
      name: "Uramaki Califórnia",
      description: "Manga, pepino e kani.",
      image: "/california.jpg",
      chef: null,
    },
    {
      name: "Cheese Crocante de Cebola",
      description: "Empanado de cebola e cream cheese.",
      image: "/cebola.jpg",
      chef: null,
    },
    {
      name: "Cheese Crocante de Alho",
      description: "Empanado de alho e cream cheese.",
      image: "/alho.jpg",
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
      image: "/KAMI.png",
      chef: null,
    },
    {
      name: "Canapé Crock",
      description: "Roll crocante de kani, pasta de peixe e cebolinha.",
      image: "/canape.jpg",
      chef: null,
    },
    {
      name: "Crock Ebi",
      description: "Roll crocante de camarão, cream cheese e molho teriyaki.",
      image: "/crockebi.jpg",
      chef: null,
    },
    {
      name: "Paulista",
      description: "Pasta de peixe, molho agridoce, cebolinha e gergelim.",
      image: "/paul.jpg",
      chef: null,
    },
    {
      name: "Tuna Zen Fry",
      description:
        "Atum empanado regado com teriyaki, azeite de tomate e ervas finas.",
      image: "/zenfry.jpg",
      chef: null,
    },
    {
      name: "Ebi Zen Baterá",
      description:
        "Baterá de salmão, camarão, cream cheese, maionese de pimenta sriracha e farofa de panko.",
      image: "/batera.jpg",
      chef: null,
    },
    {
      name: "Atsumaki",
      description:
        "Hossomaki recheado de salmão e cream cheese, empanado em crosta de gergelim.",
      image: "/atsumaki.jpg",
      chef: null,
    },
    {
      name: "Carioca",
      description: "Roll empanado de salmão e cream cheese.",
      image: "/carioca.jpg",
      chef: null,
    },
    {
      name: "Carioca de Salmão e Morango",
      description: "Roll empanado de salmão, morango e cream cheese.",
      image: "/salmorango.jpg",
      chef: null,
    },
    {
      name: "Romeu e Julieta",
      description: "Roll empanado de goiabada e cream cheese.",
      image: "/romeu.jpg",
      chef: null,
    },
    {
      name: "Cartola",
      description: "Roll empanado de banana e cream cheese.",
      image: "/image_3f38de.jpg",
      chef: null,
    },
  ],
  " NIGUIRIS": [
    {
      name: "Niguiri",
      description:
        "Salmão, Atum, Peixe Branco, Camarão, Kani, Skin, Peixe Branco Grelhado.",
      image: "/rodizio1.jpg",
      chef: null,
    },
  ],
  TEMAKIS: [
    {
      name: "Temakis Variados",
      description:
        "Opções diversas como Salmão, Atum, Kani, Vegetariano, e criações especiais.",
      image: "/temaki.jpg",
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
            className="inline-flex items-center text-amber-500 hover:text-amber-400 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar ao Cardápio
          </Link>

          {/* TÍTULO ALTERADO PARA TESTE */}
          <h1 className="text-5xl md:text-6xl font-bold font-horizont mb-6 text-white tracking-wide">
            Rodízio TESTE
          </h1>

          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-16 font-light leading-relaxed">
            Uma seleção exclusiva para quem exige o máximo da gastronomia. Todos
            os itens do rodízio tradicional somados a criações únicas do nosso
            chef.
          </p>

          {/* PREÇIFICAÇÃO MINIMALISTA PREMIUM (CLEAN DESIGN) */}
          <div className="max-w-2xl mx-auto border-t border-b border-zinc-900 py-12">
            <div className="flex flex-col items-center justify-center text-center">
              <h3 className="text-amber-500 font-medium tracking-[0.2em] text-xs uppercase mb-8 flex items-center gap-4">
                SEGUNDA A DOMINGO
              </h3>

              <div className="w-full max-w-sm space-y-2">
                <div className="flex justify-between items-baseline group">
                  <span className="text-zinc-500 font-light text-lg group-hover:text-zinc-300 transition-colors">
                    Almoço e Jantar
                  </span>
                  <div className="flex-1 mx-4 border-b border-dotted border-zinc-800 relative -top-1 opacity-50"></div>
                  <span className="text-4xl text-white font-light tracking-wide">
                    R$ 149,90
                  </span>
                </div>
                <p className="text-xs text-zinc-600 text-right mt-2 font-light">
                  *Inclui pratos exclusivos assinados pelos chefs
                </p>
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
                <h2
                  className={cn(
                    "text-3xl font-light tracking-widest uppercase",
                    category === "PRATOS PREMIUM"
                      ? "text-amber-500"
                      : "text-white",
                  )}
                >
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

                      {/* Tags Minimalistas */}
                      {category === "PRATOS DOS CHEFS" && (
                        <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-md border border-white/20 text-white px-3 py-1 text-xs font-medium tracking-wider uppercase">
                          Assinatura
                        </div>
                      )}
                      {category === "PRATOS PREMIUM" && (
                        <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md border border-amber-500/30 text-amber-400 px-3 py-1 text-xs font-medium tracking-wider uppercase flex items-center gap-2">
                          <Crown className="w-3 h-3" /> Exclusive
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
                      <h3
                        className={cn(
                          "text-3xl font-medium mb-4 transition-colors duration-300",
                          category === "PRATOS PREMIUM"
                            ? "text-white group-hover:text-amber-500"
                            : "text-white group-hover:text-red-500",
                        )}
                      >
                        {item.name}
                      </h3>

                      <div
                        className={cn(
                          "h-0.5 w-12 mb-6",
                          category === "PRATOS PREMIUM"
                            ? "bg-amber-600"
                            : "bg-red-600",
                          index % 2 === 1 && "ml-auto",
                        )}
                      />

                      <p className="text-zinc-400 leading-relaxed font-light text-lg mb-8 max-w-md">
                        {item.description}
                      </p>

                      {/* CARD DO CHEF - Minimalista e Discreto */}
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
                            "{item.chefBio.substring(0, 600)}..."
                          </p>
                        </div>
                      )}

                      {/* Fallback */}
                      {item.chef && !item.chefBio && (
                        <p
                          className={cn(
                            "text-xl mt-2 opacity-80",
                            category === "PRATOS PREMIUM"
                              ? "text-amber-500"
                              : "text-red-500",
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
