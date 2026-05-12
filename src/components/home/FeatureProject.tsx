import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const FeatureProject = () => {
    return (
        <section className="relative z-10 w-full px-6 md:px-12 py-16 max-w-[1800px] mx-auto">
            <Link to="/projects/rainbow-courtyard-villa" className="block w-full relative h-[60vh] md:h-[80vh] overflow-hidden group cursor-pointer rounded-[2rem]">
                <img src="/images/projects/courtyard_rainbow.png" referrerPolicy="no-referrer" className="w-full h-full object-cover grayscale-[20%] group-hover:scale-[1.03] group-hover:grayscale-0 transition-all duration-[2s] ease-[cubic-bezier(0.16,1,0.3,1)]" alt="Courtyard House"/>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)]"></div>
                <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 text-white flex flex-col md:flex-row justify-between items-start md:items-end gap-6 glass-nav group-hover:bg-white/20 transition-all duration-[1.5s] border-b-0 border-x-0 !border-t-white/30 rounded-t-none rounded-[2rem]">
                    <div>
                        <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/80 mb-3 drop-shadow-sm">Featured Residence</p>
                        <h3 className="text-3xl md:text-5xl lg:text-6xl font-serif">The Rainbow Courtyard</h3>
                    </div>
                    <div className="flex items-center gap-2 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[1px] after:bg-white after:origin-bottom-right after:scale-x-0 group-hover/link:after:origin-bottom-left group-hover/link:after:scale-x-100 after:transition-transform after:duration-[0.6s] after:ease-[cubic-bezier(0.16,1,0.3,1)] pb-1 text-xs uppercase tracking-widest text-white transition-colors group/link">
                        Discover Project <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform duration-[0.6s] ease-[cubic-bezier(0.16,1,0.3,1)]" />
                    </div>
                </div>
            </Link>
        </section>
    )
};
