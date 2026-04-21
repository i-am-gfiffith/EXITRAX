import { Clock, Zap } from "lucide-react";

export function Problem() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-5xl px-4">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs uppercase tracking-widest text-[var(--neon-cyan)]">The Problem</div>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
            Unstaking takes days. <span className="text-gradient">Markets don't wait.</span>
          </h2>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 p-6">
            <Clock className="h-5 w-5 text-muted-foreground" />
            <div className="mt-4 font-medium">Traditional</div>
            <div className="mt-1 text-sm text-muted-foreground">Capital locked for ~14 days in unbonding queues.</div>
          </div>
          <div className="rounded-2xl neon-border p-6">
            <Zap className="h-5 w-5 text-[var(--neon-cyan)]" />
            <div className="mt-4 font-medium">UnstakeX</div>
            <div className="mt-1 text-sm text-muted-foreground">Liquid SOL in your wallet in under 2 seconds.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
