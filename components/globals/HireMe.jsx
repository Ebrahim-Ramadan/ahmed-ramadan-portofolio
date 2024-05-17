export const HireMe = () => {
    return (
      <a target='_blank' href="https://mail.google.com/mail/u/0/?fs=1&to=ali.elsabbagh@ejust.edu.eg&tf=cm" className="text-center cursor-pointer group relative grid overflow-hidden rounded-full px-4 py-1 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200"
      style={{
        boxShadow:'rgb(86 67 100 / 80%) 0px 8px 30px'
      }}>
        <span>
          <span className="spark mask-gradient absolute inset-0 h-[100%] w-[100%] animate-flip overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:animate-rotate before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
        </span>
        <span className="backdrop absolute inset-[1px] rounded-full bg-neutral-950 transition-colors duration-200 group-hover:bg-neutral-800" />
        <span className="z-10 py-0.5 text-sm text-neutral-100">Hire Me</span>
      </a >
    );
  };
  
 