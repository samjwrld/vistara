import React from 'react';

export const EditorialBreak = () => {
    return (
        <section className="py-24 md:py-48 px-6 md:px-12 flex justify-center items-center relative z-10">
            <div className="glass-panel rounded-[2rem] p-10 md:p-24 max-w-6xl mx-auto flex flex-col items-center group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent pointer-events-none transition-opacity duration-1000 group-hover:opacity-50"></div>
                <h2 className="text-3xl md:text-5xl lg:text-7xl font-serif text-[#4f1636] text-center leading-[1.3] md:leading-[1.2] tracking-tight relative z-10">
                   Good design is not added. <br className="hidden md:block"/> It is <span className="italic text-[#896f73]">revealed.</span>
                </h2>
            </div>
        </section>
    )
};
