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
        <span className="group-hover:text-white relative px-4 py-2 text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 z-10">
              {item.text} <span>
                  {/* {item.icon && */}
                     {/* <div
                     style={{
                       marginRight: '-2rem',
                       width: '8rem',
                       height: '8rem',
                       WebkitMaskImage: 'url(https://ahmed-ramadan.vercel.app/assets/external.png)',
                       WebkitMaskSize: 'contain',
                       WebkitMaskPosition: 'center',
                       WebkitMaskRepeat: 'no-repeat',
                       background: 'white',
                     }}
                   /> */}
                  {/* } */}
           
          </span>
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
    { id: 2, text: "Behance" },
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
