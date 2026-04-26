import { Wallet, MousePointerClick, Coins } from "lucide-react";
import { motion } from "framer-motion";

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
          <h2 className="mt-5 text-3xl md:text-5xl font-black uppercase tracking-tight">
            Three steps to <span className="text-gradient">instant liquidity</span>
          </h2>
        </div>
        <div className="relative mt-14 grid gap-6 md:grid-cols-3">
          <div className="absolute left-[16%] right-[16%] top-7 hidden h-0.5 bg-foreground/30 md:block" />
          {steps.map((s, i) => (
            <motion.div key={s.title} className="relative rounded-md border-2 border-foreground bg-background p-6 text-center shadow-brutal-sm md:border-0 md:bg-transparent md:p-0 md:shadow-none" initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.45, delay: i * 0.08 }}>
              <div className="mx-auto h-14 w-14 grid place-items-center rounded-md bg-primary border-2 border-foreground relative z-10 shadow-brutal-sm">
                <s.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <div className="mt-5 font-mono text-[10px] tracking-widest text-muted-foreground">0{i + 1}</div>
              <h3 className="mt-2 text-2xl font-black uppercase">{s.title}</h3>
              <p className="mx-auto mt-2 max-w-[14rem] text-sm leading-6 text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
