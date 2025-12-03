import { 
  Droplets, 
  Flame, 
  Pipette, 
  Wrench, 
  Home, 
  PenTool as Tool, 
  Camera, 
  Filter,
  AlertCircle
} from "lucide-react";
import Link from "next/link";

const services = [
  { 
    name: "Drain Cleaning", 
    icon: <Droplets className="w-16 h-16 text-brand-blue" />,
    description: "Clear stubborn clogs fast."
  },
  { 
    name: "Sewer Line Repair", 
    icon: <Wrench className="w-16 h-16 text-gray-400" />,
    description: "Expert sewer line solutions."
  },
  { 
    name: "Water Heater Replacement", 
    icon: <Flame className="w-16 h-16 text-red-400" />, // Little color variation for visual interest like screenshot
    description: "Hot water when you need it."
  },
  { 
    name: "Water Leak Detection", 
    icon: <Pipette className="w-16 h-16 text-purple-400" />, // Mimicking the thermal cam look
    description: "Find hidden leaks quickly."
  },
  { 
    name: "Whole Home Water Filtration", 
    icon: <Filter className="w-16 h-16 text-blue-400" />, // Cylinder look
    description: "Pure water for your family."
  },
  { 
    name: "Toilet Repair and Rebuild", 
    icon: <Tool className="w-16 h-16 text-gray-600" />,
    description: "Stop the running and leaking."
  },
  { 
    name: "Water Line Repair", 
    icon: <Droplets className="w-16 h-16 text-brand-light" />, // Copper pipe color approx
    description: "Fix low pressure and leaks."
  },
  { 
    name: "Gas Line Repair", 
    icon: <AlertCircle className="w-16 h-16 text-yellow-500" />, // Valve look
    description: "Safety first gas services."
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
              className="bg-white rounded-2xl overflow-hidden flex flex-col shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group h-[280px] cursor-pointer"
            >
              {/* Icon Area - Centered & Large */}
              <div className="flex-grow flex items-center justify-center p-8 bg-white group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </div>
              
              {/* Text Label Area - Bottom Strip */}
              <div className="bg-brand-blue/5 border-t border-brand-blue/10 p-4 h-20 flex items-center">
                <h3 className="text-navy-900 font-bold text-lg leading-tight">
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
