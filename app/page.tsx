import dynamic from "next/dynamic";
import ImmersiveHero from "@/components/ImmersiveHero";
import AnniversarySection from "@/components/AnniversarySection";
import LocationSection from "@/components/LocationSection";
import LeadForm from "@/components/LeadForm";

const SushiCarousel = dynamic(() => import("@/components/SushiCarousel"), {
  ssr: true,
  loading: () => <div className="w-full h-[600px] bg-zinc-900 animate-pulse" />,
});

export default function Home() {
  return (
    <main className="min-h-screen bg-black overflow-x-hidden">
      <ImmersiveHero />
      <AnniversarySection />
      <SushiCarousel />
      <LocationSection />
      <LeadForm />
    </main>
  );
}
