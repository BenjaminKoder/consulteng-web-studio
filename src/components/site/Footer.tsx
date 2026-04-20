import icon from "@/assets/consulteng-icon.png";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-tight py-14">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-6">
            <div className="flex items-center gap-2.5 font-display text-xl font-medium tracking-tight">
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
            </div>
            <p className="mt-3 max-w-sm text-sm text-muted-foreground">
              Profesjonell nettside for nye bedrifter. Oslo / Trondheim.
            </p>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
              Kontakt
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a className="link-underline" href="mailto:benjamin@consulteng.no">
                  benjamin@consulteng.no
                </a>
              </li>
              <li>
                <a
                  className="link-underline"
                  href="https://www.linkedin.com/in/benjamin-eng-5a8385323/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
              Naviger
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#tjenester" className="link-underline">Tjenester</a></li>
              <li><a href="#prosess" className="link-underline">Prosess</a></li>
              <li><a href="#prosjekter" className="link-underline">Prosjekter</a></li>
              <li><a href="#om" className="link-underline">Om</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>© {year} ConsultEng. Alle rettigheter forbeholdt.</p>
          <p>Bygget med omtanke i Norge.</p>
        </div>
      </div>
    </footer>
  );
};
