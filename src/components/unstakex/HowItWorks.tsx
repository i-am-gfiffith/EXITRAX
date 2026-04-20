import { Wallet, MousePointerClick, Coins } from "lucide-react";

const steps = [
  { icon: Wallet, title: "Connect Wallet", desc: "Phantom, Backpack, Solflare." },
  { icon: MousePointerClick, title: "Select Locked Position", desc: "Pick the stake you want to exit." },
  { icon: Coins, title: "Receive SOL Instantly", desc: "Liquid SOL, settled in seconds." },
];

export function HowItWorks() {
  return (
    <section id="how" className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs uppercase tracking-widest text-[var(--neon-violet)]">How it works</div>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
            Three steps to <span className="text-gradient">instant liquidity</span>
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <div key={s.title} className="glass hover-lift rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <div className="h-12 w-12 grid place-items-center rounded-xl neon-border bg-white/5">
                  <s.icon className="h-5 w-5 text-[var(--neon-cyan)]" />
                </div>
                <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
              </div>
              <h3 className="mt-5 font-medium">{s.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
