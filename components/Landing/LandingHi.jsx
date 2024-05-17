'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { MagneticBackgroundTab } from './MagneticBackgroundTab';

const LandingHi = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY>50)
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
        className={`flex flex-row ${isSticky ? 'md:px-0 px-2 rounded-full fixed top-2 md:top-4 z-10 backdrop-blur-lg bg-white/10 border-none' : ''}`}
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
  { id: 1, text: 'Home', position: '0', icon:`
  @/assets/home.png
  ` },
  { id: 3, text: 'Projects', position: '2', icon:`
  @/assets/projects.png
  ` },
  { id: 2, text: 'Experience', position: '4', icon:`
  @/assets/work.svg
  
  ` },
  { id: 2, text: 'Behance', icon:`
  @/assets/behance.svg
  
  ` },
];