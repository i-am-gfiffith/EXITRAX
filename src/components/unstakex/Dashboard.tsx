import { useEffect, useMemo, useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";
import { discountPct, exitValue } from "@/lib/pricing";
import { useCountUp } from "@/hooks/use-count-up";
import { motion } from "framer-motion";

const STORAGE_KEY = "unstakex:reduce-motion";

export function Dashboard() {
  const locked = 10;
  const [days, setDays] = useState(14);
  const [liveIntensity, setLiveIntensity] = useState(1 - (14 - 1) / 29);
  const [reduceMotion, setReduceMotion] = useState(false);

  // Initialize reduce-motion from saved override or OS preference.
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "1" || saved === "0") {
      setReduceMotion(saved === "1");
      return;
    }
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const onChange = (e: MediaQueryListEvent) => {
      if (localStorage.getItem(STORAGE_KEY) == null) setReduceMotion(e.matches);
    };
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);

  const d = useMemo(() => discountPct(days), [days]);
  const v = useMemo(() => exitValue(locked, days), [days]);

  const dAnim = useCountUp(d);
  const vAnim = useCountUp(v);

  // Drive background glow + particle density. With reduce-motion on, snap
  // to target instantly (no rAF tween, badge updates discretely per slider step).
  useEffect(() => {
    const target = 1 - (days - 1) / 29;
    const root = document.documentElement;

    if (reduceMotion) {
      root.style.setProperty("--exit-intensity", target.toFixed(4));
      setLiveIntensity(target);
      return;
    }

    const current = parseFloat(
      getComputedStyle(root).getPropertyValue("--exit-intensity").trim() || "0.5",
    );
    const start = isNaN(current) ? 0.5 : current;
    const duration = 700;
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
  }, [days, reduceMotion]);

  const toggleReduceMotion = () => {
    setReduceMotion((prev) => {
      const next = !prev;
      localStorage.setItem(STORAGE_KEY, next ? "1" : "0");
      return next;
    });
  };

  const intensityLabel =
    liveIntensity >= 0.75 ? "Peak" : liveIntensity >= 0.45 ? "Active" : liveIntensity >= 0.2 ? "Calm" : "Dormant";
  const intensityPct = Math.round(liveIntensity * 100);
  const dotCount = 1 + Math.round(liveIntensity * 4);



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

          <div className="mt-6 flex justify-end">
            <button
              type="button"
              role="switch"
              aria-checked={reduceMotion}
              onClick={toggleReduceMotion}
              className="group inline-flex items-center gap-2 rounded-full border border-foreground/15 px-2.5 py-1 text-[10px] font-mono uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground hover:border-foreground/40"
              title="Disable the eased glow tween — values snap discretely on each slider step"
            >
              <span
                className={
                  "relative h-3.5 w-6 rounded-full transition-colors " +
                  (reduceMotion ? "bg-[var(--neon-cyan)]" : "bg-foreground/20")
                }
              >
                <span
                  className="absolute top-0.5 h-2.5 w-2.5 rounded-full bg-background transition-all"
                  style={{ left: reduceMotion ? "calc(100% - 0.625rem - 2px)" : "2px" }}
                />
              </span>
              Reduce motion
            </button>
          </div>

          <div className="mt-10">
            <Slider
              value={[days]}
              onValueChange={(v) => setDays(v[0])}
              min={1}
              max={30}
              step={1}
              aria-label="Time to unlock in days"
              aria-valuetext={`${days} day${days === 1 ? "" : "s"} until unlock, glow intensity ${intensityPct} percent, ${intensityLabel}`}
              className="[&_[role=slider]]:bg-[var(--neon-cyan)] [&_[role=slider]]:border-0 [&_[role=slider]]:shadow-[0_0_16px_var(--neon-cyan)] [&_[role=slider]]:h-4 [&_[role=slider]]:w-4 [&_[role=slider]]:focus-visible:ring-2 [&_[role=slider]]:focus-visible:ring-[var(--neon-cyan)] [&_[role=slider]]:focus-visible:ring-offset-2 [&_[role=slider]]:focus-visible:ring-offset-background [&_[role=slider]]:focus-visible:outline-none"
            />
            <p className="sr-only">
              Use Left/Right or Up/Down arrows to adjust by one day. Page Up/Page Down jumps by larger increments. Home jumps to 1 day, End jumps to 30 days.
            </p>
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
          <div
            className="mt-6 flex flex-wrap gap-2"
            role="group"
            aria-label="Quick scene presets"
          >
            {([
              { label: "Best Exit Zone", days: 3 },
              { label: "Balanced", days: 14 },
              { label: "High Discount Region", days: 28 },
            ] as const).map((p, i, arr) => {
              const active = days === p.days;
              return (
                <button
                  key={p.label}
                  type="button"
                  onClick={() => setDays(p.days)}
                  onKeyDown={(e) => {
                    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
                      e.preventDefault();
                      const next = e.currentTarget.parentElement?.children[(i + 1) % arr.length] as HTMLElement | undefined;
                      next?.focus();
                    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
                      e.preventDefault();
                      const prev = e.currentTarget.parentElement?.children[(i - 1 + arr.length) % arr.length] as HTMLElement | undefined;
                      prev?.focus();
                    } else if (e.key === "Home") {
                      e.preventDefault();
                      (e.currentTarget.parentElement?.children[0] as HTMLElement | undefined)?.focus();
                    } else if (e.key === "End") {
                      e.preventDefault();
                      (e.currentTarget.parentElement?.children[arr.length - 1] as HTMLElement | undefined)?.focus();
                    }
                  }}
                  aria-pressed={active}
                  aria-label={`${p.label} preset, ${p.days} day${p.days === 1 ? "" : "s"} until unlock`}
                  className={
                    "rounded-md border px-3 py-1.5 text-[10px] font-mono uppercase tracking-widest transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--neon-cyan)] focus-visible:ring-offset-2 focus-visible:ring-offset-background " +
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
