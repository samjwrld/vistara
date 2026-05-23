import React from 'react';

const projects = [
    "/images/projects/p8.png",
    "/images/projects/p9.png",
    "/images/projects/p10.png",
    "/images/projects/p11.png",
    "/images/projects/p12.png"
];

export const AutoScrollProjectStrip = () => {
   return (
       <section className="w-full py-16 md:py-24 overflow-hidden relative z-10 bg-[#fff4e8] border-y border-black/[0.05]">
          <div className="flex animate-marquee hover:[animation-play-state:paused] gap-8 px-4">
             {[...projects, ...projects].map((src, i) => (
                 <div key={i} className="w-[70vw] md:w-[40vw] lg:w-[30vw] aspect-[4/3] shrink-0 overflow-hidden bg-gray-100">
                     <img src={src} referrerPolicy="no-referrer" className="w-full h-full object-cover grayscale-[20%] hover:scale-105 hover:grayscale-0 transition-all duration-700" alt="Project" />
                 </div>
             ))}
          </div>
       </section>
   )
};
