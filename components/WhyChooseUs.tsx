import { Clock, DollarSign, ShieldCheck, Sparkles } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <Clock className="w-8 h-8 text-brand-blue" />,
      title: "Same-Day Service",
      description: "We know plumbing issues can't wait. We offer same-day appointments to get your home back to normal fast."
    },
    {
      icon: <DollarSign className="w-8 h-8 text-brand-blue" />,
      title: "Upfront, Honest Pricing",
      description: "No surprises. We provide clear, upfront quotes before we start any work so you know exactly what to expect."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-brand-blue" />,
      title: "Licensed & Insured",
      description: "Our technicians are fully licensed, bonded, and insured. You can trust us with your home's most critical systems."
    },
    {
      icon: <Sparkles className="w-8 h-8 text-brand-blue" />,
      title: "Clean, Respectful Work",
      description: "We treat your home like our own. We use shoe covers, work mats, and clean up thoroughly after every job."
    }
  ];

  return (
    <section id="why-cornerstone" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Why Choose Cornerstone for Your Plumbing Repair?
          </h2>
          <p className="text-gray-600">
            We're not just plumbers; we're your neighbors. We're dedicated to providing the highest quality service with integrity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:shadow-xl hover:bg-white transition-all group">
              <div className="mb-6 bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

