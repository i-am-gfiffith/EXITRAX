import { createFileRoute } from "@tanstack/react-router";
import { AnimatedBackground } from "@/components/unstakex/Background";
import { Nav } from "@/components/unstakex/Nav";
import { Hero } from "@/components/unstakex/Hero";
import { Problem } from "@/components/unstakex/Problem";
import { HowItWorks } from "@/components/unstakex/HowItWorks";
import { Dashboard } from "@/components/unstakex/Dashboard";
import { LPPanel } from "@/components/unstakex/LPPanel";
import { Footer } from "@/components/unstakex/Footer";
import { CursorGlow } from "@/components/unstakex/CursorGlow";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "UNS8X — Unstake Instantly. No Waiting." },
      { name: "description", content: "UNS8X is the Solana liquidity layer for instant exits from locked staking positions. Turn locked SOL into liquid SOL in seconds." },
      { property: "og:title", content: "UNS8X — Instant Solana Unstaking" },
      { property: "og:description", content: "Skip the unbonding queue. Get liquid SOL instantly with UNS8X." },
    ],
  }),
});

function Index() {
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <CursorGlow />
      <Nav />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <Dashboard />
        <LPPanel />
      </main>
      <Footer />
    </div>
  );
}
