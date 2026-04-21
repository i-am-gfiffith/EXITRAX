import { Wallet, MousePointerClick, Coins } from "lucide-react";

const steps = [
  { icon: Wallet, title: "Connect", desc: "Phantom, Backpack, Solflare." },
  { icon: MousePointerClick, title: "Select", desc: "Pick the locked position to exit." },
  { icon: Coins, title: "Receive", desc: "Liquid SOL, settled in seconds." },
];

export function HowItWorks() {
  return (
    <section id="how" className="py-28">
      <div className="mx-auto max-w-5xl px-4">
        <div className="text-center max-w-2xl mx-auto">
          <div className="eyebrow justify-center inline-flex">How it works</div>
          <h2 className="mt-5 text-3xl md:text-5xl font-medium tracking-tight">
            Three steps to <span className="font-serif italic text-gradient">instant liquidity</span>
          </h2>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-3 relative">
          <div className="hidden md:block absolute top-7 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
          {steps.map((s, i) => (
            <div key={s.title} className="relative text-center">
              <div className="mx-auto h-14 w-14 grid place-items-center rounded-full bg-background border border-white/15 relative z-10">
                <s.icon className="h-5 w-5 text-[var(--neon-cyan)]" />
              </div>
              <div className="mt-5 font-mono text-[10px] tracking-widest text-muted-foreground">0{i + 1}</div>
              <h3 className="mt-2 font-serif text-2xl">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground max-w-[14rem] mx-auto">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
