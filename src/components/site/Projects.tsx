import { SectionHeader } from "./SectionHeader";

const projects = [
  {
    name: "DigiSaga",
    status: "Aktiv satsing",
    text: "Benjamin er også en del av DigiSaga, en studentdrevet tech-satsing som utvikler nettsider og digitale løsninger med moderne webteknologi, integrasjoner og automatisering.",
  },
  {
    name: "ProffAnbud",
    status: "Under utvikling",
    text: "Et anbudsplattform-prosjekt under utvikling som kobler privatpersoner med håndverkere. Brukere kan beskrive jobben sin og motta tilbud fra kvalifiserte leverandører. Prosjektet inkluderer kategorisering av tjenester, leverandørregistrering og tilbudsflyt.",
  },
];

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
          {projects.map((p, i) => (
            <article
              key={p.name}
              className="card-elevated reveal flex flex-col p-8 md:p-10"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex items-center justify-between">
                <span className="eyebrow">{p.status}</span>
                <span className="h-2 w-2 rounded-full bg-accent" aria-hidden />
              </div>
              <h3 className="mt-6 font-display text-2xl font-medium tracking-tight text-foreground">
                {p.name}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                {p.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
