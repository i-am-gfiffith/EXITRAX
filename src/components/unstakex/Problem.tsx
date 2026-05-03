import { Clock, Zap } from "lucide-react";
import { BrandName } from "./BrandName";
import { motion } from "framer-motion";

export function Problem() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-5xl px-4">
        <div className="text-center max-w-2xl mx-auto">
          <div className="eyebrow justify-center inline-flex">The Problem</div>
          <h2 className="mt-5 text-3xl md:text-5xl font-black uppercase tracking-tight">
            Unstaking takes days.
            <br />
            <span className="text-gradient">Markets don't wait.</span>
          </h2>
        </div>

        <div className="glass mt-14 grid overflow-hidden rounded-md md:grid-cols-2 divide-y-2 md:divide-y-0 md:divide-x-2 divide-foreground/40">
          <motion.div className="p-7 sm:p-8" initial={{ opacity: 0, x: -22 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.45 }}>
            <Clock className="h-5 w-5 text-muted-foreground" />
            <div className="mt-5 text-lg font-black uppercase">Traditional</div>
            <div className="mt-2 text-sm leading-6 text-muted-foreground">
              Capital frozen for ~14 days in unbonding queues while opportunity cost compounds.
            </div>
            <div className="mt-6 text-3xl font-black tabular-nums text-muted-foreground">14d</div>
          </motion.div>
          <motion.div className="relative bg-primary/85 p-7 text-primary-foreground sm:p-8" initial={{ opacity: 0, x: 22 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.45, delay: 0.08 }}>
            <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, var(--neon-cyan), transparent)" }} />
            <Zap className="h-5 w-5 text-primary-foreground" />
            <div className="mt-5 text-lg font-black uppercase"><BrandName /></div>
            <div className="mt-2 text-sm leading-6 text-muted-foreground">
              Liquid SOL in your wallet — settled on-chain in under two seconds.
            </div>
            <div className="mt-6 text-3xl font-black tabular-nums text-primary-foreground">&lt; 2s</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
