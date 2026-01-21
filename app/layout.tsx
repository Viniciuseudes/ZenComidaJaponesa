import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton"; // <--- Importe aqui
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const notoSansJP = Noto_Sans_JP({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
});

export const metadata: Metadata = {
  title: "Zen Comida Japonesa | O Melhor Rodízio de Recife",
  description:
    "Restaurante japonês premium em Recife. Rodízio completo, pratos à la carte e delivery. Unidades na Zona Norte e Zona Sul.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${inter.variable} ${notoSansJP.variable} font-sans bg-black text-white antialiased overflow-x-hidden`}
      >
        <Header />
        {children}
        <Footer />
        <WhatsAppButton /> {/* <--- Adicione aqui, antes de fechar o body */}
        <Toaster />
      </body>
    </html>
  );
}
