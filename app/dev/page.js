import {DeveloperCard} from "@/components/dev/DeveloperCard";
import { Loader } from "@/components/globals/Icons";
import Image from "next/image";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-24 bg-gradient-to-b from-black to-primary-900"
    >
      <Suspense fallback={
        <Loader/>
      }>
      <DeveloperCard />

      </Suspense>
      
      
    </main>
  );
}
