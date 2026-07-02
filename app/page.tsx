import { Hero } from "@/components/Hero";
import { ClassicHero } from "@/components/ClassicHero";
import { Pillars } from "@/components/Pillars";
import { Benefits } from "@/components/Benefits";
import { VaccinationTool } from "@/components/VaccinationTool";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
import { MobileCallBar } from "@/components/MobileCallBar";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Hero />
      <main className="flex-1">
        <ClassicHero />
        <Pillars />
        <Benefits />
        <VaccinationTool />
      </main>
      <Footer />
      <MobileCallBar />
    </>
  );
}
