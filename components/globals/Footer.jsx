import { DockDemo } from '../ContactMe/DockDemo'
import { HireMe } from './HireMe'

export const Footer = () => {
  return (
    <div className='items-center flex flex-col justify-center gap-4 h-72  z-20 mt-16 mb-28'>
      
      <HireMe/>

      <DockDemo/>

    </div>
  )
}
