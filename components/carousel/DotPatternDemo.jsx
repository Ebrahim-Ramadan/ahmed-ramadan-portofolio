"use client";
import Image from "next/image";
import AnimatedGridPattern from "./dot-pattern";
import IconCloud from "./IconCloud";
import ThreeDPhotoCarousel from "./ThreeDPhotoCarousel";
import colSpanTech from '@/assets/quick-carousel/6.webp'
import building from '@/assets/building.png'
import { RightArrow } from "../globals/Icons";
const slugs = [
  "typescript",
  "androidstudio",
  "sonarqube",
  "figma",
  "3dmax",
  "gitlab",
];
 

const AnimatedGridPatternDemo = () => {
  return (
    <div className="relative min-h-screen flex w-full items-center justify-center overflow-hidden backdrop-blur-lg  mt-[-8rem]"
    style={{
      backdropFilter: "blur(15px)",
    }}>
      <div className="relative  flex flex-col w-full justify-center backdrop-blur-lg"
                style={{
                  backdropFilter: "blur(15px)",
                }}>
       
        <h1 className="md:text-4xl text-2xl text-primary-600 text-center font-bold relative z-20">
          Projects Thumbnails
        </h1>
        <div className="relative z-20">
          <ThreeDPhotoCarousel />
        </div>
        <div className="flex flex-col justify-center items-center mt-6">
          <div className="md:grid md:grid-cols-3 flex flex-col h-[30rem] 
         backdrop-blur-3xl bg-black/70 p-4 rounded-3xl w-full md:w-2/3">
        
        <div className="cursor-pointer h-[100%] md:col-span-2 relative flex w-full  items-center justify-center overflow-hidden rounded-lg bg-background group ">
  <IconCloud iconSlugs={slugs} />
              <div className="pointer-events-none z-10 flex transform-gpu p-6 flex-col gap-1 transition-all duration-300 group-hover:-translate-y-10">
              <Image
                alt="colSpanTech"
                src={building}
                width='auto'
                height={60}
              />
    <h3 className="text-lg md:text-xl font-semibold text-neutral-700 dark:text-neutral-300">Modern Technologies</h3>
    <p className="text-neutral-400 leading-normal">I use Modern Technologies for modeling and rendering on a daily basis for optimum effeciency</p>
  </div>
  <div className="pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
    <a href="/" className="inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs pointer-events-auto gap-2">
                  Show more
                  <RightArrow/>
    </a>
  </div>
</div>

          <div className="md:col-span-1 hidden md:block">
              <Image
                className="object-cover rounded-xl flex-end md:h-[100%] w-1/3 md:w-full"
                alt="colSpanTech"
                src={colSpanTech}
                width='auto'
                height='auto'
              />
</div>
        </div>
       </div>
      </div>
      <AnimatedGridPattern
        numSquares={40}
        maxOpacity={0.3}
        duration={3}
        repeatDelay={1}
        className="-z-20 md:p-72 [mask-image:radial-gradient(300px_circle_at_center,white,transparent)]
        inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
      />
    </div>
  );
};

export default AnimatedGridPatternDemo;
