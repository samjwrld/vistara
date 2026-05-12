import React from 'react';

export const DesignerMinimal = () => (
    <section className="relative z-10 w-full max-w-4xl mx-auto px-6 md:px-12 py-32 md:py-48 flex flex-col items-center justify-center text-center">
        <div className="glass-panel rounded-[3rem] p-16 md:p-24 flex flex-col items-center relative overflow-hidden group w-full">
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent pointer-events-none transition-opacity duration-1000 group-hover:opacity-50"></div>
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden mb-8 border border-white/60 p-1 shadow-[0_12px_40px_rgba(79,22,54,0.15),inset_0_2px_8px_rgba(255,255,255,0.6)] relative z-10 glass-nav">
                <img src="https://picsum.photos/seed/portrait-vaish/600/600" referrerPolicy="no-referrer" className="w-full h-full rounded-full object-cover grayscale" alt="Vaishnavi Sankala"/>
            </div>
            <h3 className="text-2xl md:text-3xl font-serif text-[#4f1636] mb-3 relative z-10">Vaishnavi Sankala</h3>
            <p className="text-[11px] md:text-sm font-mono uppercase tracking-[0.15em] text-[#896f73] relative z-10">Principal Architect</p>
        </div>
    </section>
);
