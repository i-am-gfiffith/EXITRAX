export function Footer() {
  return (
    <footer className="py-12">
      <div className="mx-auto max-w-7xl px-4">
        <div className="glass rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-lg" style={{ background: "linear-gradient(135deg, var(--neon-cyan), var(--neon-violet))" }} />
            <span className="font-semibold">UnstakeX</span>
            <span className="text-xs text-muted-foreground">· Built on Solana</span>
          </div>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground">Docs</a>
            <a href="#" className="hover:text-foreground">Audit</a>
            <a href="#" className="hover:text-foreground">Twitter</a>
            <a href="#" className="hover:text-foreground">Discord</a>
          </div>
          <div className="text-xs text-muted-foreground">© 2026 UnstakeX Labs</div>
        </div>
      </div>
    </footer>
  );
}
