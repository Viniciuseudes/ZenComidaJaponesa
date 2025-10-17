import type React from "react"
import type { Metadata } from "next"
import { Inter, Noto_Sans_JP } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

const inter = Inter({ subsets: ["latin"] })
const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-jp",
})

export const metadata: Metadata = {
  title: "Zen Comida Japonesa - Autêntica Culinária Oriental",
  description:
    "Descubra a autêntica culinária japonesa no Zen. Sushis frescos, pratos tradicionais e experiência gastronômica única. Delivery e franquias disponíveis.",
  keywords: "comida japonesa, sushi, restaurante oriental, delivery, franquia",
  openGraph: {
    title: "Zen Comida Japonesa",
    description: "Autêntica culinária japonesa com ingredientes frescos e tradição milenar",
    images: ["/zen-og-image.jpg"],
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${notoSansJP.variable}`}>
      <body className={`${inter.className} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
