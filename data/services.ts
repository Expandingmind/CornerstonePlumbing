export interface Service {
  slug: string;
  name: string;
  shortDescription: string;
  image: string;
  heroImage: string;
  description: string;
  features: string[];
  benefits: {
    title: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const services: Service[] = [
  {
    slug: "drain-cleaning",
    name: "Drain Cleaning",
    shortDescription: "Professional drain cleaning to keep your pipes flowing freely.",
    image: "/images/services/plumbing.png",
    heroImage: "/images/services/plumbing.png",
    description: "Clogged drains can disrupt your daily routine and lead to bigger plumbing problems if left untreated. Our professional drain cleaning services use state-of-the-art equipment to clear blockages and restore proper flow to your plumbing system. From kitchen sinks to main sewer lines, we handle it all.",
    features: [
      "Hydro-jetting for tough clogs",
      "Camera inspections to locate blockages",
      "Safe, chemical-free cleaning options",
      "Preventive maintenance plans",
      "Same-day emergency service",
      "All drain types: kitchen, bathroom, floor drains"
    ],
    benefits: [
      {
        title: "Prevent Costly Repairs",
        description: "Regular drain cleaning prevents buildup that can lead to pipe damage and expensive repairs."
      },
      {
        title: "Eliminate Odors",
        description: "Remove trapped debris and bacteria that cause unpleasant drain odors in your home."
      },
      {
        title: "Faster Drainage",
        description: "Enjoy quick-draining sinks, showers, and tubs without standing water."
      }
    ],
    faqs: [
      {
        question: "How often should I have my drains cleaned?",
        answer: "We recommend professional drain cleaning once a year for most homes, or more frequently if you notice slow drainage."
      },
      {
        question: "What causes drain clogs?",
        answer: "Common causes include hair, soap scum, grease, food particles, and mineral buildup from hard water."
      },
      {
        question: "Is hydro-jetting safe for old pipes?",
        answer: "Yes, when performed by professionals. We adjust water pressure based on your pipe material and condition."
      }
    ]
  },
  {
    slug: "commercial-plumbing",
    name: "Commercial Plumbing",
    shortDescription: "Comprehensive plumbing solutions for businesses of all sizes.",
    image: "/images/services/commercialplumbing2.png",
    heroImage: "/images/services/commercialplumbing2.png",
    description: "Your business can't afford plumbing problems. Cornerstone Plumbing provides reliable commercial plumbing services designed to minimize downtime and keep your operations running smoothly. From restaurants to office buildings, we understand the unique demands of commercial plumbing systems.",
    features: [
      "24/7 emergency commercial service",
      "Grease trap installation & cleaning",
      "Backflow prevention & testing",
      "Commercial water heater service",
      "Pipe repair and replacement",
      "Code compliance inspections"
    ],
    benefits: [
      {
        title: "Minimize Downtime",
        description: "Fast response times and efficient repairs keep your business operational."
      },
      {
        title: "Code Compliance",
        description: "Stay compliant with local regulations and pass inspections with confidence."
      },
      {
        title: "Preventive Maintenance",
        description: "Scheduled maintenance prevents unexpected failures and costly emergency repairs."
      }
    ],
    faqs: [
      {
        question: "Do you offer maintenance contracts?",
        answer: "Yes, we offer customized maintenance plans for businesses to prevent issues and ensure compliance."
      },
      {
        question: "Can you work after business hours?",
        answer: "Absolutely. We schedule work around your business hours to minimize disruption to your operations."
      },
      {
        question: "What types of businesses do you serve?",
        answer: "We serve restaurants, retail stores, office buildings, medical facilities, schools, and more."
      }
    ]
  },
  {
    slug: "water-heater-replacement",
    name: "Water Heater Replacement",
    shortDescription: "Expert installation of traditional and tankless water heaters.",
    image: "/images/services/waterheater.jpeg",
    heroImage: "/images/services/waterheater.jpeg",
    description: "Is your water heater failing to keep up with your hot water needs? Whether you need a repair or complete replacement, our team specializes in all types of water heaters including traditional tank models and energy-efficient tankless systems. We'll help you choose the right solution for your home and budget.",
    features: [
      "Tank and tankless water heater installation",
      "Energy-efficient upgrades",
      "Same-day replacement available",
      "Proper disposal of old units",
      "All major brands serviced",
      "Extended warranty options"
    ],
    benefits: [
      {
        title: "Lower Energy Bills",
        description: "Modern water heaters are up to 30% more efficient than older models."
      },
      {
        title: "Endless Hot Water",
        description: "Tankless systems provide hot water on demand—never run out again."
      },
      {
        title: "Space Savings",
        description: "Tankless units mount on walls, freeing up valuable floor space."
      }
    ],
    faqs: [
      {
        question: "How long do water heaters last?",
        answer: "Traditional tank water heaters last 8-12 years, while tankless models can last 20+ years with proper maintenance."
      },
      {
        question: "Should I switch to tankless?",
        answer: "Tankless is ideal for homes with high hot water demand or limited space. We'll assess your needs and recommend the best option."
      },
      {
        question: "How long does installation take?",
        answer: "Most water heater replacements are completed in 2-4 hours. Tankless conversions may take longer."
      }
    ]
  },
  {
    slug: "leak-detection-repair",
    name: "Leak Detection & Repair",
    shortDescription: "Advanced leak detection to find and fix hidden water leaks.",
    image: "/images/services/Cartridgeinstalls.jpeg",
    heroImage: "/images/services/Cartridgeinstalls.jpeg",
    description: "Hidden leaks can cause extensive water damage and skyrocket your utility bills. Our advanced leak detection technology locates leaks behind walls, under slabs, and in underground pipes without destructive digging or demolition. Once found, we provide fast, reliable repairs.",
    features: [
      "Non-invasive electronic leak detection",
      "Thermal imaging technology",
      "Slab leak specialists",
      "Underground pipe location",
      "Water damage prevention",
      "Insurance documentation provided"
    ],
    benefits: [
      {
        title: "Save Water & Money",
        description: "Even small leaks waste thousands of gallons annually. Detection stops the waste."
      },
      {
        title: "Prevent Mold Growth",
        description: "Hidden moisture creates perfect conditions for mold. Early detection prevents health hazards."
      },
      {
        title: "Protect Your Foundation",
        description: "Slab leaks can compromise your home's foundation. We find and fix them fast."
      }
    ],
    faqs: [
      {
        question: "How do you detect leaks without tearing up my floors?",
        answer: "We use acoustic listening devices, thermal cameras, and pressure testing to pinpoint leaks precisely."
      },
      {
        question: "What are signs of a hidden leak?",
        answer: "Watch for unexplained high water bills, musty odors, warm spots on floors, or sounds of running water."
      },
      {
        question: "Do you repair the leaks you find?",
        answer: "Yes, we provide complete leak repair services, from simple fixes to pipe replacements."
      }
    ]
  },
  {
    slug: "bathroom-remodeling",
    name: "Bathroom Remodeling",
    shortDescription: "Complete bathroom plumbing for your renovation project.",
    image: "/images/services/bathroomremodeling.jpeg",
    heroImage: "/images/services/bathroomremodeling.jpeg",
    description: "Planning a bathroom renovation? Our experienced plumbers handle all the plumbing aspects of your remodel, from moving drain lines to installing new fixtures. We work with your contractor or directly with you to ensure your dream bathroom becomes a reality with properly functioning plumbing.",
    features: [
      "Fixture installation (toilets, sinks, showers)",
      "Drain line relocation",
      "Water line installation",
      "Shower and tub conversions",
      "Accessibility modifications",
      "Coordination with contractors"
    ],
    benefits: [
      {
        title: "Expert Installation",
        description: "Professional installation ensures fixtures work properly and last for years."
      },
      {
        title: "Code Compliance",
        description: "All work meets local building codes for permits and inspections."
      },
      {
        title: "One-Stop Solution",
        description: "We handle all plumbing aspects so you don't have to coordinate multiple contractors."
      }
    ],
    faqs: [
      {
        question: "Can you move my toilet or shower location?",
        answer: "Yes, we can relocate plumbing fixtures, though it may require additional work to extend or reroute pipes."
      },
      {
        question: "Do you install the fixtures or just the plumbing?",
        answer: "We do both. We install toilets, faucets, showers, tubs, and connect all necessary plumbing."
      },
      {
        question: "How do I get started with a bathroom remodel?",
        answer: "Contact us for a free consultation. We'll assess your space and provide a detailed quote."
      }
    ]
  },
  {
    slug: "toilet-repair",
    name: "Toilet Repair",
    shortDescription: "Fast toilet repairs and replacements for any issue.",
    image: "/images/services/toilet.jpeg",
    heroImage: "/images/services/toilet.jpeg",
    description: "A malfunctioning toilet is more than an inconvenience—it can waste water and cause sanitation issues. From running toilets and weak flushes to complete replacements, our plumbers diagnose and fix toilet problems quickly. We carry common parts on our trucks for same-day repairs.",
    features: [
      "Running toilet repairs",
      "Clog removal",
      "Flapper and valve replacement",
      "Toilet installation",
      "Low-flow toilet upgrades",
      "Wax ring replacement"
    ],
    benefits: [
      {
        title: "Stop Wasting Water",
        description: "A running toilet can waste 200+ gallons per day. Quick repairs save money."
      },
      {
        title: "Prevent Water Damage",
        description: "Leaking toilets can damage floors and subfloors. We fix them before damage spreads."
      },
      {
        title: "Improve Efficiency",
        description: "Upgrade to modern low-flow toilets that use 80% less water per flush."
      }
    ],
    faqs: [
      {
        question: "Why does my toilet keep running?",
        answer: "Usually it's a worn flapper, faulty fill valve, or improper float adjustment. All are easy fixes for us."
      },
      {
        question: "Should I repair or replace my old toilet?",
        answer: "If repairs are frequent or your toilet is over 15 years old, replacement often makes more sense financially."
      },
      {
        question: "Can you unclog a severely blocked toilet?",
        answer: "Yes, we have professional-grade equipment to clear even the toughest clogs that plungers can't handle."
      }
    ]
  },
  {
    slug: "shower-services",
    name: "Shower Services",
    shortDescription: "Shower installation, repair, and upgrades.",
    image: "/images/services/shower.jpeg",
    heroImage: "/images/services/shower.jpeg",
    description: "From dripping showerheads to complete shower installations, we handle all your shower plumbing needs. Whether you're dealing with low water pressure, temperature fluctuations, or want to upgrade to a luxury rain shower system, our team delivers quality workmanship and lasting results.",
    features: [
      "Showerhead installation & repair",
      "Cartridge and valve replacement",
      "Shower pan and drain installation",
      "Pressure balancing valves",
      "Tub-to-shower conversions",
      "Multi-head shower systems"
    ],
    benefits: [
      {
        title: "Consistent Temperature",
        description: "No more cold surprises—pressure balancing valves maintain steady water temperature."
      },
      {
        title: "Better Water Pressure",
        description: "We diagnose and fix low pressure issues for a more satisfying shower experience."
      },
      {
        title: "Luxury Upgrades",
        description: "Transform your daily routine with rain heads, body jets, and handheld sprayers."
      }
    ],
    faqs: [
      {
        question: "Why does my shower water temperature fluctuate?",
        answer: "Usually caused by an old cartridge or lack of a pressure-balancing valve. Both are fixable."
      },
      {
        question: "Can you convert my tub into a walk-in shower?",
        answer: "Yes, we handle tub-to-shower conversions including new drain installation and waterproofing."
      },
      {
        question: "How do I improve my shower's water pressure?",
        answer: "Solutions range from cleaning mineral buildup to installing a pressure-boosting showerhead or fixing pipe issues."
      }
    ]
  },
  {
    slug: "camera-inspections",
    name: "Camera Inspections",
    shortDescription: "Video pipe inspections to see inside your plumbing.",
    image: "/images/services/camerainspections.jpeg",
    heroImage: "/images/services/camerainspections.jpeg",
    description: "See exactly what's happening inside your pipes with our high-definition video camera inspections. This non-invasive technology allows us to identify blockages, cracks, root intrusions, and other problems without digging or guesswork. Perfect for diagnosing recurring issues or inspecting pipes before purchasing a home.",
    features: [
      "HD video pipe inspection",
      "Real-time viewing on monitor",
      "Digital recording provided",
      "Locating technology",
      "Pre-purchase inspections",
      "Post-repair verification"
    ],
    benefits: [
      {
        title: "Accurate Diagnosis",
        description: "See the exact problem—no guessing means targeted repairs and no wasted money."
      },
      {
        title: "Preventive Insights",
        description: "Identify potential issues before they become expensive emergencies."
      },
      {
        title: "Documentation",
        description: "Video evidence for insurance claims or real estate transactions."
      }
    ],
    faqs: [
      {
        question: "How does camera inspection work?",
        answer: "A waterproof camera on a flexible cable is inserted into your pipes, transmitting live video to a monitor."
      },
      {
        question: "When should I get a camera inspection?",
        answer: "For recurring clogs, before buying a home, after sewer backups, or to locate lost items in drains."
      },
      {
        question: "How far can the camera see?",
        answer: "Our equipment can inspect hundreds of feet of pipe, from small drain lines to main sewer lines."
      }
    ]
  }
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(service => service.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map(service => service.slug);
}

