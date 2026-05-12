import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const FinalCTA = () => (
    <section className="relative z-10 w-full max-w-5xl mx-auto py-24 md:py-48 px-6 mb-24">
        <div className="glass-panel rounded-[3rem] p-12 md:p-32 flex flex-col items-center justify-center text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent pointer-events-none transition-opacity duration-1000 group-hover:opacity-50"></div>
            <h2 className="text-3xl md:text-6xl lg:text-7xl font-serif text-[#4f1636] mb-12 relative z-10">Ready to shape your space?</h2>
            <Link to="/contact" className="relative group/link flex items-center gap-3 border border-[#4f1636]/40 px-8 py-4 md:px-10 md:py-5 overflow-hidden transition-colors duration-[0.6s] ease-[cubic-bezier(0.16,1,0.3,1)] hover:text-white hover:border-[#4f1636]/0 rounded-2xl z-10 glass-badge">
                <span className="absolute inset-0 w-full h-full bg-[#4f1636] origin-bottom transform scale-y-0 transition-transform duration-[0.6s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/link:scale-y-100 z-0"></span>
                <span className="relative z-10 flex items-center gap-3 uppercase tracking-widest text-[10px] md:text-xs font-mono text-[#4f1636] group-hover/link:text-white transition-colors duration-[0.6s]">
                     Start a Project <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-[0.6s] ease-[cubic-bezier(0.16,1,0.3,1)]" />
                </span>
            </Link>
        </div>
    </section>
);
