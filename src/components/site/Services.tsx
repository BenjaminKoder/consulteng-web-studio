import { SectionHeader } from "./SectionHeader";

const services = [
  {
    n: "01",
    title: "Moderne nettside",
    text: "Et rent og profesjonelt uttrykk som gir bedriften et seriøst førsteinntrykk fra første besøk.",
  },
  {
    n: "02",
    title: "Mobilvennlig design",
    text: "Nettsiden ser like bra ut på mobil, nettbrett og skjerm, der kundene faktisk er.",
  },
  {
    n: "03",
    title: "Tydelig tekststruktur",
    text: "Vi strukturerer innholdet slik at det er lett å lese og enkelt å forstå hva du tilbyr.",
  },
  {
    n: "04",
    title: "Kontaktskjema",
    text: "Et enkelt og polert skjema som gjør det lett for kunder å sende inn en henvendelse.",
  },
  {
    n: "05",
    title: "Grunnleggende SEO-struktur",
    text: "Riktig oppsett av titler, meta-tekster og semantikk slik at bedriften er søkbar.",
  },
  {
    n: "06",
    title: "Publisering og teknisk oppsett",
    text: "Vi tar oss av det tekniske rundt domene, hosting og lansering. Du trenger ikke kunne noe fra før.",
  },
];

export const Services = () => {
  return (
    <section id="tjenester" className="bg-secondary/40 py-24 md:py-32">
      <div className="container-tight">
        <SectionHeader
          eyebrow="Tjenester"
          title="Dette får du hjelp med"
          description="Du trenger ikke kunne noe teknisk. Vi tar ansvar for struktur, design og teknisk implementasjon, fra første samtale til ferdig publisert nettside."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {services.map(({ n, title, text }, i) => (
            <article
              key={title}
              className="card-editorial reveal flex flex-col p-8"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="flex items-baseline gap-3">
                <span className="font-display text-sm tracking-tight text-accent">
                  {n}
                </span>
                <span
                  className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground"
                >
                  Inkludert
                </span>
              </div>
              <h3 className="mt-8 text-lg font-medium tracking-tight text-foreground">
                {title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                {text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
