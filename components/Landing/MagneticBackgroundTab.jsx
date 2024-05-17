'use client'
import { useRouter } from "next/navigation";
import React, {  useRef, useState } from "react";
import { scrollToPosition } from "@/utils/scrollToPosition";
export const MagneticBackgroundTab = ({
  item,
  
}) => {
  const router = useRouter()
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
  const routeToBehance = () => {
    if (item.text === 'Behance') {
      router.push('https://www.behance.net/ARCHUWK/projects')      
    } else {
      scrollToPosition(item.position)      
    }
}
  return (
    <button
      onClick={routeToBehance}
        ref={ref}
        className="group relative h-12"
        onMouseMove={handleMouseMove}
        onMouseLeave={onMouseOut}
      >
        <span className="text-zinc-300 hover:text-zinc-200  font-medium relative px-1 md:px-4 py-1 md:py-2 text-sm  transition-colors   z-10 flex flex-row gap-2 items-center">
            {item.text}
                  {item.text ==='Behance' &&
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

