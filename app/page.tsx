import ImmersiveHero from "@/components/ImmersiveHero"
import LocationSection from "@/components/LocationSection"
import SocialFeed from "@/components/SocialFeed"
import LeadForm from "@/components/LeadForm"
import PromoBanner from "@/components/PromoBanner"
import WhatsAppButton from "@/components/WhatsAppButton"

export default function Home() {
  return (
    <main className="min-h-screen">
      <ImmersiveHero />
      <PromoBanner />
      <LocationSection />
      <SocialFeed />
      <LeadForm />
      <WhatsAppButton />
    </main>
  )
}
