'use client'
  import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
  import React, { useState, useEffect, useRef } from "react";
  import notifyMe from '@/assets/notify.webp'
  import Email from '@/assets/email.webp'
import { InputBorderSpotlight } from "./InputBorderSpotlight";
import { copyToClipboard } from "@/utils/Copy";
  export default function FixedDrawer() {
    const refMenu = useRef(null);
    const [openMenu, setOpenMenu] = useState(false);
    const [Copied, setCopied] = useState(false);
    const [isScreenSizeSm, setIsScreenSizeSm] = useState(false);
  
    const duration = 0.2;
    const transition = { duration, ease: [0.32, 0.72, 0, 1] };
  
    const menuVariants = {
      open: {
        opacity: 1,
        width: isScreenSizeSm ? "100%" : "350px",
        height: 220,
        borderRadius: "16px",
        bottom: -14,
        transition,
      },
      closed: {
        bottom: 0,
        opacity: 1,
        width: "48px",
        height: 48,
        borderRadius: "50%",
        transition,
      },
    };
  
    const contentVariants = {
      open: { opacity: 1, scale: 1, transition },
      closed: { opacity: 0, scale: 1, transition },
    };
  
    const buttonVariants = {
      open: {
        opacity: 0,
        transition: {
          duration: duration / 2,
        },
      },
      closed: {
        opacity: 1,
        transition: {
          duration: duration,
        },
      },
    };
  
 
  
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (refMenu.current && !refMenu.current.contains(event.target)) {
          setOpenMenu(false);
        }
      };
  
      const handleResize = () => {
        setIsScreenSizeSm(window.innerWidth <= 640);
      };
  
      document.addEventListener("mousedown", handleClickOutside);
      window.addEventListener("resize", handleResize);
      handleResize();
  
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
        window.removeEventListener("resize", handleResize);
      };
    }, [refMenu]);
  
    return (
      <div className="fixed bottom-4 left-0 z-50 md:mx-6 mb-16 flex  w-full  items-end justify-start">
        <AnimatePresence>
          {openMenu && (
            <motion.div
              className="absolute flex flex-col items-start overflow-hidden bg-mauve-dark-1 p-1 dark:bg-mauve-light-1 w-full"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              onClick={(e) => e.stopPropagation()}
              ref={refMenu}
            >
              <motion.ul
                variants={contentVariants}
                className="relative flex w-full flex-col space-y-1 backdrop-blur-lg bg-white/20 rounded-3xl p-2"
              >
               <li  className="w-full select-none rounded-b-[4px] rounded-t-[4px] bg-mauve-dark-2 transition-transform first:rounded-t-[12px] last:rounded-b-[12px] active:scale-[0.98] dark:bg-mauve-light-2"
                    >
                      <div className="flex items-center py-3">
                                    <Image
                                        width={50}
                                        height={50}
                                        alt='notify'
                                    src={notifyMe}
                                    />
                        <div className="flex flex-col gap-2 w-full">
                          <h3 className="text-base text-white font-bold">
                           Notify When New Designs
                          </h3>
                          <InputBorderSpotlight />
                        </div>
                      </div>
                    </li>
               <li  className=" w-full select-none rounded-b-[4px] rounded-t-[4px] bg-mauve-dark-2 transition-transform first:rounded-t-[12px] last:rounded-b-[12px] active:scale-[0.98] dark:bg-mauve-light-2"
                    >
                      <div  className="flex items-center  py-3">
                                    <Image
                                        width={50}
                                        height={50}
                                        alt='Email'
                                    src={Email}
                                    />
                        <div className="w-full flex-col gap-2 flex justify-center">
                        
                        <p className="text-base font-medium text-center">
                            ahmedramadan791@gmail.com
                            </p>
                      <div className="w-full items-center w-full">
                      <a className="font-bold w-full   overflow-hidden text-ellipsis whitespace-nowrap">
                           
                            <div className="grid grid-cols-2 [&>*]:backdrop-blur-md [&>*]:bg-white/10 [&>*]:flex [&>*]:flex-row [&>*]:justify-center [&>*]:items-center [&>*]:gap-2 items-center w-full gap-2  [&>*]:p-2 [&>*]:rounded-3xl [&>*]:">
                              <a className="group hover:bg-white/20 transition duration-200" target='_blank' href="https://mail.google.com/mail/u/0/?fs=1&to=ali.elsabbagh@ejust.edu.eg&tf=cm"  >
                                Send Email
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cursor-pointer group-hover:scale-110 transition duration-200  text-center lucide lucide-mail-plus"><path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/><path d="M19 16v6"/><path d="M16 19h6"/></svg>
                              </a>
                            <button
                              onClick={() => {
                                copyToClipboard('ahmedramadan791@gmail.com')
                                setCopied(true)
                                setTimeout(() => {
                                  setOpenMenu(false)
                                  setCopied(false)
                                }, 1500);
                              }}
                              className="group hover:bg-white/20 transition duration-200">
                            {Copied?'Copied':'Copy Mail'}
                              {Copied ?
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cursor-pointer group-hover:scale-110 transition duration-200  text-center lucide lucide-circle-check"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cursor-pointer group-hover:scale-110 transition duration-200  text-center lucide lucide lucide-copy"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
                            }
                               
                              </button>
                          
                           </div>
                      </a>
                       
                      </div>
                        </div>
                      </div>
                    </li>
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
        <motion.button
          className="backdrop-blur-md bg-white/30 fixed bottom-12 md:bottom-6 left-6 flex h-12 w-12 items-center justify-center rounded-full bg-mauve-dark-1 p-2 text-mauve-dark-12 outline-none dark:bg-mauve-light-1 dark:text-mauve-light-12"
          disabled={openMenu}
          onClick={(e) => {
            e.stopPropagation();
            setOpenMenu(true);
          }}
          variants={buttonVariants}
          initial="closed"
          animate={openMenu ? "open" : "closed"}
          whileTap={{ scale: 0.95 }}
        >
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail-plus"><path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/><path d="M19 16v6"/><path d="M16 19h6"/></svg>
        </motion.button>
      </div>
    );
  }