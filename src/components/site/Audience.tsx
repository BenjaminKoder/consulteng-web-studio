import { SectionHeader } from "./SectionHeader";

const rowOne = [
  "Klinikker",
  "Konsulenter",
  "Håndverkere",
  "Trenere",
  "Frisører",
  "Behandlere",
  "Lokale tjenester",
  "Startups",
  "Fotografer",
  "Coaches",
  "Arkitekter",
];

const rowTwo = [
  "Regnskapsførere",
  "Advokater",
  "Catering",
  "Yogastudio",
  "PT-er",
  "Eiendomsmeglere",
  "Arrangører",
  "Kursholdere",
  "Terapeuter",
  "Tannleger",
  "Designere",
];

const Chip = ({ label }: { label: string }) => (
  <span className="inline-flex shrink-0 items-center rounded-full border border-border bg-card px-5 py-2.5 text-sm text-foreground/80 shadow-xs">
    {label}
  </span>
);

const Track = ({ items }: { items: string[] }) => (
  <div className="flex shrink-0 items-center gap-3 pr-3">
    {items.map((t, i) => (
      <Chip key={`${t}-${i}`} label={t} />
    ))}
  </div>
);

const Row = ({
  items,
  direction = "left",
}: {
  items: string[];
  direction?: "left" | "right";
}) => {
  return (
    <div className="group relative overflow-hidden">
      <div
        className={
          direction === "left"
            ? "flex w-max animate-marquee-left group-hover:[animation-play-state:paused]"
            : "flex w-max animate-marquee-right group-hover:[animation-play-state:paused]"
        }
      >
        <Track items={items} />
        <Track items={items} />
      </div>
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
    </div>
  );
};

export const Audience = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container-tight">
        <SectionHeader
          eyebrow="Hvem passer det for"
          title="Laget for bedrifter som skal ut i markedet"
          align="center"
        />
      </div>

      <div className="mt-14 space-y-4">
        <Row items={rowOne} direction="left" />
        <Row items={rowTwo} direction="right" />
      </div>
    </section>
  );
};
