import { EcosystemSection } from "@/components/sections/ecosystem-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { Footer } from "@/components/sections/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { SolutionsSection } from "@/components/sections/solutions-section";
import { TechnologySection } from "@/components/sections/technology-section";
import { TrustSection } from "@/components/sections/trust-section";

export default function Home() {
  return (
    <main className="relative">
      <HeroSection />
      <EcosystemSection />
      <SolutionsSection />
      <TechnologySection />
      <ExperienceSection />
      <TrustSection />
      <Footer />
    </main>
  );
}
