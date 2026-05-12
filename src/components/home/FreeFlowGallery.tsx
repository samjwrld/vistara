import React from 'react';
import { motion } from 'motion/react';

const freeFlowImages = [
    { src: '/images/projects/dining_stone_staircase.png', aspect: 'aspect-[3/4]', mt: 'mt-0' },
    { src: '/images/projects/living_marble_tv.png', aspect: 'aspect-[4/3]', mt: 'mt-8 md:mt-32 lg:mt-48' },
    { src: '/images/projects/living_red_accent.png', aspect: 'aspect-[1/1]', mt: 'mt-8 md:mt-16 lg:mt-12' },
    { src: '/images/projects/atrium_spiral.png', aspect: 'aspect-[3/5]', mt: 'mt-8 md:-mt-24 lg:-mt-48' },
    { src: '/images/projects/modern_dining.png', aspect: 'aspect-[16/9]', mt: 'mt-8 md:mt-12' },
    { src: '/images/projects/terracotta_villa.png', aspect: 'aspect-[4/5]', mt: 'mt-8 md:mt-16 lg:-mt-24' },
];

export const FreeFlowGallery = () => {
    return (
        <section className="relative z-10 w-full max-w-[1800px] mx-auto px-6 md:px-12 py-32 md:py-48 mb-24">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-16">
                {freeFlowImages.map((img, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, delay: i % 3 * 0.1 }}
                        className={`group w-full overflow-hidden bg-gray-100 relative ${img.aspect} ${img.mt}`}
                    >
                        <img alt="Gallery Image" src={img.src} referrerPolicy="no-referrer" className="w-full h-full object-cover grayscale-[70%] group-hover:scale-[1.05] group-hover:grayscale-0 transition-all duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)]" />
                    </motion.div>
                ))}
            </div>
        </section>
    )
};
