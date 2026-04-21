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
    <section id="dashboard" className="py-28">
      <div className="mx-auto max-w-3xl px-4">
        <div className="text-center">
          <div className="eyebrow justify-center inline-flex">Simulator</div>
          <h2 className="mt-5 text-3xl md:text-5xl font-medium tracking-tight">
            Your <span className="font-serif italic text-gradient">instant exit</span> price
          </h2>
        </div>

        <div className="mt-14 relative rounded-[2rem] p-8 sm:p-10 overflow-hidden" style={{
          background: "linear-gradient(160deg, color-mix(in oklab, white 6%, transparent), color-mix(in oklab, var(--neon-violet) 6%, transparent))",
          border: "1px solid color-mix(in oklab, white 10%, transparent)",
          backdropFilter: "blur(20px)",
        }}>
          <div className="flex items-baseline justify-between">
            <div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Locked</div>
              <div className="mt-2 font-serif text-4xl tabular-nums">{locked.toFixed(2)}<span className="text-base text-muted-foreground ml-2">SOL</span></div>
            </div>
            <div className="text-right">
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Unlocks in</div>
              <div className="mt-2 font-serif text-4xl tabular-nums">{days}<span className="text-base text-muted-foreground ml-1">d</span></div>
            </div>
          </div>

          <div className="mt-10">
            <Slider
              value={[days]}
              onValueChange={(v) => setDays(v[0])}
              min={1}
              max={30}
              step={1}
              className="[&_[role=slider]]:bg-[var(--neon-cyan)] [&_[role=slider]]:border-0 [&_[role=slider]]:shadow-[0_0_16px_var(--neon-cyan)] [&_[role=slider]]:h-4 [&_[role=slider]]:w-4"
            />
            <div className="mt-2 flex justify-between text-[10px] text-muted-foreground font-mono tracking-widest">
              <span>1D</span><span>30D</span>
            </div>
          </div>

          <div className="mt-10 hairline" />

          <div className="mt-8 grid grid-cols-2 gap-8">
            <div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Discount</div>
              <div className="mt-2 font-serif text-3xl tabular-nums" style={{ color: "var(--neon-violet)" }}>
                {dAnim.toFixed(2)}<span className="text-lg">%</span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Instant exit</div>
              <div className="mt-2 font-serif text-3xl tabular-nums" style={{ color: "var(--neon-cyan)" }}>
                {vAnim.toFixed(3)}<span className="text-lg text-muted-foreground ml-2">SOL</span>
              </div>
            </div>
          </div>

          <Button
            size="lg"
            className="mt-10 w-full rounded-full text-primary-foreground"
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
