'use client'
import { useRef } from "react";
import {
  motion,
  useScroll,
} from "framer-motion";
import Image from "next/image";

import { AwardIcon, TrophyIcon, TwistedArrow } from "../globals/Icons";

export  function Featuring({ProjectData}) {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });

  return (
    <div className="space-y-2 p-2 md:grid md:grid-cols-3 justify-center items-center w-full md:px-12 lg:px-44 group">
      <div className="col-span-1 px-2 md:px-4 py-2 ">
        <a target='_blank' href={ProjectData.href} className="text-xl md:text-3xl font-bold hover:underline ">
      {ProjectData.title}
</a>

        <p className="text-primary-500 text-xs ms:text-sm">
{ProjectData.date}
        </p>
        <p className="text-slate-200 text-sm mt-2">
      {ProjectData.content}
        </p>
        <div className="w-full  items-center text-center justify-center px-4 hidden md:flex">
        <TwistedArrow className='group-hover:scale-110 transition duration-200 w-12 md:w-40 '/>
        </div>
       
</div>
      <div className="flex-col flex col-span-2">
      
      <div className="px-2 ">
          
      <ul ref={ref} className=' list-none  w-full flex overflow-x-scroll h-full '>
        
        {ProjectData.images.map((img) => (
          <li key={img} className=' FeaturingList px-0.5 py-1 md:px-2 md:py-2 flex-grow-0 flex-shrink-0 w-[130px] md:w-fit md:h-[20rem] hover:opacity-90 transition duration-200'>
            <Image
              src={img}
              className='bg-gray-600 border border-[#fff3] border-2 w-full h-full object-cover rounded-3xl'
              width={800}
              height='100'
            />
        </li>
          
        ))}
       
      </ul>
        </div>
        <div className="flex justify-between md:justify-end w-full flex flex-row items-center p-2">

          {ProjectData.id === '1' &&
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
          }
       
          

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
