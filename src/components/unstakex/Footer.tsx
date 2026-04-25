import { Twitter, Github, Mail, Instagram } from "lucide-react";

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
        <div className="glass rounded-2xl p-6 sm:p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div className="flex items-center gap-2">
              <div
                className="h-7 w-7 rounded-lg"
                style={{ background: "linear-gradient(135deg, var(--neon-cyan), var(--neon-violet))" }}
              />
              <span className="font-semibold">UNS8X</span>
              <span className="text-xs text-muted-foreground">· Built on Solana</span>
            </div>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition story-link">Docs</a>
              <a href="#" className="hover:text-foreground transition story-link">Audit</a>
              <a href="#how" className="hover:text-foreground transition story-link">How it works</a>
              <a href="#lp" className="hover:text-foreground transition story-link">For LPs</a>
            </div>
            <div className="text-xs text-muted-foreground">© 2026 UNS8X Labs</div>
          </div>

          <div className="mt-6 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
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
                    className="group relative grid h-10 w-10 place-items-center rounded-xl bg-white/5 border border-white/10 transition-all duration-300 hover:-translate-y-0.5 hover:border-[color-mix(in_oklab,var(--neon-cyan)_50%,transparent)] hover:bg-white/10"
                  >
                    <Icon className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-[var(--neon-cyan)]" />
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
