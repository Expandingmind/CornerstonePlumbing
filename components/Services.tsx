"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { services } from "@/data/services";

export default function Services() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.05 });

  return (
    <section id="services" className="py-16 md:py-24 bg-navy-900" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div 
          className={`text-center mb-10 md:mb-16 transition-all duration-700
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-2 md:mb-4">Plumbing Services</h2>
          <p className="text-gray-400 text-sm md:text-lg">Precision Plumbing. Not An Oxymoron.</p>
        </div>

        {/* Services Grid - 2 cols on mobile, 4 on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 max-w-6xl mx-auto">
          {services.map((service, idx) => (
            <Link 
              key={idx}
              href={`/services/${service.slug}`}
              className={`bg-white rounded-xl md:rounded-2xl overflow-hidden flex flex-col shadow-lg group h-[180px] md:h-[320px] relative card-hover card-image-zoom
                transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${idx * 50 + 100}ms` }}
            >
              {/* Image Area */}
              <div className="relative h-[120px] md:h-[240px] w-full bg-gray-100 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 25vw"
                />
                {/* Gradient Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* "View Service" overlay text - Desktop only */}
                <div className="hidden md:flex absolute inset-0 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="bg-white text-navy-900 px-4 py-2 rounded-full font-bold text-sm flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    View Service <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
              
              {/* Text Label Area */}
              <div className="bg-white p-2 md:p-5 h-[60px] md:h-[80px] flex items-center justify-center relative z-10">
                <h3 className="text-navy-900 font-bold text-xs md:text-lg leading-tight text-center group-hover:text-brand-blue transition-colors duration-300 line-clamp-2">
                  {service.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div 
          className={`mt-10 md:mt-16 text-center transition-all duration-700 delay-700
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <Link 
            href="#contact" 
            className="btn-primary inline-block bg-brand-blue hover:bg-brand-light text-white font-bold py-2.5 px-8 md:py-3 md:px-10 rounded-full shadow-lg text-sm md:text-base"
          >
            Request Any Service
          </Link>
        </div>
      </div>
    </section>
  );
}
