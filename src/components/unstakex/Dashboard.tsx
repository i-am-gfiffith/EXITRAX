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
  const [liveIntensity, setLiveIntensity] = useState(1 - (14 - 1) / 29);

  const d = useMemo(() => discountPct(days), [days]);
  const v = useMemo(() => exitValue(locked, days), [days]);

  const dAnim = useCountUp(d);
  const vAnim = useCountUp(v);

  // Smoothly tween background glow + particle density toward slider target.
  // Closer to unlock (lower days) → higher intensity. rAF easing avoids
  // abrupt step-changes between slider notches. Also drives the live preview badge.
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
    const ease = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const step = (now: number) => {
      const p = Math.min(1, (now - t0) / duration);
      const v = start + (target - start) * ease(p);
      root.style.setProperty("--exit-intensity", v.toFixed(4));
      setLiveIntensity(v);
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [days]);

  const intensityLabel =
    liveIntensity >= 0.75 ? "Peak" : liveIntensity >= 0.45 ? "Active" : liveIntensity >= 0.2 ? "Calm" : "Dormant";
  const intensityPct = Math.round(liveIntensity * 100);
  const dotCount = 1 + Math.round(liveIntensity * 4); // 1..5


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
            <div className="mt-3 flex items-center justify-between gap-3 text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
              <span>1D</span>
              <div
                className="flex items-center gap-2 rounded-full border border-foreground/15 px-2.5 py-1 text-foreground/90 backdrop-blur-sm transition-colors"
                style={{
                  borderColor: `color-mix(in oklab, var(--neon-cyan) ${20 + intensityPct * 0.6}%, transparent)`,
                  boxShadow: `0 0 ${6 + intensityPct * 0.18}px color-mix(in oklab, var(--neon-cyan) ${20 + intensityPct * 0.5}%, transparent)`,
                  background: `color-mix(in oklab, var(--neon-cyan) ${4 + intensityPct * 0.08}%, transparent)`,
                }}
                aria-live="polite"
                aria-label={`Glow intensity ${intensityPct} percent, ${intensityLabel}`}
              >
                <span className="flex items-center gap-[3px]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={i}
                      className="h-1.5 w-1.5 rounded-full transition-all duration-150"
                      style={{
                        background:
                          i < dotCount ? "var(--neon-cyan)" : "color-mix(in oklab, var(--foreground) 18%, transparent)",
                        boxShadow:
                          i < dotCount ? "0 0 6px var(--neon-cyan)" : "none",
                        transform: i < dotCount ? "scale(1)" : "scale(0.85)",
                      }}
                    />
                  ))}
                </span>
                <span className="tabular-nums">{intensityPct}%</span>
                <span className="text-muted-foreground">·</span>
                <span>{intensityLabel}</span>
              </div>
              <span>30D</span>
            </div>
          </div>

          {/* Quick scene presets — set both slider value and (via the
              tween effect) the background glow + particle density. */}
          <div className="mt-6 flex flex-wrap gap-2">
            {([
              { label: "Best Exit Zone", days: 3 },
              { label: "Balanced", days: 14 },
              { label: "High Discount Region", days: 28 },
            ] as const).map((p) => {
              const active = days === p.days;
              return (
                <button
                  key={p.label}
                  type="button"
                  onClick={() => setDays(p.days)}
                  aria-pressed={active}
                  className={
                    "rounded-md border px-3 py-1.5 text-[10px] font-mono uppercase tracking-widest transition-all " +
                    (active
                      ? "border-[var(--neon-cyan)] text-foreground shadow-[0_0_16px_var(--neon-cyan)] bg-[color-mix(in_oklab,var(--neon-cyan)_14%,transparent)]"
                      : "border-foreground/15 text-muted-foreground hover:text-foreground hover:border-foreground/40")
                  }
                >
                  {p.label}
                </button>
              );
            })}
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
