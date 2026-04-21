export function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute -top-40 -left-40 h-[36rem] w-[36rem] rounded-full blur-3xl opacity-20"
        style={{ background: "radial-gradient(circle, var(--neon-violet), transparent 60%)" }}
      />
      <div
        className="absolute bottom-0 right-0 h-[32rem] w-[32rem] rounded-full blur-3xl opacity-20"
        style={{ background: "radial-gradient(circle, var(--neon-cyan), transparent 60%)" }}
      />
    </div>
  );
}
