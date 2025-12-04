"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#why-cornerstone", label: "Why Us" },
    { href: "#membership", label: "Membership" },
    { href: "#reviews", label: "Reviews" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <>
      {/* Top Notification Bar */}
      <div className="bg-navy-800 text-white text-xs py-2.5 px-4 text-center flex justify-center items-center gap-6 relative z-50">
        <span className="text-gray-300">Need help now? Same-day plumbing service available in Miami.</span>
        <Link 
          href="#contact" 
          className="hidden sm:inline-block text-white font-medium underline underline-offset-2 hover:text-brand-light transition-colors"
        >
          Schedule Service
        </Link>
      </div>

      {/* Main Navigation */}
      <header 
        className={`sticky top-0 z-40 w-full bg-navy-900 text-white transition-all duration-300 ${
          isScrolled ? 'shadow-xl shadow-navy-900/50' : 'shadow-none'
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8 h-20 flex items-center justify-between gap-4">
          {/* Logo + Name */}
          <Link href="/" className="flex-shrink-0 group flex items-center gap-2 md:gap-3">
            {/* Logo Image */}
            <div className="relative w-10 h-10 md:w-12 md:h-12 flex-shrink-0">
              <Image
                src="/images/services/logo.png"
                alt="Cornerstone Plumbing Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            {/* Company Name */}
            <span className="text-lg md:text-xl lg:text-2xl font-bold tracking-tight whitespace-nowrap">
              Cornerstone <span className="text-brand-blue group-hover:text-brand-light transition-colors duration-300">Plumbing</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link, idx) => (
              <Link 
                key={idx}
                href={link.href} 
                className="text-sm font-medium text-gray-300 hover:text-white transition-all duration-300 whitespace-nowrap relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-blue transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-4 flex-shrink-0">
            <a 
              href="tel:3058487178" 
              className="flex items-center gap-2 text-sm font-semibold text-white hover:text-brand-light transition-all duration-300 whitespace-nowrap px-3 py-2 rounded-lg hover:bg-white/5 group"
            >
              <Phone className="w-4 h-4 group-hover:animate-bounce" />
              (305) 848-7178
            </a>
            <Link 
              href="#contact" 
              className="btn-primary bg-brand-blue hover:bg-brand-light text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-brand-blue/20 whitespace-nowrap"
            >
              Book Service
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 text-white hover:text-brand-blue transition-colors rounded-lg hover:bg-white/5"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              <Menu 
                className={`w-6 h-6 absolute transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'
                }`} 
              />
              <X 
                className={`w-6 h-6 absolute transition-all duration-300 ${
                  isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'
                }`} 
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu - Animated */}
        <div 
          className={`lg:hidden absolute top-full left-0 w-full bg-navy-900 border-t border-white/10 shadow-2xl transition-all duration-300 ease-out overflow-hidden ${
            isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="p-6 flex flex-col gap-2">
            {navLinks.map((link, idx) => (
              <Link 
                key={idx}
                href={link.href} 
                className={`text-base font-medium py-3 px-4 rounded-xl hover:bg-white/5 hover:text-brand-light transition-all duration-300 transform ${
                  isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
                }`}
                style={{ transitionDelay: `${idx * 50}ms` }}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            
            {/* Divider */}
            <div className={`h-px bg-white/10 my-3 transition-all duration-300 ${
              isMenuOpen ? 'opacity-100' : 'opacity-0'
            }`} />
            
            <div 
              className={`flex flex-col gap-3 transition-all duration-300 ${
                isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
              style={{ transitionDelay: '250ms' }}
            >
              <a 
                href="tel:3058487178" 
                className="flex items-center justify-center gap-2 text-white font-semibold py-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors"
              >
                <Phone className="w-5 h-5 text-brand-blue" />
                (305) 848-7178
              </a>
              <Link 
                href="#contact" 
                className="btn-primary bg-brand-blue hover:bg-brand-light text-white py-3.5 rounded-xl text-center font-bold shadow-lg shadow-brand-blue/20"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Service
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Backdrop when mobile menu is open */}
      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-30 lg:hidden transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      />
    </>
  );
}
