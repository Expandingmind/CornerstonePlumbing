"use client";

import Link from "next/link";
import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function CallToAction() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="relative bg-brand-blue overflow-hidden py-24" ref={ref}>
      {/* Abstract Background Lines - Animated */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className={`absolute -right-[10%] top-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/20 rounded-full transition-all duration-1000
            ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}
        />
        <div 
          className={`absolute -right-[20%] top-1/2 -translate-y-1/2 w-[1000px] h-[1000px] border border-white/20 rounded-full transition-all duration-1000 delay-200
            ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}
        />
        <div 
          className={`absolute -right-[5%] top-[60%] -translate-y-1/2 w-[600px] h-[600px] border border-white/20 rounded-full transition-all duration-1000 delay-300
            ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div 
            className={`max-w-xl transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}
          >
            <h2 
              className={`text-4xl md:text-6xl font-bold text-white mb-6 leading-tight transition-all duration-700 delay-100
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              Need A Water Heater Replacement?
            </h2>
            <p 
              className={`text-white/90 text-lg md:text-xl mb-10 leading-relaxed transition-all duration-700 delay-200
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              Don&apos;t get stuck in the cold. Upgrade to a modern, efficient system today.
            </p>
            
            <div 
              className={`flex flex-wrap gap-4 transition-all duration-700 delay-300
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <Link 
                href="#contact" 
                className="btn-primary bg-navy-900 text-white hover:bg-navy-800 px-10 py-4 rounded-full font-bold shadow-lg"
              >
                Schedule Now
              </Link>
              <Link 
                href="#membership" 
                className="btn-secondary bg-white text-brand-blue hover:bg-gray-50 px-10 py-4 rounded-full font-bold shadow-lg border-0"
              >
                Become a Member
              </Link>
            </div>
          </div>

          {/* Right Image - Water Heater */}
          <div 
            className={`relative h-[300px] lg:h-[500px] flex items-center justify-center lg:justify-end transition-all duration-700 delay-400
              ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
          >
            <div className="relative w-full max-w-lg h-full group">
              <Image 
                src="/images/services/waterheater2.jpeg" 
                alt="Water Heater Installation" 
                fill
                className="object-cover rounded-3xl shadow-2xl transform rotate-2 group-hover:rotate-0 transition-transform duration-700 border-4 border-white/20"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-3xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
