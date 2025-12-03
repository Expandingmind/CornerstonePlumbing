import { Star } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      name: "Maria R.",
      location: "Brickell",
      text: "Cornerstone saved the day! I had a major leak at 2am and they were there within the hour. The technician was polite, clean, and fixed the issue quickly.",
      stars: 5
    },
    {
      name: "James H.",
      location: "Coral Gables",
      text: "Finally a plumber I can trust. Upfront pricing and no hidden fees. They even wore shoe covers which I really appreciated. Highly recommended!",
      stars: 5
    },
    {
      name: "Sarah K.",
      location: "Miami Beach",
      text: "We use Cornerstone for all our commercial properties. They are professional, reliable, and always do quality work. Best in Miami hands down.",
      stars: 5
    },
    {
      name: "David L.",
      location: "Kendall",
      text: "Replaced my water heater same-day. The process was seamless from the phone call to the installation. Great communication throughout.",
      stars: 5
    }
  ];

  return (
    <section id="reviews" className="py-20 bg-navy-900 text-white">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Homeowners Love Cornerstone Plumbing</h2>
          <p className="text-gray-400 text-lg">Real reviews from customers across Miami.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-navy-800 p-6 rounded-2xl border border-white/5 hover:border-brand-blue/30 transition-all hover:-translate-y-1 shadow-lg">
              <div className="flex gap-1 text-yellow-400 mb-4">
                {[...Array(review.stars)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <blockquote className="text-gray-300 mb-6 leading-relaxed text-sm">
                "{review.text}"
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-blue flex items-center justify-center font-bold text-white">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-white text-sm">{review.name}</div>
                  <div className="text-xs text-brand-light">{review.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

