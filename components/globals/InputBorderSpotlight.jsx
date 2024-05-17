

export const InputBorderSpotlight = () => {


  return (
    <div className="grid grid-cols-6 gap-1 items-center">
       <input
         placeholder="Enter Your Email Address"
         className="h-10 backdrop-blur-md bg-white/10 font-bold placeholder:text-[#66506B] focus:outline-none text-slate-50 w-full col-span-5 px-2 rounded-2xl"
       />
      <button className="flex flex-row items-center justify-center text-center col-span-1  rounded-lg px-2">
       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hover:scale-110 transition duration-200 lucide lucide-user-plus"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" x2="19" y1="8" y2="14"/><line x1="22" x2="16" y1="11" y2="11"/></svg>
    </button>
     
    </div>
  );
};
