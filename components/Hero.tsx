"use client";

import Link from "next/link";
import { Star } from "lucide-react";
import { usePageLoadAnimation } from "@/hooks/useScrollAnimation";

// Simple icons for the review badges
const GoogleIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
  </svg>
);

const YelpIcon = () => (
  <svg className="w-6 h-6 text-red-600" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
  </svg>
);

export default function Hero() {
  const isLoaded = usePageLoadAnimation(100);

  return (
    <section className="relative bg-navy-900 overflow-hidden pt-12 pb-20 md:pt-32 md:pb-48 min-h-[85vh] flex items-center">
      {/* Large Abstract Circle/Shape Background - Animated */}
      <div 
        className={`absolute top-0 right-0 w-[140vh] h-[140vh] bg-brand-blue rounded-full z-0 transform transition-all duration-1000 ease-out-expo
          ${isLoaded 
            ? 'opacity-100 translate-x-[30%] -translate-y-[20%] md:translate-x-[15%] md:-translate-y-[25%]' 
            : 'opacity-0 translate-x-[50%] -translate-y-[40%]'
          }`} 
      />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 h-full">
        <div className="max-w-2xl pt-10">
          {/* Eyebrow - Stagger 1 */}
          <div 
            className={`text-gray-300 text-sm md:text-base font-medium mb-6 tracking-wide uppercase transition-all duration-700 delay-100
              ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            Residential Plumbing Service in Miami
          </div>
          
          {/* Headline - Stagger 2, 3, 4 */}
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-8 tracking-tight">
            <span 
              className={`block transition-all duration-700 delay-200
                ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              Hire A Plumber Who
            </span>
            <span 
              className={`block transition-all duration-700 delay-300
                ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              Cares About You <span className="italic text-brand-light">and</span>
            </span>
            <span 
              className={`block transition-all duration-700 delay-[400ms]
                ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              Your Home
            </span>
          </h1>
          
          {/* Paragraph - Stagger 5 */}
          <p 
            className={`text-lg text-gray-300 mb-10 max-w-lg leading-relaxed font-light transition-all duration-700 delay-500
              ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            When plumbing breaks, it's stressful. Our team will fix your 
            plumbing problem and keep you updated every step of the 
            way. Your peace of mind is our goal.
          </p>
          
          {/* Button - Stagger 6 */}
          <div 
            className={`flex flex-wrap gap-4 mb-12 transition-all duration-700 delay-[600ms]
              ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <Link 
              href="#contact" 
              className="btn-primary bg-brand-blue hover:bg-brand-light text-white px-10 py-4 rounded-full text-lg font-bold shadow-lg hover:shadow-xl"
            >
              Book a Miami Plumber Now
            </Link>
          </div>

          {/* Reviews Strip - Stagger 7 */}
          <div 
            className={`flex flex-wrap items-center gap-8 md:gap-12 pt-4 border-t border-white/10 transition-all duration-700 delay-700
              ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            {/* Google */}
            <div className="flex items-center gap-3 group cursor-default">
              <div className="transition-transform duration-300 group-hover:scale-110">
                <GoogleIcon />
              </div>
              <div>
                <div className="flex items-center gap-1 text-white text-base font-bold">
                  5.0 <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                </div>
                <div className="text-sm text-gray-400">112 Reviews</div>
              </div>
            </div>

            {/* Yelp */}
            <div className="flex items-center gap-3 group cursor-default">
              <div className="transition-transform duration-300 group-hover:scale-110">
                <YelpIcon />
              </div>
              <div>
                <div className="flex items-center gap-1 text-white text-base font-bold">
                  4.8 <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                </div>
                <div className="text-sm text-gray-400">34 Reviews</div>
              </div>
            </div>

            {/* Thumbtack */}
            <div className="flex items-center gap-3 group cursor-default">
              <div className="w-6 h-6 bg-white text-[#29A5E0] font-bold flex items-center justify-center rounded-full text-xs transition-transform duration-300 group-hover:scale-110">T</div>
              <div>
                <div className="flex items-center gap-1 text-white text-base font-bold">
                  5.0 <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                </div>
                <div className="text-sm text-gray-400">53 Reviews</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
