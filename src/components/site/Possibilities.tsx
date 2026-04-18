import {
  CalendarCheck,
  FileText,
  Users,
  Repeat,
  Mail,
  MessageSquare,
  LayoutDashboard,
  TrendingUp,
} from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const items = [
  { icon: CalendarCheck, title: "Booking", text: "La kundene booke direkte fra nettsiden." },
  { icon: FileText, title: "Skjema", text: "Tilpassede skjemaer for inntak, tilbud eller forespørsel." },
  { icon: Users, title: "CRM", text: "Hold orden på kunder, leads og oppfølging." },
  { icon: Repeat, title: "Automatisert oppfølging", text: "Send riktig melding til riktig tid, automatisk." },
  { icon: Mail, title: "Nyhetsbrev", text: "Bygg en kanal du eier selv, og hold kundene varme." },
  { icon: MessageSquare, title: "SMS-varsler", text: "Påminnelser og bekreftelser rett i lomma." },
  { icon: LayoutDashboard, title: "Interne dashboards", text: "Samle data og prosesser i et enkelt verktøy." },
  { icon: TrendingUp, title: "Analyse og forbedring", text: "Forstå hva som virker, og gjør mer av det." },
];

export const Possibilities = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container-tight">
        <SectionHeader
          eyebrow="Videre muligheter"
          title="Nettsiden kan være første steg"
          description="Når nettsiden står, kan vi bygge videre med digitale løsninger som gjør hverdagen enklere. Valgfrie neste steg, ikke inkludert i den grunnleggende nettsideleveransen."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, text }, i) => (
            <article
              key={title}
              className="card-elevated reveal p-7"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-foreground">
                <Icon className="h-5 w-5" strokeWidth={1.6} />
              </div>
              <h3 className="mt-6 text-base font-medium tracking-tight text-foreground">
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
