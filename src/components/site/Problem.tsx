import { SectionHeader } from "./SectionHeader";

const items = [
  {
    n: "01",
    title: "Bygg tillit fra start",
    text: "En ryddig nettside signaliserer at bedriften er reell, gjennomtenkt og til å stole på.",
  },
  {
    n: "02",
    title: "Forklar tydelig hva du tilbyr",
    text: "Klar struktur og tekst gjør at besøkende skjønner tilbudet ditt på sekunder.",
  },
  {
    n: "03",
    title: "Gjør det enkelt å ta kontakt",
    text: "Tydelige kontaktveier reduserer terskelen for å sende den første henvendelsen.",
  },
];

export const Problem = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container-tight">
        <SectionHeader
          eyebrow="Førsteinntrykk"
          title="Nye bedrifter blir vurdert før første samtale"
          description="De fleste sjekker nettsiden din før de tar kontakt. Uten en profesjonell side taper du tillit før første samtale."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3 md:gap-6">
          {items.map(({ n, title, text }, i) => (
            <article
              key={title}
              className="card-editorial reveal flex flex-col p-8 md:p-9"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-sm tracking-tight text-accent">
                  {n}
                </span>
                <span className="h-px w-10 bg-border" aria-hidden />
              </div>
              <h3 className="mt-10 text-lg font-medium tracking-tight text-foreground">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
