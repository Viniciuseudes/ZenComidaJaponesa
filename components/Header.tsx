"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, MapPin } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button"; // Importando buttonVariants
import { cn } from "@/lib/utils"; // Importando utilitário de classes
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Início", href: "/" },
    { name: "Quem Somos", href: "/quem-somos" },
    { name: "Restaurantes", href: "/restaurantes" },
    { name: "Cardápio", href: "/cardapio" },
    { name: "Dúvidas", href: "/duvidas-frequentes" },
    { name: "Franquia", href: "/franquia" },
    { name: "Eventos", href: "/eventos" },
  ];

  return (
    <header className="bg-black shadow-2xl sticky top-0 z-50 border-b border-gray-800">
      {/* Top Bar */}
      <div
        className="text-white py-2 relative"
        style={{
          backgroundImage: "url('/sushi-pattern-bg.png')",
          backgroundSize: "400px 400px",
          backgroundRepeat: "repeat",
        }}
      >
        <div className="absolute inset-0 bg-red-600/90"></div>
        <div className="container mx-auto px-4 flex justify-between items-center text-sm relative z-10">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone className="w-4 h-4" />
              <span>(81) 3094-5028</span>
            </div>
            <div className="flex items-center space-x-1">
              <MapPin className="w-4 h-4" />
              <span>2 unidades em Recife/PE</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span> • Delivery disponível •</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/zen-logo.png"
              alt="Zen Comida Japonesa"
              width={180}
              height={60}
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-red-400 font-medium transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* CTA Buttons - Desktop (CORRIGIDO E OTIMIZADO) */}
          <div className="hidden md:flex items-center space-x-4">
            {/* FIX TÉCNICO:
               1. Removido 'asChild' para evitar conflito de Ref.
               2. Usamos 'modal={false}' para não travar o scroll ou interações.
               3. Aplicamos as classes do botão diretamente no Trigger.
            */}
            <DropdownMenu modal={false}>
              <DropdownMenuTrigger
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "border-red-500 text-red-400 hover:bg-red-500 hover:text-white bg-transparent transition-all duration-200 cursor-pointer outline-none select-none",
                )}
              >
                Fazer Pedido
              </DropdownMenuTrigger>

              <DropdownMenuContent
                className="bg-black border-gray-700 text-white z-[100] mt-2 min-w-[150px]"
                align="end"
              >
                <DropdownMenuItem
                  asChild
                  className="focus:bg-gray-800 focus:text-white cursor-pointer"
                >
                  <a
                    href="https://loja.neemo.com.br/zencomidajaponesa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center py-2"
                  >
                    Zona Norte
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem
                  asChild
                  className="focus:bg-gray-800 focus:text-white cursor-pointer"
                >
                  <a
                    href="https://loja.neemo.com.br/zencomidajaponesa-boaviagem"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center py-2"
                  >
                    Zona Sul
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-300 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-800">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-red-400 font-medium py-2 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-4">
                <a
                  href="https://loja.neemo.com.br/zencomidajaponesa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button
                    variant="outline"
                    className="w-full border-red-500 text-red-400 hover:bg-red-500 hover:text-white bg-transparent"
                  >
                    Pedido - Zona Norte
                  </Button>
                </a>
                <a
                  href="https://loja.neemo.com.br/zencomidajaponesa-boaviagem"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button
                    variant="outline"
                    className="w-full border-red-500 text-red-400 hover:bg-red-500 hover:text-white bg-transparent"
                  >
                    Pedido - Zona Sul
                  </Button>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
