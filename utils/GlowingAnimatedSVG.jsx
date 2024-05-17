'use client'
import React, { useState, useEffect } from "react";

const START_GRADIENT_POSITION = -130;
const END_GRADIENT_POSITION = 210;
const MAX_GRADIENT_X = 210 - 80;
const GRADIENT_MOVE_INTERVAL = 10;
const GLOWING_LINE_WIDTH = 81;
const GLOW_COLOR = "#009688";

const SVGLineGlowAnimate = ({
  movementDelay = 0,
  id,
  additionalWidth = 0,
  initialGradientX = 0,
}) => {
  const svgWidth = 265 + additionalWidth;
  const [gradientPosition, setGradientPosition] = useState({
    x1: START_GRADIENT_POSITION,
    x2: END_GRADIENT_POSITION,
  });
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const totalDistance = svgWidth - GLOWING_LINE_WIDTH;

    const moveGradient = () => {
      setGradientPosition((prev) => {
        const newX1 = prev.x1 + 1;
        const newX2 = prev.x2 + 1;
        const distanceTravelled = newX1 - START_GRADIENT_POSITION;

        let newOpacity = 0;
        if (distanceTravelled <= totalDistance) {
          newOpacity = distanceTravelled / totalDistance;
        } else {
          newOpacity = 1 - (distanceTravelled - totalDistance) / totalDistance;
        }

        setOpacity(newOpacity);

        if (newX1 > svgWidth) {
          return { x1: START_GRADIENT_POSITION, x2: END_GRADIENT_POSITION };
        }

        return { x1: newX1, x2: newX2 };
      });
    };

    const startTimeout = setTimeout(() => {
      const interval = setInterval(moveGradient, GRADIENT_MOVE_INTERVAL);
      return () => clearInterval(interval);
    }, movementDelay);

    return () => {
      clearTimeout(startTimeout);
      setOpacity(0);
    };
  }, [movementDelay, svgWidth]);

  return (
    <svg width={svgWidth} height="12" viewBox={`0 0 ${svgWidth} 12`} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path id={`main-line-${id}`} d={`M0 6 L${svgWidth} 6`}></path>
      <use
        href={`#main-line-${id}`}
        opacity={opacity}
        stroke={`url(#gradient-glow-${id})`}
        strokeWidth="6"
        style={{
          filter: `blur(2px) drop-shadow(0px 0px 2px ${GLOW_COLOR})`,
          transition: `opacity ${GRADIENT_MOVE_INTERVAL}ms linear`,
        }}
      />
      <use href={`#main-line-${id}`} stroke={`url(#gradient-solid-${id})`} strokeWidth="2" />
      <defs>
        <linearGradient
          id={`gradient-glow-${id}`}
          x1={gradientPosition.x1}
          y1="6"
          x2={gradientPosition.x2}
          y2="6"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.38" stopColor={GLOW_COLOR} stopOpacity="0"></stop>
          <stop offset="0.5" stopColor={GLOW_COLOR} stopOpacity="0.8"></stop>
          <stop offset="0.62" stopColor={GLOW_COLOR} stopOpacity="0"></stop>
        </linearGradient>
        <linearGradient
          id={`gradient-solid-${id}`}
          x1={initialGradientX}
          y1="6"
          x2={svgWidth}
          y2="6"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={GLOW_COLOR} stopOpacity="0"></stop>
          <stop offset="0.5" stopColor={GLOW_COLOR}></stop>
          <stop offset="1" stopColor={GLOW_COLOR} stopOpacity="0"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
};

export const SVGLineGlowAnimateContainer = ({children}) => {
  return (
    <div className="flex flex-col relative h-full justify-center">
      {children}

      <SVGLineGlowAnimate movementDelay={0} id={1} initialGradientX={20} />
      <SVGLineGlowAnimate movementDelay={3000} id={2} additionalWidth={20} />
      <SVGLineGlowAnimate movementDelay={6000} id={3} initialGradientX={20} />
    </div>
  );
};
