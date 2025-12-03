import Link from "next/link";
import { Phone, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-navy-900 overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32">
      {/* Abstract Shape Background */}
      <div className="absolute top-0 right-0 w-[80%] md:w-[50%] h-full bg-brand-blue rounded-l-[100px] md:rounded-l-[200px] opacity-90 z-0 transform translate-x-[20%] md:translate-x-0" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-2xl">
          <div className="inline-block bg-brand-light/20 text-brand-lighter px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
            Residential & Commercial Plumbing in Miami
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            Hire Plumbers Who <br className="hidden md:block" />
            Treat Your Home <br className="hidden md:block" />
            <span className="text-brand-lighter">Like Their Own.</span>
          </h1>
          
          <p className="text-lg text-gray-300 mb-8 max-w-lg leading-relaxed">
            When plumbing breaks, it’s stressful. Our team will fix your plumbing problem 
            and keep you updated every step of the way. No surprises, just honest work.
            Your peace of mind is our goal.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a 
              href="tel:3058487178" 
              className="flex items-center justify-center gap-2 bg-brand-blue hover:bg-brand-light text-white px-8 py-4 rounded-full text-lg font-bold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
            <Link 
              href="#contact" 
              className="flex items-center justify-center px-8 py-4 rounded-full text-lg font-bold border-2 border-white text-white hover:bg-white hover:text-navy-900 transition-all"
            >
              Schedule Service
            </Link>
          </div>
          
          <p className="text-sm text-gray-400 mb-8 font-medium flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Available 24/7 for emergency plumbing calls.
          </p>

          {/* Review Strip */}
          <div className="flex items-center gap-4 pt-4 border-t border-white/10">
            <div className="flex -space-x-2">
              {/* Placeholder avatars using colored circles */}
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-navy-900 flex items-center justify-center text-xs font-bold text-navy-900">
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <div>
              <div className="flex gap-0.5 text-yellow-400 mb-1">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </div>
              <p className="text-white text-sm font-medium">
                5.0 from local homeowners
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

