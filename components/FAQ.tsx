"use client";

import { useState } from "react";
import { Plus, Minus, MessageCircleQuestion, Phone, HelpCircle } from "lucide-react";
import Link from "next/link";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Do you offer 24/7 emergency plumbing services?",
      answer: "Yes! We have plumbers on call 24 hours a day, 7 days a week for emergencies in Miami and surrounding areas. Call us anytime at (305) 848-7178."
    },
    {
      question: "Are your plumbers licensed and insured?",
      answer: "Absolutely. Cornerstone Plumbing is fully licensed, bonded, and insured in the state of Florida. Our technicians undergo rigorous training and background checks."
    },
    {
      question: "What areas do you serve around Miami?",
      answer: "We serve all of Miami-Dade County including Brickell, Coral Gables, Miami Beach, Kendall, Coconut Grove, and Doral."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, cash, checks, and offer financing options for larger repairs or installations."
    },
    {
      question: "Do you guarantee your work?",
      answer: "Yes, we stand behind our work with a 100% satisfaction guarantee. If you're not happy with the repair, we'll make it right."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-navy-900 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-blue/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 max-w-6xl mx-auto">
          
          {/* Left Content - 2 columns */}
          <div className="lg:col-span-2">
            <div className="lg:sticky lg:top-32">
              <div className="inline-flex items-center gap-2 bg-white/10 text-brand-light px-4 py-2 rounded-full text-sm font-bold mb-6 backdrop-blur-sm">
                <HelpCircle className="w-4 h-4" />
                Got Questions?
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Frequently Asked <span className="text-brand-light">Questions</span>
              </h2>
              
              <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                Everything you need to know about our plumbing services. Can't find what you're looking for? We're here to help.
              </p>

              {/* Contact Card */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-blue rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageCircleQuestion className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-1">Still have questions?</h3>
                    <p className="text-gray-400 text-sm mb-4">Our team is ready to help you with any plumbing concerns.</p>
                    <div className="flex flex-wrap gap-3">
                      <a 
                        href="tel:3058487178" 
                        className="inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-light text-white px-4 py-2 rounded-lg text-sm font-bold transition-all"
                      >
                        <Phone className="w-4 h-4" />
                        Call Us
                      </a>
                      <Link 
                        href="#contact" 
                        className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg text-sm font-bold transition-all"
                      >
                        Send Message
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: FAQ Accordion - 3 columns */}
          <div className="lg:col-span-3 space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className={`rounded-2xl transition-all duration-300 ${
                  openIndex === idx 
                    ? 'bg-white shadow-xl shadow-black/10' 
                    : 'bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10'
                }`}
              >
                <button
                  className="w-full flex items-start gap-4 p-6 text-left"
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                >
                  {/* Number Badge */}
                  <span className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold transition-colors ${
                    openIndex === idx 
                      ? 'bg-brand-blue text-white' 
                      : 'bg-white/10 text-gray-400'
                  }`}>
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  
                  <div className="flex-grow">
                    <span className={`font-bold text-lg block transition-colors ${
                      openIndex === idx ? 'text-navy-900' : 'text-white'
                    }`}>
                      {faq.question}
                    </span>
                    
                    {/* Answer */}
                    <div 
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        openIndex === idx ? 'max-h-40 opacity-100 mt-3' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <p className="text-gray-500 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>

                  {/* Toggle Icon */}
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                    openIndex === idx 
                      ? 'bg-navy-900 text-white rotate-0' 
                      : 'bg-white/10 text-gray-400'
                  }`}>
                    {openIndex === idx ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
