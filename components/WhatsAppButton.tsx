"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  // Número formatado corretamente
  const whatsappNumber = "558130945028";
  const message = "Olá! Gostaria de falar com o Zen Comida Japonesa.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      // Z-[100] garante que fique acima de tudo
      // Mobile: bottom-4 right-4 e p-3 (mais discreto)
      // Desktop: bottom-6 right-6 e px-6 (mais chamativo)
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[100] flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white rounded-full p-3 md:p-4 shadow-lg shadow-green-900/20 transition-all duration-300 hover:scale-110 active:scale-95 group"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle className="w-6 h-6 md:w-5 md:h-5" />

      {/* Texto visível apenas em telas médias (md) para cima */}
      <span className="hidden md:inline font-medium whitespace-nowrap text-sm md:text-base pr-1">
        Fale conosco agora
      </span>
    </a>
  );
}
