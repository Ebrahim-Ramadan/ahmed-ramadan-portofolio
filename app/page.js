import DotPatternDemo from "@/components/carousel/DotPatternDemo";
import { Separator } from "@/components/globals/Icons";

import {RetroGridDemo} from "@/components/Landing/RetroGridDemo";
import React from "react";
const Projects = React.lazy(() => import('@/components/Featuring/Projects'))

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between gap-12  bg-transparent"
    >
      {/* <LandingHi/>
      <ThreeDPhotoCarousel />
      <Separator /> */}
      <RetroGridDemo />
      
      <DotPatternDemo />
      <Separator />

     <Projects/>
    </main>
  );
}
