import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { BiArrowBack } from 'react-icons/bi';
const HeroBanner = () => {
  return (
    <div className="relative text-white text-[20px] w-full max-w-[1360px] mx-auto">
       <Carousel>
                <div>
                    <img src="/slide-1.png" className="aspect-[16/10] md:aspect-auto object-cover"/>
                    <div className="px-[15px] md:px-[40px] py-[10px] md:py-[25px]
                     font-oswald bg-white absolute bottom-[350px] md:bottom-[75px]
                      text-black/[0.8] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90 ">Grab</div>
                </div>
                <div>
                    <img src="/slide-2.png" className="aspect-[16/10] md:aspect-auto object-cover"/>
                    <div className="px-[15px] md:px-[40px] py-[10px] md:py-[25px]
                     font-oswald bg-white absolute bottom-[350px] md:bottom-[75px]
                      text-black/[0.8] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90 ">Grab</div>
                </div>
                <div>
                    <img src="/slide-3.png" className="aspect-[16/10] md:aspect-auto object-cover"/>
                    <div className="px-[15px] md:px-[40px] py-[10px] md:py-[25px]
                     font-oswald bg-white absolute bottom-[350px] md:bottom-[75px]
                      text-black/[0.8] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90 ">Grab</div>
                </div>
                
            </Carousel>
    </div>
  )
}

export default HeroBanner
