// app/page.tsx

import ImmersiveHero from "@/components/ImmersiveHero";
import AnniversarySection from "@/components/AnniversarySection";
import SushiCarousel from "@/components/SushiCarousel";
import LocationSection from "@/components/LocationSection";
import LeadForm from "@/components/LeadForm";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <ImmersiveHero />
      <AnniversarySection />
      <SushiCarousel /> 
      <LocationSection />
      <LeadForm />
      <WhatsAppButton />
    </main>
  );
}
