"use client";
import { motion } from "framer-motion";

export const Info = ({ word, duration = 0.5 }) => {
  const defaultVariants = {
    hidden: { filter: "blur(10px)", opacity: 0 },
    visible: { filter: "blur(0px)", opacity: 1 },
  };

  return (
    <motion.h1
      initial="hidden"
      animate="visible"
      transition={{ duration }}
      variants={defaultVariants}
      className= "pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-r from-primary-500 via-primary-400 to-primary-300 bg-clip-text text-center   leading-none tracking-tighter text-transparent font-display text-center text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]"
    >
      {word}
    </motion.h1>
  );
};

export default Info;
