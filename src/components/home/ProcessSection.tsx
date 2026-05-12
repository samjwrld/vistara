import React from 'react';
import { motion } from 'motion/react';

export const ProcessSection = () => {
    const steps = [
        {
            number: "01",
            title: "Discovery & Understanding",
            description: "Deep-dive client briefing to interpret vision, lifestyle, functional needs, site context, and budget — establishing a clear design mandate before a single line is drawn."
        },
        {
            number: "02",
            title: "Concept Development",
            description: "Spatial narratives, zoning strategies, mood boards, and design direction — translating the brief into a coherent spatial proposition for client sign-off."
        },
        {
            number: "03",
            title: "Design & Detailing",
            description: "Layouts, material specifications, BOQs, custom furniture design, and full technical drawing sets — every element resolved before it reaches site."
        },
        {
            number: "04",
            title: "Coordination & Procurement",
            description: "Integration with MEP consultants, structural engineers, vendors, contractors, and specialised fabricators — ensuring seamless delivery across all workstreams."
        },
        {
            number: "05",
            title: "Execution & Handover",
            description: "On-site supervision ensuring quality, design integrity, and timeline adherence through to final handover — with zero compromise on the detail."
        }
    ];

    return (
        <section className="relative z-10 w-full max-w-[1800px] mx-auto px-6 md:px-12 py-24 md:py-32">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
                <div className="w-full text-center md:text-left">
                    <p className="text-[10px] md:text-xs font-mono uppercase tracking-[0.2em] text-[#896f73] mb-4">How we work</p>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#4f1636]">The Journey</h2>
                </div>
                <p className="text-sm font-sans text-[#896f73] max-w-md leading-relaxed text-center md:text-left">
                    A refined approach to architectural excellence, ensuring every project is delivered with clarity and care.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 md:gap-8">
                {steps.map((step, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: -0 }}
                        transition={{ duration: 0.8, delay: i * 0.15 }}
                        viewport={{ once: true }}
                        className="group relative"
                    >
                        {/* Connecting Line (Desktop) */}
                        {i < steps.length - 1 && (
                            <div className="hidden lg:block absolute top-[2.25rem] left-[calc(100%-1rem)] w-full h-[1px] bg-gradient-to-r from-[#4f1636]/20 to-transparent z-0"></div>
                        )}
                        
                        <div className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left">
                            <div className="w-12 h-12 rounded-full glass-badge flex items-center justify-center text-[10px] font-mono text-[#4f1636] mb-6 md:mb-8 group-hover:scale-110 transition-transform duration-500">
                                {step.number}
                            </div>
                            <h3 className="text-xl font-serif text-[#4f1636] mb-4">{step.title}</h3>
                            <p className="text-[11px] font-sans text-[#896f73] leading-relaxed md:pr-4">
                                {step.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
