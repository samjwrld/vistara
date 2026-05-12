import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: "Workspace Strategy & Planning",
    subtitle: "Agile & Future-Proof",
    desc: "We help organizations define how they work. Through spatial auditing and ethnographic research, we design agile environments that enhance productivity and foster a culture of innovation.",
    image: "/images/projects/brutalist_office.png", // Placeholder for Image 2
    features: ["Space Utilization Audits", "Headcount Growth Planning", "Agile Zoning", "Departmental Adjacency Mapping"]
  },
  {
    title: "Interior Architecture",
    subtitle: "The Anatomy of Experience",
    desc: "Our interior architecture services bridge the gap between structure and soul. We focus on the high-touch elements — materiality, lighting, and acoustics — to create cohesive, sensory-rich environments.",
    image: "/images/projects/terracotta_villa.png", // Placeholder for Image 1
    features: ["Custom Joinery & Millwork", "Lighting Design", "Acoustic Engineering", "FF&E Specification"]
  },
  {
    title: "Commercial Lobby & Hospitality",
    subtitle: "The Art of the Arrival",
    desc: "First impressions are lasting. We design concierge-level lobbies and corporate amenity spaces that serve as the heartbeat of modern commercial developments.",
    image: "/images/services/lobby_arrival.png", // Placeholder for Image 6
    features: ["Concierge Desk Design", "Brand Integration", "Visitor Experience Flow", "Wayfinding & Signage"]
  },
  {
    title: "Amenity & Wellness Spaces",
    subtitle: "Nurturing the Human Element",
    desc: "Beyond the desk, we create spaces for recharge and reconnection. From corporate cafes to wellness lounges, we prioritize human wellbeing in every square foot.",
    image: "/images/services/wellness_amenity.png", // Placeholder for Image 5
    features: ["Corporate Cafe & Pantry", "Wellness & Meditation Rooms", "Social Hubs", "Outdoor Work Terraces"]
  }
];

export const Services = () => {
  return (
    <div className="pt-32 pb-24 w-full min-h-screen relative z-10 bg-[#fff4e8]">
      {/* HERO */}
      <section className="px-6 md:px-12 max-w-[1800px] mx-auto mb-24 md:mb-40">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-[#896f73]"></div>
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#896f73]">Our Expertise</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-serif text-[#4f1636] leading-[0.9] tracking-tight mb-8">
            Integrated <span className="italic font-light text-[#896f73]">Design</span> Solutions.
          </h1>
          <p className="text-lg md:text-2xl font-sans text-gray-600 max-w-2xl leading-relaxed">
            From strategic masterplanning to the final interior detail, we provide end-to-end architectural and design services tailored for complex commercial and luxury residential mandates.
          </p>
        </motion.div>
      </section>

      {/* SERVICES LIST */}
      <section className="px-6 md:px-12 max-w-[1800px] mx-auto space-y-32 md:space-y-64">
        {services.map((service, index) => (
          <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className={`${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}
            >
              <div className="aspect-[4/5] bg-gray-100 overflow-hidden rounded-[2.5rem] relative group">
                <img
                  src={service.image}
                  alt={service.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale-[20%] group-hover:scale-105 transition-transform duration-[3s] ease-[cubic-bezier(0.16,1,0.3,1)]"
                />
                <div className="absolute inset-0 bg-[#4f1636]/5 mix-blend-multiply group-hover:bg-transparent transition-colors duration-1000"></div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className={`${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}
            >
              <span className="text-[10px] font-mono uppercase tracking-[.3em] text-[#896f73] block mb-4">
                Service {index + 1} &mdash; {service.subtitle}
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-[#4f1636] mb-8 leading-tight">
                {service.title}
              </h2>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-10">
                {service.desc}
              </p>
              
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 mb-12">
                {service.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#896f73] mt-1 shrink-0" />
                    <span className="text-sm text-gray-500 font-sans">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link to="/contact" className="inline-flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-[#4f1636] group">
                Inquire about this service 
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        ))}
      </section>

      {/* CAPABILITIES GRID */}
      <section className="px-6 md:px-12 max-w-[1800px] mx-auto mt-48 md:mt-64">
        <div className="bg-[#4f1636] rounded-[3rem] p-12 md:p-24 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="max-w-3xl mb-16 relative z-10">
            <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-white/50 mb-8">Full-Service Capabilities</h3>
            <p className="text-2xl md:text-4xl font-serif leading-tight">
              A comprehensive toolkit for the built environment. We handle projects from <span className="italic">2,000 to over 200,000 sqft</span> with meticulous rigour.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            <div className="space-y-6">
              <h4 className="font-serif text-lg text-white/90">Strategic</h4>
              <ul className="space-y-3 text-sm text-white/50 font-sans">
                <li>&mdash; Workplace Strategy</li>
                <li>&mdash; Master Planning</li>
                <li>&mdash; Site Analysis</li>
                <li>&mdash; Feasibility Studies</li>
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="font-serif text-lg text-white/90">Creative</h4>
              <ul className="space-y-3 text-sm text-white/50 font-sans">
                <li>&mdash; Architecture Design</li>
                <li>&mdash; Interior Narratives</li>
                <li>&mdash; Custom Furniture</li>
                <li>&mdash; Environmental Graphics</li>
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="font-serif text-lg text-white/90">Technical</h4>
              <ul className="space-y-3 text-sm text-white/50 font-sans">
                <li>&mdash; BOQs & Tendering</li>
                <li>&mdash; MEP Coordination</li>
                <li>&mdash; Project Management</li>
                <li>&mdash; Quality Assurance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="px-6 md:px-12 max-w-4xl mx-auto py-32 md:py-48 text-center">
        <h2 className="text-4xl md:text-6xl font-serif text-[#4f1636] mb-12">Ready to transform your <span className="italic">environment?</span></h2>
        <Link 
          to="/contact" 
          className="inline-flex items-center gap-4 bg-[#4f1636] text-white px-10 py-5 rounded-full uppercase tracking-widest text-xs font-mono hover:scale-105 transition-all duration-500 shadow-[0_20px_40px_rgba(79,22,54,0.2)]"
        >
          Let's Start a Project
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
};
