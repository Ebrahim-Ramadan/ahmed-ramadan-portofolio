
import { RightArrow } from '../globals/Icons'
import { HireMe } from '../globals/HireMe'
export const MoreProjects = () => {
  return (
    <div className='flex flex-col md:flex-row items-center gap-2 w-full justify-center mt-16 md:mt-0'>
      <a href='/projects' className='bg-primary-900  rounded-3xl hover:bg-primary-800 transition duration-200 cursor-pointer px-4 py-2 font-bold text-white flex flex-row items-center gap-2'>
        My Projects
        <RightArrow/>

      </a>
      <HireMe/>
          
    </div>
  )
}
