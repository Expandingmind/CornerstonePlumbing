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
    <section id="membership" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Cornerstone Care Membership</h2>
          <p className="text-gray-600 text-lg">
            Join 'The Cornerstone Club' and get on-demand plumbing help, exclusive savings, and proactive maintenance.
          </p>
        </div>

        <div className="max-w-md mx-auto bg-navy-900 text-white rounded-3xl overflow-hidden shadow-2xl relative transform hover:scale-105 transition-transform duration-300">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue rounded-full blur-3xl opacity-20 -mr-16 -mt-16" />
          
          <div className="p-8 md:p-12">
            <div className="text-center mb-8">
              <p className="text-brand-light font-bold uppercase tracking-wider text-sm mb-2">Club Membership</p>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-xl text-gray-400">From</span>
                <span className="text-5xl font-bold">$27.50</span>
                <span className="text-gray-400">/month</span>
              </div>
            </div>

            <ul className="space-y-4 mb-10">
              {benefits.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="mt-1 bg-brand-blue rounded-full p-0.5">
                    <Check className="w-3 h-3 text-white" strokeWidth={4} />
                  </div>
                  <span className="text-gray-200">{item}</span>
                </li>
              ))}
            </ul>

            <button className="w-full bg-brand-blue hover:bg-brand-light text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-blue-500/30">
              Join the Club
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

