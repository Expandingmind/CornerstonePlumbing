"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Intro() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="py-20 bg-white text-center" ref={ref}>
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Heading */}
        <h2 
          className={`text-3xl md:text-5xl font-bold text-navy-900 mb-8 leading-tight transition-all duration-700
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          Plumbing problems are stressful. <br />
          <span className="text-brand-blue">Cornerstone makes them simple.</span>
        </h2>
        
        {/* Paragraphs */}
        <div 
          className={`space-y-6 text-lg text-gray-600 mb-10 leading-relaxed transition-all duration-700 delay-200
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p>
            From the first call to the shoe covers and clean-up, we treat your home with the 
            utmost respect. We understand that when you call a plumber, you need more than just a fix—you need peace of mind.
          </p>
          <p>
            Expect clear communication, upfront pricing, and technicians who care. 
            Breathe a sigh of relief when you choose a plumber that puts you first.
          </p>
        </div>

        {/* CTA Link */}
        <Link 
          href="#reviews" 
          className={`inline-flex items-center gap-2 text-brand-blue font-bold text-lg hover:underline decoration-2 underline-offset-4 group transition-all duration-700 delay-300
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          See why homeowners choose Cornerstone
          <ArrowRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" />
        </Link>
      </div>
    </section>
  );
}
