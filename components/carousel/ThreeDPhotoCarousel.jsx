'use client'
import React, { useState, useEffect } from "react";
import { motion, useAnimation, useMotionValue, useTransform } from "framer-motion";

// Import local images
const images = [];
for (let i = 1; i <= 14; i++) {
  images.push(require(`@/assets/quick-carousel/${i}.jpg`));
}

const ThreeDPhotoCarousel = () => {
  console.log('images', images);
  const [isScreenSizeSm, setIsScreenSizeSm] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsScreenSizeSm(window.innerWidth <= 640);
    };

    handleResize(); // Check initial screen size
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cards = images;

  const cylinderWidth = isScreenSizeSm ? 1100 : 1800;
  const faceCount = cards.length;
  const faceWidth = cylinderWidth / faceCount;
  const dragFactor = 0.05;
  const radius = cylinderWidth / (2 * Math.PI);
  const rotation = useMotionValue(0);
  const controls = useAnimation();

  const handleDrag = (_, info) => {
    rotation.set(rotation.get() + info.offset.x * dragFactor);
  };

  const handleDragEnd = (_, info) => {
    controls.start({
      rotateY: rotation.get() + info.velocity.x * dragFactor,
      transition: { type: "spring", stiffness: 100, damping: 30, mass: 0.1 },
    });
  };

  const transform = useTransform(rotation, (value) => {
    return `rotate3d(0, 1, 0, ${value}deg)`;
  });

  return (
    <>
      <div className="relative h-[200px] w-full overflow-hidden">
        <div
          className="flex h-full items-center justify-center bg-mauve-dark-2"
          style={{
            perspective: "1000px",
            transformStyle: "preserve-3d",
            transform: "rotateX(0deg)",
          }}
        >
          <motion.div
            drag="x"
            className="relative flex h-full origin-center cursor-grab justify-center active:cursor-grabbing"
            style={{
              transform: transform,
              rotateY: rotation,
              width: cylinderWidth,
              transformStyle: "preserve-3d",
            }}
            onDrag={handleDrag}
            onDragEnd={handleDragEnd}
            animate={controls}
          >
            {cards.map((imgUrl, i) => {
              return (
                <div
                  key={i}
                  className="absolute flex h-full origin-center items-center justify-center bg-mauve-dark-2 px-1"
                  style={{
                    width: `${faceWidth}px`,
                    transform: `rotateY(${
                      i * (360 / faceCount)
                    }deg) translateZ(${radius}px)`,
                    backfaceVisibility: "hidden",
                  }}
                >
                  <img
                    src={imgUrl}
                    alt={`img-${i}`}
                    className="pointer-events-none h-20 w-full rounded-xl object-cover md:h-28"
                  />
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ThreeDPhotoCarousel;
