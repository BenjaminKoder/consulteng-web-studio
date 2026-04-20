import {
  Layout,
  Smartphone,
  AlignLeft,
  Mail,
  Search,
  Rocket,
} from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const services = [
  {
    n: "01",
    title: "Moderne nettside",
    text: "Et rent og profesjonelt uttrykk som gir bedriften et seriøst førsteinntrykk fra første besøk.",
    Icon: Layout,
  },
  {
    n: "02",
    title: "Mobilvennlig design",
    text: "Nettsiden ser like bra ut på mobil, nettbrett og skjerm, der kundene faktisk er.",
    Icon: Smartphone,
  },
  {
    n: "03",
    title: "Tydelig tekststruktur",
    text: "Vi strukturerer innholdet slik at det er lett å lese og enkelt å forstå hva du tilbyr.",
    Icon: AlignLeft,
  },
  {
    n: "04",
    title: "Kontaktskjema",
    text: "Et enkelt og polert skjema som gjør det lett for kunder å sende inn en henvendelse.",
    Icon: Mail,
  },
  {
    n: "05",
    title: "Grunnleggende SEO-struktur",
    text: "Riktig oppsett av titler, meta-tekster og semantikk slik at bedriften er søkbar.",
    Icon: Search,
  },
  {
    n: "06",
    title: "Publisering og teknisk oppsett",
    text: "Vi tar oss av det tekniske rundt domene, hosting og lansering. Du trenger ikke kunne noe fra før.",
    Icon: Rocket,
  },
];

export const Services = () => {
  return (
    <section id="tjenester" className="section-fade-to-sage py-24 md:py-32">
      <div className="container-tight">
        <SectionHeader
          eyebrow="Tjenester"
          title="Dette får du hjelp med"
          description="Du trenger ikke kunne noe teknisk. Vi tar ansvar for struktur, design og teknisk implementasjon, fra første samtale til ferdig publisert nettside."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {services.map(({ title, text, Icon }, i) => (
            <article
              key={title}
              className="card-editorial reveal flex flex-col p-8"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-background text-accent">
                <Icon className="h-[18px] w-[18px]" strokeWidth={1.6} aria-hidden />
              </span>
              <h3 className="mt-8 font-display text-xl font-medium tracking-tight text-foreground">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
