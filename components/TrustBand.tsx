import { Award, ShieldCheck, ThumbsUp, MapPin } from "lucide-react";

export default function TrustBand() {
  const badges = [
    { icon: <Award className="w-6 h-6" />, label: "Top Rated" },
    { icon: <ShieldCheck className="w-6 h-6" />, label: "Licensed & Insured" },
    { icon: <ThumbsUp className="w-6 h-6" />, label: "100% Recommended" },
    { icon: <MapPin className="w-6 h-6" />, label: "Miami Local" },
  ];

  return (
    <section className="bg-gray-50 py-10 border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-xl font-bold text-navy-900">Trusted Plumbing Experts in Miami</h2>
          <p className="text-gray-500 text-sm">Serving our community with pride and excellence.</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale transition-all hover:grayscale-0">
          {badges.map((badge, index) => (
            <div key={index} className="flex items-center gap-3 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-200">
              <div className="text-brand-blue">{badge.icon}</div>
              <span className="font-bold text-navy-800">{badge.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

