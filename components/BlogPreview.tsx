"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function BlogPreview() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const posts = [
    {
      category: "WATER HEATERS",
      title: "Why Is Your Tankless Water Heater Making Noise?",
      excerpt: "Most often, it's mineral buildup or a loose part. Discover what each sound means.",
      image: "/images/services/waterheater.jpeg",
      slug: "tankless-noise"
    },
    {
      category: "MAINTENANCE",
      title: "5 Signs You Need a Sewer Line Inspection",
      excerpt: "Don't wait for a backup. Learn the early warning signs of sewer trouble.",
      image: "/images/services/commercialplumbing.jpeg",
      slug: "sewer-inspection"
    },
    {
      category: "SMART HOME",
      title: "Best Smart Water Shutoffs Ranked by Plumbers",
      excerpt: "Our master plumbers ranked the best smart water shutoff products for 2025.",
      image: "/images/services/Cartridgeinstalls.jpeg",
      slug: "smart-shutoffs"
    }
  ];

  return (
    <section className="py-24 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div 
          className={`text-center mb-16 transition-all duration-700
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Cornerstone Knows Best</h2>
          <p className="text-gray-500 text-lg">Quick answers to your most common plumbing questions.</p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {posts.map((post, idx) => (
            <Link 
              key={idx} 
              href="#contact"
              className={`group bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm flex flex-col card-hover card-image-zoom
                transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${idx * 150 + 200}ms` }}
            >
              {/* Image Area */}
              <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                <Image 
                  src={post.image} 
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full transform group-hover:scale-105 transition-transform duration-300">
                  <span className="text-brand-blue text-[10px] font-bold tracking-widest uppercase">{post.category}</span>
                </div>
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-navy-900 mb-3 leading-tight group-hover:text-brand-blue transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-gray-500 mb-6 text-sm leading-relaxed flex-grow">
                  {post.excerpt}
                </p>
                
                <div className="mt-auto">
                  <span className="inline-flex items-center gap-2 text-navy-900 font-bold text-sm group-hover:text-brand-blue transition-colors duration-300">
                    Read Article 
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
