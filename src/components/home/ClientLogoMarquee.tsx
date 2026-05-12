import React from 'react';
import { Triangle, Circle, Hexagon, Square, Component, Box } from 'lucide-react';

export const ClientLogoMarquee = () => {
  const logos = [
    { icon: Triangle, name: "Vasavi Group" },
    { icon: Circle, name: "My Home Group" },
    { icon: Hexagon, name: "Rajapushpa" },
    { icon: Square, name: "APR Group" },
    { icon: Component, name: "Sumadhura" },
    { icon: Box, name: "Total Interiors" }
  ];

  return (
      <section className="w-full py-16 md:py-24 relative z-10">
          <div className="mb-12 text-center">
              <h3 className="text-sm font-serif italic text-gray-500 tracking-wide">Selected Collaborations</h3>
          </div>
          <div className="w-full glass-panel !rounded-none !border-x-0 !border-y-white/30 py-10 md:py-14 overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/20 pointer-events-none z-20"></div>
              <div className="flex animate-marquee-reverse gap-16 md:gap-32 px-8 items-center h-12 relative z-10">
                 {[...logos, ...logos, ...logos, ...logos].map((logo, idx) => {
                   const Icon = logo.icon;
                   return (
                     <div key={idx} className="flex items-center gap-3 text-[#a79296] hover:text-[#4f1636] transition-colors shrink-0">
                       <Icon className="w-6 h-6 stroke-[1.5]" />
                       <span className="text-xs font-mono uppercase tracking-[0.15em]">{logo.name}</span>
                     </div>
                   );
                 })}
              </div>
          </div>
      </section>
  )
};
