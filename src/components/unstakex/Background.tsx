export function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background">
      <div className="cosmic-nebula absolute inset-0" />
      <div className="starfield starfield-far absolute inset-0" />
      <div className="starfield starfield-near absolute inset-0" />

      <svg
        aria-hidden="true"
        className="constellation-map absolute inset-0 h-full w-full"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
      >
        <g className="constellation constellation-a">
          <path d="M116 208 L218 164 L332 232 L446 180 L565 265" />
          <circle cx="116" cy="208" r="3.4" />
          <circle cx="218" cy="164" r="2.7" />
          <circle cx="332" cy="232" r="3.1" />
          <circle cx="446" cy="180" r="2.5" />
          <circle cx="565" cy="265" r="3.8" />
        </g>

        <g className="constellation constellation-b">
          <path d="M760 152 L836 234 L930 192 L1018 288 L1098 238" />
          <circle cx="760" cy="152" r="2.9" />
          <circle cx="836" cy="234" r="3.5" />
          <circle cx="930" cy="192" r="2.6" />
          <circle cx="1018" cy="288" r="3.2" />
          <circle cx="1098" cy="238" r="2.8" />
        </g>

        <g className="constellation constellation-c">
          <path d="M240 560 L352 500 L472 592 L610 534 L742 618" />
          <circle cx="240" cy="560" r="2.8" />
          <circle cx="352" cy="500" r="3.3" />
          <circle cx="472" cy="592" r="2.5" />
          <circle cx="610" cy="534" r="3.6" />
          <circle cx="742" cy="618" r="2.9" />
        </g>
      </svg>

      <div className="shooting-star shooting-star-one" />
      <div className="shooting-star shooting-star-two" />
    </div>
  );
}
