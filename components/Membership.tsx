"use client";

import { Check, Shield, Clock, Wrench, Star } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Membership() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const benefits = [
    "Priority scheduling & front-of-line access",
    "Annual whole-home plumbing inspection",
    "15% off all repairs & installations",
    "Extended warranties on select services",
    "No emergency dispatch fees",
    "Direct line to your dedicated tech"
  ];

  const highlights = [
    { icon: Shield, label: "Protected", desc: "Year-round" },
    { icon: Clock, label: "Priority", desc: "Same-day" },
    { icon: Wrench, label: "Savings", desc: "15% off" },
  ];

  return (
    <section id="membership" className="py-12 md:py-24 bg-gray-50 relative overflow-hidden" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center max-w-6xl mx-auto">
          
          {/* Left Content */}
          <div 
            className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}
          >
            <div 
              className={`inline-flex items-center gap-2 bg-brand-blue/10 text-brand-blue px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-bold mb-4 md:mb-6 transition-all duration-700 delay-100
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              <Star className="w-3 h-3 md:w-4 md:h-4 fill-brand-blue" />
              Save up to $500/year
            </div>
            
            <h2 
              className={`text-2xl md:text-5xl font-bold text-navy-900 mb-4 md:mb-6 leading-tight transition-all duration-700 delay-200
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              Join The <span className="text-brand-blue">Cornerstone Club</span>
            </h2>
            
            <p 
              className={`text-gray-600 text-sm md:text-lg mb-6 md:mb-10 leading-relaxed transition-all duration-700 delay-300
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              Get priority service, exclusive discounts, and peace of mind knowing your home&apos;s plumbing is always protected.
            </p>

            {/* Highlight Cards - Compact on mobile */}
            <div className="grid grid-cols-3 gap-2 md:gap-4 mb-6 md:mb-8">
              {highlights.map((item, idx) => (
                <div 
                  key={idx} 
                  className={`bg-white rounded-xl md:rounded-2xl p-2 md:p-4 shadow-sm border border-gray-100 text-center card-hover transition-all duration-700
                    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${idx * 100 + 400}ms` }}
                >
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-navy-900 rounded-lg md:rounded-xl flex items-center justify-center mx-auto mb-2 md:mb-3">
                    <item.icon className="w-4 h-4 md:w-5 md:h-5 text-brand-light" />
                  </div>
                  <p className="font-bold text-navy-900 text-xs md:text-sm">{item.label}</p>
                  <p className="text-gray-500 text-[10px] md:text-xs mt-0.5 md:mt-1">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Trust Badge - Hidden on mobile */}
            <div 
              className={`hidden md:flex items-center gap-3 text-gray-500 text-sm transition-all duration-700 delay-700
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              <div className="flex -space-x-2">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-blue to-navy-900 border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <span>Join <strong className="text-navy-900">200+ Miami homeowners</strong> in the club</span>
            </div>
          </div>

          {/* Right: Pricing Card - Compact on mobile */}
          <div 
            className={`relative transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
          >
            {/* Decorative blur - Smaller on mobile */}
            <div className="absolute -top-5 -right-5 md:-top-10 md:-right-10 w-20 md:w-40 h-20 md:h-40 bg-brand-blue/20 rounded-full blur-3xl animate-pulse-glow" />
            <div className="absolute -bottom-5 -left-5 md:-bottom-10 md:-left-10 w-16 md:w-32 h-16 md:h-32 bg-navy-900/20 rounded-full blur-3xl" />
            
            <div className="relative bg-navy-900 text-white rounded-2xl md:rounded-[2rem] overflow-hidden shadow-2xl card-hover">
              {/* Popular Badge */}
              <div className="absolute top-4 right-4 md:top-6 md:right-6">
                <span className="bg-brand-blue text-white text-[10px] md:text-xs font-bold px-2 py-1 md:px-3 md:py-1.5 rounded-full uppercase tracking-wider">
                  Most Popular
                </span>
              </div>

              <div className="p-5 md:p-10">
                {/* Price */}
                <div className="mb-5 md:mb-8 pt-2 md:pt-4">
                  <p className="text-brand-light font-bold text-[10px] md:text-xs tracking-widest uppercase mb-2 md:mb-3">MEMBERSHIP</p>
                  <div className="flex items-baseline gap-1 md:gap-2">
                    <span className="text-gray-400 text-sm md:text-lg">From</span>
                    <span className="text-4xl md:text-6xl font-bold text-white tracking-tight">$27</span>
                    <div className="flex flex-col">
                      <span className="text-xl md:text-2xl font-bold text-white">.50</span>
                      <span className="text-gray-400 text-xs md:text-sm">/month</span>
                    </div>
                  </div>
                  <p className="text-gray-500 text-xs md:text-sm mt-1 md:mt-2">Billed annually • Cancel anytime</p>
                </div>

                {/* Divider */}
                <div className="h-px bg-white/10 mb-5 md:mb-8" />

                {/* Benefits - Smaller on mobile */}
                <div className="space-y-2 md:space-y-4 mb-5 md:mb-8">
                  {benefits.map((benefit, idx) => (
                    <div 
                      key={idx} 
                      className={`flex items-center gap-2 md:gap-3 transition-all duration-500
                        ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}
                      style={{ transitionDelay: `${idx * 75 + 600}ms` }}
                    >
                      <div className="w-4 h-4 md:w-5 md:h-5 bg-brand-blue/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-2.5 h-2.5 md:w-3 md:h-3 text-brand-light" strokeWidth={3} />
                      </div>
                      <span className="text-gray-300 text-xs md:text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a 
                  href="#contact" 
                  className="btn-primary block w-full text-center bg-brand-blue hover:bg-brand-light text-white font-bold py-3 md:py-4 rounded-xl shadow-lg shadow-brand-blue/30 text-sm md:text-base"
                >
                  Get Started Today
                </a>

                <p className="text-center text-gray-500 text-[10px] md:text-xs mt-3 md:mt-4">
                  No contracts • 30-day money back guarantee
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
