import { Navigation } from "@/components/navigation"
import { AboutSection } from "@/components/about-section"
import { ProductsSection } from "@/components/products-section"
import { AutomationSection } from "@/components/automation-section"
import { ContactSection } from "@/components/contact-section"
import { KakaoChatButton } from "@/components/kakao-chat-button"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      <AboutSection />
      <ProductsSection />
      <AutomationSection />
      <ContactSection />
      <KakaoChatButton />
    </main>
  )
}
