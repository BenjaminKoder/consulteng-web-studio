import { SectionHeader } from "./SectionHeader";

const tags = [
  "Klinikker",
  "Konsulenter",
  "Håndverkere",
  "Trenere",
  "Frisører",
  "Behandlere",
  "Lokale tjenester",
  "Startups",
];

export const Audience = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container-tight grid gap-12 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-5">
          <SectionHeader
            eyebrow="Hvem passer det for"
            title="Laget for bedrifter som skal ut i markedet"
            description="Passer spesielt godt for nyetablerte bedrifter, lokale tjenestebedrifter, konsulenter, behandlere, klinikker, trenere, håndverkere og andre som trenger en profesjonell digital start."
          />
        </div>
        <div className="md:col-span-7">
          <div className="reveal flex flex-wrap gap-2.5">
            {tags.map((t) => (
              <span
                key={t}
                className="inline-flex items-center rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground/80 transition-all hover:-translate-y-0.5 hover:border-foreground/20 hover:shadow-xs"
              >
                {t}
              </span>
            ))}
          </div>
          <p className="reveal mt-8 text-sm text-muted-foreground">
            Er du i tvil om det passer for din bedrift? Send en henvendelse, så
            gir vi en ærlig vurdering.
          </p>
        </div>
      </div>
    </section>
  );
};
