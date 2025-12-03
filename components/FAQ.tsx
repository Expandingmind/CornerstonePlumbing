"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

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
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-16 text-center">
          Common Questions About Cornerstone
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`border border-gray-100 rounded-2xl overflow-hidden transition-all duration-300 ${
                openIndex === idx ? 'shadow-lg bg-white ring-1 ring-gray-100' : 'bg-white hover:bg-gray-50'
              }`}
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left transition-colors"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span className="font-bold text-navy-900 text-lg pr-8">{faq.question}</span>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                  openIndex === idx ? 'bg-brand-blue text-white' : 'bg-gray-100 text-gray-400'
                }`}>
                  {openIndex === idx ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </div>
              </button>
              
              {openIndex === idx && (
                <div className="p-6 pt-0 text-gray-500 leading-relaxed animate-in slide-in-from-top-2 fade-in duration-200">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
