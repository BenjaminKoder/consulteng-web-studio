import { SectionHeader } from "./SectionHeader";

type Item = {
  n: string;
  title: string;
  text: string;
  variant?: "sage" | "default";
};

const items: Item[] = [
  { n: "A", title: "Booking", text: "La kundene booke direkte fra nettsiden.", variant: "sage" },
  { n: "B", title: "Skjema", text: "Tilpassede skjemaer for inntak, tilbud eller forespørsel." },
  { n: "C", title: "CRM", text: "Hold orden på kunder, leads og oppfølging." },
  { n: "D", title: "Automatisert oppfølging", text: "Send riktig melding til riktig tid, automatisk." },
  { n: "E", title: "Nyhetsbrev", text: "Bygg en kanal du eier selv, og hold kundene varme.", variant: "sage" },
  { n: "F", title: "SMS-varsler", text: "Påminnelser og bekreftelser rett i lomma." },
  { n: "G", title: "Interne dashboards", text: "Samle data og prosesser i ett enkelt verktøy." },
  { n: "H", title: "Analyse og forbedring", text: "Forstå hva som virker, og gjør mer av det." },
];

export const Possibilities = () => {
  return (
    <section className="bg-secondary/40 py-24 md:py-32">
      <div className="container-tight">
        <SectionHeader
          eyebrow="Videre muligheter"
          title="Nettsiden kan være første steg"
          description="Når nettsiden står, kan vi bygge videre med digitale løsninger som gjør hverdagen enklere. Valgfrie neste steg, ikke inkludert i den grunnleggende nettsideleveransen."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-4">
          {items.map(({ n, title, text, variant }, i) => {
            const isSage = variant === "sage";
            return (
              <article
                key={title}
                className={`reveal flex flex-col p-7 ${
                  isSage ? "card-sage" : "card-editorial"
                }`}
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`inline-flex h-7 min-w-7 items-center justify-center rounded-full px-2 font-display text-xs ${
                      isSage
                        ? "bg-accent text-accent-foreground"
                        : "border border-border text-accent"
                    }`}
                  >
                    {n}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    Modul
                  </span>
                </div>
                <h3 className="mt-8 text-base font-medium tracking-tight text-foreground">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {text}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
