"use client";

import { Truck, Zap, Headphones, UserCheck } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function TrustBand() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const cards = [
    {
      icon: Truck,
      title: <>Get Fixed <span className="italic text-brand-light">Fast</span> With Same-Day Service.</>,
      bg: "bg-navy-900",
      iconPosition: "right-[-20px] bottom-[-20px]",
      iconRotate: "-rotate-12",
      content: (
        <div className="self-end mt-auto w-full h-32 relative">
          <div className="absolute bottom-0 right-0 w-48 h-24 bg-white/10 rounded-lg backdrop-blur-sm border border-white/10 flex items-center justify-center group-hover:bg-white/15 transition-colors">
            <Truck className="w-12 h-12 text-brand-light animate-float" />
            <div className="absolute -left-4 bottom-2 w-12 h-1 bg-brand-light rounded-full opacity-50" />
            <div className="absolute -left-8 bottom-6 w-8 h-1 bg-brand-light rounded-full opacity-30" />
          </div>
        </div>
      )
    },
    {
      icon: Zap,
      title: "Save Time And Money With The Newest Technology.",
      bg: "bg-brand-blue",
      iconPosition: "right-[-20px] top-[-20px]",
      iconRotate: "rotate-12",
      content: (
        <div className="self-end mt-auto flex gap-4 items-end">
          <div className="w-20 h-24 bg-white/20 rounded-xl backdrop-blur-md border border-white/30 flex items-center justify-center transform -rotate-6 hover:rotate-0 transition-transform duration-500">
            <Zap className="w-10 h-10 text-white" />
          </div>
          <div className="w-24 h-32 bg-white/20 rounded-xl backdrop-blur-md border border-white/30 flex items-center justify-center transform rotate-3 hover:rotate-0 transition-transform duration-500">
            <div className="w-16 h-16 rounded-full border-2 border-white/50 flex items-center justify-center animate-pulse-glow">
              <span className="text-white font-bold text-xs">AI SCAN</span>
            </div>
          </div>
        </div>
      )
    },
    {
      icon: Headphones,
      title: "Stay Updated With A Dedicated Concierge Team",
      bg: "bg-[#1a2332]",
      iconPosition: "left-[-20px] bottom-[-20px]",
      iconRotate: "",
      content: (
        <div className="mb-auto">
          <div className="w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center mb-6 shadow-lg animate-pulse-glow">
            <Headphones className="w-6 h-6 text-white" />
          </div>
        </div>
      ),
      titlePosition: "justify-end"
    },
    {
      icon: UserCheck,
      title: "Repairs done right by Cornerstone-approved technicians.",
      bg: "bg-navy-800",
      iconPosition: "right-[-20px] bottom-[-40px]",
      iconRotate: "",
      badge: (
        <div className="mb-auto flex justify-end">
          <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 hover:bg-white/15 transition-colors">
            <span className="text-brand-light font-bold text-sm tracking-wider uppercase">Certified Pros</span>
          </div>
        </div>
      ),
      titlePosition: "justify-end"
    }
  ];

  return (
    <section id="why-cornerstone" className="bg-white py-20" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div 
          className={`text-center mb-12 transition-all duration-700 
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Trusted Plumbing Experts in Miami</h2>
          <p className="text-gray-500 text-lg">Serving our community with pride and excellence.</p>
        </div>
        
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, idx) => (
            <div 
              key={idx}
              className={`relative h-64 md:h-80 rounded-3xl overflow-hidden ${card.bg} group cursor-default card-hover card-border-glow
                transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${idx * 100 + 200}ms` }}
            >
              {/* Background Pattern/Icon */}
              <div className={`absolute ${card.iconPosition} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}>
                <card.icon className={`w-64 h-64 text-white transform ${card.iconRotate}`} />
              </div>
              {idx === 0 && <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent" />}
              
              <div className={`absolute inset-0 p-8 md:p-10 flex flex-col ${card.titlePosition || 'justify-between'} z-10`}>
                {card.badge}
                {card.content && (
                  <>
                    <h3 className={`text-2xl md:text-3xl font-bold text-white leading-tight max-w-xs ${card.titlePosition ? 'mt-auto' : ''}`}>
                      {card.title}
                    </h3>
                    {!card.titlePosition && card.content}
                  </>
                )}
                {card.titlePosition && (
                  <>
                    {card.content}
                    <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight max-w-md">
                      {card.title}
                    </h3>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
