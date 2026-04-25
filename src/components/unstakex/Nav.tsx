import { Button } from "@/components/ui/button";

export function Nav() {
  return (
    <header className="sticky top-0 z-40 w-full">
      <div className="mx-auto mt-4 max-w-7xl px-3 sm:px-4">
        <div className="glass flex items-center justify-between gap-2 rounded-2xl px-3 py-2.5 sm:px-5 sm:py-3">
          <a href="#top" className="flex items-center gap-2.5 min-w-0">
            <div className="relative h-7 w-7 shrink-0 rounded-full" style={{ background: "linear-gradient(135deg, var(--neon-cyan), var(--neon-violet))" }}>
              <div className="absolute inset-[2px] rounded-full bg-background/80" />
            </div>
            <span className="font-serif text-lg tracking-tight truncate">UNS8X</span>
          </a>
          <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
            <a href="#how" className="hover:text-foreground transition">How it works</a>
            <a href="#dashboard" className="hover:text-foreground transition">Simulator</a>
            <a href="#lp" className="hover:text-foreground transition">For LPs</a>
          </nav>
          <Button
            size="sm"
            className="rounded-full font-medium text-primary-foreground shrink-0 px-4"
            style={{ background: "linear-gradient(135deg, var(--neon-cyan), var(--neon-blue))" }}
          >
            Launch
          </Button>
        </div>
      </div>
    </header>
  );
}
