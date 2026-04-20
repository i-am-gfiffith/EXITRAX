import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative pt-20 pb-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="animate-fade-up">
            <div className="glass inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-[var(--neon-cyan)] animate-pulse" />
              Live on Solana · v1.0
            </div>
            <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05]">
              Unstake Instantly. <br />
              <span className="text-gradient">No Waiting.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Turn locked staking and restaking positions into liquid SOL in seconds.
              UnstakeX is the liquidity layer that ends the unstaking queue.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                size="lg"
                className="rounded-xl px-6 text-primary-foreground glow-cyan hover-lift"
                style={{ background: "linear-gradient(135deg, var(--neon-cyan), var(--neon-blue))" }}
                asChild
              >
                <a href="#dashboard">
                  <Zap className="mr-1 h-4 w-4" /> Launch App
                </a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-xl border-white/15 bg-white/5 hover:bg-white/10" asChild>
                <a href="#how">View Demo <ArrowRight className="ml-1 h-4 w-4" /></a>
              </Button>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
              {[
                { k: "$42M+", v: "Liquidity" },
                { k: "<2s", v: "Exit time" },
                { k: "12.4%", v: "LP APY" },
              ].map((s) => (
                <div key={s.v} className="glass rounded-xl px-2 py-3 sm:px-3">
                  <div className="text-base sm:text-lg font-semibold">{s.k}</div>
                  <div className="text-[10px] sm:text-xs text-muted-foreground">{s.v}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-up" style={{ animationDelay: "0.15s" }}>
            <div className="glass-strong neon-border rounded-3xl p-6 animate-float">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest text-muted-foreground">Locked Position</span>
                <span className="text-xs text-[var(--neon-cyan)]">● Live</span>
              </div>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-5xl font-semibold tracking-tight">10.00</span>
                <span className="text-muted-foreground">SOL</span>
              </div>
              <div className="mt-1 text-xs text-muted-foreground">Unlocks in 14 days</div>

              <div className="mt-6 space-y-3">
                <Row label="Discount" value="9.00%" />
                <Row label="Instant Exit" value="9.10 SOL" highlight />
                <Row label="You save" value="14 days" />
              </div>

              <Button
                className="mt-6 w-full rounded-xl text-primary-foreground animate-pulse-glow"
                style={{ background: "linear-gradient(135deg, var(--neon-cyan), var(--neon-violet))" }}
              >
                Instant Exit
              </Button>
            </div>

            <div className="glass absolute -bottom-6 -left-2 sm:-left-6 hidden sm:block rounded-2xl p-4 w-52 sm:w-56 animate-float" style={{ animationDelay: "1.5s" }}>
              <div className="text-xs text-muted-foreground">LP Profit (est.)</div>
              <div className="mt-1 text-2xl font-semibold text-[var(--neon-cyan)]">+0.90 SOL</div>
              <div className="mt-1 text-[10px] text-muted-foreground">on 14d position</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Row({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3">
      <span className="text-sm text-muted-foreground">{label}</span>
      <span className={`text-sm font-medium ${highlight ? "text-[var(--neon-cyan)]" : ""}`}>{value}</span>
    </div>
  );
}
