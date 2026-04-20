import { SectionHeader } from "./SectionHeader";

const steps = [
  {
    n: "01",
    title: "Kartlegging",
    text: "Vi avklarer hva bedriften tilbyr, hvem kundene er og hva nettsiden skal gjøre.",
  },
  {
    n: "02",
    title: "Forslag",
    text: "Du får et konkret forslag til struktur, uttrykk og løsning.",
  },
  {
    n: "03",
    title: "Design og utvikling",
    text: "Vi bygger en moderne, mobilvennlig og profesjonell nettside.",
  },
  {
    n: "04",
    title: "Publisering",
    text: "Siden lanseres, og du får hjelp med det tekniske rundt publisering.",
  },
];

export const Process = () => {
  return (
    <section id="prosess" className="section-fade-to-cream py-24 md:py-32">
      <div className="container-tight">
        <SectionHeader
          eyebrow="Prosess"
          title="En enkel prosess fra idé til publisert nettside"
          description="Forutsigbart, tydelig og uten unødvendige ledd. Du vet alltid hva som skjer i hvert steg."
        />

        <ol className="reveal mt-16 grid gap-5 md:grid-cols-4 md:gap-6">
          {steps.map((s, i) => {
            const isLast = i === steps.length - 1;
            return (
              <li
                key={s.n}
                className="reveal relative flex"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <article className="card-editorial relative flex w-full flex-col p-7">
                  {/* Step indicator */}
                  <div className="flex items-center gap-3">
                    <span className="font-display text-2xl tracking-tight text-accent">
                      {s.n}
                    </span>
                    <span className="h-px flex-1 bg-border" aria-hidden />
                    <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      {isLast ? "Slutt" : i === 0 ? "Start" : "Steg"}
                    </span>
                  </div>

                  <h3 className="mt-10 text-lg font-medium tracking-tight text-foreground">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {s.text}
                  </p>
                </article>

                {/* Arrow connector to next card (desktop only) */}
                {!isLast && (
                  <span
                    aria-hidden
                    className="pointer-events-none absolute right-[-1.1rem] top-1/2 hidden h-px w-5 -translate-y-1/2 bg-border md:block"
                  >
                    <span className="absolute right-0 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rotate-45 border-r border-t border-border" />
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};
