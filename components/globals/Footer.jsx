import { DockDemo } from '../ContactMe/DockDemo'
import { MoreProjects } from '../Featuring/MoreProjects'
import { HireMe } from './HireMe'

export const Footer = () => {
  return (
    <div className=' flex flex-col justify-center gap-4 h-72  z-20 mt-16 mb-28'>
       <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-r from-black/80  to-slate-100 bg-clip-text text-center text-4xl md:text-6xl font-semibold leading-none text-transparent">
        Contact Me
      </span>
      <MoreProjects/>

      <DockDemo/>

    </div>
  )
}
