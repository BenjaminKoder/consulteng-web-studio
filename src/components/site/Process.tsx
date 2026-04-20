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
    <section id="prosess" className="py-24 md:py-32">
      <div className="container-tight">
        <SectionHeader
          eyebrow="Prosess"
          title="En enkel prosess fra idé til publisert nettside"
          description="Forutsigbart, tydelig og uten unødvendige ledd. Du vet alltid hva som skjer i hvert steg."
        />

        <ol className="reveal relative mt-16 grid gap-5 md:grid-cols-4 md:gap-6">
          {/* Connector line on desktop */}
          <span
            aria-hidden
            className="pointer-events-none absolute left-0 right-0 top-[2.6rem] hidden h-px bg-border md:block"
          />
          {steps.map((s, i) => (
            <li
              key={s.n}
              className="reveal relative flex flex-col"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="relative flex h-8 items-center">
                <span className="relative z-10 flex h-3 w-3 items-center justify-center rounded-full bg-accent">
                  <span className="absolute h-6 w-6 rounded-full bg-accent/15" aria-hidden />
                </span>
              </div>
              <div className="card-editorial mt-4 flex flex-col p-7">
                <span className="font-display text-sm tracking-tight text-accent">
                  {s.n}
                </span>
                <h3 className="mt-6 text-lg font-medium tracking-tight text-foreground">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {s.text}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
