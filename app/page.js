import ThreeDPhotoCarousel from "@/components/carousel/ThreeDPhotoCarousel";

import {LandingInfo} from "@/components/Landing/LandingInfo";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-4 px-2 md:p-24 bg-gradient-to-b from-black to-primary-900"
    >
      <LandingInfo/>
      <ThreeDPhotoCarousel />
      <ThreeDPhotoCarousel />
      <ThreeDPhotoCarousel />
      <ThreeDPhotoCarousel />
    </main>
  );
}
