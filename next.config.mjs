/** @type {import('next').NextConfig} */
const nextConfig = {
  // Otimização de Imagens
  images: {
    // Habilita AVIF e WebP (Formatos modernos)
    formats: ['image/avif', 'image/webp'],
    // Permite imagens de qualquer domínio externo (útil para placeholders ou CMS)
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    // Cache de imagens otimizadas por mais tempo (60 segundos)
    minimumCacheTTL: 60,
  },
  // Remove console.log em produção para deixar o site mais limpo/rápido
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
};

export default nextConfig;