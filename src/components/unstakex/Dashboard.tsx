import { useMemo, useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";
import { discountPct, exitValue } from "@/lib/pricing";
import { useCountUp } from "@/hooks/use-count-up";

export function Dashboard() {
  const locked = 10;
  const [days, setDays] = useState(14);

  const d = useMemo(() => discountPct(days), [days]);
  const v = useMemo(() => exitValue(locked, days), [days]);

  const dAnim = useCountUp(d);
  const vAnim = useCountUp(v);

  return (
    <section id="dashboard" className="py-24">
      <div className="mx-auto max-w-3xl px-4">
        <div className="text-center">
          <div className="text-xs uppercase tracking-widest text-[var(--neon-cyan)]">Simulator</div>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
            See your <span className="text-gradient">instant exit</span> price
          </h2>
        </div>

        <div className="mt-12 glass rounded-3xl p-6 sm:p-8">
          <div className="flex items-baseline justify-between">
            <div>
              <div className="text-xs text-muted-foreground">Locked</div>
              <div className="mt-1 text-2xl font-semibold tabular-nums">{locked.toFixed(2)} SOL</div>
            </div>
            <div className="text-right">
              <div className="text-xs text-muted-foreground">Unlocks in</div>
              <div className="mt-1 text-2xl font-semibold tabular-nums">{days}d</div>
            </div>
          </div>

          <div className="mt-8">
            <Slider
              value={[days]}
              onValueChange={(v) => setDays(v[0])}
              min={1}
              max={30}
              step={1}
              className="[&_[role=slider]]:bg-[var(--neon-cyan)] [&_[role=slider]]:border-0 [&_[role=slider]]:shadow-[0_0_16px_var(--neon-cyan)]"
            />
            <div className="mt-2 flex justify-between text-[10px] text-muted-foreground font-mono">
              <span>1d</span><span>30d</span>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-px rounded-2xl overflow-hidden bg-white/10">
            <div className="bg-background/40 p-5">
              <div className="text-xs text-muted-foreground">Discount</div>
              <div className="mt-1 text-2xl font-semibold tabular-nums" style={{ color: "var(--neon-violet)" }}>
                {dAnim.toFixed(2)}%
              </div>
            </div>
            <div className="bg-background/40 p-5">
              <div className="text-xs text-muted-foreground">Instant exit</div>
              <div className="mt-1 text-2xl font-semibold tabular-nums" style={{ color: "var(--neon-cyan)" }}>
                {vAnim.toFixed(3)} SOL
              </div>
            </div>
          </div>

          <Button
            size="lg"
            className="mt-6 w-full rounded-xl text-primary-foreground"
            style={{ background: "linear-gradient(135deg, var(--neon-cyan), var(--neon-violet))" }}
          >
            <Zap className="mr-2 h-4 w-4" />
            Instant Exit
          </Button>
        </div>
      </div>
    </section>
  );
}
