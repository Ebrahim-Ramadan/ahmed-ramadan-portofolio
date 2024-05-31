import DotPatternDemo from "@/components/carousel/DotPatternDemo";
import ThreeDPhotoCarousel from "@/components/carousel/ThreeDPhotoCarousel";
import {  DockDemo } from "@/components/ContactMe/DockDemo";
import { Separator } from "@/components/globals/Icons";

import LandingHi from "@/components/globals/Header";
import {RetroGridDemo} from "@/components/Landing/RetroGridDemo";
import { ProjectDrawer } from "@/components/Project Drawer/ProjectDrawer";
import { RetroGrid } from "@/components/Landing/RetroGrid";
import Featuring from "@/components/Featuring/Featuring";
import { Footer } from "@/components/globals/Footer";
import { MoreProjects } from "@/components/Featuring/MoreProjects";


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
      <MoreProjects/>
      <Separator />
      
    </main>
  );
}
