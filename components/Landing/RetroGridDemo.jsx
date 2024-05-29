"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import GradualSpacing from "./GradalSpacing";
import Info from "./Info";
import LandingProfileImg from '@/assets/LandingProfileImg.png'

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
      <div className="flex flex-col justify-center items-center mt-8 gap-2">
      <div className="relative flex items-center justify-center h-44 md:h-72 w-44 md:w-72 rounded-full bg-gradient-to-t from-primary-600 to-primary">
          <Image
    className="absolute md:h-96 h-56 w-fit bottom-0 rounded-b-full mask-image"
    width="auto"
    height={350}
    src={LandingProfileImg}
    alt="Profile"
  />
    </div>
        <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-r from-primary-500 via-primary-400 to-primary-300 bg-clip-text text-center text-7xl font-bold leading-none tracking-tighter text-transparent">
          <Info word="Ahmed Ramadan" />
        </span>
        {/* <GradualSpacing
          className="font-display text-center text-4xl font-bold tracking-[-0.1em] text-black dark:text-white md:text-2xl md:leading-[5rem]"
          text=" ACE Moharram-Bakhoum Inc."
        /> */}
        <div className="flex flex-col justify-center">
        <span className="text-gray-300 font-light px-4 text-center md:text-sm text-xs">
          Senior Architect at <a className="underline font-medium cursor-pointer text-primary-600">
          ACE Moharram-Bakhoum Inc.
          </a>
        </span>
        <span className="text-gray-300 font-light px-4 text-center md:text-sm text-xs">
          Talented Individual BAsed on <a className="font-medium cursor-pointer">
          Cairo, Egypt
          </a>
        </span>
        </div>
      </div>
    </div>
  );
};

export default RetroGridDemo;
