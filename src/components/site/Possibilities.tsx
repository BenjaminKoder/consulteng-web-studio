import {
  CalendarDays,
  ClipboardList,
  Users,
  Repeat,
  MailOpen,
  MessageSquare,
  LayoutDashboard,
  LineChart,
} from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const items = [
  { n: "A", title: "Booking", text: "La kundene booke direkte fra nettsiden.", Icon: CalendarDays },
  { n: "B", title: "Skjema", text: "Tilpassede skjemaer for inntak, tilbud eller forespørsel.", Icon: ClipboardList },
  { n: "C", title: "CRM", text: "Hold orden på kunder, leads og oppfølging.", Icon: Users },
  { n: "D", title: "Automatisert oppfølging", text: "Send riktig melding til riktig tid, automatisk.", Icon: Repeat },
  { n: "E", title: "Nyhetsbrev", text: "Bygg en kanal du eier selv, og hold kundene varme.", Icon: MailOpen },
  { n: "F", title: "SMS-varsler", text: "Påminnelser og bekreftelser rett i lomma.", Icon: MessageSquare },
  { n: "G", title: "Interne dashboards", text: "Samle data og prosesser i ett enkelt verktøy.", Icon: LayoutDashboard },
  { n: "H", title: "Analyse og forbedring", text: "Forstå hva som virker, og gjør mer av det.", Icon: LineChart },
];

export const Possibilities = () => {
  return (
    <section className="section-sage py-24 md:py-32">
      <div className="container-tight">
        <SectionHeader
          eyebrow="Videre muligheter"
          title="Nettsiden kan være første steg"
          description="Når nettsiden står, kan vi bygge videre med digitale løsninger som gjør hverdagen enklere. Valgfrie neste steg, ikke inkludert i den grunnleggende nettsideleveransen."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-4">
          {items.map(({ n, title, text, Icon }, i) => (
            <article
              key={title}
              className="card-editorial reveal flex flex-col p-7"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-sm tracking-tight text-accent">
                  {n}
                </span>
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-accent">
                  <Icon className="h-4 w-4" strokeWidth={1.6} aria-hidden />
                </span>
              </div>
              <h3 className="mt-8 text-base font-medium tracking-tight text-foreground">
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
