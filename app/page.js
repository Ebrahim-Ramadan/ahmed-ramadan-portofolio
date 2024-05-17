import ThreeDPhotoCarousel from "@/components/carousel/ThreeDPhotoCarousel";
import LandingHi from "@/components/Landing/LandingHi";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-24 bg-gradient-to-b from-black to-primary-900"
    >
      <LandingHi/>
      <ThreeDPhotoCarousel />
      
    </main>
  );
}