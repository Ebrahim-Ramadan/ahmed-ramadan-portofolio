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
                 
           
        {/* <div
          style={{
            width:'1.2rem',
            height: '1.2rem',
            WebkitMaskImage: 'url(https://tv.onvo.me/assets/community.png)',
            WebkitMaskSize: 'contain',
            WebkitMaskPosition: 'center',
            WebkitMaskRepeat: 'no-repeat',
            backgroundColor:'white'
          }}
         ></div> */}
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

