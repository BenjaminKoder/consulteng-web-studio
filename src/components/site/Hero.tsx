import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroVisual from "@/assets/hero-visual.jpg";

export const Hero = () => {
  return (
    <section id="top" className="relative overflow-hidden pt-28 md:pt-36">
      {/* very subtle background grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(hsl(var(--border)) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage:
            "radial-gradient(ellipse at top, black 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at top, black 30%, transparent 75%)",
        }}
      />

      <div className="container-tight grid items-center gap-14 pb-20 md:grid-cols-12 md:gap-10 md:pb-28">
        <div className="md:col-span-7">
          <div className="animate-fade-in-up">
            <span className="eyebrow">Digitalt studio · Norge</span>
            <h1 className="mt-6 font-display text-[2.5rem] font-medium leading-[1.05] tracking-tight md:text-6xl">
              Profesjonell nettside <span className="text-muted-foreground">for nye bedrifter</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              ConsultEng hjelper nyetablerte bedrifter med moderne, raske og
              tillitsvekkende nettsider som gjør det enkelt for kunder å forstå
              hva du tilbyr og ta kontakt.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="rounded-full px-7">
                <a href="#kontakt">
                  Få et gratis forslag
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-7">
                <a href="#kontakt">Kontakt meg</a>
              </Button>
            </div>

            <p className="mt-7 max-w-md text-sm text-muted-foreground">
              Nettside, kontaktskjema, mobiltilpasning og publisering — samlet i
              én ryddig prosess.
            </p>
          </div>
        </div>

        <div className="md:col-span-5">
          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-secondary/60 blur-2xl" aria-hidden />
            <div className="overflow-hidden rounded-2xl border border-border/70 bg-card shadow-md">
              <img
                src={heroVisual}
                alt="Abstrakt visualisering av en ryddig, profesjonell nettside som settes sammen"
                width={1280}
                height={1280}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3 text-center text-xs text-muted-foreground">
              <div className="rounded-lg border border-border/70 bg-card px-3 py-2">Design</div>
              <div className="rounded-lg border border-border/70 bg-card px-3 py-2">Utvikling</div>
              <div className="rounded-lg border border-border/70 bg-card px-3 py-2">Publisering</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
