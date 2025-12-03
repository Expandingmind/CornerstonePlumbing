import Image from "next/image";
import Link from "next/link";

const services = [
  { 
    name: "Drain Cleaning", 
    image: "/images/services/draincleaning.heic", // Using heic might need conversion or specific config, fallback to others if issue
    fallbackImage: "/images/services/plumbing.png" // Using a generic plumbing one as safe fallback
  },
  { 
    name: "Commercial Plumbing", 
    image: "/images/services/commercialplumbing2.png",
  },
  { 
    name: "Water Heater Replacement", 
    image: "/images/services/waterheater.jpeg",
  },
  { 
    name: "Leak Detection & Repair", 
    image: "/images/services/Cartridgeinstalls.jpeg", // Using Cartridge install image as it shows plumbing parts
  },
  { 
    name: "Bathroom Remodeling", 
    image: "/images/services/bathroomremodeling.jpeg",
  },
  { 
    name: "Toilet Repair", 
    image: "/images/services/toilet.jpeg",
  },
  { 
    name: "Shower Services", 
    image: "/images/services/shower.jpeg",
  },
  { 
    name: "Camera Inspections", 
    image: "/images/services/camerainspections.jpeg",
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-navy-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Plumbing Services</h2>
          <p className="text-gray-400 text-lg">Precision Plumbing. Not An Oxymoron.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-2xl overflow-hidden flex flex-col shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group h-[320px] cursor-pointer relative"
            >
              {/* Image Area - Covers most of card */}
              <div className="relative h-[240px] w-full bg-gray-100">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                {/* Gradient Overlay for better text readability if needed later, keeping clean for now matching screenshot style */}
                <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/10 transition-colors duration-300" />
              </div>
              
              {/* Text Label Area - Bottom Strip */}
              <div className="bg-white p-5 h-[80px] flex items-center justify-center relative z-10">
                <h3 className="text-navy-900 font-bold text-lg leading-tight text-center">
                  {service.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link 
            href="#contact" 
            className="inline-block bg-brand-blue hover:bg-brand-light text-white font-bold py-3 px-10 rounded-full transition-all shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-0.5"
          >
            More Services
          </Link>
        </div>
      </div>
    </section>
  );
}
