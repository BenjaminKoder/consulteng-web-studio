import { ShieldCheck, MessageSquareText, Send } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const items = [
  {
    icon: ShieldCheck,
    title: "Bygg tillit fra start",
    text: "En ryddig nettside signaliserer at bedriften er reell, gjennomtenkt og til å stole på.",
  },
  {
    icon: MessageSquareText,
    title: "Forklar tydelig hva du tilbyr",
    text: "Klar struktur og tekst gjør at besøkende skjønner tilbudet ditt på sekunder.",
  },
  {
    icon: Send,
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
          {items.map(({ icon: Icon, title, text }, i) => (
            <article
              key={title}
              className="card-elevated reveal p-7 md:p-8"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-foreground">
                <Icon className="h-5 w-5" strokeWidth={1.6} />
              </div>
              <h3 className="mt-6 text-lg font-medium tracking-tight text-foreground">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
