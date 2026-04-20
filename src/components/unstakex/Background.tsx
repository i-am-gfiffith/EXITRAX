export function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div
        className="absolute -top-40 -left-40 h-[40rem] w-[40rem] rounded-full blur-3xl opacity-30 animate-float"
        style={{ background: "radial-gradient(circle, var(--neon-violet), transparent 60%)" }}
      />
      <div
        className="absolute top-1/3 -right-40 h-[36rem] w-[36rem] rounded-full blur-3xl opacity-30 animate-float"
        style={{ background: "radial-gradient(circle, var(--neon-cyan), transparent 60%)", animationDelay: "2s" }}
      />
      <div
        className="absolute bottom-0 left-1/4 h-[30rem] w-[30rem] rounded-full blur-3xl opacity-25 animate-float"
        style={{ background: "radial-gradient(circle, var(--neon-blue), transparent 60%)", animationDelay: "4s" }}
      />
    </div>
  );
}
