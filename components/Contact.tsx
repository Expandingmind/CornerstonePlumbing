"use client";

import { Phone, Clock, ArrowRight, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    console.log("Form submitted");
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden" ref={ref}>
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50 -skew-x-12 translate-x-20 z-0" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Compact Content */}
          <div 
            className={`lg:w-5/12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}
          >
            <div className="mb-8">
              <span 
                className={`inline-block py-1 px-3 bg-brand-blue/10 text-brand-blue rounded-full text-xs font-bold uppercase tracking-wider mb-4 transition-all duration-700 delay-100
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              >
                Fast Response
              </span>
              <h2 
                className={`text-3xl md:text-4xl font-bold text-navy-900 mb-4 leading-tight transition-all duration-700 delay-200
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              >
                Ready to Fix Your <br />
                <span className="text-brand-blue">Plumbing Problem?</span>
              </h2>
              <p 
                className={`text-gray-500 mb-8 leading-relaxed transition-all duration-700 delay-300
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              >
                Tell us what&apos;s going on and we&apos;ll reach out quickly. We&apos;re here to help, day or night.
              </p>

              <div className="space-y-4">
                {[
                  "Same-day service availability",
                  "Upfront pricing, no hidden fees",
                  "Licensed & insured professionals"
                ].map((item, idx) => (
                  <div 
                    key={idx}
                    className={`flex items-center gap-3 transition-all duration-700
                      ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                    style={{ transitionDelay: `${idx * 100 + 400}ms` }}
                  >
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span className="text-navy-900 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div 
              className={`grid grid-cols-2 gap-4 transition-all duration-700 delay-700
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <a href="tel:3058487178" className="flex items-center gap-3 p-4 bg-navy-900 rounded-xl hover:bg-navy-800 transition-all group card-hover">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-brand-blue transition-colors">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Call Now</p>
                  <p className="text-white font-bold text-sm">(305) 848-7178</p>
                </div>
              </a>

              <div className="flex items-center gap-3 p-4 bg-gray-100 rounded-xl">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <Clock className="w-5 h-5 text-navy-900" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Hours</p>
                  <p className="text-navy-900 font-bold text-sm">24/7 Emergency</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Floating Form Island */}
          <div 
            className={`lg:w-7/12 w-full transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
          >
            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-xl border border-gray-100 relative card-hover">
              {/* Decorative top strip */}
              <div className="absolute top-0 left-8 right-8 h-1 bg-brand-blue rounded-b-lg" />

              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center py-12 animate-modal-in">
                  <div className="w-16 h-16 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-4 animate-pulse-glow">
                    <span className="text-3xl">✓</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-navy-900">Request Received!</h3>
                  <p className="text-gray-500 mb-6 text-sm">We&apos;ll be in touch shortly to confirm.</p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="text-brand-blue font-bold hover:text-navy-900 transition-colors flex items-center gap-2 text-sm group"
                  >
                    Send another request 
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-navy-900">Name</label>
                      <input 
                        type="text" 
                        className="w-full bg-gray-50 border-0 rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-blue focus:bg-white transition-all placeholder:text-gray-400 text-sm" 
                        placeholder="Your name" 
                        required 
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-navy-900">Phone</label>
                      <input 
                        type="tel" 
                        className="w-full bg-gray-50 border-0 rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-blue focus:bg-white transition-all placeholder:text-gray-400 text-sm" 
                        placeholder="(305) 555-0123" 
                        required 
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-navy-900">Email</label>
                      <input 
                        type="email" 
                        className="w-full bg-gray-50 border-0 rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-blue focus:bg-white transition-all placeholder:text-gray-400 text-sm" 
                        placeholder="email@example.com" 
                        required 
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-navy-900">Service Needed</label>
                      <div className="relative">
                        <select className="w-full bg-gray-50 border-0 rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-blue focus:bg-white transition-all appearance-none cursor-pointer text-navy-900 font-medium text-sm">
                          <option>General Plumbing Repair</option>
                          <option>Emergency Service</option>
                          <option>Leak Detection</option>
                          <option>Drain Cleaning</option>
                          <option>Water Heater Service</option>
                          <option>Commercial Plumbing</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                          <ArrowRight className="w-3 h-3 rotate-90" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-navy-900">Tell us what&apos;s wrong</label>
                    <textarea 
                      className="w-full bg-gray-50 border-0 rounded-lg px-4 py-3 h-24 focus:ring-2 focus:ring-brand-blue focus:bg-white transition-all resize-none placeholder:text-gray-400 text-sm" 
                      placeholder="Describe your issue..."
                    ></textarea>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <div className="flex gap-4">
                      <label className="flex items-center gap-2 cursor-pointer group">
                        <input type="radio" name="contact-method" className="peer sr-only" defaultChecked />
                        <div className="w-4 h-4 border-2 border-gray-300 rounded-full peer-checked:border-brand-blue peer-checked:bg-brand-blue transition-all relative">
                          <div className="absolute inset-0 m-auto w-1.5 h-1.5 bg-white rounded-full opacity-0 peer-checked:opacity-100"></div>
                        </div>
                        <span className="text-xs font-bold text-gray-500 group-hover:text-navy-900 transition-colors">Phone</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer group">
                        <input type="radio" name="contact-method" className="peer sr-only" />
                        <div className="w-4 h-4 border-2 border-gray-300 rounded-full peer-checked:border-brand-blue peer-checked:bg-brand-blue transition-all relative">
                          <div className="absolute inset-0 m-auto w-1.5 h-1.5 bg-white rounded-full opacity-0 peer-checked:opacity-100"></div>
                        </div>
                        <span className="text-xs font-bold text-gray-500 group-hover:text-navy-900 transition-colors">Email</span>
                      </label>
                    </div>

                    <button 
                      type="submit" 
                      className="btn-primary bg-brand-blue hover:bg-brand-light text-white font-bold py-3 px-8 rounded-lg shadow-lg text-sm"
                    >
                      Request Service
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
