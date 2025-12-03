import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function BlogPreview() {
  const posts = [
    {
      category: "WATER HEATERS",
      title: "Why Is Your Tankless Water Heater Making Noise?",
      excerpt: "Most often, it's mineral buildup or a loose part. Discover what each sound means.",
      image: "/images/services/waterheater.jpeg", // Fallback image since we don't have dedicated blog thumbs
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
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Cornerstone Knows Best</h2>
          <p className="text-gray-500 text-lg">Quick answers to your most common plumbing questions.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {posts.map((post, idx) => (
            <Link 
              key={idx} 
              href="#contact"
              className="group bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              {/* Image Area - Added to match reference visual richness */}
              <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                <Image 
                  src={post.image} 
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-brand-blue text-[10px] font-bold tracking-widest uppercase">{post.category}</span>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-navy-900 mb-3 leading-tight group-hover:text-brand-blue transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-500 mb-6 text-sm leading-relaxed flex-grow">
                  {post.excerpt}
                </p>
                
                <div className="mt-auto">
                  <span className="inline-flex items-center gap-2 text-navy-900 font-bold text-sm group-hover:text-brand-blue transition-colors">
                    Read Article <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
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
