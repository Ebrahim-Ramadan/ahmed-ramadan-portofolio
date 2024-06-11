'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { HomeIcon , ProjectsIcon, ExperienceIcon, BehanceIcon, Behance} from './Icons';
import { MagneticBackgroundTab } from './MagneticBackgroundTab';

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
    <div className={` flex flex-col-reverse md:flex-row w-full items-center justify-center pb-4 pt-2 z-20 fixed top-0`}>
      
      <div
        className={`px-2 flex flex-row rounded-3xl  ${isSticky&&'backdrop-blur-3xl'} [&>*]:flex [&>*]:items-center [&>*]:cursor-pointer`}
      >
        {tabs.map((item) => (
          <MagneticBackgroundTab key={item.id} item={item}  />
        ))}
      </div>
    
    </div>
  );
};

export default Header;

const tabs = [
  { id: 3, text: 'Projects', position: '1450', icon: <ProjectsIcon /> },
  { id: 2, text: 'Experience', position: '0', icon: <ExperienceIcon /> },
  {
    id: 2, text: <Behance/>, href: 'https://www.behance.net/ARCHUWK/projects', icon: <BehanceIcon />
  },
];