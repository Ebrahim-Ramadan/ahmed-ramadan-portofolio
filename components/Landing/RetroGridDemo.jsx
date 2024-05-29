"use client";

import { useState, useEffect } from "react";
import GradualSpacing from "./GradalSpacing";
import Info from "./Info";

export const RetroGridDemo = () => {
  const [scale, setScale] = useState(1);
  const [borderRadius, setBorderRadius] = useState('0rem');

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const maxScroll = 200; // Maximum scroll value where the scaling stops
    const newScale = Math.max(0.6, 1 - (scrollY / maxScroll) * 0.3); // Scale between 1 and 0.8
    const newBorderRadius = `${2 + (scrollY / maxScroll) * 4}rem`; // Border-radius between 4rem and 8rem
    setScale(newScale);
    setBorderRadius(newBorderRadius);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-[#290431] transition-transform duration-300"
      style={{ transform: `scale(${scale})`, borderRadius: borderRadius }}
    >
      <div className="flex flex-col">
        <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-r from-primary-500 via-primary-400 to-primary-300 bg-clip-text text-center text-7xl font-bold leading-none tracking-tighter text-transparent">
          <Info word="Ahmed Ramadan" />
        </span>
        <GradualSpacing
          className="font-display text-center text-4xl font-bold tracking-[-0.1em] text-black dark:text-white md:text-7xl md:leading-[5rem]"
          text="Senior Architect"
        />
      </div>
    </div>
  );
};

export default RetroGridDemo;
