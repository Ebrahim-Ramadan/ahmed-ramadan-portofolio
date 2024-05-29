"use client";

import { AnimatePresence, Variants, motion } from "framer-motion";



export default function GradualSpacing({
  text,
  duration = 0.2,
  delayMultiple = 0.04,
  framerProps = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  },
  className,
}) {
  return (
    <a className="flex justify-center space-x-1" href="https://ace-mb.com/" target='_blank'>
      <AnimatePresence>
        {text.split("").map((char, i) => (
          <motion.h1
            key={i}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={framerProps}
            transition={{ duration, delay: i * delayMultiple }}
            className='drop-shadow-sm'
          >
            {char === " " ? <span>&nbsp;</span> : char}
          </motion.h1>
        ))}
      </AnimatePresence>
    </a>
  );
}
