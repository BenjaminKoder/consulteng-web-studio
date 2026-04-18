import { SectionHeader } from "./SectionHeader";

const items = [
  "Booking",
  "Skjema",
  "CRM",
  "Automatisert oppfølging",
  "Nyhetsbrev",
  "SMS-varsler",
  "Interne dashboards",
  "Analyse og forbedring",
];

export const Possibilities = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container-tight">
        <SectionHeader
          eyebrow="Videre muligheter"
          title="Nettsiden kan være første steg"
          description="Når nettsiden er på plass, kan ConsultEng også hjelpe med digitale løsninger som gjør hverdagen enklere og mer profesjonell. Dette er valgfrie neste steg, og er ikke inkludert i den grunnleggende nettsideleveransen."
        />

        <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border/70 bg-border/70 md:grid-cols-4">
          {items.map((item, i) => (
            <div
              key={item}
              className="reveal flex items-center justify-between bg-card px-5 py-6 transition-colors hover:bg-background"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <span className="text-sm font-medium text-foreground">{item}</span>
              <span className="h-1 w-1 rounded-full bg-accent" aria-hidden />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
