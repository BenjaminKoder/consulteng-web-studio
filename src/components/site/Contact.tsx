import { useState } from "react";
import { Mail, Phone, Linkedin, MapPin, ArrowRight } from "lucide-react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "@/hooks/use-toast";
import { SectionHeader } from "./SectionHeader";

const schema = z.object({
  name: z.string().trim().min(1, "Navn må fylles ut").max(100),
  company: z.string().trim().min(1, "Bedrift må fylles ut").max(120),
  email: z.string().trim().email("Ugyldig e-postadresse").max(255),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  message: z.string().trim().min(5, "Beskriv kort hva du trenger hjelp med").max(1500),
  hasSite: z.enum(["ja", "nei"], { required_error: "Velg ja eller nei" }),
});

export const Contact = () => {
  const [submitting, setSubmitting] = useState(false);
  const [hasSite, setHasSite] = useState<"ja" | "nei" | "">("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: data.get("name"),
      company: data.get("company"),
      email: data.get("email"),
      phone: data.get("phone"),
      message: data.get("message"),
      hasSite: data.get("hasSite"),
    });

    if (!parsed.success) {
      toast({
        title: "Vennligst sjekk skjemaet",
        description: parsed.error.issues[0]?.message ?? "Noen felter mangler.",
        variant: "destructive",
      });
      return;
    }

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      setHasSite("");
      toast({
        title: "Takk for henvendelsen",
        description: "Vi tar kontakt så snart som mulig.",
      });
    }, 700);
  };

  return (
    <section id="kontakt" className="bg-secondary/40 py-24 md:py-32">
      <div className="container-tight grid gap-12 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-5">
          <SectionHeader
            eyebrow="Kontakt"
            title="Få et gratis forslag"
            description="Send inn litt informasjon om bedriften din, så får du en rask vurdering av hva slags nettside som passer. Ta kontakt for en uforpliktende vurdering."
          />

          <div className="reveal mt-10 space-y-4 text-sm">
            <a
              href="mailto:benjamin@consulteng.no"
              className="link-underline flex items-center gap-3 text-foreground"
            >
              <Mail className="h-4 w-4 text-muted-foreground" />
              benjamin@consulteng.no
            </a>
            <a
              href="tel:+4746772911"
              className="link-underline flex items-center gap-3 text-foreground"
            >
              <Phone className="h-4 w-4 text-muted-foreground" />
              +47 467 72 911
            </a>
            <a
              href="https://www.linkedin.com/in/benjamin-eng-5a8385323/"
              target="_blank"
              rel="noreferrer noopener"
              className="link-underline flex items-center gap-3 text-foreground"
            >
              <Linkedin className="h-4 w-4 text-muted-foreground" />
              LinkedIn
            </a>
            <p className="flex items-center gap-3 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              Fra Oslo, studerer i Trondheim
            </p>
          </div>
        </div>

        <div className="md:col-span-7">
          <form
            onSubmit={onSubmit}
            className="reveal rounded-2xl border border-border/70 bg-card p-6 shadow-sm md:p-9"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Navn</Label>
                <Input id="name" name="name" required maxLength={100} placeholder="Ditt navn" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Bedrift</Label>
                <Input id="company" name="company" required maxLength={120} placeholder="Bedriftsnavn" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">E-post</Label>
                <Input id="email" name="email" type="email" required maxLength={255} placeholder="navn@bedrift.no" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Telefonnummer</Label>
                <Input id="phone" name="phone" type="tel" maxLength={40} placeholder="+47 ..." />
              </div>
            </div>

            <div className="mt-5 space-y-2">
              <Label htmlFor="message">Hva trenger du hjelp med?</Label>
              <Textarea
                id="message"
                name="message"
                rows={5}
                required
                maxLength={1500}
                placeholder="Fortell kort om bedriften og hva du ønsker."
              />
            </div>

            <div className="mt-6 space-y-3">
              <Label>Har bedriften nettside i dag?</Label>
              <RadioGroup
                name="hasSite"
                value={hasSite}
                onValueChange={(v) => setHasSite(v as "ja" | "nei")}
                className="flex gap-6"
              >
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="ja" id="hasSite-ja" />
                  <Label htmlFor="hasSite-ja" className="font-normal">Ja</Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="nei" id="hasSite-nei" />
                  <Label htmlFor="hasSite-nei" className="font-normal">Nei</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="mt-8 flex items-center justify-between gap-4">
              <p className="text-xs text-muted-foreground">
                Vi svarer normalt innen én virkedag.
              </p>
              <Button type="submit" size="lg" className="rounded-full px-6" disabled={submitting}>
                {submitting ? "Sender..." : "Send forespørsel"}
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
