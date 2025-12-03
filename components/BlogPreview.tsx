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
    <section className="py-20 bg-brand-blue/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Cornerstone Knows Best</h2>
          <p className="text-gray-600">Quick answers to your most common plumbing questions.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col">
              <span className="text-brand-blue text-xs font-bold tracking-wider uppercase mb-4">{post.category}</span>
              <h3 className="text-xl font-bold text-navy-900 mb-3">{post.title}</h3>
              <p className="text-gray-600 mb-6 flex-grow text-sm leading-relaxed">{post.excerpt}</p>
              <a href="#" className="inline-flex items-center gap-2 text-navy-900 font-bold hover:text-brand-blue transition-colors text-sm">
                Read Article <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

