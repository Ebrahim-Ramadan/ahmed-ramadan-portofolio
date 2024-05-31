"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Info from "./Info";
import LandingProfileImg from '@/assets/LandingProfileImg.webp';
import { HireMe } from "../globals/HireMe";

export const RetroGridDemo = () => {
  const [scrollY, setScrollY] = useState(0);
  const debouncedScrollY = useDebounce(scrollY, 50); // Adjust the delay as needed

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const maxScroll = 200; // Maximum scroll value where the scaling stops
  const newScale = Math.max(0.6, 1 - (debouncedScrollY / maxScroll) * 0.3); 
  const newBorderRadius = `${2 + (debouncedScrollY / maxScroll) * 2}rem`; 
  const newOpacity = Math.max(0.6, 1 - (debouncedScrollY / maxScroll) * 0.3); 

  return (
    <div
      className="z-10 relative flex h-screen w-full items-center justify-center overflow-hidden bg-[#18011D] transition-transform duration-300 "
      style={{ transform: `scale(${newScale})`, borderRadius: newBorderRadius, opacity:newOpacity }}
    >
      <div className="flex flex-col justify-center items-center md:mt-24 gap-2">
      <div className="relative flex items-center justify-center h-44 md:h-72 w-44 md:w-72 rounded-full bg-gradient-to-t from-primary-600 to-primary">
          <Image
    className="absolute md:h-96 h-56 w-fit bottom-0 rounded-b-full mask-image"
    width="auto"
    height={350}
    src={LandingProfileImg}
    alt="Profile"
  />
    </div>
        <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-r from-primary-500 via-primary-400 to-primary-300 bg-clip-text text-center text-5xl md:text-7xl font-bold leading-none tracking-tighter text-transparent">
          <Info word="Ahmed Ramadan" />
        </span>
        {/* <GradualSpacing
          className="font-display text-center text-4xl font-bold tracking-[-0.1em] text-black dark:text-white md:text-2xl md:leading-[5rem]"
          text=" ACE Moharram-Bakhoum Inc."
        /> */}
        <div className="flex flex-col justify-center">
        <span className="text-gray-300 font-light px-4 text-center md:text-sm text-xs">
          Senior Architect at <a className="underline font-medium cursor-pointer text-primary-600">
          ACE Moharram-Bakhoum
          </a>
        </span>
        <span className="text-gray-300 font-light px-4 text-center md:text-sm text-xs">
          Talented Individual BAsed on <a className="font-medium cursor-pointer">
          Cairo, Egypt.
          </a>
        </span>
        </div>
        <HireMe/>
      </div>
    </div>
  );
};

export default RetroGridDemo;



export function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
