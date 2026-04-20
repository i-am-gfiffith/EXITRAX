import { useMemo, useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Wallet, Sparkles, TrendingUp, Clock, Zap, ShieldCheck } from "lucide-react";
import { discountPct, exitValue, liquidityStatus, lpProfit } from "@/lib/pricing";
import { useCountUp } from "@/hooks/use-count-up";
import { DiscountChart } from "./DiscountChart";

export function Dashboard() {
  const locked = 10;
  const [days, setDays] = useState(14);
  const [connected, setConnected] = useState(false);

  const d = useMemo(() => discountPct(days), [days]);
  const v = useMemo(() => exitValue(locked, days), [days]);
  const p = useMemo(() => lpProfit(locked, days), [days]);
  const status = liquidityStatus(days);

  const dAnim = useCountUp(d);
  const vAnim = useCountUp(v);
  const pAnim = useCountUp(p);

  return (
    <section id="dashboard" className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs uppercase tracking-widest text-[var(--neon-cyan)]">Live Simulator</div>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
            See your <span className="text-gradient">instant exit</span> price
          </h2>
          <p className="mt-3 text-muted-foreground">Move the slider — pricing updates in real time using our discount engine.</p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_1fr]">
          {/* Main exit card */}
          <div className="glass-strong neon-border rounded-3xl p-5 sm:p-7 overflow-hidden">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2 min-w-0">
                <div className="h-9 w-9 shrink-0 grid place-items-center rounded-xl bg-white/5">
                  <Wallet className="h-4 w-4 text-[var(--neon-cyan)]" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs text-muted-foreground">Wallet</div>
                  <div className="text-sm font-mono truncate">{connected ? "7xKp…q3vN" : "Not connected"}</div>
                </div>
              </div>
              <Button
                size="sm"
                onClick={() => setConnected((c) => !c)}
                className="rounded-lg text-primary-foreground shrink-0 px-3"
                style={{ background: connected ? "rgba(255,255,255,0.08)" : "linear-gradient(135deg, var(--neon-violet), var(--neon-blue))" }}
                variant={connected ? "secondary" : "default"}
              >
                {connected ? "Disconnect" : "Connect"}
              </Button>
            </div>

            <div className="mt-7 grid grid-cols-2 gap-3 sm:gap-4">
              <Stat label="Locked Balance" value={`${locked.toFixed(2)} SOL`} icon={Wallet} />
              <Stat label="Time to Unlock" value={`${days} day${days > 1 ? "s" : ""}`} icon={Clock} />
            </div>

            <div className="mt-6">
              <div className="flex justify-between text-xs text-muted-foreground mb-2">
                <span>Adjust unlock window</span>
                <span className="font-mono">{days}d / 30d</span>
              </div>
              <Slider
                value={[days]}
                onValueChange={(v) => setDays(v[0])}
                min={1}
                max={30}
                step={1}
                className="[&_[role=slider]]:bg-[var(--neon-cyan)] [&_[role=slider]]:border-0 [&_[role=slider]]:shadow-[0_0_20px_var(--neon-cyan)]"
              />
            </div>

            <div className="mt-7 grid grid-cols-2 gap-3 sm:gap-4">
              <BigStat label="Discount" value={`${dAnim.toFixed(2)}%`} tone="violet" />
              <BigStat label="Instant Exit" value={`${vAnim.toFixed(3)} SOL`} tone="cyan" />
            </div>

            <div className="mt-5 flex items-center justify-between gap-2 rounded-xl bg-white/5 px-4 py-3">
              <span className="text-sm text-muted-foreground flex items-center gap-2 min-w-0">
                <Sparkles className="h-4 w-4 shrink-0 text-[var(--neon-cyan)]" />
                <span className="truncate">You save</span>
              </span>
              <span className="text-sm font-medium shrink-0">{days} days</span>
            </div>

            <Button
              size="lg"
              className="mt-6 w-full rounded-xl text-primary-foreground text-sm sm:text-base font-semibold animate-pulse-glow whitespace-normal h-auto py-3"
              style={{ background: "linear-gradient(135deg, var(--neon-cyan), var(--neon-violet))" }}
            >
              <Zap className="mr-2 h-4 w-4 shrink-0" />
              <span className="truncate">Instant Exit · {vAnim.toFixed(3)} SOL</span>
            </Button>
          </div>

          {/* Chart + insights */}
          <div className="space-y-6">
            <div className="glass rounded-3xl p-6">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Discount Curve</div>
                  <div className="text-sm">D = 0.5 × t + 2</div>
                </div>
                <span
                  className="rounded-full px-2.5 py-1 text-[10px] uppercase tracking-wider"
                  style={{
                    background: "color-mix(in oklab, var(--neon-cyan) 15%, transparent)",
                    color: "var(--neon-cyan)",
                  }}
                >
                  Live
                </span>
              </div>
              <DiscountChart day={days} />
              <div className="mt-3 flex flex-wrap gap-2 text-[10px]">
                <Tag label="Best Exit Zone" range="1–7d" tone="cyan" active={days <= 7} />
                <Tag label="Optimal Liquidity" range="8–18d" tone="violet" active={days > 7 && days <= 18} />
                <Tag label="High Discount" range="19–30d" tone="warning" active={days > 18} />
              </div>
            </div>

            <div className="glass rounded-3xl p-6">
              <div className="flex items-center gap-2 text-sm">
                <div className="h-7 w-7 grid place-items-center rounded-lg bg-white/5">
                  <Sparkles className="h-3.5 w-3.5 text-[var(--neon-violet)]" />
                </div>
                <span className="font-medium">Smart Insights</span>
                <span className="ml-auto text-[10px] text-muted-foreground">AI-assisted</span>
              </div>
              <div className="mt-4 space-y-3 text-sm">
                <InsightRow icon={TrendingUp} label="Best time to exit" value={days <= 7 ? "Now — minimal discount" : "Within 7 days"} />
                <InsightRow icon={Wallet} label="Estimated LP profit" value={`${pAnim.toFixed(3)} SOL`} />
                <InsightRow icon={ShieldCheck} label="Liquidity status" value={status.label} tone={status.tone} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value, icon: Icon }: { label: string; value: string; icon: typeof Wallet }) {
  return (
    <div className="rounded-xl bg-white/5 p-3 sm:p-4 min-w-0">
      <div className="flex items-center gap-2 text-xs text-muted-foreground">
        <Icon className="h-3.5 w-3.5 shrink-0" /> <span className="truncate">{label}</span>
      </div>
      <div className="mt-2 text-lg sm:text-xl font-semibold truncate">{value}</div>
    </div>
  );
}

function BigStat({ label, value, tone }: { label: string; value: string; tone: "cyan" | "violet" }) {
  const color = tone === "cyan" ? "var(--neon-cyan)" : "var(--neon-violet)";
  return (
    <div className="rounded-xl p-3 sm:p-4 neon-border bg-white/5 min-w-0">
      <div className="text-xs text-muted-foreground truncate">{label}</div>
      <div className="mt-1 text-lg sm:text-2xl font-semibold tabular-nums truncate" style={{ color }}>{value}</div>
    </div>
  );
}

function Tag({ label, range, tone, active }: { label: string; range: string; tone: "cyan" | "violet" | "warning"; active?: boolean }) {
  const color = tone === "cyan" ? "var(--neon-cyan)" : tone === "violet" ? "var(--neon-violet)" : "var(--warning)";
  return (
    <span
      className="rounded-full border px-2.5 py-1 transition"
      style={{
        borderColor: `color-mix(in oklab, ${color} ${active ? 60 : 20}%, transparent)`,
        background: active ? `color-mix(in oklab, ${color} 14%, transparent)` : "transparent",
        color: active ? color : "rgba(255,255,255,0.55)",
      }}
    >
      {label} · {range}
    </span>
  );
}

function InsightRow({ icon: Icon, label, value, tone }: { icon: typeof Wallet; label: string; value: string; tone?: "success" | "primary" | "warning" }) {
  const color = tone === "success" ? "var(--success)" : tone === "warning" ? "var(--warning)" : "var(--neon-cyan)";
  return (
    <div className="flex items-center justify-between rounded-lg bg-white/[0.03] px-3 py-2.5">
      <div className="flex items-center gap-2 text-muted-foreground">
        <Icon className="h-3.5 w-3.5" />
        <span>{label}</span>
      </div>
      <span className="font-medium" style={{ color: tone ? color : undefined }}>{value}</span>
    </div>
  );
}
