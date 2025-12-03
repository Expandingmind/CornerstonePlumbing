import { Truck, Zap, Headset, UserCheck } from "lucide-react";

export default function TrustBand() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Trusted Plumbing Experts in Miami</h2>
          <p className="text-gray-500 text-lg">Serving our community with pride and excellence.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Same-Day Service (Navy) */}
          <div className="relative h-64 md:h-80 rounded-3xl overflow-hidden bg-navy-900 group cursor-default">
            {/* Background Pattern/Icon */}
            <div className="absolute right-[-20px] bottom-[-20px] opacity-10 group-hover:opacity-20 transition-opacity duration-500">
              <Truck className="w-64 h-64 text-white transform -rotate-12" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent" />
            
            <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight max-w-xs">
                Get Fixed <span className="italic text-brand-light">Fast</span> With Same-Day Service.
              </h3>
              {/* Visual Placeholder for Van */}
              <div className="self-end mt-auto w-full h-32 relative">
                 {/* Abstract representation of a van in motion */}
                 <div className="absolute bottom-0 right-0 w-48 h-24 bg-white/10 rounded-lg backdrop-blur-sm border border-white/10 flex items-center justify-center">
                    <Truck className="w-12 h-12 text-brand-light" />
                    <div className="absolute -left-4 bottom-2 w-12 h-1 bg-brand-light rounded-full opacity-50" />
                    <div className="absolute -left-8 bottom-6 w-8 h-1 bg-brand-light rounded-full opacity-30" />
                 </div>
              </div>
            </div>
          </div>

          {/* Card 2: Technology (Brand Blue) */}
          <div className="relative h-64 md:h-80 rounded-3xl overflow-hidden bg-brand-blue group cursor-default">
             <div className="absolute right-[-20px] top-[-20px] opacity-10 group-hover:opacity-20 transition-opacity duration-500">
              <Zap className="w-64 h-64 text-white transform rotate-12" />
            </div>
            
            <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight max-w-xs">
                Save Time And Money With The Newest Technology.
              </h3>
              
               {/* Visual Placeholder for Tech */}
               <div className="self-end mt-auto flex gap-4 items-end">
                  <div className="w-20 h-24 bg-white/20 rounded-xl backdrop-blur-md border border-white/30 flex items-center justify-center transform -rotate-6">
                     <Zap className="w-10 h-10 text-white" />
                  </div>
                  <div className="w-24 h-32 bg-white/20 rounded-xl backdrop-blur-md border border-white/30 flex items-center justify-center transform rotate-3">
                      <div className="w-16 h-16 rounded-full border-2 border-white/50 flex items-center justify-center">
                         <span className="text-white font-bold text-xs">AI SCAN</span>
                      </div>
                  </div>
               </div>
            </div>
          </div>

          {/* Card 3: Concierge (Navy Light/Grey) */}
          <div className="relative h-64 md:h-80 rounded-3xl overflow-hidden bg-[#1a2332] group cursor-default">
             <div className="absolute left-[-20px] bottom-[-20px] opacity-5 group-hover:opacity-10 transition-opacity duration-500">
              <Headset className="w-64 h-64 text-white" />
            </div>
            <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: 'url(/placeholder-office.jpg)' }} /> {/* Fallback if no image */}
            
            <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end z-10">
               <div className="mb-auto">
                  {/* Headset Icon Badge */}
                  <div className="w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center mb-6 shadow-lg">
                     <Headset className="w-6 h-6 text-white" />
                  </div>
               </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight max-w-md">
                Stay Updated With A Dedicated Concierge Team
              </h3>
            </div>
          </div>

          {/* Card 4: Technicians (Navy) */}
          <div className="relative h-64 md:h-80 rounded-3xl overflow-hidden bg-navy-800 group cursor-default">
            <div className="absolute right-[-20px] bottom-[-40px] opacity-10 group-hover:opacity-20 transition-opacity duration-500">
              <UserCheck className="w-72 h-72 text-white" />
            </div>
            
            <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end z-10">
              <div className="mb-auto flex justify-end">
                  <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                    <span className="text-brand-light font-bold text-sm tracking-wider uppercase">Certified Pros</span>
                  </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight max-w-md">
                Repairs done right by Cornerstone-approved technicians.
              </h3>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
