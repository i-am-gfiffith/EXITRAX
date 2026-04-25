import { Clock, Zap } from "lucide-react";

export function Problem() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-5xl px-4">
        <div className="text-center max-w-2xl mx-auto">
          <div className="eyebrow justify-center inline-flex">The Problem</div>
          <h2 className="mt-5 text-3xl md:text-5xl font-medium tracking-tight">
            Unstaking takes days.
            <br />
            <span className="font-serif italic text-gradient">Markets don't wait.</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-px bg-white/10 rounded-2xl overflow-hidden md:grid-cols-2">
          <div className="bg-background/40 p-8">
            <Clock className="h-5 w-5 text-muted-foreground" />
            <div className="mt-5 font-medium">Traditional</div>
            <div className="mt-2 text-sm text-muted-foreground leading-relaxed">
              Capital frozen for ~14 days in unbonding queues while opportunity cost compounds.
            </div>
            <div className="mt-6 font-serif text-3xl tabular-nums text-muted-foreground">14d</div>
          </div>
          <div className="bg-background/40 p-8 relative">
            <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, var(--neon-cyan), transparent)" }} />
            <Zap className="h-5 w-5 text-[var(--neon-cyan)]" />
            <div className="mt-5 font-medium">uns8x</div>
            <div className="mt-2 text-sm text-muted-foreground leading-relaxed">
              Liquid SOL in your wallet — settled on-chain in under two seconds.
            </div>
            <div className="mt-6 font-serif text-3xl tabular-nums text-[var(--neon-cyan)]">&lt; 2s</div>
          </div>
        </div>
      </div>
    </section>
  );
}
