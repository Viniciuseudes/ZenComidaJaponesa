import Link from "next/link"
import Image from "next/image"
import { Phone, Clock, Instagram, Facebook, Youtube, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="mb-6">
              <Image src="/zen-logo.png" alt="Zen Comida Japonesa" width={180} height={60} className="h-12 w-auto" />
            </div>
            <p className="text-gray-400 mb-6">
              Tradição milenar em cada prato. Descubra a autêntica culinária japonesa com ingredientes frescos e preparo
              artesanal em Recife/PE.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-red-400">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/quem-somos" className="text-gray-400 hover:text-white transition-colors">
                  Quem Somos
                </Link>
              </li>
              <li>
                <Link href="/cardapio" className="text-gray-400 hover:text-white transition-colors">
                  Cardápio
                </Link>
              </li>
              <li>
                <Link href="/restaurantes" className="text-gray-400 hover:text-white transition-colors">
                  Restaurantes
                </Link>
              </li>
              <li>
                <Link href="/delivery" className="text-gray-400 hover:text-white transition-colors">
                  Delivery
                </Link>
              </li>
              <li>
                <Link href="/eventos" className="text-gray-400 hover:text-white transition-colors">
                  Eventos
                </Link>
              </li>
              <li>
                <Link href="/franquia" className="text-gray-400 hover:text-white transition-colors">
                  Seja um Franqueado
                </Link>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-red-400">Nossas Unidades</h4>
            <div className="space-y-4">
              <div>
                <h5 className="text-white font-medium mb-2">Zen Piedade</h5>
                <div className="text-gray-400 text-sm space-y-1">
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-3 h-3 mt-1 flex-shrink-0" />
                    <span>R. Osório Borba, 167 - Piedade</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="w-3 h-3" />
                    <span>(81) 3094-5028</span>
                  </div>
                </div>
              </div>
              <div>
                <h5 className="text-white font-medium mb-2">Zen Espinheiro</h5>
                <div className="text-gray-400 text-sm space-y-1">
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-3 h-3 mt-1 flex-shrink-0" />
                    <span>Rua da Hora, 295 - Espinheiro</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="w-3 h-3" />
                    <span>(81) 3427-3377</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-red-400">Newsletter</h4>
            <p className="text-gray-400 mb-4">Receba ofertas exclusivas e novidades do nosso cardápio.</p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-red-500 text-white placeholder-gray-500"
              />
              <button className="w-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white py-2 rounded-lg transition-all">
                Inscrever-se
              </button>
            </div>

            <div className="mt-6">
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <Clock className="w-4 h-4 text-red-400" />
                <div>
                  <div>Seg-Sex: 11h30-15h • 18h-23h</div>
                  <div>Sáb-Dom: 11h30-23h</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2024 Zen Comida Japonesa. Todos os direitos reservados.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacidade" className="text-gray-400 hover:text-white text-sm transition-colors">
                Política de Privacidade
              </Link>
              <Link href="/termos" className="text-gray-400 hover:text-white text-sm transition-colors">
                Termos de Uso
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
