import { Dock, DockIcon } from "./dock";
import React from "react";
import { Behance, FB, Gmail, LinkedIn, WhastApp } from "../globals/Icons";


export function DockDemo() {
  return (
    <div className="relative flex  w-full flex-col items-center justify-center overflow-hidden">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-4xl md:text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Contact Me
      </span>
      <Dock>
        <DockIcon>
          <Behance/>
        </DockIcon>
        <DockIcon>
          <FB/>
        </DockIcon>
        <DockIcon>
          <LinkedIn/>
        </DockIcon>
        <DockIcon>
          <Gmail />
        </DockIcon>
        <DockIcon>
          <WhastApp className="h-6 w-6" />
        </DockIcon>
      </Dock>
      <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
    </div>
  );
}
