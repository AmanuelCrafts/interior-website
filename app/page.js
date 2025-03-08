import CompanySection from "@/components/CompanySection";
import Hero from "@/components/Hero";
import About from "../components/About";
import Catalogue from "@/components/Catalogue";
import CatalogueSwiper from "@/components/CatalogueSwiper";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <CompanySection />
      <About />
      <Catalogue />
      <CatalogueSwiper />
      <Contact />
    </main>
  );
}
