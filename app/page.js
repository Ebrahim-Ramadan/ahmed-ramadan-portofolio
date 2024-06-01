import DotPatternDemo from "@/components/carousel/DotPatternDemo";
import { Separator } from "@/components/globals/Icons";

import {RetroGridDemo} from "@/components/Landing/RetroGridDemo";
import Featuring from "@/components/Featuring/Featuring";


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

      <Featuring />
    </main>
  );
}
