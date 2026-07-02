import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
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
      <Header />
      <main id="top" className="flex-1">
        <Hero />
        <Pillars />
        <Benefits />
        <VaccinationTool />
      </main>
      <Footer />
      <MobileCallBar />
    </>
  );
}
