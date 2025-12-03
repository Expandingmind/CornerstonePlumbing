import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="relative bg-brand-blue overflow-hidden py-20 lg:py-24">
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Ready for the future of plumbing?
            </h2>
            <p className="text-white/90 text-lg md:text-xl mb-10 leading-relaxed">
              Make your home care easier, smarter, and stress-free. 
              Discover the difference with Cornerstone.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link 
                href="#contact" 
                className="bg-navy-900 text-white hover:bg-navy-800 px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Schedule Now
              </Link>
              <Link 
                href="#membership" 
                className="bg-white text-brand-blue hover:bg-gray-50 px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Become a Member
              </Link>
            </div>
          </div>

          {/* Right Image Placeholder */}
          <div className="relative h-[300px] lg:h-[400px] flex items-center justify-center">
            {/* 
              Note: Replace this div with your actual van image.
              Example: <Image src="/van.png" alt="Cornerstone Van" width={600} height={400} className="object-contain" />
            */}
            <div className="relative w-full max-w-lg aspect-[4/3] bg-navy-900/10 rounded-xl border-2 border-dashed border-white/30 flex flex-col items-center justify-center text-white p-8 text-center backdrop-blur-sm">
              <span className="text-sm font-mono bg-white/20 px-2 py-1 rounded mb-4">Image Placeholder</span>
              <p className="font-bold text-xl">Cornerstone Van Image</p>
              <p className="text-sm mt-2 opacity-80">Add your transparent PNG van image here</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

