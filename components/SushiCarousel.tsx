// components/SushiCarousel.tsx

"use client";

import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const sushiImages = [
  { src: "/C1.jpg", alt: "Prato de camarão empanado com fettuccine" },
  { src: "/C2.jpg", alt: "Dupla de niguiri com camarão empanado" },
  { src: "/C3.jpg", alt: "Seleção de niguiris variados" },
  { src: "/C4.jpg", alt: "Tartar de atum com gergelim" },
  { src: "/C5.jpg", alt: "Temaki com salmão e camarão empanado" },
  { src: "/C6.jpg", alt: "Dupla de uramaki especial" },
];

export default function SushiCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 2500, stopOnInteraction: true })
  );

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4 font-horizont">
            Nossa Arte em Forma de Sushi
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Cada peça é uma obra de arte, preparada com os ingredientes mais
            frescos e um toque de criatividade.
          </p>
        </div>
        <Carousel
          // A afirmação de tipo "as any" resolve o problema de tipagem
          plugins={[plugin.current as any]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {sushiImages.map((image, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="border-gray-800 bg-black overflow-hidden group">
                    <CardContent className="relative flex aspect-square items-center justify-center p-0">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                        quality={90}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-white bg-black/50 border-white/50 hover:bg-white hover:text-black" />
          <CarouselNext className="text-white bg-black/50 border-white/50 hover:bg-white hover:text-black" />
        </Carousel>
      </div>
    </section>
  );
}
