'use client'
import React, {  useRef, useState } from "react";
export const MagneticBackgroundTab = ({
  item,
  isSticky
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
    <a
     href={item.href}
        ref={ref}
        className="group relative h-12"
        onMouseMove={handleMouseMove}
        onMouseLeave={onMouseOut}
      >
      <span className={`text-zinc-300 group-hover:text-zinc-200  font-medium relative px-1 md:px-4 py-1 md:py-2 text-sm  transition-colors  items-center z-10 flex flex-row ${isSticky ? 'md:gap-0 gap-2' : ''} gap-2 flex flex-row`}>
        <span>
        {item.icon &&  (
          isSticky ?
          <span >
          {item.icon}
            </span>
            :
            <span className=" md:block hidden">
            {item.icon}
          </span>
        )}
       </span>
        <span>
        {!isSticky &&
        item.text
        
        }
            </span>     
           
          </span>
          
        <div
          className="absolute bottom-0 left-0 -z-0  w-full rounded-3xl hidden md:block h-full  bg-primary-700"
          style={{
            transform: `translate(${hoverPosition.x}px, ${hoverPosition.y}px)`,
            opacity: hoverPosition.opacity,
          }}
        />
      </a>
  );
};