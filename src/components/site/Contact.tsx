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
    contact: z.string().trim().min(3, "Legg igjen e-post eller telefon").max(255),
    message: z.string().trim().max(1500).optional().or(z.literal("")),
  });

export const Contact = () => {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: data.get("name"),
      contact: data.get("contact"),
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
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      toast({
        title: "Takk for henvendelsen",
        description: "Jeg tar kontakt så snart som mulig.",
      });
    }, 600);
  };

  return (
    <section id="kontakt" className="bg-secondary/40 py-24 md:py-32">
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

            <div className="space-y-2">
              <Label htmlFor="contact">E-post eller telefon</Label>
              <Input
                id="contact"
                name="contact"
                required
                maxLength={255}
                placeholder="navn@bedrift.no eller +47 ..."
                className="h-12 rounded-none border-0 border-b border-border bg-transparent px-0 shadow-none focus-visible:border-foreground focus-visible:ring-0"
              />
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
