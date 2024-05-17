import React from 'react'
import LandingHi from './LandingHi'
import LandingProfileImg from '@/assets/LandingProfileImg.jpg'
import Image from 'next/image'
import { SVGLineGlowAnimateContainer } from '@/utils/GlowingAnimatedSVG'

export const LandingInfo = () => {
  return (
    <div className='flex flex-col w-full gap-4'>
      <LandingHi />
      <div className='flex flex-col-reverse gap-2 md:flex-row items-center justify-evenly '>
        <div className='text-lg md:text-xl  flex flex-col justify-center w-full md:w-1/3 text-center font-medium'>
          <p>
            3-year Experienced Individual,
            Based on Cairo, Egypt.
            Senior Architect at ACE Moharram-Bakhoum Inc. 

            
</p>
         

                
        </div>
        {/* <SVGLineGlowAnimateContainer> */}
          <Image
            style={{
              boxShadow:'rgb(86 67 100 / 80%) 0px 8px 30px'
            }}
          className='
            
            rounded-2xl border border-primary-700'
            width='auto'
            height={300}
          src={LandingProfileImg}
          />
          {/* </SVGLineGlowAnimateContainer> */}
      </div>
    </div>
  )
}
