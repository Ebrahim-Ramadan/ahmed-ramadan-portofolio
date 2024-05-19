import React from 'react'
import LandingHi from './LandingHi'
import LandingProfileImg from '@/assets/LandingProfileImg.png'
import Image from 'next/image'
import { SVGLineGlowAnimateContainer } from '@/utils/GlowingAnimatedSVG'
import { HireMe } from '../globals/HireMe'

export const LandingInfo = () => {
  return (
    <div className='flex flex-col w-full gap-2 md:gap-4 py-4 md:py-8 '>
      <LandingHi />
      <div className='flex flex-col-reverse gap-2 md:flex-row items-center justify-evenly p-8 md:p-12 '>
        <div className='leading-tight text-base text-gray-400 flex flex-col justify-between h-[30vh] w-full md:w-2/5 font-medium px-2 gap-2'>
          <div>
          <p className='text-lg'>
         I am   <span className='text-white font-bold text-xl'>Ahmed Ramadan</span> 
</p>
          <p>
            <span className='text-white font-bold'>3-year</span> Experienced Individual,
            based on<span className='text-white font-bold'> Cairo, Egypt.</span> 
</p>
          <p>
</p>
          <p>
            <span className='text-white font-bold'>  Senior Architect </span> 
            at 
            <a href='https://ace-mb.com/' target='_blank' className='hover:underline text-[#BF2930] font-bold'>  ACE Moharram-Bakhoum Inc. </a> 
</p>
        </div>
          <div className='mt-2 w-full flex flex-col [&>*]:w-full gap-2  md:grid md:grid-cols-2 items-center'>
            <button className='border hover:border-primary-400 border-primary-600 border-2 hover:bg-neutral-800 transition duration-200 h-8 py-2 rounded-full col-span-1 flex flex-row items-center justify-center hover:text-white gap-2'
            style={{
              boxShadow:'rgb(86 67 100 / 80%) 0px 8px 30px'
            }}>
              See Projects
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-arrow-down"><circle cx="12" cy="12" r="10"/><path d="M12 8v8"/><path d="m8 12 4 4 4-4"/></svg>
             
            </button>
      <HireMe/>
          
          </div>         

                
        </div>
        {/* <SVGLineGlowAnimateContainer> */}
        <div class="relative flex items-center rounded-t-[2rem] justify-center h-64 w-64 bg-primary-600">
  <Image
    className="absolute bottom-0 "
    width="auto"
    height={300}
    src={LandingProfileImg}
    alt="Profile"
  />
</div>

          {/* </SVGLineGlowAnimateContainer> */}
      </div>
    </div>
  )
}
