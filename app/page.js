import CompanySection from "@/components/CompanySection";
import Hero from "@/components/Hero";
import About from "../components/About";
import Catalogue from "@/components/Catalogue";
import CatalogueSwiper from "@/components/CatalogueSwiper";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="px-[3%] lg:px-[7%]">
      <Hero />
      <CompanySection />
      <About />
      <Catalogue />
      <CatalogueSwiper />
      <Contact />
    </main>
  );
}
