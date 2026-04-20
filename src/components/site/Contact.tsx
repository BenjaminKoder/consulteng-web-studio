import { useState } from "react";
import { Mail, Phone, Linkedin, ArrowRight } from "lucide-react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { SectionHeader } from "./SectionHeader";

const schema = z
  .object({
    name: z.string().trim().min(1, "Navn må fylles ut").max(100),
    email: z
      .string()
      .trim()
      .email("Ugyldig e-postadresse")
      .max(255)
      .optional()
      .or(z.literal("")),
    phone: z
      .string()
      .trim()
      .max(40)
      .optional()
      .or(z.literal("")),
    message: z.string().trim().max(1500).optional().or(z.literal("")),
  })
  .refine(
    (d) => (d.email && d.email.length > 0) || (d.phone && d.phone.length > 0),
    { message: "Fyll inn e-post eller telefon", path: ["email"] }
  );

export const Contact = () => {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const parsed = schema.safeParse({
      name: data.get("name"),
      email: data.get("email"),
      phone: data.get("phone"),
      message: data.get("message"),
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
    try {
      const res = await fetch(
        "https://hook.eu2.make.com/76il15c4h6n4eexuk4rb8ah1vgr1mkui",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: parsed.data.name,
            email: parsed.data.email ?? "",
            phone: parsed.data.phone ?? "",
            message: parsed.data.message ?? "",
            source: "consulteng.no",
            submittedAt: new Date().toISOString(),
          }),
        }
      );

      if (!res.ok) throw new Error(`Webhook feilet (${res.status})`);

      form.reset();
      toast({
        title: "Takk for henvendelsen",
        description: "Jeg tar kontakt så snart som mulig.",
      });
    } catch (err) {
      toast({
        title: "Noe gikk galt",
        description: "Kunne ikke sende skjemaet. Prøv igjen, eller send e-post direkte.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="kontakt" className="section-sage py-24 md:py-32">
      <div className="container-tight grid gap-12 md:grid-cols-12 md:gap-16 md:items-start">
        <div className="md:col-span-5">
          <SectionHeader
            eyebrow="Kontakt"
            title="Få et gratis forslag"
            description="Legg igjen navn og hvordan du vil bli kontaktet, så hører du fra meg innen kort tid. Helt uforpliktende."
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
          </div>
        </div>

        <div className="md:col-span-7">
          <form
            onSubmit={onSubmit}
            className="reveal space-y-6"
          >
            <div className="space-y-2">
              <Label htmlFor="name">Navn</Label>
              <Input
                id="name"
                name="name"
                required
                maxLength={100}
                placeholder="Ditt navn"
                className="h-12 rounded-none border-0 border-b border-border bg-transparent px-0 shadow-none focus-visible:border-foreground focus-visible:ring-0"
              />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="email">E-post</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  maxLength={255}
                  placeholder="navn@bedrift.no"
                  className="h-12 rounded-none border-0 border-b border-border bg-transparent px-0 shadow-none focus-visible:border-foreground focus-visible:ring-0"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Telefon</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  maxLength={40}
                  placeholder="+47 ..."
                  className="h-12 rounded-none border-0 border-b border-border bg-transparent px-0 shadow-none focus-visible:border-foreground focus-visible:ring-0"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">
                Hva gjelder det? <span className="text-muted-foreground">(valgfritt)</span>
              </Label>
              <Textarea
                id="message"
                name="message"
                rows={3}
                maxLength={1500}
                placeholder="Kort om bedriften eller hva du lurer på."
                className="resize-none rounded-none border-0 border-b border-border bg-transparent px-0 shadow-none focus-visible:border-foreground focus-visible:ring-0"
              />
            </div>

            <div className="flex items-center justify-between gap-4 pt-2">
              <p className="text-xs text-muted-foreground">
                Svar normalt innen én virkedag.
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
