import featuringImg from '@/assets/milestone/cover.webp'
import featuringImg1 from '@/assets/milestone/grid1.webp'
import featuring21  from '@/assets/milestone/grid2.webp'
import featuringFull  from '@/assets/milestone/grid3.webp'
import featuring22 from '@/assets/milestone/gridgrid2.webp'
import featuringImg3 from '@/assets/milestone/gridgrid.webp'
import external from '@/assets/milestone/external.webp'
import Image from 'next/image'
import { AwardIcon, Gallery, Like, Share, TrophyIcon, Views } from '../globals/Icons'


export default function Featuring() {
  return (
    <section className="w-full  min-h-screen w-full flex flex-row items-center justify-center">
      <div className="w-full px-2 md:px-32 grid grid-cols-1 lg:grid-cols-2 gap-2 ">
        <div className="relative w-full h-[500px] md:h-[50rem] rounded-3xl ">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/50 to-transparent z-10 flex flex-col justify-end p-4 rounded-3xl">
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black via-[#000000a8]  to-transparent"></div>
            <div className='flex md:flex-row flex-col items-center gap-2 md:px-2'>
            <p className="md:px-4 font-light text-gray-300 md:text-base text-sm w-full">
              This award-winning project showcases my commitment to sustainable design and innovative architectural solutions, and also my college graduation project with a total area of 42,000 square meters, based in Cairo, 8 minutes from Al-Ahly we al-salam Club Stadium by car, and 24 minutes from Cairo Airport.
              </p>
              <div className='flex flex-row md:flex-col items-center [&>*]:flex  [&>*]:flex-col  [&>*]:items-center gap-4'>
                <div>
                  <Views />
                  20,422
</div>
                <div>
                  <Like />
                  2,188
</div>
              </div>
           </div>

            <div className="flex flex-col md:flex-row justify-end md:w-full gap-2 mt-4 [&>*]:flex [&>*]:flex-row [&>*]:items-center [&>*]:text-xs [&>*]:w-fit [&>*]:justify-end">
              <div className=" bg-primary-700 px-3 py-1 rounded-3xl" variant="outline">
                <TrophyIcon className="h-3.5 w-3.5 -translate-x-1 text-white" />
                Best Residential Design
              </div>
              <div className="bg-primary-700 px-3 py-1 rounded-3xl" variant="outline">
                <AwardIcon className="h-3.5 w-3.5 -translate-x-1 text-white" />
                Sustainability Award
              </div>
            </div>
          </div>
          <Image
            alt="Award-Winning Project"
            className="w-full h-full object-cover rounded-3xl"
            height={500} // Changed height to match grid images
            src={featuringImg}
            
            width={1200}
          />
          <a target='_blank' href='https://www.behance.net/gallery/175726549/GRADUATION-PROJECT-OLYMPIC-AQUATIC-CENTER' className='flex flex-col group justify-end overflow-hidden p-4 backdrop-blur-xl bg-black/80 rounded-b-3xl hover:bg-black/40 transition duration-200 h-60'>
          <div className="absolute inset-0 z-0 bg-gradient-to-t from-black via-[#000000a8]  to-transparent"></div>

          <div className=" absolute inset-0 -z-10 bg-gradient-to-b from-black to-transparent ">
              <Image
                    src={external}
                    width='auto'
                  height={800}
                  className='object-cover h-[100%] w-full group-hover:scale-105 transition duration-200'
                    alt="colSpanTech1"
                  />
              </div>
            <div className='flex flex-row justify-between items-center z-10'>
            <div className='flex flex-row items-center gap-2'>
            <Gallery />
            <div>
              <p className='font-medium text-sm md:text-base'>
              Check The Aquatic Center Gallery 
             </p>
              <p className='text-gray-300 text-xs'>
Watch The Video
              </p>
            </div>
            </div>
            <Share className='px-4'/>
            </div>
          </a>
        </div>

        <div className='flex flex-col gap-2 md:gap-4 px-2 md:px-4 mt-64 md:mt-0'>
        <Image
            alt="Award-Winning Project"
            className="rounded-3xl overflow-hidden h-72 object-cover"
            height={500} // Changed height to match grid images
            src={featuringFull}
            width='auto'
          />
          <div className="flex flex-col md:grid md:grid-cols-2 gap-2 md:gap-4 [&>*]:rounded-3xl [&>*]:object-cover [&>*]:aspect-[12/9]">
            <Image
              alt="Award-Winning Project"
              className=" overflow-hidden"
              height={300} // Adjusted height to be smaller
              src={featuringImg1}
              width='auto'
            />
            <Image
              alt="Award-Winning Project"
              className=" overflow-hidden"
              height={300} // Adjusted height to be smaller
              src={featuringImg3}
              width='auto'
            />
          </div>
         
          <div className="w-full h-fit flex flex-col md:grid md:grid-cols-2 gap-2 md:gap-4 [&>*]:rounded-3xl [&>*]:object-cover">
            <Image
              alt="Award-Winning Project"
              className="h-[30rem] w-full overflow-hidden"
              height={800} // Adjusted height to be smaller
              src={featuring21}
              width='auto'
            />
            <Image
              alt="Award-Winning Project"
              className="h-[30rem] w-full overflow-hidden"
              height={800} // Adjusted height to be smaller
              src={featuring22}
              width='auto'
            />
          </div>
        </div>
      </div>

    
    </section>
  )
}
