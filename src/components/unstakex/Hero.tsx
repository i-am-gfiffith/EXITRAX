import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section id="top" className="relative pt-24 pb-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}>
            <div className="eyebrow">Live on Solana — v1.0</div>

            <h1 className="mt-6 text-5xl sm:text-6xl md:text-7xl font-medium tracking-tight leading-[1.02]">
              Unstake <span className="font-black uppercase">instantly.</span>
              <br />
              <span className="text-gradient">No waiting.</span>
            </h1>

            <p className="mt-7 max-w-lg text-lg text-muted-foreground leading-relaxed">
              The liquidity layer for Solana stakers. Convert locked positions into liquid SOL in
              <span className="font-black text-foreground"> seconds</span>, not days.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Button
                size="lg"
                className="rounded-full px-6 text-primary-foreground glow-cyan hover-lift"
                style={{ background: "linear-gradient(135deg, var(--neon-cyan), var(--neon-blue))" }}
                asChild
              >
                <a href="#dashboard">
                  <Zap className="mr-1 h-4 w-4" /> Launch App
                </a>
              </Button>
              <a href="#how" className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition">
                View demo
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            <div className="mt-14 flex items-center gap-8">
              {[
                { k: "$42M", v: "Liquidity" },
                { k: "<2s", v: "Exit time" },
                { k: "12.4%", v: "LP APY" },
              ].map((s, i) => (
                <div key={s.v} className="flex items-center gap-8">
                  {i > 0 && <div className="h-8 w-px bg-white/10" />}
                  <div>
                    <div className="font-black text-2xl tabular-nums">{s.k}</div>
                    <div className="mt-0.5 text-[10px] uppercase tracking-widest text-muted-foreground">{s.v}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div className="relative" initial={{ opacity: 0, x: 34, rotate: 1.5 }} animate={{ opacity: 1, x: 0, rotate: 0 }} transition={{ duration: 0.75, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}>
            <div className="relative overflow-hidden rounded-md border-2 border-foreground bg-card p-8 shadow-brutal">
              <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full blur-3xl opacity-40"
                style={{ background: "radial-gradient(circle, var(--neon-violet), transparent 70%)" }} />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="eyebrow">Locked Position</span>
                  <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-[var(--neon-cyan)]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--neon-cyan)] animate-pulse" /> Live
                  </span>
                </div>

                <div className="mt-8">
                  <div className="flex items-baseline gap-3">
                    <span className="font-black text-7xl tracking-tight tabular-nums">10.00</span>
                    <span className="text-muted-foreground">SOL</span>
                  </div>
                  <div className="mt-2 text-xs text-muted-foreground">Unlocks in 14 days</div>
                </div>

                <div className="mt-8 hairline" />

                <div className="mt-6 space-y-4">
                  <Row label="Discount" value="9.00%" />
                  <Row label="Instant exit" value="9.10 SOL" highlight />
                  <Row label="You save" value="14 days" />
                </div>

                <Button
                  className="mt-8 w-full rounded-full text-primary-foreground"
                  style={{ background: "linear-gradient(135deg, var(--neon-cyan), var(--neon-violet))" }}
                >
                  Instant Exit
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Row({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-sm text-muted-foreground">{label}</span>
      <span className={`text-sm font-medium tabular-nums ${highlight ? "text-[var(--neon-cyan)]" : ""}`}>{value}</span>
    </div>
  );
}
