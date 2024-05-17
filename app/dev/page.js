import {DeveloperCard} from "@/components/dev/DeveloperCard";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-24 bg-gradient-to-b from-black to-primary-900"
    >
      
      <DeveloperCard />
      
    </main>
  );
}
