import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export function AnimatedBackground() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!rootRef.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const context = gsap.context(() => {
      gsap.to(".market-grid", { backgroundPosition: "96px 96px", duration: 24, ease: "none", repeat: -1 });
      gsap.to(".cosmic-aurora", { xPercent: 2, yPercent: -2, scale: 1.04, duration: 12, yoyo: true, repeat: -1, ease: "sine.inOut" });
      gsap.to(".constellation-map", { opacity: 0.62, duration: 3.2, yoyo: true, repeat: -1, ease: "power1.inOut" });
    }, rootRef);

    return () => context.revert();
  }, []);

  return (
    <div ref={rootRef} className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="cosmic-nebula absolute inset-0" />
      <div className="cosmic-aurora absolute inset-0" />
      <div className="market-grid absolute inset-0" />
      <div className="orbital-ring orbital-ring-one" />
      <div className="orbital-ring orbital-ring-two" />
      <div className="starfield starfield-far absolute inset-0" />
      <div className="starfield starfield-mid absolute inset-0" />
      <div className="starfield starfield-near absolute inset-0" />
      <div className="stellar-dust absolute inset-0" />

      <svg
        aria-hidden="true"
        className="constellation-map absolute inset-0 h-full w-full"
        viewBox="0 0 1200 800"
        preserveAspectRatio="none"
      >
        <g className="constellation constellation-a">
          <path d="M60 90 L180 60 L300 120 L420 80 L560 150" />
          <circle cx="60" cy="90" r="3.4" />
          <circle cx="180" cy="60" r="2.7" />
          <circle cx="300" cy="120" r="3.1" />
          <circle cx="420" cy="80" r="2.5" />
          <circle cx="560" cy="150" r="3.8" />
        </g>

        <g className="constellation constellation-b">
          <path d="M760 60 L836 140 L930 100 L1018 190 L1140 140" />
          <circle cx="760" cy="60" r="2.9" />
          <circle cx="836" cy="140" r="3.5" />
          <circle cx="930" cy="100" r="2.6" />
          <circle cx="1018" cy="190" r="3.2" />
          <circle cx="1140" cy="140" r="2.8" />
        </g>

        <g className="constellation constellation-a">
          <path d="M80 280 L210 250 L340 310 L470 270 L600 330" />
          <circle cx="80" cy="280" r="3" />
          <circle cx="210" cy="250" r="2.6" />
          <circle cx="340" cy="310" r="3.2" />
          <circle cx="470" cy="270" r="2.4" />
          <circle cx="600" cy="330" r="3.5" />
        </g>

        <g className="constellation constellation-b">
          <path d="M720 290 L840 250 L960 320 L1080 280 L1170 350" />
          <circle cx="720" cy="290" r="2.8" />
          <circle cx="840" cy="250" r="3.3" />
          <circle cx="960" cy="320" r="2.5" />
          <circle cx="1080" cy="280" r="3.1" />
          <circle cx="1170" cy="350" r="2.9" />
        </g>

        <g className="constellation constellation-c">
          <path d="M100 460 L240 420 L380 490 L520 440 L660 510" />
          <circle cx="100" cy="460" r="2.8" />
          <circle cx="240" cy="420" r="3.3" />
          <circle cx="380" cy="490" r="2.5" />
          <circle cx="520" cy="440" r="3.6" />
          <circle cx="660" cy="510" r="2.9" />
        </g>

        <g className="constellation constellation-a">
          <path d="M740 470 L860 440 L980 500 L1100 460 L1180 530" />
          <circle cx="740" cy="470" r="3" />
          <circle cx="860" cy="440" r="2.7" />
          <circle cx="980" cy="500" r="3.2" />
          <circle cx="1100" cy="460" r="2.6" />
          <circle cx="1180" cy="530" r="3.4" />
        </g>

        <g className="constellation constellation-c">
          <path d="M120 660 L260 620 L400 690 L540 640 L680 710" />
          <circle cx="120" cy="660" r="2.9" />
          <circle cx="260" cy="620" r="3.4" />
          <circle cx="400" cy="690" r="2.6" />
          <circle cx="540" cy="640" r="3.5" />
          <circle cx="680" cy="710" r="3" />
        </g>

        <g className="constellation constellation-b">
          <path d="M760 670 L880 630 L1000 700 L1120 660" />
          <circle cx="760" cy="670" r="2.7" />
          <circle cx="880" cy="630" r="3.2" />
          <circle cx="1000" cy="700" r="2.5" />
          <circle cx="1120" cy="660" r="3.3" />
        </g>
      </svg>

      <div className="shooting-star shooting-star-one" />
      <div className="shooting-star shooting-star-two" />
      <div className="shooting-star shooting-star-three" />
      <div className="shooting-star shooting-star-four" />
      <div className="shooting-star shooting-star-five" />
    </div>
  );
}
