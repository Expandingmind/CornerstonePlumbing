import { Check } from "lucide-react";

export default function Membership() {
  const benefits = [
    "Priority scheduling & front-of-line access",
    "Annual whole-home plumbing inspection",
    "Discounted rates on all repairs",
    "Extended warranties on select services",
    "No emergency dispatch fees",
    "Peace of mind guaranteed"
  ];

  return (
    <section id="membership" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Cornerstone Care Membership</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Join 'The Cornerstone Club' from $27.50/month and get on demand plumbing help and more.
          </p>
        </div>

        {/* Card Container - Matching the dark floating card style */}
        <div className="max-w-md mx-auto bg-navy-900 text-white rounded-3xl overflow-hidden shadow-2xl relative transform hover:scale-[1.02] transition-transform duration-300">
          <div className="p-8 md:p-12">
            <div className="text-center mb-8">
              <p className="text-brand-light font-bold text-xs tracking-widest uppercase mb-4">CLUB MEMBERSHIP</p>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-xl text-gray-400 font-medium">From</span>
                <span className="text-6xl font-bold text-white">$27.50</span>
                <span className="text-xl text-gray-400 font-medium">/month</span>
              </div>
            </div>

            <div className="space-y-5 mb-10">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="mt-1 bg-brand-blue rounded-full p-1 flex-shrink-0">
                    <Check className="w-3 h-3 text-white" strokeWidth={4} />
                  </div>
                  <span className="text-gray-300 font-medium leading-snug">{benefit}</span>
                </div>
              ))}
            </div>

            <a 
              href="#contact" 
              className="block w-full text-center bg-brand-blue hover:bg-brand-light text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-blue-500/30 text-lg"
            >
              Join the Club
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
