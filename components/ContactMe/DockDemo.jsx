import { Dock, DockIcon } from "./dock";
import React from "react";
import { Behance, FB, Gmail, LinkedIn, Telegram } from "../globals/Icons";


export function DockDemo() {
  return (
    <div className="relative flex  flex-col items-center justify-center "> 
      <Dock>
        <DockIcon href='https://www.behance.net/ARCHUWK/projects'>
          <Behance/>
        </DockIcon>
        <DockIcon href='https://www.facebook.com/Hamosha909'>
          <FB/>
        </DockIcon>
        <DockIcon href='https://www.linkedin.com/in/ahmed-ramadan-2aab2b177/'>
          <LinkedIn/>
        </DockIcon>
        <DockIcon href='https://mail.google.com/mail/u/0/?fs=1&to=ali.elsabbagh@ejust.edu.eg&tf=cm'>
          <Gmail />
        </DockIcon>
        <DockIcon href='https://t.me/ARCHUWK'>
          <Telegram  />
        </DockIcon>
      </Dock>
   
    </div>
  );
}
