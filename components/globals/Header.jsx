'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { FixedNav } from './FixedNav';
import { HomeIcon , ProjectsIcon, ExperienceIcon, BehanceIcon, Behance} from './Icons';
import { MagneticBackgroundTab } from '../Landing/MagneticBackgroundTab';

export const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY>50)
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isSticky]);

  return (
    <div className={` flex flex-col-reverse md:flex-row w-full items-center justify-center py-4 z-20 fixed top-0`}>
      
      <div
        className={`flex flex-row  ${isSticky&&'hidden'}`}
      >
        {tabs.map((item) => (
          <MagneticBackgroundTab key={item.id} item={item}  />
        ))}
      </div>
      {isSticky &&
        <FixedNav>
           {tabs.map((item) => (
             <MagneticBackgroundTab key={item.id} item={item} isSticky={isSticky} />
        ))}
      </FixedNav>
      }
    </div>
  );
};

export default Header;

const tabs = [
  { id: 1, text: 'Home', position: '0', icon: <HomeIcon /> },
  { id: 3, text: 'Projects', position: '2', icon: <ProjectsIcon /> },
  { id: 2, text: 'Experience', position: '4', icon: <ExperienceIcon /> },
  {
    id: 2, text: <Behance/>, icon: <BehanceIcon />
  },
];