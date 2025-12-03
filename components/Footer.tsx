import Link from "next/link";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white pt-20 pb-10 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block text-2xl font-bold tracking-tight mb-6">
              Cornerstone <span className="text-brand-blue">Plumbing</span>
            </Link>
            <p className="text-gray-400 leading-relaxed mb-6">
              The foundation of reliable plumbing in Miami. Family-owned, trustworthy, and ready to serve you 24/7.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-brand-blue flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-brand-blue flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-brand-blue flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6">Company</h3>
            <ul className="space-y-4 text-gray-400">
              <li><Link href="#services" className="hover:text-brand-blue transition-colors">Services</Link></li>
              <li><Link href="#why-cornerstone" className="hover:text-brand-blue transition-colors">Why Cornerstone</Link></li>
              <li><Link href="#membership" className="hover:text-brand-blue transition-colors">Membership</Link></li>
              <li><Link href="#reviews" className="hover:text-brand-blue transition-colors">Reviews</Link></li>
              <li><Link href="#contact" className="hover:text-brand-blue transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-6">Popular Services</h3>
            <ul className="space-y-4 text-gray-400">
              <li>Emergency Plumbing</li>
              <li>Leak Detection</li>
              <li>Drain Cleaning</li>
              <li>Water Heater Repair</li>
              <li>Commercial Plumbing</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-6">Contact</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex flex-col">
                <span className="text-xs text-brand-light font-bold uppercase tracking-wider mb-1">Phone</span>
                <a href="tel:3058487178" className="hover:text-white transition-colors text-lg">(305) 848-7178</a>
              </li>
              <li className="flex flex-col">
                <span className="text-xs text-brand-light font-bold uppercase tracking-wider mb-1">Email</span>
                <a href="mailto:Joseph@thecornerstoneplumbing.com" className="hover:text-white transition-colors break-all">Joseph@thecornerstoneplumbing.com</a>
              </li>
              <li className="flex flex-col">
                <span className="text-xs text-brand-light font-bold uppercase tracking-wider mb-1">Location</span>
                <span>Miami, FL & Surrounding Areas</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Cornerstone Plumbing. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

