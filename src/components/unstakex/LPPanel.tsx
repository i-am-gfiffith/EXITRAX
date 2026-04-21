import { Button } from "@/components/ui/button";

export function LPPanel() {
  const stats = [
    { k: "12.4%", v: "APY" },
    { k: "9.2d", v: "Avg lock" },
    { k: "Low", v: "Risk" },
  ];

  return (
    <section id="lp" className="py-24">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <div className="text-xs uppercase tracking-widest text-[var(--neon-violet)]">For Liquidity Providers</div>
        <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
          Earn from <span className="text-gradient">time arbitrage</span>
        </h2>
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
          Provide SOL liquidity and buy locked positions at a discount. Redeem at full value when they unlock.
        </p>

        <div className="mt-10 grid grid-cols-3 gap-px rounded-2xl overflow-hidden bg-white/10 max-w-lg mx-auto">
          {stats.map((s) => (
            <div key={s.v} className="bg-background/40 px-4 py-5">
              <div className="text-xl font-semibold tabular-nums">{s.k}</div>
              <div className="mt-1 text-xs text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </div>

        <Button
          size="lg"
          className="mt-8 rounded-xl text-primary-foreground"
          style={{ background: "linear-gradient(135deg, var(--neon-violet), var(--neon-blue))" }}
        >
          Become an LP
        </Button>
      </div>
    </section>
  );
}
