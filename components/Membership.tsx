import { Check, Shield, Clock, Wrench, Star } from "lucide-react";

export default function Membership() {
  const benefits = [
    "Priority scheduling & front-of-line access",
    "Annual whole-home plumbing inspection",
    "15% off all repairs & installations",
    "Extended warranties on select services",
    "No emergency dispatch fees",
    "Direct line to your dedicated tech"
  ];

  const highlights = [
    { icon: Shield, label: "Protected", desc: "Year-round coverage" },
    { icon: Clock, label: "Priority", desc: "Same-day response" },
    { icon: Wrench, label: "Savings", desc: "15% off repairs" },
  ];

  return (
    <section id="membership" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
          
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-brand-blue/10 text-brand-blue px-4 py-2 rounded-full text-sm font-bold mb-6">
              <Star className="w-4 h-4 fill-brand-blue" />
              Save up to $500/year
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6 leading-tight">
              Join The <br />
              <span className="text-brand-blue">Cornerstone Club</span>
            </h2>
            
            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
              Get priority service, exclusive discounts, and peace of mind knowing your home's plumbing is always protected by Miami's most trusted team.
            </p>

            {/* Highlight Cards */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {highlights.map((item, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 text-center">
                  <div className="w-10 h-10 bg-navy-900 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <item.icon className="w-5 h-5 text-brand-light" />
                  </div>
                  <p className="font-bold text-navy-900 text-sm">{item.label}</p>
                  <p className="text-gray-500 text-xs mt-1">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Trust Badge */}
            <div className="flex items-center gap-3 text-gray-500 text-sm">
              <div className="flex -space-x-2">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-blue to-navy-900 border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <span>Join <strong className="text-navy-900">200+ Miami homeowners</strong> in the club</span>
            </div>
          </div>

          {/* Right: Pricing Card */}
          <div className="relative">
            {/* Decorative blur */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-blue/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-navy-900/20 rounded-full blur-3xl" />
            
            <div className="relative bg-navy-900 text-white rounded-[2rem] overflow-hidden shadow-2xl">
              {/* Popular Badge */}
              <div className="absolute top-6 right-6">
                <span className="bg-brand-blue text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                  Most Popular
                </span>
              </div>

              <div className="p-8 md:p-10">
                {/* Price */}
                <div className="mb-8 pt-4">
                  <p className="text-brand-light font-bold text-xs tracking-widest uppercase mb-3">MEMBERSHIP</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-gray-400 text-lg">From</span>
                    <span className="text-5xl md:text-6xl font-bold text-white tracking-tight">$27</span>
                    <div className="flex flex-col">
                      <span className="text-2xl font-bold text-white">.50</span>
                      <span className="text-gray-400 text-sm">/month</span>
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm mt-2">Billed annually • Cancel anytime</p>
                </div>

                {/* Divider */}
                <div className="h-px bg-white/10 mb-8" />

                {/* Benefits */}
                <div className="space-y-4 mb-8">
                  {benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-brand-blue/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-brand-light" strokeWidth={3} />
                      </div>
                      <span className="text-gray-300 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a 
                  href="#contact" 
                  className="block w-full text-center bg-brand-blue hover:bg-brand-light text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-brand-blue/30 hover:shadow-brand-blue/50 text-base hover:-translate-y-0.5"
                >
                  Get Started Today
                </a>

                <p className="text-center text-gray-500 text-xs mt-4">
                  No contracts • 30-day money back guarantee
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
