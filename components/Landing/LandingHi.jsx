import Image from 'next/image'
import React from 'react'
import LandingHeader from './LandingHeader'

 const LandingHi = () => {
  return (
      <div
      className='flex flex-col-reverse md:flex-row w-full items-center justify-around '
      >
      <div className='flex flex-col'>
        <div className='flex flex-col md:flex-row items-start md:gap-2 text-2xl font-bold'>
          <span >Hello,</span> 
          <span>I am Ahmed Ramadan</span>
        </div>
        <div>
          ass
          {/* <Image
          src={ }
          height={}
          width={}
        /> */}
        </div>
        
         </div>
      <LandingHeader/>
      </div>
  )
}
export default LandingHi