import { Button } from "@/components/ui/button";

export function LPPanel() {
  const stats = [
    { k: "12.4%", v: "APY" },
    { k: "9.2d", v: "Avg lock" },
    { k: "Low", v: "Risk" },
  ];

  return (
    <section id="lp" className="py-28">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <div className="eyebrow justify-center inline-flex">For Liquidity Providers</div>
        <h2 className="mt-5 text-3xl md:text-5xl font-medium tracking-tight">
          Earn from <span className="font-serif italic text-gradient">time arbitrage</span>
        </h2>
        <p className="mt-5 text-muted-foreground max-w-xl mx-auto leading-relaxed">
          Provide SOL liquidity. Acquire locked positions at a discount. Redeem at full value when they unlock.
        </p>

        <div className="mt-12 flex justify-center items-center gap-12">
          {stats.map((s, i) => (
            <div key={s.v} className="flex items-center gap-12">
              {i > 0 && <div className="h-12 w-px bg-white/10" />}
              <div>
                <div className="font-serif text-4xl tabular-nums">{s.k}</div>
                <div className="mt-1 text-[10px] uppercase tracking-widest text-muted-foreground">{s.v}</div>
              </div>
            </div>
          ))}
        </div>

        <Button
          size="lg"
          className="mt-12 rounded-full text-primary-foreground px-8"
          style={{ background: "linear-gradient(135deg, var(--neon-violet), var(--neon-blue))" }}
        >
          Become an LP
        </Button>
      </div>
    </section>
  );
}
