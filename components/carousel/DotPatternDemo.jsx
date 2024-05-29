"use client";
import AnimatedGridPattern from "./dot-pattern";
import ThreeDPhotoCarousel from "./ThreeDPhotoCarousel";

const AnimatedGridPatternDemo = () => {
  return (
    <div className="relative flex w-full items-center justify-center overflow-hidden  ">
      <div className="flex flex-col w-full justify-center">
      <h1 className="text-4xl text-primary-200 text-center font-bold">Projects Thumbnails</h1>
      <ThreeDPhotoCarousel/>
      </div>
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className="md:p-72 [mask-image:radial-gradient(300px_circle_at_center,white,transparent)]
        inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
      />
    </div>
  );
};

export default AnimatedGridPatternDemo;
