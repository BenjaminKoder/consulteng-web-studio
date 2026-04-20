import { SectionHeader } from "./SectionHeader";
import benjamin from "@/assets/benjamin.jpg";

const facts = [
  { k: "Studerer", v: "Master i Datateknologi, NTNU" },
  { k: "Frontend siden", v: "2021" },
  { k: "For tiden", v: "Praktikant, Innovasjon Norge · Houston" },
  { k: "Base", v: "Oslo / Trondheim" },
];

export const About = () => {
  return (
    <section id="om" className="section-fade-to-sage py-24 md:py-32">
      <div className="container-tight">
        <SectionHeader
          eyebrow="Om"
          title="Benjamin Eng"
          description="Teknisk bakgrunn fra NTNU og praktisk utviklingserfaring. Arbeidsstil bygget rundt klarhet, kvalitet og forutsigbarhet."
        />

        <div className="mt-14 grid gap-12 md:grid-cols-12 md:gap-16 md:items-start">
          <div className="md:col-span-5">
            <div className="reveal overflow-hidden rounded-2xl border border-border/70 bg-card shadow-sm">
              <img
                src={benjamin}
                alt="Benjamin Eng, grunnlegger av ConsultEng"
                width={1200}
                height={1500}
                className="h-full w-full object-cover"
              />
            </div>

            <dl className="reveal mt-8 divide-y divide-border border-y border-border">
              {facts.map((f) => (
                <div key={f.k} className="flex items-baseline justify-between py-3.5">
                  <dt className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                    {f.k}
                  </dt>
                  <dd className="text-sm font-medium text-foreground">{f.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="md:col-span-7">
            <div className="reveal space-y-5 text-[15px] leading-relaxed text-foreground/85 md:text-base">
              <p>
                Jeg er fra Oslo og studerer Datateknologi ved NTNU i Trondheim.
                Jeg har jobbet med frontend-utvikling siden 2021, og videre med
                HTML, CSS, JavaScript, Python og digitale systemer.
              </p>
              <p>
                Ved siden av studiene er jeg involvert i DigiSaga, en
                studentdrevet tech-satsing som utvikler nettsider, digitale
                løsninger og systemer med moderne webteknologi, integrasjoner og
                automatisering.
              </p>
              <p>
                For tiden er jeg praktikant ved Innovasjon Norge sitt kontor i
                Houston, der jeg jobber med digitale verktøy og initiativer
                knyttet til norske og amerikanske bedrifter, særlig innen
                software og AI.
              </p>
              <p className="text-sm text-muted-foreground">
                ConsultEng er en selvstendig satsing og er ikke tilknyttet,
                støttet av eller drevet i regi av Innovasjon Norge.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
