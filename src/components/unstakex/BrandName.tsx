type BrandNameProps = {
  className?: string;
};

export function BrandName({ className = "" }: BrandNameProps) {
  return (
    <span className={`inline-flex items-baseline tracking-[0.08em] ${className}`} aria-label="UNS8X">
      <span>UNS</span>
      <span className="mx-[0.02em] inline-block align-baseline font-sans text-[0.92em] font-semibold leading-none text-foreground/90">
        8
      </span>
      <span>X</span>
    </span>
  );
}