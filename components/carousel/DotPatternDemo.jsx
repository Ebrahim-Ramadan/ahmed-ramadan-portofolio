"use client";
import Image from "next/image";
import ThreeDPhotoCarousel from "./ThreeDPhotoCarousel";
import colSpanTech from '@/assets/quick-carousel/6.webp'
import colSpanTech3 from '@/assets/quick-carousel/12.webp'
import building from '@/assets/building.webp'
import {  RightArrow,  TechStack } from "../globals/Icons";


const AnimatedGridPatternDemo = () => {
  return (
    <div className="relative min-h-screen flex w-full items-center justify-center overflow-hidden  py-6"
    
    >
      <div className="relative  flex flex-col w-full justify-center "
      >
       
       
       <ThreeDPhotoCarousel />
        <div className="flex flex-col justify-center items-center mt-6">
          <div className="md:grid md:grid-cols-3 flex flex-col h-[30rem] backdrop-blur-3xl  rounded-3xl w-full md:w-2/3 gap-4">
        
            <div className="cursor-pointer h-[100%] md:col-span-2 relative flex w-full  items-center justify-center overflow-hidden rounded-3xl bg-background group ">
              <div className="absolute inset-0 z-0 bg-gradient-to-t from-black via-[#000000a8]  to-transparent"></div>
              <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black to-transparent">
              <Image
                    src={colSpanTech3}
                    width='auto'
                  height={600}
                  className='object-cover h-[100%] w-full group-hover:scale-105 transition duration-200'
                    alt="colSpanTech1"
                  />
              </div>
              <div className="mt-16 px-4 pointer-events-none z-10 flex transform-gpu p-6 flex-col gap-1 transition-all duration-300 group-hover:-translate-y-10">
                <Image
                  className="group-hover:scale-90 w-24 transition duration-200"
                alt="colSpanTech"
                src={building}
                width='auto'
                height={1000}
              />
    <h3 className="text-lg md:text-xl font-semibold text-neutral-700 dark:text-neutral-300">Modern Technologies</h3>
                <p className="text-neutral-400 leading-normal md:w-1/3 leading-[1rem]">I use Modern Technologies for modeling and rendering on a daily basis for optimum effeciency. </p> 
    <TechStack/>
                
  </div>
  <div className="pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
    <a href="/projects" className="inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-sm pointer-events-auto gap-2">
    Learn More <RightArrow/>
                </a>
                
              </div>
              
</div>

          <div className="md:col-span-1 hidden md:block">
              <Image
                className="object-cover rounded-3xl flex-end md:h-[100%] w-1/3 md:w-full"
                alt="colSpanTech"
                src={colSpanTech}
                width='auto'
                height='auto'
              />
</div>
        </div>
       </div>
      </div>
    </div>
  );
};

export default AnimatedGridPatternDemo;
