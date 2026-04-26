import { Button } from "@/components/ui/button";
import { BrandName } from "./BrandName";

export function Nav() {
  return (
    <header className="sticky top-0 z-40 w-full">
      <div className="mx-auto mt-4 max-w-7xl px-3 sm:px-4">
        <div className="glass flex items-center justify-between gap-2 rounded-md px-3 py-2.5 sm:px-5 sm:py-3">
          <a href="#top" className="flex items-center gap-2.5 min-w-0">
            <div className="relative h-7 w-7 shrink-0 rounded-sm border-2 border-foreground bg-primary shadow-brutal-sm">
              <div className="absolute inset-[6px] bg-background" />
            </div>
            <BrandName className="text-lg font-black uppercase truncate" />
          </a>
          <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
            <a href="#how" className="hover:text-foreground transition">How it works</a>
            <a href="#dashboard" className="hover:text-foreground transition">Simulator</a>
            <a href="#lp" className="hover:text-foreground transition">For LPs</a>
          </nav>
          <Button
            size="sm"
            className="rounded-md border-2 border-foreground bg-primary px-4 font-black text-primary-foreground shadow-brutal-sm shrink-0 hover:bg-accent"
          >
            Launch
          </Button>
        </div>
      </div>
    </header>
  );
}
