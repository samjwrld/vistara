export interface Project {
  id: number;
  slug: string;
  title: string;
  location: string;
  category: string;
  image: string;
  year?: string;
  area?: string;
  philosophy?: string;
  materials?: string[];
  testimonial?: {
    text: string;
    author: string;
  };
  gallery?: string[];
}

export const ALL_PROJECTS: Project[] = [
  { 
    id: 1, 
    slug: 'corporate-workspaces',
    title: 'Corporate Workspaces', 
    location: 'Hyderabad', 
    category: 'Corporate', 
    image: '/images/projects/p1.png',
    year: '2025',
    area: '2,00,000+ sqft',
    philosophy: 'Led master planning and large-scale layout strategies for Fortune 500 and technology occupiers, delivering integrated architecture and interior design solutions focused on efficiency, flexibility, and user-centric environments — in collaboration with multidisciplinary MEP, structure, and landscape teams.',
    materials: ['Acoustic Panels', 'Architectural Glass', 'Engineered Wood', 'Polished Concrete'],
    testimonial: {
      text: "Vistara Atelier translated our complex personality into a physical space that feels both expansive and intimate. Their attention to material transition is unparalleled.",
      author: "Aditi & Rahul Mehta"
    },
    gallery: [
      '/images/projects/p1_1.png',
      '/images/projects/p1_2.png',
      '/images/projects/p1_3.png'
    ]
  },
  { 
    id: 2, 
    slug: 'research-park',
    title: 'Greenfield Research Park', 
    location: 'Hyderabad', 
    category: 'Master Planning', 
    image: '/images/projects/home/p2.png',
    year: '2024',
    philosophy: 'Campus visioning, zoning, and circulation frameworks for a greenfield research and innovation campus. Supported by massing studies and sustainability-driven planning strategies designed for long-term growth.',
    materials: ['Terracotta Tiles', 'Reclaimed Teak', 'Exposed Brick', 'Hand-cut Granite'],
    testimonial: {
      text: "Living here feels like being in a continuous conversation with nature. The way light moves through the courtyard determines the rhythm of our day.",
      author: "Dr. K. Venkatesh"
    },
    gallery: [
      '/images/projects/p2_1.png',
      '/images/projects/p2_2.png'
    ]
  },
  { 
    id: 3, 
    slug: 'incubation-facility',
    title: 'Incubation Facility', 
    location: 'Hyderabad', 
    category: 'Corporate', 
    image: '/images/projects/p3.png',
    year: '2024',
    philosophy: 'Full project lifecycle delivery — concept through execution — covering layouts, BOQs, material specifications, and on-site coordination to ensure design consistency and delivery rigour.',
    materials: ['Thassos Marble', 'White Oak', 'Opal Glass', 'Lime Plaster'],
    testimonial: {
      text: "The serenity of this home is something I've never experienced before. It's not just a house; it's a sanctuary.",
      author: "Sanjay Kapoor"
    }
  },
  { 
    id: 4, 
    slug: 'luxury-residential',
    title: 'Luxury Residential', 
    location: 'Hyderabad', 
    category: 'Residential', 
    image: '/images/projects/home/p4.png',
    philosophy: 'Bespoke interiors with tailored space planning, curated material palettes, and custom joinery — balancing refined aesthetics with the way each family actually lives. Delivered for high-net-worth clients in Hyderabad’s premium residential corridors.',
    materials: ['Italian Marble', 'Smoked Oak', 'Brushed Aluminum', 'Micro-concrete']
  },
  { 
    id: 5, 
    slug: 'airport-lounges',
    title: 'Airport Lounges', 
    location: 'Hyderabad', 
    category: 'Aviation', 
    image: '/images/projects/p5.png',
    philosophy: 'Premium lounge environments for international and domestic terminals — spatial planning, passenger flow optimisation, and detailed hospitality-grade interiors under complex operational and regulatory requirements.'
  },
  { 
    id: 11, 
    slug: 'urban-bistro',
    title: 'Urban Bistro', 
    location: 'Hitech City, Hyderabad', 
    category: 'Hospitality', 
    image: '/images/projects/p6.png',
    philosophy: 'Concept-to-completion design for a modern QSR. Spatial storytelling, guest flow optimisation, and operational integration for a high-intensity urban location.',
    materials: ['Corrugated Steel', 'Velvet Upholstery', 'Neon Accents', 'Polished Concrete']
  },
  { 
    id: 12, 
    slug: 'artisan-cafe',
    title: 'The Artisan Cafe', 
    location: 'Jubilee Hills, Hyderabad', 
    category: 'Hospitality', 
    image: '/images/projects/p7.png',
    philosophy: 'A boutique hospitality interior where spatial intelligence meets brand storytelling. Curated material palettes for a discerning F&B operator.'
  },
  {
    id: 13,
    slug: 'rainbow-courtyard-villa',
    title: 'The Rainbow Courtyard',
    location: 'Jubilee Hills, Hyderabad',
    category: 'Residential',
    image: '/images/projects/home/p8.png',
    year: '2025',
    area: '8,500 sqft',
    philosophy: 'A residence designed around a central metabolic courtyard. The reflection pool acts as a thermal regulator, while the open sky connection invites the elements into daily life.',
    materials: ['Kota Stone', 'Teak Wood', 'Custom Brass Finish', 'Natural Lime Plaster']
  },
  {
    id: 14,
    slug: 'terracotta-earth-house',
    title: 'Terracotta Earth House',
    location: 'Banjara Hills, Hyderabad',
    category: 'Residential',
    image: '/images/projects/home/p9.png',
    year: '2024',
    area: '12,000 sqft',
    philosophy: 'An exploration of materiality and form. The terracotta facade provides a rhythmic texture that changes with the sun, grounding the structure in its tropical context.',
    materials: ['Terracotta Cladding', 'Structural Glass', 'Black Granite', 'Travertine']
  },
  {
    id: 15,
    slug: 'monolithic-brutalist-studio',
    title: 'Monolithic Studio',
    location: 'Financial District, Hyderabad',
    category: 'Corporate',
    image: '/images/projects/p10.png',
    year: '2024',
    area: '45,000 sqft',
    philosophy: 'Honoring the honesty of raw concrete. This structure uses geometric voids to create a play of light and shadow, defining quiet work zones within a grand architectural statement.',
    materials: ['Exposed Concrete', 'Steel Sections', 'Low-E Glass', 'Industrial Mesh']
  },
  {
    id: 16,
    slug: 'marble-sanctuary-suite',
    title: 'Marble Sanctuary',
    location: 'Gachibowli, Hyderabad',
    category: 'Residential',
    image: '/images/projects/home/p11.png',
    year: '2025',
    philosophy: 'A master suite defined by a single, monolithic block of Statuario marble. The space balances the cold precision of stone with the warmth of bespoke silk textiles.',
    materials: ['Statuario Marble', 'Silk Wallpaper', 'Smoked Oak', 'Custom Upholstery']
  },
  {
    id: 17,
    slug: 'sage-minimalist-workspace',
    title: 'The Sage Homes',
    location: 'Kavituri, Hyderabad',
    category: 'Residential',
    image: '/images/projects/home/p12.png',
    year: '2024',
    philosophy: 'Integrating functionality into a singular design language. The custom sage green joinery acts as both storage and a calming backdrop for a focused home office.',
    materials: ['Lacquer Finish', 'Ash Wood', 'Solid Brass Handles', 'Woven Cord']
  },
  {
    id: 18,
    slug: 'floating-stone-dining',
    title: 'The Floating Staircase Villa',
    location: 'Tellapur, Hyderabad',
    category: 'Residential',
    image: '/images/projects/home/p13.png',
    year: '2023',
    philosophy: 'Tension between weight and weightlessness. A massive natural stone wall supports a delicate floating timber staircase, creating a dramatic focal point for the dining hall.',
    materials: ['Rough-cut Stone', 'Solid Walnut', 'Hidden Steel Supports', 'White Quartz']
  },
  {
    id: 19,
    slug: 'grey-marble-living-atrium',
    title: 'The Grey Marble Atrium',
    location: 'Kokapet, Hyderabad',
    category: 'Residential',
    image: '/images/projects/home/p14.png',
    year: '2025',
    philosophy: 'Seamless integration of technology and architecture. A floor-to-ceiling grey marble wall discreetly houses state-of-the-art systems while maintaining a serene aesthetic.',
    materials: ['Armani Grey Marble', 'Walnut Paneling', 'Matte Lacquer', 'Hidden Storage']
  },
  {
    id: 20,
    slug: 'crimson-accent-gallery',
    title: 'The Crimson Accent Suite',
    location: 'Jubilee Hills, Hyderabad',
    category: 'Residential',
    image: '/images/projects/home/p15.png',
    year: '2024',
    philosophy: 'Bold color as a spatial anchor. The deep crimson wall provides a dramatic backdrop for the client\'s art collection, transforming a living space into a private gallery.',
    materials: ['Venetian Plaster', 'Art-grade Lighting', 'Custom Rugs', 'Velvet']
  },
  {
    id: 21,
    slug: 'spiral-light-atrium',
    title: 'The Spiral Light Atrium',
    location: 'Manikonda, Hyderabad',
    category: 'Residential',
    image: '/images/projects/home/p16.png',
    year: '2025',
    philosophy: 'Circulation as sculpture. A white spiral staircase rises through a double-height atrium, framed by wooden slats that filter sunlight into a rhythmic pattern.',
    materials: ['Bent Steel', 'Oak Slats', 'Skylight Glass', 'Polished Stone']
  },
  {
    id: 22,
    slug: 'dark-oak-minimalist-dining',
    title: 'The Grand Minimalist Dining',
    location: 'Nanakramguda, Hyderabad',
    category: 'Residential',
    image: '/images/projects/home/p17.png',
    year: '2024',
    philosophy: 'A study in proportion and scale. The long, custom-carved dark oak table anchors the room, designed for large gatherings without sacrificing minimalist purity.',
    materials: ['Dark Oak', 'Sculptural Furniture', 'Architectural Lighting', 'Seamless Flooring']
  },
  {
    id: 23,
    slug: 'geometric-corporate-center',
    title: 'The Geometric Center',
    location: 'Financial District, Hyderabad',
    category: 'Corporate',
    image: '/images/projects/p18.png',
    year: '2025',
    philosophy: 'A beacon of modern productivity. This corporate headquarters utilizes a multi-layered facade to manage solar gain while providing panoramic views of Hyderabad\'s evolving skyline.',
    materials: ['High-performance Glass', 'Aluminum Fins', 'Granite Paving', 'Integrated LED']
  }
];

