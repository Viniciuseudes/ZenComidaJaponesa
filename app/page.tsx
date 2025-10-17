// app/page.tsx

import ImmersiveHero from "@/components/ImmersiveHero";
import AnniversarySection from "@/components/AnniversarySection";
import SushiCarousel from "@/components/SushiCarousel"; // Importe o novo carrossel
import LocationSection from "@/components/LocationSection";
import LeadForm from "@/components/LeadForm";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <ImmersiveHero />
      <AnniversarySection />
      <SushiCarousel /> {/* Adicione o carrossel aqui */}
      <LocationSection />
      <LeadForm />
      <WhatsAppButton />
    </main>
  );
}
