"use client";

import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Top Notification Bar */}
      <div className="bg-navy-900 text-white text-xs md:text-sm py-2 px-4 text-center flex justify-between items-center md:justify-center gap-4 relative z-50">
        <span>Need help now? Same-day plumbing service available in Miami.</span>
        <Link 
          href="#contact" 
          className="hidden md:inline-block underline hover:text-brand-blue transition-colors"
        >
          Schedule Service
        </Link>
      </div>

      {/* Main Navigation */}
      <header className="sticky top-0 z-40 w-full bg-navy-900 text-white border-b border-white/10 shadow-lg">
        <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl md:text-3xl font-bold tracking-tight">
              Cornerstone <span className="text-brand-blue">Plumbing</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#services" className="text-sm font-medium hover:text-brand-blue transition-colors">
              Services
            </Link>
            <Link href="#why-cornerstone" className="text-sm font-medium hover:text-brand-blue transition-colors">
              Why Cornerstone
            </Link>
            <Link href="#membership" className="text-sm font-medium hover:text-brand-blue transition-colors">
              Membership
            </Link>
            <Link href="#reviews" className="text-sm font-medium hover:text-brand-blue transition-colors">
              Reviews
            </Link>
            <Link href="#faq" className="text-sm font-medium hover:text-brand-blue transition-colors">
              FAQ
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href="tel:3058487178" 
              className="flex items-center gap-2 text-sm font-semibold hover:text-brand-blue transition-colors"
            >
              <Phone className="w-4 h-4" />
              (305) 848-7178
            </a>
            <Link 
              href="#contact" 
              className="bg-brand-blue hover:bg-brand-light text-white px-5 py-2.5 rounded-full text-sm font-bold transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Book Service
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-white hover:text-brand-blue transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-navy-900 border-t border-white/10 p-4 flex flex-col gap-4 shadow-xl animate-in slide-in-from-top-2">
            <Link 
              href="#services" 
              className="text-lg font-medium py-2 border-b border-white/5 hover:text-brand-blue"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="#why-cornerstone" 
              className="text-lg font-medium py-2 border-b border-white/5 hover:text-brand-blue"
              onClick={() => setIsMenuOpen(false)}
            >
              Why Cornerstone
            </Link>
            <Link 
              href="#membership" 
              className="text-lg font-medium py-2 border-b border-white/5 hover:text-brand-blue"
              onClick={() => setIsMenuOpen(false)}
            >
              Membership
            </Link>
            <Link 
              href="#reviews" 
              className="text-lg font-medium py-2 border-b border-white/5 hover:text-brand-blue"
              onClick={() => setIsMenuOpen(false)}
            >
              Reviews
            </Link>
            <Link 
              href="#faq" 
              className="text-lg font-medium py-2 border-b border-white/5 hover:text-brand-blue"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
            <div className="flex flex-col gap-3 mt-2">
              <a 
                href="tel:3058487178" 
                className="flex items-center justify-center gap-2 text-white font-semibold py-2 bg-white/10 rounded-lg"
              >
                <Phone className="w-4 h-4" />
                (305) 848-7178
              </a>
              <Link 
                href="#contact" 
                className="bg-brand-blue hover:bg-brand-light text-white px-5 py-3 rounded-lg text-center font-bold"
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

