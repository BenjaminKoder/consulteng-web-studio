import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import icon from "@/assets/consulteng-icon.png";

const NAV = [
  { href: "#tjenester", label: "Tjenester" },
  { href: "#prosess", label: "Prosess" },
  { href: "#prosjekter", label: "Prosjekter" },
  { href: "#om", label: "Om" },
  { href: "#kontakt", label: "Kontakt" },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/70 bg-background/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="container-tight flex h-16 items-center justify-between md:h-20">
        <a href="#top" className="flex items-center gap-2.5 font-display text-xl font-medium tracking-tight">
          <img
            src={icon}
            alt="ConsultEng-ikon"
            width={28}
            height={28}
            className="h-7 w-7 object-contain"
          />
          <span>
            <span className="text-foreground">Consult</span>
            <span className="text-accent">Eng</span>
          </span>
        </a>

        <nav className="hidden items-center gap-9 md:flex" aria-label="Hovedmeny">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild size="sm" className="rounded-full px-5">
            <a href="#kontakt">Få et gratis forslag</a>
          </Button>
        </div>

        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground md:hidden"
          aria-label={open ? "Lukk meny" : "Åpne meny"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/70 bg-background md:hidden">
          <nav className="container-tight flex flex-col gap-1 py-4" aria-label="Mobilmeny">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2 text-base text-foreground/90 hover:bg-secondary"
              >
                {item.label}
              </a>
            ))}
            <Button asChild className="mt-2 rounded-full">
              <a href="#kontakt" onClick={() => setOpen(false)}>
                Få et gratis forslag
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};
