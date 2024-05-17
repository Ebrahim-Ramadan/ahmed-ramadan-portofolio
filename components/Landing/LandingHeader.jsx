'use client'
import React, { useRef, useState } from "react";

const MagneticBackgroundTab = ({
  item,
}) => {
  const ref = useRef(null);

  const [hoverPosition, setHoverPosition] = useState({
    x: 0,
    y: 0,
    opacity: 0,
  });

  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = (clientX - left - width / 2) * 0.15;
    const y = (clientY - top - height / 2) * 0.15;

    setHoverPosition({ x, y, opacity: 1 });
  };

  const onMouseOut = () => {
    setHoverPosition({ x: 0, y: 0, opacity: 0 });
  };

  return (
      <button
        ref={ref}
        className="group relative h-12"
        onMouseMove={handleMouseMove}
        onMouseLeave={onMouseOut}
      >
        <span className="group-hover:text-white relative px-4 py-2 text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 z-10 flex flex-row gap-2 items-center">
            {item.text}
                  {item.icon ==='true' &&
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mouse-pointer-click"><path d="m9 9 5 12 1.8-5.2L21 14Z"/><path d="M7.2 2.2 8 5.1"/><path d="m5.1 8-2.9-.8"/><path d="M14 4.1 12 6"/><path d="m6 12-1.9 2"/></svg>
                 } 
           
          
          </span>
          
        <div
          className="absolute bottom-0 left-0 -z-0  w-full rounded-3xl h-full  bg-primary-switchPalette"
          style={{
            transform: `translate(${hoverPosition.x}px, ${hoverPosition.y}px)`,
            opacity: hoverPosition.opacity,
          }}
        />
      </button>
  );
};

const tabs = [
  { id: 1, text: "Home" },
  { id: 3, text: "Projects" },
    { id: 2, text: "Experience" },
    { id: 2, text: "Behance", icon:"true" },
];

export default function LandingHeader() {
  return (
    <div className="flex flex-row ">
      {tabs.map((item) => (
        <MagneticBackgroundTab key={item.id} item={item} />
      ))}
    </div>
  );
}
