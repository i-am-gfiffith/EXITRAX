type BrandNameProps = {
  className?: string;
};

export function BrandName({ className = "" }: BrandNameProps) {
  return (
    <span className={`inline-flex items-baseline tracking-[0.08em] ${className}`} aria-label="UNS8X">
      <span>UNS</span>
      <span
        className="mx-[0.03em] inline-grid h-[1.05em] min-w-[0.68em] place-items-center rounded-full align-baseline font-sans text-[0.78em] font-semibold leading-none text-primary-foreground shadow-[0_0_18px_color-mix(in_oklab,var(--neon-cyan)_35%,transparent)]"
        style={{ background: "linear-gradient(135deg, var(--neon-cyan), var(--neon-violet))" }}
      >
        8
      </span>
      <span>X</span>
    </span>
  );
}