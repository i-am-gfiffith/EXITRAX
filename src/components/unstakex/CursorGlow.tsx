import { useEffect, useState } from "react";

export function CursorGlow() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const onLeave = () => setVisible(false);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed z-[60] h-[420px] w-[420px] rounded-full blur-3xl transition-opacity duration-300"
      style={{
        left: pos.x - 210,
        top: pos.y - 210,
        opacity: visible ? 0.35 : 0,
        background:
          "radial-gradient(circle, color-mix(in oklab, var(--neon-cyan) 45%, transparent) 0%, transparent 60%)",
        mixBlendMode: "screen",
      }}
    />
  );
}
