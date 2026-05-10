import { useEffect, useMemo, useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";
import { discountPct, exitValue } from "@/lib/pricing";
import { useCountUp } from "@/hooks/use-count-up";
import { motion } from "framer-motion";

export function Dashboard() {
  const locked = 10;
  const [days, setDays] = useState(14);

  const d = useMemo(() => discountPct(days), [days]);
  const v = useMemo(() => exitValue(locked, days), [days]);

  const dAnim = useCountUp(d);
  const vAnim = useCountUp(v);

  // Smoothly tween background glow + particle density toward slider target.
  // Closer to unlock (lower days) → higher intensity. rAF easing avoids
  // abrupt step-changes between slider notches.
  useEffect(() => {
    const target = 1 - (days - 1) / 29; // 1 → 1.0, 30 → 0.0
    const root = document.documentElement;
    const current = parseFloat(
      getComputedStyle(root).getPropertyValue("--exit-intensity").trim() || "0.5",
    );
    const start = isNaN(current) ? 0.5 : current;
    const duration = 700; // ms
    const t0 = performance.now();
    let raf = 0;
    // easeInOutCubic for smooth acceleration/deceleration
    const ease = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const step = (now: number) => {
      const p = Math.min(1, (now - t0) / duration);
      const v = start + (target - start) * ease(p);
      root.style.setProperty("--exit-intensity", v.toFixed(4));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [days]);

  return (
    <section id="dashboard" className="py-28">
      <div className="mx-auto max-w-3xl px-4">
        <div className="text-center">
          <div className="eyebrow justify-center inline-flex">Simulator</div>
          <h2 className="mt-5 text-3xl md:text-5xl font-black uppercase tracking-tight">
            Your <span className="text-gradient">instant exit</span> price
          </h2>
        </div>

        <motion.div className="glass mt-14 relative overflow-hidden rounded-md p-6 sm:p-10" initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.55 }}>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Locked</div>
              <div className="mt-2 text-3xl font-black tabular-nums sm:text-4xl">{locked.toFixed(2)}<span className="ml-2 text-base text-muted-foreground">SOL</span></div>
            </div>
            <div className="text-right">
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Unlocks in</div>
              <div className="mt-2 text-3xl font-black tabular-nums sm:text-4xl">{days}<span className="ml-1 text-base text-muted-foreground">d</span></div>
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

          <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-8">
            <div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Discount</div>
              <div className="mt-2 text-3xl font-black tabular-nums text-card-foreground">
                {dAnim.toFixed(2)}<span className="text-lg">%</span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Instant exit</div>
              <div className="mt-2 text-3xl font-black tabular-nums text-card-foreground">
                {vAnim.toFixed(3)}<span className="ml-2 text-lg text-muted-foreground">SOL</span>
              </div>
            </div>
          </div>

          <Button
            size="lg"
            className="mt-10 w-full rounded-md border-2 border-foreground font-black uppercase text-primary-foreground shadow-brutal-sm"
            style={{ background: "linear-gradient(135deg, var(--neon-cyan), var(--neon-violet))" }}
          >
            <Zap className="mr-2 h-4 w-4" />
            Instant Exit
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
