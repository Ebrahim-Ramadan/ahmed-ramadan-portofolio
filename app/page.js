import ThreeDPhotoCarousel from "@/components/carousel/ThreeDPhotoCarousel";
import { Separator } from "@/components/globals/Icons";

import {LandingInfo} from "@/components/Landing/LandingInfo";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between  px-2  bg-gradient-to-b from-black to-primary-900"
    >
      <LandingInfo/>
      <ThreeDPhotoCarousel />
      <Separator/>
    </main>
  );
}
