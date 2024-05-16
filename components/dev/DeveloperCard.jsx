'use client'
import { useRef, useState } from "react";

export const CardSpotlight = () => {
  const divRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current || isFocused) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative max-w-xs rounded-3xl border border-neutral-800 bg-neutral-950 p-8"
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-500"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,.25), transparent 40%)`,
        }}
      />
      <div className="mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-user-round">
                  <path d="M18 20a6 6 0 0 0-12 0" /><circle cx="12" cy="10" r="4" />
                  <circle cx="12" cy="12" r="10" /></svg>
      </div>
      <h3 className="mb-2 font-medium tracking-tight text-neutral-100">
        Focused Security
      </h3>
      <p className="text-sm text-neutral-400">
        A spotlight on security, because the safety of your data is our
        priority.
      </p>
    </div>
  );
};
