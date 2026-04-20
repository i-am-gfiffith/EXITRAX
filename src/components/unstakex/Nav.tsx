import { Button } from "@/components/ui/button";

export function Nav() {
  return (
    <header className="sticky top-0 z-40 w-full">
      <div className="mx-auto mt-4 max-w-7xl px-4">
        <div className="glass flex items-center justify-between rounded-2xl px-5 py-3">
          <a href="#top" className="flex items-center gap-2">
            <div className="relative h-8 w-8 rounded-lg" style={{ background: "linear-gradient(135deg, var(--neon-cyan), var(--neon-violet))" }}>
              <div className="absolute inset-0.5 rounded-[7px] bg-background/70 grid place-items-center">
                <span className="text-xs font-bold text-gradient">UX</span>
              </div>
            </div>
            <span className="font-semibold tracking-tight">UnstakeX</span>
          </a>
          <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
            <a href="#how" className="hover:text-foreground transition">How it works</a>
            <a href="#dashboard" className="hover:text-foreground transition">Simulator</a>
            <a href="#lp" className="hover:text-foreground transition">For LPs</a>
          </nav>
          <Button
            className="rounded-xl font-medium text-primary-foreground"
            style={{ background: "linear-gradient(135deg, var(--neon-cyan), var(--neon-blue))" }}
          >
            Launch App
          </Button>
        </div>
      </div>
    </header>
  );
}
