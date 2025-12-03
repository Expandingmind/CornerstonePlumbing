"use client";

import Link from "next/link";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Footer() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  ];

  const quickLinks = [
    { label: "Services", href: "#services" },
    { label: "Why Cornerstone", href: "#why-cornerstone" },
    { label: "Membership", href: "#membership" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact Us", href: "#contact" },
  ];

  const services = [
    "Emergency Plumbing",
    "Leak Detection",
    "Drain Cleaning",
    "Water Heater Repair",
    "Commercial Plumbing",
  ];

  return (
    <footer className="bg-navy-900 text-white pt-20 pb-10 border-t border-white/10" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div 
            className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <Link href="/" className="inline-block text-2xl font-bold tracking-tight mb-6 group">
              Cornerstone <span className="text-brand-blue group-hover:text-brand-light transition-colors">Plumbing</span>
            </Link>
            <p className="text-gray-400 leading-relaxed mb-6">
              The foundation of reliable plumbing in Miami. Family-owned, trustworthy, and ready to serve you 24/7.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, idx) => (
                <a 
                  key={idx}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-brand-blue flex items-center justify-center transition-all duration-300 hover:scale-110 icon-bounce"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div 
            className={`transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <h3 className="font-bold text-lg mb-6">Company</h3>
            <ul className="space-y-4 text-gray-400">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <Link 
                    href={link.href} 
                    className="hover:text-brand-blue transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div 
            className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <h3 className="font-bold text-lg mb-6">Popular Services</h3>
            <ul className="space-y-4 text-gray-400">
              {services.map((service, idx) => (
                <li key={idx} className="hover:text-gray-300 transition-colors duration-300">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div 
            className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <h3 className="font-bold text-lg mb-6">Contact</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex flex-col group">
                <span className="text-xs text-brand-light font-bold uppercase tracking-wider mb-1">Phone</span>
                <a href="tel:3058487178" className="hover:text-white transition-colors text-lg group-hover:text-brand-light">
                  (305) 848-7178
                </a>
              </li>
              <li className="flex flex-col group">
                <span className="text-xs text-brand-light font-bold uppercase tracking-wider mb-1">Email</span>
                <a href="mailto:Joseph@thecornerstoneplumbing.com" className="hover:text-white transition-colors break-all group-hover:text-brand-light">
                  Joseph@thecornerstoneplumbing.com
                </a>
              </li>
              <li className="flex flex-col">
                <span className="text-xs text-brand-light font-bold uppercase tracking-wider mb-1">Location</span>
                <span>Miami, FL & Surrounding Areas</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div 
          className={`pt-8 border-t border-white/10 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm transition-all duration-700 delay-500
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <p>&copy; {new Date().getFullYear()} Cornerstone Plumbing. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#contact" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#contact" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
