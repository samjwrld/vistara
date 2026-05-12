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
    image: '/images/projects/corporate-1.jpg',
    year: '2025',
    area: '2,00,000+ sqft',
    philosophy: 'Led master planning and large-scale layout strategies for Fortune 500 and technology occupiers, delivering integrated architecture and interior design solutions focused on efficiency, flexibility, and user-centric environments — in collaboration with multidisciplinary MEP, structure, and landscape teams.',
    materials: ['Acoustic Panels', 'Architectural Glass', 'Engineered Wood', 'Polished Concrete'],
    testimonial: {
      text: "Vistara Atelier translated our complex personality into a physical space that feels both expansive and intimate. Their attention to material transition is unparalleled.",
      author: "Aditi & Rahul Mehta"
    },
    gallery: [
      '/images/projects/corporate-gallery-1.jpg',
      '/images/projects/corporate-gallery-2.jpg',
      '/images/projects/corporate-gallery-3.jpg'
    ]
  },
  { 
    id: 2, 
    slug: 'research-park',
    title: 'Greenfield Research Park', 
    location: 'Hyderabad', 
    category: 'Master Planning', 
    image: '/images/projects/research-1.jpg',
    year: '2024',
    philosophy: 'Campus visioning, zoning, and circulation frameworks for a greenfield research and innovation campus. Supported by massing studies and sustainability-driven planning strategies designed for long-term growth.',
    materials: ['Terracotta Tiles', 'Reclaimed Teak', 'Exposed Brick', 'Hand-cut Granite'],
    testimonial: {
      text: "Living here feels like being in a continuous conversation with nature. The way light moves through the courtyard determines the rhythm of our day.",
      author: "Dr. K. Venkatesh"
    },
    gallery: [
      '/images/projects/research-gallery-1.jpg',
      '/images/projects/research-gallery-2.jpg'
    ]
  },
  { 
    id: 3, 
    slug: 'incubation-facility',
    title: 'Incubation Facility', 
    location: 'Hyderabad', 
    category: 'Corporate', 
    image: '/images/projects/incubation-1.jpg',
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
    image: '/images/projects/residential-1.jpg',
    philosophy: 'Bespoke interiors with tailored space planning, curated material palettes, and custom joinery — balancing refined aesthetics with the way each family actually lives. Delivered for high-net-worth clients in Hyderabad’s premium residential corridors.',
    materials: ['Italian Marble', 'Smoked Oak', 'Brushed Aluminum', 'Micro-concrete']
  },
  { 
    id: 5, 
    slug: 'airport-lounges',
    title: 'Airport Lounges', 
    location: 'RGIA Airport, Hyderabad', 
    category: 'Aviation', 
    image: '/images/projects/aviation-1.jpg',
    philosophy: 'Premium lounge environments for international and domestic terminals — spatial planning, passenger flow optimisation, and detailed hospitality-grade interiors under complex operational and regulatory requirements.'
  },
  { 
    id: 11, 
    slug: 'urban-bistro',
    title: 'Urban Bistro', 
    location: 'Hitech City, Hyderabad', 
    category: 'Hospitality', 
    image: '/images/projects/hospitality-1.jpg',
    philosophy: 'Concept-to-completion design for a modern QSR. Spatial storytelling, guest flow optimisation, and operational integration for a high-intensity urban location.',
    materials: ['Corrugated Steel', 'Velvet Upholstery', 'Neon Accents', 'Polished Concrete']
  },
  { 
    id: 12, 
    slug: 'artisan-cafe',
    title: 'The Artisan Cafe', 
    location: 'Jubilee Hills, Hyderabad', 
    category: 'Hospitality', 
    image: '/images/projects/hospitality-2.jpg',
    philosophy: 'A boutique hospitality interior where spatial intelligence meets brand storytelling. Curated material palettes for a discerning F&B operator.'
  }
];

