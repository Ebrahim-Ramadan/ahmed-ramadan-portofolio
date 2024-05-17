'use client';
import Image from 'next/image';
import React, { useEffect, useState, useRef } from 'react';
import { MagneticBackgroundTab } from './MagneticBackgroundTab';

const LandingHi = () => {
  const [isSticky, setIsSticky] = useState(false);
  const stickyRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const stickyElement = stickyRef.current;

      if (scrollY > 80 && !isSticky) {
        setIsSticky(true);
        requestAnimationFrame(() => {
          if (stickyElement) {
            stickyElement.style.transform = 'translateY(-50px)';
            stickyElement.style.opacity = '0';
            setTimeout(() => {
              if (stickyElement) {
                stickyElement.style.transition = 'transform 0.3s ease-out, opacity 0.3s ease-out';
                stickyElement.style.transform = 'translateY(0)';
                stickyElement.style.opacity = '1';
              }
            }, 0);
          }
        });
      }
      else if (scrollY <= 120 && isSticky) {
        setIsSticky(false);
        requestAnimationFrame(() => {
          if (stickyElement) {
            stickyElement.style.transform = 'translateY(0)';
            stickyElement.style.opacity = '1';
          }
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isSticky]);

  return (
    <div className="flex flex-col-reverse md:flex-row w-full items-center justify-evenly">
      <div className="flex flex-col">
        <div className="flex flex-row items-start gap-2 text-xl md:text-2xl font-bold">
          <span>Hello,</span>
          <span>
            <span>I am </span>
            <span>Ahmed Ramadan </span>
          </span>
        </div>
      </div>
      <div
        ref={stickyRef}
        className={`flex flex-row ${isSticky ? 'px-2 rounded-full fixed top-2 md:top-4 z-10 backdrop-blur-lg bg-white/10 border-none' : ''}`}
      >
        {tabs.map((item) => (
          <MagneticBackgroundTab key={item.id} item={item} isSticky={isSticky} />
        ))}
      </div>
    </div>
  );
};

export default LandingHi;

const tabs = [
  { id: 1, text: 'Home', position: '0' },
  { id: 3, text: 'Projects', position: '2' },
  { id: 2, text: 'Experience', position: '4' },
  { id: 2, text: 'Behance' },
];