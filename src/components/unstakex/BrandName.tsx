type BrandNameProps = {
  className?: string;
};

export function BrandName({ className = "" }: BrandNameProps) {
  return (
    <span className={`inline-flex items-baseline tracking-[0.04em] ${className}`} aria-label="ExitraX">
      <span>ExitraX</span>
    </span>
  );
}