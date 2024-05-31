import { DockDemo } from '../ContactMe/DockDemo'
import { HireMe } from './HireMe'

export const Footer = () => {
  return (
    <div className=' flex flex-col justify-center gap-4 h-72 bg-black z-20'>
       <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center md:text-6xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Contact Me
      </span>
      <div className='flex flex-col md:flex-row w-full justify-center items-center'>
        This is Ahmed Ramadan
        <HireMe />
      <DockDemo/>
        
      </div>

      {/* <HireMe/> */}
      
    </div>
  )
}
