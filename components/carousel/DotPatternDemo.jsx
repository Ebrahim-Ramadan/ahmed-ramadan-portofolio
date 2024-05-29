"use client";
import AnimatedGridPattern from "./dot-pattern";
import ThreeDPhotoCarousel from "./ThreeDPhotoCarousel";

const AnimatedGridPatternDemo = () => {
  return (
    <div className="relative min-h-screen flex w-full items-center justify-center overflow-hidden backdrop-blur-lg mt-[-15rem] -z-10"
    style={{
      backdropFilter: "blur(15px)",
    }}>
      <div className="relative flex flex-col w-full justify-center backdrop-blur-lg"
                style={{
                  backdropFilter: "blur(15px)",
                }}>
       
        <h1 className="md:text-4xl text-2xl text-primary-600 text-center font-bold relative z-20">
          Projects Thumbnails
        </h1>
        <div className="relative z-20">
          <ThreeDPhotoCarousel />
        </div>
      </div>
      <AnimatedGridPattern
        numSquares={40}
        maxOpacity={0.3}
        duration={3}
        repeatDelay={1}
        className="md:p-72 [mask-image:radial-gradient(300px_circle_at_center,white,transparent)]
        inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
      />
    </div>
  );
};

export default AnimatedGridPatternDemo;
