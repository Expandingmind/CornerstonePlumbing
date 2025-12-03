import Link from "next/link";
import Image from "next/image";

export default function CallToAction() {
  return (
    <section className="relative bg-brand-blue overflow-hidden py-24">
      {/* Abstract Background Lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -right-[10%] top-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/20 rounded-full" />
        <div className="absolute -right-[20%] top-1/2 -translate-y-1/2 w-[1000px] h-[1000px] border border-white/20 rounded-full" />
        <div className="absolute -right-[5%] top-[60%] -translate-y-1/2 w-[600px] h-[600px] border border-white/20 rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Ready to get your Gas Leak Detection started?
            </h2>
            <p className="text-white/90 text-lg md:text-xl mb-10 leading-relaxed">
              Sniff out trouble before it blows! Keep your nose safe.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link 
                href="#contact" 
                className="bg-navy-900 text-white hover:bg-navy-800 px-10 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Schedule Now
              </Link>
              <Link 
                href="#membership" 
                className="bg-white text-brand-blue hover:bg-gray-50 px-10 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Become a Member
              </Link>
            </div>
          </div>

          {/* Right Image - Van */}
          <div className="relative h-[300px] lg:h-[500px] flex items-center justify-center lg:justify-end">
            {/* Using the commercial plumbing image as a placeholder for the van if a specific van image isn't provided yet */}
            {/* Ideally, replace "/images/services/commercialplumbing2.png" with a dedicated transparent van PNG */}
            <div className="relative w-full max-w-2xl h-full">
               <Image 
                 src="/images/services/commercialplumbing2.png" 
                 alt="Cornerstone Plumbing Van" 
                 fill
                 className="object-contain object-right drop-shadow-2xl transform translate-y-6 hover:scale-105 transition-transform duration-700"
                 sizes="(max-width: 768px) 100vw, 50vw"
               />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
