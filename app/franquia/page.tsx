"use client";

import type React from "react";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  TrendingUp,
  Users,
  Award,
  HeadphonesIcon,
  MapPin,
  DollarSign,
  Play,
  CheckCircle,
  Briefcase,
  User,
  Mail,
  Phone,
} from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Mercado em Crescimento",
    description: "Setor de alimentação japonesa cresce 15% ao ano no Brasil",
  },
  {
    icon: Award,
    title: "Marca Consolidada",
    description: "Mais de 25 anos de tradição e reconhecimento no mercado",
  },
  {
    icon: Users,
    title: "Suporte Completo",
    description: "Treinamento, marketing e operações - tudo incluso",
  },
  {
    icon: MapPin,
    title: "Território Exclusivo",
    description: "Proteção territorial garantida para seu investimento",
  },
  {
    icon: DollarSign,
    title: "ROI Atrativo",
    description: "Retorno sobre investimento entre 18-24 meses",
  },
  {
    icon: HeadphonesIcon,
    title: "Suporte 24/7",
    description: "Equipe dedicada para apoiar seu sucesso",
  },
];

const support = [
  {
    title: "Treinamento Inicial",
    description: "4 semanas de treinamento intensivo em nossa sede",
    items: [
      "Técnicas culinárias",
      "Gestão operacional",
      "Atendimento ao cliente",
      "Controle financeiro",
    ],
  },
  {
    title: "Marketing e Publicidade",
    description: "Campanhas nacionais e suporte local",
    items: [
      "Material publicitário",
      "Campanhas digitais",
      "Redes sociais",
      "Eventos promocionais",
    ],
  },
  {
    title: "Operações",
    description: "Suporte contínuo para excelência operacional",
    items: [
      "Fornecedores homologados",
      "Controle de qualidade",
      "Sistemas de gestão",
      "Consultoria mensal",
    ],
  },
];

const investmentData = [
  {
    label: "Investimento Inicial",
    value: "R$ 350.000",
    description: "Taxa de franquia + equipamentos",
  },
  {
    label: "Capital de Giro",
    value: "R$ 80.000",
    description: "Primeiros 3 meses de operação",
  },
  {
    label: "Área Mínima",
    value: "120m²",
    description: "Localização estratégica",
  },
  {
    label: "Royalties",
    value: "6%",
    description: "Sobre faturamento bruto mensal",
  },
];

export default function FranquiaPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    investment: "",
    experience: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Franchise form submitted:", formData);
    // Aqui seria implementada a lógica de envio
    alert("Obrigado pelo interesse! Entraremos em contato em breve.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      city: "",
      state: "",
      investment: "",
      experience: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section com altura reduzida */}
      <section
        className="relative h-[60vh] text-white overflow-hidden flex items-center justify-center text-center"
        style={{
          backgroundImage: "url('/sushi-pattern-bg.png')",
          backgroundSize: "600px 600px",
          backgroundRepeat: "repeat",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/80 to-black/90"></div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 animate-fade-in text-shadow-lg">
              Seja um Franqueado Zen
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 text-shadow">
              Invista em uma das marcas mais respeitadas da culinária japonesa
              no Brasil
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="text-white text-lg px-8 py-4 shadow-2xl bg-white/20 backdrop-blur-sm border-2 border-white/80 hover:bg-white hover:text-gray-900"
              >
                Quero Ser Franqueado
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/80 text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-4 bg-black/20 backdrop-blur-sm"
              >
                <Play className="w-5 h-5 mr-2" />
                Assistir Vídeo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Por que Escolher a Franquia Zen?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Junte-se a uma rede de sucesso com mais de 25 anos de tradição na
              culinária japonesa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-black p-8 rounded-2xl border border-gray-700 hover:shadow-2xl hover:shadow-red-500/10 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 text-center">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 text-center">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Investment Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Investimento e Estrutura
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Transparência total sobre o investimento necessário para sua
              franquia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {investmentData.map((item, index) => (
              <div
                key={index}
                className="bg-black p-6 rounded-2xl border border-gray-700 text-center hover:shadow-xl transition-shadow"
              >
                <h3 className="text-lg font-semibold text-white mb-2">
                  {item.label}
                </h3>
                <div className="text-3xl font-bold text-red-400 mb-2">
                  {item.value}
                </div>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-black rounded-2xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              O que está incluso no investimento:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Taxa de franquia",
                "Projeto arquitetônico",
                "Equipamentos completos",
                "Móveis e decoração",
                "Sistema de gestão",
                "Treinamento inicial",
                "Material de marketing",
                "Estoque inicial",
                "Suporte pré-abertura",
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Suporte Completo
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Nossa equipe está ao seu lado em cada etapa do seu sucesso
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {support.map((item, index) => (
              <div
                key={index}
                className="bg-black p-8 rounded-2xl border border-gray-700 hover:shadow-2xl hover:shadow-red-500/10 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-white mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-300 mb-6">{item.description}</p>
                <ul className="space-y-3">
                  {item.items.map((subItem, subIndex) => (
                    <li key={subIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      <span className="text-gray-300">{subItem}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Conheça Nossa História
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Assista ao vídeo institucional e descubra como construímos uma das
              maiores redes de culinária japonesa do Brasil
            </p>

            <div className="relative aspect-video bg-black rounded-2xl overflow-hidden border border-gray-700">
              <Image
                src="/placeholder.svg?height=400&width=800&text=Video+Institucional+Franquia"
                alt="Vídeo Institucional Franquia"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <button className="w-20 h-20 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-colors shadow-2xl">
                  <Play className="w-8 h-8 text-white ml-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section
        className="py-16 text-white relative overflow-hidden"
        style={{
          backgroundImage: "url('/sushi-pattern-bg.png')",
          backgroundSize: "600px 600px",
          backgroundRepeat: "repeat",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/80 to-black/90"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                Seja Nosso Próximo Franqueado
              </h2>
              <p className="text-xl opacity-90">
                Preencha o formulário e nossa equipe entrará em contato para
                apresentar esta oportunidade única
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-gray-900">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Nome Completo *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="pl-10"
                        placeholder="Seu nome completo"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      E-mail *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="pl-10"
                        placeholder="seu@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Telefone *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="pl-10"
                        placeholder="(11) 99999-9999"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Cidade de Interesse *
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <Input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className="pl-10"
                        placeholder="Cidade"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Estado *
                    </label>
                    <select
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                      required
                    >
                      <option value="">Selecione o estado</option>
                      <option value="SP">São Paulo</option>
                      <option value="RJ">Rio de Janeiro</option>
                      <option value="MG">Minas Gerais</option>
                      <option value="PE">Pernambuco</option>
                      <option value="BA">Bahia</option>
                      <option value="PR">Paraná</option>
                      <option value="RS">Rio Grande do Sul</option>
                      <option value="SC">Santa Catarina</option>
                      <option value="GO">Goiás</option>
                      <option value="DF">Distrito Federal</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Capital Disponível *
                    </label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <select
                        name="investment"
                        value={formData.investment}
                        onChange={handleChange}
                        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                        required
                      >
                        <option value="">Selecione a faixa</option>
                        <option value="300-500k">
                          R$ 300.000 - R$ 500.000
                        </option>
                        <option value="500-800k">
                          R$ 500.000 - R$ 800.000
                        </option>
                        <option value="800k+">Acima de R$ 800.000</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Experiência no Setor
                  </label>
                  <div className="relative">
                    <Briefcase className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <select
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    >
                      <option value="">Selecione sua experiência</option>
                      <option value="nenhuma">Nenhuma experiência</option>
                      <option value="alimentacao">Setor de alimentação</option>
                      <option value="varejo">Varejo/Comércio</option>
                      <option value="servicos">Prestação de serviços</option>
                      <option value="outras">Outras áreas</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Mensagem Adicional
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Conte-nos mais sobre seu interesse na franquia Zen..."
                    rows={4}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full text-white text-lg py-4 shadow-lg relative overflow-hidden"
                  style={{
                    backgroundImage: "url('/sushi-pattern-bg.png')",
                    backgroundSize: "300px 300px",
                    backgroundRepeat: "repeat",
                  }}
                >
                  <div className="absolute inset-0 bg-red-600/90"></div>
                  <span className="relative z-10">
                    Quero Ser Franqueado Zen
                  </span>
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  Ao enviar este formulário, você concorda em ser contatado pela
                  equipe Zen sobre oportunidades de franquia.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
