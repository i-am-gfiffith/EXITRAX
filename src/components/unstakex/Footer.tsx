import { Twitter, Github, Mail, Instagram } from "lucide-react";
import { BrandName } from "./BrandName";

const socials = [
  { name: "X (Twitter)", icon: Twitter, href: "https://x.com/i_am_guts___" },
  { name: "GitHub", icon: Github, href: "https://github.com/i-am-gfiffith" },
  { name: "Instagram", icon: Instagram, href: "https://instagram.com/the_irretrivable_homosepian" },
  { name: "Email", icon: Mail, href: "mailto:anmolmishra2306@gmail.com" },
];

export function Footer() {
  return (
    <footer className="py-12">
      <div className="mx-auto max-w-7xl px-4">
        <div className="glass rounded-md p-6 sm:p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div className="flex flex-wrap items-center justify-center gap-2 md:justify-start">
              <div
                className="h-7 w-7 rounded-sm border-2 border-foreground"
                style={{ background: "linear-gradient(135deg, var(--neon-cyan), var(--neon-violet))" }}
              />
              <BrandName className="font-black uppercase" />
              <span className="text-xs text-muted-foreground">· Built on Solana</span>
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-sm font-bold uppercase text-muted-foreground sm:gap-6">
              <a href="#" className="hover:text-foreground transition story-link">Docs</a>
              <a href="#" className="hover:text-foreground transition story-link">Audit</a>
              <a href="#how" className="hover:text-foreground transition story-link">How it works</a>
              <a href="#lp" className="hover:text-foreground transition story-link">For LPs</a>
            </div>
            <div className="text-xs text-muted-foreground">© 2026 ExitraX Labs</div>
          </div>

          <div className="mt-6 flex flex-col items-center justify-between gap-4 border-t-2 border-foreground/25 pt-6 sm:flex-row">
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Connect with us</div>
            <div className="flex items-center gap-2 sm:gap-3">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    className="group relative grid h-10 w-10 place-items-center rounded-md border-2 border-foreground/30 bg-background/40 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground hover:bg-primary"
                  >
                    <Icon className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary-foreground" />
                    <span
                      className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{
                        boxShadow: "0 0 24px -4px color-mix(in oklab, var(--neon-cyan) 60%, transparent)",
                      }}
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
