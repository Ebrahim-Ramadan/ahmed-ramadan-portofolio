import React from 'react'
import { Link } from 'next-view-transitions'
import { Share } from '../globals/Icons'
export const MoreProjects = () => {
  return (
      <div className='bg-primary-900  rounded-3xl mt-12 hover:bg-primary-800 transition duration-200 cursor-pointer'>
          <Link href='/projects' className='px-2 py-1 md:px-4 md:py-2 font-bold text-white flex flex-row items-center gap-2'>
        See More Projects
      <Share/>
      </Link>
    </div>
  )
}
