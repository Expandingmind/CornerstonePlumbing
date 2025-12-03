import { ArrowRight } from "lucide-react";

export default function BlogPreview() {
  const posts = [
    {
      category: "Water Heaters",
      title: "Why Is Your Tankless Water Heater Making Noise?",
      excerpt: "Most often, it's mineral buildup or a loose part. Discover what each sound means."
    },
    {
      category: "Maintenance",
      title: "5 Signs You Need a Sewer Line Inspection",
      excerpt: "Don't wait for a backup. Learn the early warning signs of sewer trouble."
    },
    {
      category: "Smart Home",
      title: "Best Smart Water Shutoffs Ranked by Plumbers",
      excerpt: "Our master plumbers ranked the best smart water shutoff products for 2025."
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Cornerstone Knows Best</h2>
          <p className="text-gray-500 text-lg">Quick answers to your most common plumbing questions.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {posts.map((post, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col group cursor-pointer hover:-translate-y-1">
              <span className="text-brand-blue text-xs font-bold tracking-wider uppercase mb-6">{post.category}</span>
              <h3 className="text-xl font-bold text-navy-900 mb-4 leading-tight group-hover:text-brand-blue transition-colors">{post.title}</h3>
              <p className="text-gray-500 mb-8 flex-grow text-sm leading-relaxed">{post.excerpt}</p>
              <div className="flex items-center gap-2 text-navy-900 font-bold text-sm group-hover:text-brand-blue transition-colors">
                Read Article <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
