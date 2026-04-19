import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

export const Projects = () => {
  return (
    <section id="prosjekter" className="py-24 md:py-32">
      <div className="container-tight">
        <SectionHeader
          eyebrow="Prosjekter"
          title="Erfaring fra utvikling og digitale prosjekter"
          description="ConsultEng tar inn et begrenset antall pilotprosjekter med nye bedrifter som ønsker en profesjonell nettside."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <a
            href="https://digisaga.no"
            target="_blank"
            rel="noreferrer noopener"
            className="card-elevated reveal group flex flex-col p-8 md:p-10"
          >
            <div className="flex items-center justify-between">
              <span className="eyebrow">Aktiv satsing</span>
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted-foreground transition-all group-hover:border-foreground group-hover:text-foreground">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </div>
            <h3 className="mt-6 font-display text-2xl font-medium tracking-tight text-foreground">
              DigiSaga
            </h3>
            <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
              Benjamin er også en del av DigiSaga, en studentdrevet tech-satsing
              som utvikler nettsider og digitale løsninger med moderne
              webteknologi, integrasjoner og automatisering.
            </p>
            <span className="mt-6 text-xs uppercase tracking-[0.14em] text-muted-foreground transition-colors group-hover:text-foreground">
              digisaga.no
            </span>
          </a>

          <article
            className="card-elevated reveal flex flex-col p-8 md:p-10"
            style={{ transitionDelay: "100ms" }}
          >
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
                Under utvikling
              </span>
            </div>
            <h3 className="mt-6 font-display text-2xl font-medium tracking-tight text-foreground">
              Anbudsplattform
            </h3>
            <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
              En anbudsplattform under utvikling som kobler privatpersoner med
              håndverkere. Brukere kan beskrive jobben sin og motta tilbud fra
              kvalifiserte leverandører. Prosjektet inkluderer kategorisering av
              tjenester, leverandørregistrering og tilbudsflyt.
            </p>
            <span className="mt-6 text-xs uppercase tracking-[0.14em] text-muted-foreground">
              Lansering kommer
            </span>
          </article>
        </div>
      </div>
    </section>
  );
};
