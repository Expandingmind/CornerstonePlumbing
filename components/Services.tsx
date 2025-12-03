import { 
  Wrench, Building2, Home, Droplets, Flame, Camera, AlertCircle, PenTool as Tool, Pipette 
} from "lucide-react";

const services = [
  { name: "Commercial Plumbing Services", icon: <Building2 className="w-6 h-6" /> },
  { name: "Residential Plumbing Services", icon: <Home className="w-6 h-6" /> },
  { name: "Toilet Clogs & Repair", icon: <Tool className="w-6 h-6" /> },
  { name: "Cartridge Installs", icon: <Wrench className="w-6 h-6" /> },
  { name: "Toilet Backups", icon: <AlertCircle className="w-6 h-6" /> },
  { name: "Shower Overflows", icon: <Droplets className="w-6 h-6" /> },
  { name: "Emergency Plumbing", icon: <AlertCircle className="w-6 h-6" /> },
  { name: "Leak Detection", icon: <Pipette className="w-6 h-6" /> },
  { name: "Tankless Water Heaters", icon: <Flame className="w-6 h-6" /> },
  { name: "Camera Inspections", icon: <Camera className="w-6 h-6" /> },
  { name: "Drain Cleaning", icon: <Droplets className="w-6 h-6" /> },
  { name: "Hydrojetting", icon: <Droplets className="w-6 h-6" /> },
  { name: "Repiping", icon: <Wrench className="w-6 h-6" /> },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-navy-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Plumbing Services</h2>
          <p className="text-brand-light text-lg">Precision plumbing for every corner of your home or business.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-6 flex flex-col items-center text-center transition-all hover:-translate-y-1 cursor-pointer group">
              <div className="text-brand-blue mb-4 p-3 bg-navy-800 rounded-full group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-white font-semibold">{service.name}</h3>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="#contact" className="inline-block bg-brand-blue hover:bg-brand-light text-white font-bold py-3 px-8 rounded-full transition-colors shadow-lg">
            Schedule a Service
          </a>
        </div>
      </div>
    </section>
  );
}

