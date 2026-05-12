import React from 'react';
import { motion } from 'motion/react';
import { Square, Building2, Paintbrush, Compass } from 'lucide-react';

export const ServicesGrid = () => {
    const services = [
        {
            title: "Luxury Residential Design — Hyderabad",
            description: "Bespoke interiors for apartments, independent villas, and penthouse residences. Tailored material palettes, space planning, custom joinery, and end-to-end execution for budgets starting Rs 15 Lakhs.",
            icon: Building2,
            image: "/images/projects/courtyard_rainbow.png"
        },
        {
            title: "Corporate Workspaces & Office Interiors — Hyderabad",
            description: "Architecture and interior design for corporate offices, tech campuses, co-working spaces, and incubation centres. From 5,000 sqft fit-outs to 2,00,000+ sqft master-planned developments.",
            icon: Square,
            image: "/images/projects/brutalist_office.png"
        },
        {
            title: "Cafe, Restaurant & Hospitality Design",
            description: "Concept-to-completion design for cafes, restaurants, QSRs, and premium lounges. Spatial storytelling, guest flow optimisation, material curation, and operational integration for F&B operators.",
            icon: Paintbrush,
            image: "/images/projects/urban_bistro.png"
        },
        {
            title: "Greenfield & Large-Scale Developments",
            description: "Master planning, campus visioning, zoning, and circulation strategies for research parks, tech campuses, mixed-use developments, and integrated townships.",
            icon: Compass,
            image: "/images/projects/site_analysis.png"
        },
        {
            title: "Airport & Aviation Lounge Interiors",
            description: "Premium lounge environments for international and domestic terminals — spatial planning, passenger flow optimisation, and detailed hospitality interiors under complex operational constraints.",
            icon: Compass,
            image: "/images/projects/aviation_lounge.png"
        }
    ];

    return (
        <section className="relative z-10 w-full max-w-[1800px] mx-auto px-6 md:px-12 py-24 md:py-32">
            <div className="mb-20 text-center md:text-left max-w-2xl">
                <p className="text-[10px] md:text-xs font-mono uppercase tracking-[0.2em] text-[#896f73] mb-4">Core Expertise</p>
                <h2 className="text-3xl md:text-5xl font-serif text-[#4f1636] leading-tight">We translate complex briefs into buildable environments.</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {services.map((service, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className="group relative overflow-hidden rounded-[2.5rem] glass-card flex flex-col h-full"
                    >
                        {/* Micro image bg overlay */}
                        <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700">
                             <img src={service.image} alt={service.title} referrerPolicy="no-referrer" className="w-full h-full object-cover grayscale" />
                        </div>
                        
                        <div className="p-8 md:p-10 flex flex-col items-center text-center h-full relative z-10">
                            <div className="mb-6 md:mb-8 p-5 md:p-6 rounded-3xl glass-badge text-[#4f1636] group-hover:scale-110 transition-transform duration-500">
                                <service.icon className="w-6 h-6 md:w-8 md:h-8 stroke-[1.25]" />
                            </div>
                            <h3 className="text-xl md:text-2xl font-serif text-[#4f1636] mb-4">{service.title}</h3>
                            <p className="text-xs md:text-sm font-sans text-[#896f73] leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                        
                        {/* Subtle interactive accent */}
                        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#4f1636]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
