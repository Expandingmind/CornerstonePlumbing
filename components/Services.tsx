"use client";

import Image from "next/image";
import Link from "next/link";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const services = [
  { 
    name: "Drain Cleaning", 
    image: "/images/services/plumbing.png", 
  },
  { 
    name: "Commercial Plumbing", 
    image: "/images/services/commercialplumbing2.png",
  },
  { 
    name: "Water Heater Replacement", 
    image: "/images/services/waterheater.jpeg",
  },
  { 
    name: "Leak Detection & Repair", 
    image: "/images/services/Cartridgeinstalls.jpeg", 
  },
  { 
    name: "Bathroom Remodeling", 
    image: "/images/services/bathroomremodeling.jpeg",
  },
  { 
    name: "Toilet Repair", 
    image: "/images/services/toilet.jpeg",
  },
  { 
    name: "Shower Services", 
    image: "/images/services/shower.jpeg",
  },
  { 
    name: "Camera Inspections", 
    image: "/images/services/camerainspections.jpeg",
  }
];

export default function Services() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.05 });

  return (
    <section id="services" className="py-24 bg-navy-900" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div 
          className={`text-center mb-16 transition-all duration-700
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Plumbing Services</h2>
          <p className="text-gray-400 text-lg">Precision Plumbing. Not An Oxymoron.</p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className={`bg-white rounded-2xl overflow-hidden flex flex-col shadow-lg group h-[320px] cursor-pointer relative card-hover card-image-zoom
                transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${idx * 75 + 200}ms` }}
            >
              {/* Image Area */}
              <div className="relative h-[240px] w-full bg-gray-100 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                {/* Gradient Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              {/* Text Label Area */}
              <div className="bg-white p-5 h-[80px] flex items-center justify-center relative z-10">
                <h3 className="text-navy-900 font-bold text-lg leading-tight text-center group-hover:text-brand-blue transition-colors duration-300">
                  {service.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div 
          className={`mt-16 text-center transition-all duration-700 delay-700
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <Link 
            href="#contact" 
            className="btn-primary inline-block bg-brand-blue hover:bg-brand-light text-white font-bold py-3 px-10 rounded-full shadow-lg"
          >
            More Services
          </Link>
        </div>
      </div>
    </section>
  );
}
