import { Button } from "@/components/ui/button";
import { TrendingUp, Timer, Gauge } from "lucide-react";

export function LPPanel() {
  const apy = 12.4;
  const avgLock = 9.2;
  const expReturn = 0.42;
  const risk = 38; // 0-100

  return (
    <section id="lp" className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="text-xs uppercase tracking-widest text-[var(--neon-violet)]">For Liquidity Providers</div>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
              Earn from <span className="text-gradient">time arbitrage</span>
            </h2>
            <p className="mt-4 max-w-lg text-muted-foreground">
              Provide SOL liquidity and buy locked positions at a discount. When they unlock, you redeem at full value — capturing the spread.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[var(--neon-cyan)]" /> Predictable yield from on-chain unbonding mechanics</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[var(--neon-violet)]" /> Diversified across hundreds of staking positions</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[var(--neon-blue)]" /> Withdraw anytime from the unbonded portion</li>
            </ul>
            <Button
              size="lg"
              className="mt-8 rounded-xl text-primary-foreground hover-lift"
              style={{ background: "linear-gradient(135deg, var(--neon-violet), var(--neon-blue))" }}
            >
              Become an LP
            </Button>
          </div>

          <div className="glass-strong rounded-3xl p-5 sm:p-7 neon-border overflow-hidden">
            <div className="grid grid-cols-3 gap-2 sm:gap-4">
              <Metric icon={TrendingUp} label="APY" value={`${apy}%`} tone="cyan" />
              <Metric icon={Timer} label="Avg lock" value={`${avgLock}d`} tone="violet" />
              <Metric icon={Gauge} label="Est. return" value={`${expReturn} SOL`} tone="blue" />
            </div>

            <div className="mt-6">
              <div className="flex justify-between text-xs mb-2 gap-2">
                <span className="text-muted-foreground truncate">Risk Level</span>
                <span className="text-[var(--neon-cyan)] shrink-0">Low–Medium</span>
              </div>
              <div className="relative h-2 rounded-full bg-white/5 overflow-hidden">
                <div
                  className="absolute inset-y-0 left-0 rounded-full"
                  style={{
                    width: `${risk}%`,
                    background: "linear-gradient(90deg, var(--success), var(--warning), var(--destructive))",
                    backgroundSize: "300% 100%",
                  }}
                />
              </div>
              <div className="mt-1 flex justify-between text-[10px] text-muted-foreground">
                <span>Low</span><span>Medium</span><span>High</span>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <Bar label="Pool utilization" value={72} color="var(--neon-cyan)" />
              <Bar label="Capital deployed" value={58} color="var(--neon-violet)" />
              <Bar label="30d performance" value={91} color="var(--neon-blue)" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Metric({ icon: Icon, label, value, tone }: { icon: typeof TrendingUp; label: string; value: string; tone: "cyan" | "violet" | "blue" }) {
  const color = tone === "cyan" ? "var(--neon-cyan)" : tone === "violet" ? "var(--neon-violet)" : "var(--neon-blue)";
  return (
    <div className="rounded-2xl bg-white/5 p-3 sm:p-4 min-w-0">
      <Icon className="h-4 w-4 text-muted-foreground" />
      <div className="mt-2 sm:mt-3 text-[10px] sm:text-xs text-muted-foreground truncate">{label}</div>
      <div className="mt-1 text-base sm:text-xl font-semibold tabular-nums truncate" style={{ color }}>{value}</div>
    </div>
  );
}

function Bar({ label, value, color }: { label: string; value: number; color: string }) {
  return (
    <div>
      <div className="flex justify-between text-xs mb-1.5">
        <span className="text-muted-foreground">{label}</span>
        <span className="tabular-nums">{value}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
        <div
          className="h-full rounded-full transition-[width] duration-700"
          style={{ width: `${value}%`, background: `linear-gradient(90deg, ${color}, color-mix(in oklab, ${color} 40%, transparent))`, boxShadow: `0 0 12px ${color}` }}
        />
      </div>
    </div>
  );
}
