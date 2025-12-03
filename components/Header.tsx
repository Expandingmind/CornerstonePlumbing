"use client";

import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      <header className="sticky top-0 z-40 w-full bg-navy-900 text-white shadow-xl">
        <div className="container mx-auto px-4 lg:px-8 h-20 flex items-center justify-between gap-4">
          {/* Logo - flex-shrink-0 prevents logo from shrinking */}
          <Link href="/" className="flex-shrink-0">
            <span className="text-xl lg:text-2xl font-bold tracking-tight whitespace-nowrap">
              Cornerstone <span className="text-brand-blue">Plumbing</span>
            </span>
          </Link>

          {/* Desktop Nav - Show only on lg (1024px+) screens */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            <Link href="#services" className="text-sm font-medium text-gray-300 hover:text-white transition-colors whitespace-nowrap">
              Services
            </Link>
            <Link href="#why-cornerstone" className="text-sm font-medium text-gray-300 hover:text-white transition-colors whitespace-nowrap">
              Why Us
            </Link>
            <Link href="#membership" className="text-sm font-medium text-gray-300 hover:text-white transition-colors whitespace-nowrap">
              Membership
            </Link>
            <Link href="#reviews" className="text-sm font-medium text-gray-300 hover:text-white transition-colors whitespace-nowrap">
              Reviews
            </Link>
            <Link href="#faq" className="text-sm font-medium text-gray-300 hover:text-white transition-colors whitespace-nowrap">
              FAQ
            </Link>
          </nav>

          {/* CTA Buttons - Show only on lg (1024px+) screens */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-4 flex-shrink-0">
            <a 
              href="tel:3058487178" 
              className="flex items-center gap-2 text-sm font-semibold text-white hover:text-brand-light transition-colors whitespace-nowrap px-3 py-2 rounded-lg hover:bg-white/5"
            >
              <Phone className="w-4 h-4" />
              (305) 848-7178
            </a>
            <Link 
              href="#contact" 
              className="bg-brand-blue hover:bg-brand-light text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg shadow-brand-blue/20 hover:shadow-brand-blue/40 transform hover:-translate-y-0.5 whitespace-nowrap"
            >
              Book Service
            </Link>
          </div>

          {/* Mobile Menu Toggle - Show on screens smaller than lg */}
          <button 
            className="lg:hidden p-2 text-white hover:text-brand-blue transition-colors rounded-lg hover:bg-white/5"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-navy-900 border-t border-white/10 p-6 flex flex-col gap-2 shadow-2xl">
            <Link 
              href="#services" 
              className="text-base font-medium py-3 px-4 rounded-xl hover:bg-white/5 hover:text-brand-light transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="#why-cornerstone" 
              className="text-base font-medium py-3 px-4 rounded-xl hover:bg-white/5 hover:text-brand-light transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Why Cornerstone
            </Link>
            <Link 
              href="#membership" 
              className="text-base font-medium py-3 px-4 rounded-xl hover:bg-white/5 hover:text-brand-light transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Membership
            </Link>
            <Link 
              href="#reviews" 
              className="text-base font-medium py-3 px-4 rounded-xl hover:bg-white/5 hover:text-brand-light transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Reviews
            </Link>
            <Link 
              href="#faq" 
              className="text-base font-medium py-3 px-4 rounded-xl hover:bg-white/5 hover:text-brand-light transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
            
            {/* Divider */}
            <div className="h-px bg-white/10 my-3" />
            
            <div className="flex flex-col gap-3">
              <a 
                href="tel:3058487178" 
                className="flex items-center justify-center gap-2 text-white font-semibold py-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors"
              >
                <Phone className="w-5 h-5 text-brand-blue" />
                (305) 848-7178
              </a>
              <Link 
                href="#contact" 
                className="bg-brand-blue hover:bg-brand-light text-white py-3.5 rounded-xl text-center font-bold shadow-lg shadow-brand-blue/20 transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Service
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

