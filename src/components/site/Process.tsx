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
    <section id="prosess" className="bg-secondary/40 py-24 md:py-32">
      <div className="container-tight">
        <SectionHeader
          eyebrow="Prosess"
          title="En enkel prosess fra idé til publisert nettside"
          description="Forutsigbart, tydelig og uten unødvendige ledd. Du vet alltid hva som skjer i hvert steg."
        />

        <ol className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border/70 bg-border/70 md:grid-cols-4">
          {steps.map((s, i) => (
            <li
              key={s.n}
              className="reveal relative bg-card p-8"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex items-baseline justify-between">
                <span className="font-display text-sm text-muted-foreground">{s.n}</span>
                <span className="h-px w-8 bg-border" aria-hidden />
              </div>
              <h3 className="mt-8 text-lg font-medium tracking-tight text-foreground">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
