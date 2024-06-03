'use client'
import { useRef } from "react";
import {
  motion,
  useScroll,
} from "framer-motion";
import Image from "next/image";

import image1 from "@/assets/milestone/1.webp";
import image2 from "@/assets/milestone/2.webp";
import image3 from "@/assets/milestone/3.webp";
import image4 from "@/assets/milestone/4.webp";
import image5 from "@/assets/milestone/5.webp";
import image6 from "@/assets/milestone/6.webp";
import image7 from "@/assets/milestone/7.webp";
import { AwardIcon, TrophyIcon, TwistedArrow } from "../globals/Icons";

export default function Featuring() {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });
  const images = [image3, image4, image5, image6, image7, image2, image1];

  return (
    <div className="space-y-4 p-4 md:grid md:grid-cols-3 justify-center items-center w-full md:px-44 ">
      <div className="col-span-1 p-4 group">
        <a href="https://www.behance.net/gallery/175726549/GRADUATION-PROJECT-OLYMPIC-AQUATIC-CENTER" className="text-xl md:text-3xl font-bold hover:underline ">
        OLYMPIC AQUATIC CENTER
</a>

        <p className="text-primary-600 text-xs ms:text-sm">
16 May, 2023
        </p>
        <p className="text-slate-200 text-sm mt-2">
        This award-winning project showcases my commitment to sustainable design and innovative architectural solutions, and also my college graduation project with a total area of <span className="font-medium text-slate-100">42,000 square meters</span> , based in Cairo, 8 minutes from Al-Ahly we al-salam Club Stadium by car, and 24 minutes from Cairo Airport.
        </p>
        <div className="w-full  items-center text-center justify-center px-4 hidden md:flex">
        <TwistedArrow className='group-hover:scale-105 transition duration-200 w-12 md:w-40 '/>
        </div>
       
</div>
      <div className="flex-col flex col-span-2">
      
      <div className="px-2 ">
          
      <ul ref={ref} className=' list-none  w-full flex overflow-x-scroll h-full '>
        
        {images.map((img) => (
          <li key={img} className='group FeaturingList px-0.5 py-1 md:px-2 md:py-2 flex-grow-0 flex-shrink-0 w-[100px] md:w-fit md:h-[20rem] hover:opacity-90 transition duration-200'>
            <Image
              src={img}
              className=' border border-[#fff3] border-2 w-full h-full object-cover rounded-3xl'
              width={800}
              height='auto'
            />
        </li>
          
        ))}
       
      </ul>
        </div>
        <div className="flex justify-between md:justify-end w-full flex flex-row items-center p-2">
        <div className="flex flex-col md:flex-row   md:w-full gap-2 [&>*]:flex [&>*]:flex-row [&>*]:items-center [&>*]:text-xs ">
              <div className=" bg-primary-700 px-3 py-1 rounded-3xl" variant="outline">
                <TrophyIcon className="h-3.5 w-3.5 -translate-x-1 text-white" />
                Best Residential Design
              </div>
              <div className="bg-primary-700 px-3 py-1 rounded-3xl" variant="outline">
                <AwardIcon className="h-3.5 w-3.5 -translate-x-1 text-white" />
                Sustainability Award
              </div>
            </div>
      <svg id="progress" width="50" height="50" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="25" pathLength="1" className="opacity-30 stroke-primary-500" />
        <motion.circle
          cx="50"
          cy="50"
          r="25"
              pathLength="1"
              
          className="stroke-[#f6ebcf9f]"
          style={{ pathLength: scrollXProgress }}
        />
      </svg>
    </div>
    </div>
    </div>
  );
}
