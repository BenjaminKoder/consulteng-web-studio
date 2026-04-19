import {
  Layout,
  Smartphone,
  AlignLeft,
  Mail,
  Search,
  Server,
} from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const services = [
  {
    icon: Layout,
    title: "Moderne nettside",
    text: "Et rent og profesjonelt uttrykk som gir bedriften et seriøst førsteinntrykk fra første besøk.",
  },
  {
    icon: Smartphone,
    title: "Mobilvennlig design",
    text: "Nettsiden ser like bra ut på mobil, nettbrett og skjerm, der kundene faktisk er.",
  },
  {
    icon: AlignLeft,
    title: "Tydelig tekststruktur",
    text: "Vi strukturerer innholdet slik at det er lett å lese og enkelt å forstå hva du tilbyr.",
  },
  {
    icon: Mail,
    title: "Kontaktskjema",
    text: "Et enkelt og polert skjema som gjør det lett for kunder å sende inn en henvendelse.",
  },
  {
    icon: Search,
    title: "Grunnleggende SEO-struktur",
    text: "Riktig oppsett av titler, meta-tekster og semantikk slik at bedriften er søkbar.",
  },
  {
    icon: Server,
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

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border/70 bg-border/70 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, text }, i) => (
            <div
              key={title}
              className="reveal group bg-card p-8 transition-colors duration-300 hover:bg-background"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border/70 bg-background text-foreground transition-colors group-hover:border-foreground/20">
                <Icon className="h-5 w-5" strokeWidth={1.6} />
              </div>
              <h3 className="mt-6 text-lg font-medium tracking-tight text-foreground">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
