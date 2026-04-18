import { useEffect } from "react";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Problem } from "@/components/site/Problem";
import { Services } from "@/components/site/Services";
import { Audience } from "@/components/site/Audience";
import { Process } from "@/components/site/Process";
import { Projects } from "@/components/site/Projects";
import { About } from "@/components/site/About";
import { Possibilities } from "@/components/site/Possibilities";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { useReveal } from "@/hooks/use-reveal";

const Index = () => {
  useReveal();

  useEffect(() => {
    // JSON-LD structured data
    const ld = document.createElement("script");
    ld.type = "application/ld+json";
    ld.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "ConsultEng",
      description:
        "ConsultEng hjelper nyetablerte norske bedrifter med moderne, profesjonelle nettsider som bygger tillit og gjør det enkelt for kunder å ta kontakt.",
      url: "https://consulteng.no/",
      email: "benjamin@consulteng.no",
      telephone: "+47 467 72 911",
      areaServed: "NO",
      founder: { "@type": "Person", name: "Benjamin Eng" },
    });
    document.head.appendChild(ld);
    return () => {
      document.head.removeChild(ld);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Problem />
        <Services />
        <Audience />
        <Process />
        <Projects />
        <About />
        <Possibilities />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
