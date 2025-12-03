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
    <section id="faq" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Island Container */}
        <div className="max-w-3xl mx-auto bg-white rounded-[2.5rem] shadow-xl p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-10 text-center">
            Common Questions About Cornerstone
          </h2>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="border-b border-gray-100 last:border-0"
              >
                <button
                  className="w-full flex items-center justify-between py-5 text-left group"
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                >
                  <span className={`font-bold text-lg transition-colors pr-8 ${
                    openIndex === idx ? 'text-brand-blue' : 'text-navy-900 group-hover:text-brand-blue'
                  }`}>
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                    openIndex === idx ? 'bg-brand-blue text-white' : 'bg-gray-100 text-gray-400 group-hover:bg-brand-blue/10 group-hover:text-brand-blue'
                  }`}>
                    {openIndex === idx ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </div>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === idx ? 'max-h-48 opacity-100 mb-5' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-gray-500 leading-relaxed pr-8">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
