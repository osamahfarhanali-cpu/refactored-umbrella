// Portfolio data with image section references
export const portfolioData = {
  // Navigation Links
  navigation: [
    { label: "Portfolio", href: "#portfolio" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ],

  // Hero Section
  hero: {
    eyebrow: "Professional Photography",
    title: "Capturing Moments That Last Forever",
    subtitle: "Professional Photographer | Portraits | Events | Nature",
    ctaButtons: [
      { label: "View Portfolio", href: "#portfolio", variant: "primary" },
      { label: "Book a Session", href: "#contact", variant: "secondary" },
    ],
  },

  // Section Headers/Labels
  sections: {
    about: {
      label: "About Me",
      title: "Professional Photography Expertise",
    },
    portfolio: {
      label: "Portfolio",
      title: "My Latest Work",
    },
    services: {
      label: "Services",
      title: "What I Offer",
    },
    testimonials: {
      label: "Testimonials",
      title: "What My Clients Say",
    },
    contact: {
      label: "Contact",
      title: "Let's Create Something Beautiful Together",
      subtitle: "Ready to book your session? Get in touch and let's discuss your photography needs.",
    },
  },

  // Contact Section Information
  contactInfo: {
    email: "hello@alexandramitchell.com",
    phone: "+1 (555) 123-4567",
    location: "New York, USA",
    formPlaceholders: {
      name: "Your Name",
      email: "Your Email",
      service: "Select a Service",
      message: "Your Message",
    },
  },

  // Footer Links
  footerLinks: {
    quickLinks: [
      { label: "Portfolio", href: "#portfolio" },
      { label: "Services", href: "#services" },
      { label: "Contact", href: "#contact" },
    ],
    about: "is a professional photographer specializing in capturing timeless moments with artistic vision and technical excellence.",
  },

  // Photographer Information
  photographer: {
    name: "Alexandra Mitchell",
    tagline: "Capturing Moments That Last Forever",
    subtitle: "Professional Photographer | Portraits | Events | Nature",
    bio: "With over 8 years of experience in professional photography, I specialize in creating timeless visual stories. My passion lies in capturing authentic moments and transforming them into art that resonates with the soul.",
    experience: "8+ Years",
    projects: "200+",
    clients: "150+",
    aboutImage: "/About/me.jpeg",
    specialties: [
      "Professional Portraits",
      "Wedding Photography",
      "Event Coverage",
      "Product Photography",
      "Nature & Landscape",
      "Photo Editing & Retouching",
    ],
  },

  // Section 1 images from local directories: /public folders organized by category
  portfolio: [
    // Portrait Category (5 images)
    {
      id: 1,
      title: "Timeless Portrait Study",
      category: "Portrait",
      image: "/Portrait/1.jpg",
      description: "Elegant studio portrait with professional lighting and refined composition",
    },
    {
      id: 2,
      title: "Classic Beauty",
      category: "Portrait",
      image: "/Portrait/1.png",
      description: "Sophisticated headshot capturing natural grace and professional presence",
    },
    {
      id: 3,
      title: "Golden Hour Portrait",
      category: "Portrait",
      image: "/Portrait/2.jpg",
      description: "Warm natural lighting enhancing features with artistic depth",
    },
    {
      id: 4,
      title: "Studio Elegance",
      category: "Portrait",
      image: "/Portrait/2.png",
      description: "Professional portrait session with pristine studio composition",
    },
    {
      id: 5,
      title: "Artistic Expression",
      category: "Portrait",
      image: "/Portrait/3.jpg",
      description: "Creative portrait with unique artistic direction and mood",
    },

    // Product Category (15 images)
    {
      id: 6,
      title: "Premium Product Display",
      category: "Product",
      image: "/Product/1.jpg",
      description: "High-end product photography with professional styling and lighting",
    },
    {
      id: 7,
      title: "Luxury Detail Shot",
      category: "Product",
      image: "/Product/1.png",
      description: "Close-up product details showcasing craftsmanship and quality",
    },
    {
      id: 8,
      title: "Lifestyle Product",
      category: "Product",
      image: "/Product/2.jpg",
      description: "Product in natural setting creating aspirational lifestyle imagery",
    },
    {
      id: 9,
      title: "Product Elegance",
      category: "Product",
      image: "/Product/2.png",
      description: "Sophisticated product presentation with refined background",
    },
    {
      id: 10,
      title: "Detail & Texture",
      category: "Product",
      image: "/Product/3.jpg",
      description: "Textured product shot emphasizing material quality and finish",
    },
    {
      id: 11,
      title: "Premium Showcase",
      category: "Product",
      image: "/Product/4.jpg",
      description: "Luxury product positioned for maximum visual impact",
    },
    {
      id: 12,
      title: "Minimalist Product",
      category: "Product",
      image: "/Product/5.jpg",
      description: "Clean minimalist composition highlighting product essence",
    },
    {
      id: 13,
      title: "Creative Styling",
      category: "Product",
      image: "/Product/6.jpg",
      description: "Creatively styled product shot with artistic arrangement",
    },
    {
      id: 14,
      title: "Professional Quality",
      category: "Product",
      image: "/Product/7.jpg",
      description: "Professional product photography with perfect lighting",
    },
    {
      id: 15,
      title: "Refined Composition",
      category: "Product",
      image: "/Product/8.jpg",
      description: "Carefully composed product shot with attention to detail",
    },
    {
      id: 16,
      title: "Visual Harmony",
      category: "Product",
      image: "/Product/9.jpg",
      description: "Balanced product arrangement creating visual harmony",
    },
    {
      id: 17,
      title: "Luxury Presentation",
      category: "Product",
      image: "/Product/10.jpg",
      description: "High-end product presentation with sophisticated styling",
    },
    {
      id: 18,
      title: "Artistic Display",
      category: "Product",
      image: "/Product/11.jpg",
      description: "Artistic product display with creative background elements",
    },
    {
      id: 19,
      title: "Premium Photography",
      category: "Product",
      image: "/Product/12.jpg",
      description: "Premium quality product photography with expert lighting",
    },
    {
      id: 20,
      title: "Detailed Showcase",
      category: "Product",
      image: "/Product/13.jpg",
      description: "Detailed product showcase revealing intricate features",
    },

    // Events Category (4 images)
    {
      id: 21,
      title: "Event Brilliance",
      category: "Events",
      image: "/Events/3.png",
      description: "Captured dynamic moments from professional event coverage",
    },
    {
      id: 22,
      title: "Celebration Moments",
      category: "Events",
      image: "/Events/4.jpg",
      description: "Authentic event photography capturing joy and emotion",
    },
    {
      id: 23,
      title: "Professional Event Coverage",
      category: "Events",
      image: "/Events/5.jpg",
      description: "Perfectly timed event shots with expert composition",
    },
    {
      id: 24,
      title: "Event Excellence",
      category: "Events",
      image: "/Events/6.jpg",
      description: "High-quality event photography showcasing memorable moments",
    },

    // Other Category (4 images)
    {
      id: 25,
      title: "Creative Vision",
      category: "Other",
      image: "/Other/14.jpg",
      description: "Unique photographic perspective with artistic interpretation",
    },
    {
      id: 26,
      title: "Visual Story",
      category: "Other",
      image: "/Other/15.jpg",
      description: "Compelling imagery telling a visual narrative",
    },
    {
      id: 27,
      title: "Artistic Exploration",
      category: "Other",
      image: "/Other/16.jpg",
      description: "Experimental photography exploring light and composition",
    },
    {
      id: 28,
      title: "Creative Expression",
      category: "Other",
      image: "/Other/17.jpg",
      description: "Original creative work showcasing unique photographic style",
    },

    // Projects Category (7 images)
    {
      id: 29,
      title: "Project Showcase One",
      category: "Projects",
      image: "/Projects/18.jpg",
      description: "Professional project work demonstrating technical excellence",
    },
    {
      id: 30,
      title: "Project Showcase Two",
      category: "Projects",
      image: "/Projects/21.jpg",
      description: "Completed project featuring professional photography standards",
    },
    {
      id: 31,
      title: "Project Showcase Three",
      category: "Projects",
      image: "/Projects/22.jpg",
      description: "Major project work with comprehensive visual coverage",
    },
    {
      id: 32,
      title: "Project Showcase Four",
      category: "Projects",
      image: "/Projects/23.jpg",
      description: "Portfolio project demonstrating client satisfaction and quality",
    },
    {
      id: 33,
      title: "Project Showcase Five",
      category: "Projects",
      image: "/Projects/24.jpg",
      description: "Professional project with meticulous attention to detail",
    },
    {
      id: 34,
      title: "Project Showcase Six",
      category: "Projects",
      image: "/Projects/25.jpg",
      description: "Completed project showcasing collaborative excellence",
    },
    {
      id: 35,
      title: "Project Showcase Seven",
      category: "Projects",
      image: "/Projects/26.jpg",
      description: "Final project example representing professional photography expertise",
    },
  ],

  services: [
    {
      id: 1,
      title: "Wedding Photography",
      description: "Complete wedding coverage from ceremony to reception",
      icon: "Heart",
      price: "$2,500+",
    },
    {
      id: 2,
      title: "Portrait Sessions",
      description: "Individual and family portrait sessions",
      icon: "User",
      price: "$300+",
    },
    {
      id: 3,
      title: "Event Photography",
      description: "Coverage for corporate events and celebrations",
      icon: "Calendar",
      price: "$1,500+",
    },
    {
      id: 4,
      title: "Product Photography",
      description: "Professional product and lifestyle shoots",
      icon: "Package",
      price: "$800+",
    },
    {
      id: 5,
      title: "Nature & Landscape",
      description: "Outdoor and landscape photography expeditions",
      icon: "Mountain",
      price: "$1,000+",
    },
    {
      id: 6,
      title: "Photo Editing",
      description: "Professional post-processing and retouching",
      icon: "Image",
      price: "$50+",
    },
  ],

  testimonials: [
    {
      id: 1,
      name: "Emily Johnson",
      role: "Bride",
      text: "Alexandra captured our wedding day beautifully. Her attention to detail and professional demeanor made us feel comfortable throughout the day. We couldn't be happier with our photos!",
      rating: 5,
      image: "/Portrait/1.jpg",
    },
    {
      id: 2,
      name: "Marcus Chen",
      role: "Corporate Client",
      text: "Outstanding event photography for our annual gala. Every shot was perfectly timed and professionally edited. Highly recommended!",
      rating: 5,
      image: "/Portrait/2.jpg",
    },
    {
      id: 3,
      name: "Sarah Williams",
      role: "Family Portrait Client",
      text: "Our family portraits turned out amazing! Alexandra made our children feel comfortable and captured genuine moments. Worth every penny!",
      rating: 5,
      image: "/Portrait/4.jpg",
    },
  ],

  socialLinks: [
    { icon: "Instagram", url: "https://instagram.com", label: "Instagram" },
    { icon: "Facebook", url: "https://facebook.com", label: "Facebook" },
    { icon: "Mail", url: "mailto:hello@example.com", label: "Email" },
    { icon: "MessageCircle", url: "https://wa.me/1234567890", label: "WhatsApp" },
  ],

  categories: ["All", "Portrait", "Product", "Events", "Other", "Projects"],
};
