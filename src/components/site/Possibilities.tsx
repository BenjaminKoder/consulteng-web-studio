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
  { title: "Booking", text: "La kundene booke direkte fra nettsiden.", Icon: CalendarDays },
  { title: "Skjema", text: "Tilpassede skjemaer for inntak, tilbud eller forespørsel.", Icon: ClipboardList },
  { title: "CRM", text: "Hold orden på kunder, leads og oppfølging.", Icon: Users },
  { title: "Automatisert oppfølging", text: "Send riktig melding til riktig tid, automatisk.", Icon: Repeat },
  { title: "Nyhetsbrev", text: "Bygg en kanal du eier selv, og hold kundene varme.", Icon: MailOpen },
  { title: "SMS-varsler", text: "Påminnelser og bekreftelser rett i lomma.", Icon: MessageSquare },
  { title: "Interne dashboards", text: "Samle data og prosesser i ett enkelt verktøy.", Icon: LayoutDashboard },
  { title: "Analyse og forbedring", text: "Forstå hva som virker, og gjør mer av det.", Icon: LineChart },
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
          {items.map(({ title, text, Icon }, i) => (
            <article
              key={title}
              className="card-editorial reveal flex flex-col p-7"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-background text-accent">
                <Icon className="h-[18px] w-[18px]" strokeWidth={1.6} aria-hidden />
              </span>
              <h3 className="mt-8 font-display text-lg font-medium tracking-tight text-foreground">
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
