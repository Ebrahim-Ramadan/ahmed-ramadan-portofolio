import Image from 'next/image'
import React from 'react'
import notifyMe from '@/assets/notify.webp'
import { InputBorderSpotlight } from "./InputBorderSpotlight";

export const NotifyMeComponent = () => {
  return (
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
  )
}
