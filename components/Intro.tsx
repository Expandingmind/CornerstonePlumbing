import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Intro() {
  return (
    <section className="py-20 bg-white text-center">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl md:text-5xl font-bold text-navy-900 mb-8 leading-tight">
          Plumbing problems are stressful. <br />
          <span className="text-brand-blue">Cornerstone makes them simple.</span>
        </h2>
        
        <div className="space-y-6 text-lg text-gray-600 mb-10 leading-relaxed">
          <p>
            From the first call to the shoe covers and clean-up, we treat your home with the 
            utmost respect. We understand that when you call a plumber, you need more than just a fix—you need peace of mind.
          </p>
          <p>
            Expect clear communication, upfront pricing, and technicians who care. 
            Breathe a sigh of relief when you choose a plumber that puts you first.
          </p>
        </div>

        <Link 
          href="#reviews" 
          className="inline-flex items-center gap-2 text-brand-blue font-bold text-lg hover:underline decoration-2 underline-offset-4"
        >
          See why homeowners choose Cornerstone
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
}

