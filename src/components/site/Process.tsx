import { Flag, CheckCircle2 } from "lucide-react";
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

        {/* Start → Slutt timeline rail */}
        <div className="reveal mt-16">
          {/* Single unified rail with Start/Lansert labels and dots */}
          <div className="relative mb-10 hidden h-7 items-center md:flex">
            <span className="inline-flex items-center gap-2 pr-4 text-xs uppercase tracking-[0.2em] text-accent">
              <Flag className="h-3.5 w-3.5" strokeWidth={1.8} aria-hidden />
              Start
            </span>
            <div className="relative flex-1">
              <span
                aria-hidden
                className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-accent/30 via-border to-accent/30"
              />
              {steps.map((_, i) => (
                <span
                  key={i}
                  aria-hidden
                  className="absolute top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent ring-4 ring-background"
                  style={{ left: `${((i + 0.5) / steps.length) * 100}%` }}
                />
              ))}
            </div>
            <span className="inline-flex items-center gap-2 pl-4 text-xs uppercase tracking-[0.2em] text-accent">
              Lansert
              <CheckCircle2 className="h-3.5 w-3.5" strokeWidth={1.8} aria-hidden />
            </span>
          </div>

          <ol className="relative grid gap-5 md:grid-cols-4 md:gap-6">
            {steps.map((s, i) => (
              <li
                key={s.n}
                className="reveal relative"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <article className="card-editorial flex h-full flex-col p-7">
                  <span className="font-display text-3xl tracking-tight text-accent">
                    {s.n}
                  </span>
                  <h3 className="mt-6 font-display text-lg font-medium tracking-tight text-foreground">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {s.text}
                  </p>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};
