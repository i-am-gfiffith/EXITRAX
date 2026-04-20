import { Clock, Zap } from "lucide-react";

export function Problem() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs uppercase tracking-widest text-[var(--neon-cyan)]">The Problem</div>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
            Unstaking takes days. <span className="text-gradient">Markets don't wait.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Traditional protocols lock your capital in long unbonding queues. UnstakeX gives you out in seconds.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="glass rounded-2xl p-6">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 grid place-items-center rounded-xl bg-white/5">
                <Clock className="h-5 w-5 text-muted-foreground" />
              </div>
              <div>
                <div className="font-medium">Traditional Unstaking</div>
                <div className="text-xs text-muted-foreground">Capital locked for days</div>
              </div>
            </div>
            <div className="mt-6 space-y-3">
              {[2, 5, 9, 14, 21].map((d, i) => (
                <div key={d} className="flex items-center gap-3">
                  <span className="w-12 text-xs text-muted-foreground">Day {d}</span>
                  <div className="h-2 flex-1 rounded-full bg-white/5 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-muted-foreground/40"
                      style={{ width: `${20 + i * 18}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 text-sm text-muted-foreground">⏳ Avg. unlock: <span className="text-foreground">14 days</span></div>
          </div>

          <div className="glass-strong rounded-2xl p-6 neon-border">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 grid place-items-center rounded-xl" style={{ background: "linear-gradient(135deg, var(--neon-cyan), var(--neon-violet))" }}>
                <Zap className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <div className="font-medium">UnstakeX</div>
                <div className="text-xs text-muted-foreground">Instant liquid exit</div>
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-12 text-xs text-muted-foreground">0s</span>
                <div className="h-2 flex-1 rounded-full bg-white/5 overflow-hidden">
                  <div className="h-full w-full rounded-full animate-pulse-glow" style={{ background: "linear-gradient(90deg, var(--neon-cyan), var(--neon-violet))" }} />
                </div>
              </div>
              <div className="text-sm">✓ SOL in your wallet immediately</div>
              <div className="text-sm">✓ Small market-driven discount</div>
              <div className="text-sm">✓ LPs earn time arbitrage</div>
            </div>
            <div className="mt-6 text-sm">⚡ Avg. exit: <span className="text-[var(--neon-cyan)]">&lt; 2 seconds</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
