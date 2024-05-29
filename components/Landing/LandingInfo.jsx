import React from 'react'
import LandingHi from './LandingHi'
import LandingProfileImg from '@/assets/LandingProfileImg.png'
import Image from 'next/image'
import { SVGLineGlowAnimateContainer } from '@/utils/GlowingAnimatedSVG'
import { HireMe } from '../globals/HireMe'

export const LandingInfo = () => {
  return (
    <div className='flex flex-col w-full gap-2 md:gap-4 py-4 md:py-16 '>
      <LandingHi />
      <div className='flex flex-col-reverse gap-2 md:flex-row items-center justify-evenly p-8 md:p-24 '>
        <div className='leading-tight text-base text-gray-400 flex flex-col justify-between h-[30vh] w-full md:w-2/5 font-medium  gap-2'>
          <div className='text-base md:text-xl'>
          <p >
         I am   <span className='text-white font-bold text-xl md:text-2xl'>Ahmed Ramadan</span> 
</p>
          <p>
            <span className='text-white font-bold'>3-year</span> Experienced Individual,
            based on<span className='text-white font-bold'> Cairo, Egypt.</span> 
</p>
          <p>
</p>
          <p>
            Currently<span className='text-white font-bold'> Senior Architect </span> 
            at 
            <a href='https://ace-mb.com/' target='_blank' className='hover:underline text-primary-500 font-bold'>  ACE Moharram-Bakhoum Inc. </a> 
</p>
        </div>
          <div className='mt-2 justify-around flex flex-col md:flex-row items-center'>
           
      <HireMe/>
            <div className='flex flex-row items-center'>
            socials
          </div>
          </div>         

                
        </div>
        {/* <SVGLineGlowAnimateContainer> */}
        <div className="relative flex items-center justify-center h-32 md:h-72 w-72 rounded-full bg-gradient-to-t from-primary-600 to-primary">
          <Image
    className="absolute h-32 md:h-96 w-fit bottom-0 rounded-b-full mask-image"
    width="auto"
    height={350}
    src={LandingProfileImg}
    alt="Profile"
  />
    </div>

          {/* </SVGLineGlowAnimateContainer> */}
      </div>
    </div>
  )
}
