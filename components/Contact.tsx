"use client";

import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    console.log("Form submitted");
  };

  return (
    <section id="contact" className="py-24 bg-navy-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Info */}
          <div className="lg:sticky lg:top-32">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Ready to Fix Your <br />
              <span className="text-brand-light">Plumbing Problem?</span>
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-md leading-relaxed">
              Tell us what’s going on and we’ll reach out quickly. We're here to help, day or night.
            </p>

            <div className="space-y-8">
              <a href="tel:3058487178" className="flex items-center gap-6 group p-4 rounded-2xl transition-colors hover:bg-white/5 -mx-4">
                <div className="w-14 h-14 bg-brand-blue rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-xs text-brand-light uppercase font-bold tracking-widest mb-1">CALL US NOW</p>
                  <p className="text-3xl font-bold group-hover:text-brand-blue transition-colors">(305) 848-7178</p>
                </div>
              </a>

              <a href="mailto:Joseph@thecornerstoneplumbing.com" className="flex items-center gap-6 group p-4 rounded-2xl transition-colors hover:bg-white/5 -mx-4">
                <div className="w-14 h-14 bg-navy-800 border border-white/10 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-xs text-brand-light uppercase font-bold tracking-widest mb-1">EMAIL US</p>
                  <p className="text-xl font-bold group-hover:text-brand-blue transition-colors break-all">Joseph@thecornerstoneplumbing.com</p>
                </div>
              </a>

              <div className="flex items-center gap-6 p-4 -mx-4">
                <div className="w-14 h-14 bg-navy-800 border border-white/10 rounded-full flex items-center justify-center shadow-lg">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-xs text-brand-light uppercase font-bold tracking-widest mb-1">SERVICE AREA</p>
                  <p className="text-xl font-bold">Miami & Surrounding Areas</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="bg-white text-navy-900 p-8 md:p-12 rounded-[2.5rem] shadow-2xl">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20">
                <div className="w-24 h-24 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-8 animate-in zoom-in duration-300">
                  <span className="text-5xl">✓</span>
                </div>
                <h3 className="text-3xl font-bold mb-4 text-navy-900">Request Received!</h3>
                <p className="text-gray-500 text-lg mb-8">We'll be in touch shortly to confirm your appointment.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="text-brand-blue font-bold hover:text-navy-900 transition-colors flex items-center gap-2"
                >
                  Send another request <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider mb-3 text-navy-900">Name</label>
                    <input type="text" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:bg-white transition-all placeholder:text-gray-400" placeholder="Your name" required />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider mb-3 text-navy-900">Phone</label>
                    <input type="tel" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:bg-white transition-all placeholder:text-gray-400" placeholder="(305) 555-0123" required />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-3 text-navy-900">Email</label>
                  <input type="email" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:bg-white transition-all placeholder:text-gray-400" placeholder="email@example.com" required />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-3 text-navy-900">Service Needed</label>
                  <div className="relative">
                    <select className="w-full bg-gray-50 border border-gray-100 rounded-xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:bg-white transition-all appearance-none cursor-pointer text-navy-900 font-medium">
                      <option>General Plumbing Repair</option>
                      <option>Emergency Service</option>
                      <option>Leak Detection</option>
                      <option>Drain Cleaning</option>
                      <option>Water Heater Service</option>
                      <option>Commercial Plumbing</option>
                    </select>
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                      <ArrowRight className="w-4 h-4 rotate-90" />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-3 text-navy-900">Tell us what's wrong</label>
                  <textarea className="w-full bg-gray-50 border border-gray-100 rounded-xl px-6 py-4 h-32 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:bg-white transition-all resize-none placeholder:text-gray-400" placeholder="Describe your issue..."></textarea>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-4 text-navy-900">Preferred Contact Method</label>
                  <div className="flex gap-8">
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <div className="relative flex items-center justify-center">
                        <input type="radio" name="contact-method" className="peer sr-only" defaultChecked />
                        <div className="w-5 h-5 border-2 border-gray-300 rounded-full peer-checked:border-brand-blue peer-checked:bg-brand-blue transition-all"></div>
                        <div className="absolute w-2 h-2 bg-white rounded-full opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                      </div>
                      <span className="font-medium text-gray-600 group-hover:text-navy-900 transition-colors">Phone</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <div className="relative flex items-center justify-center">
                        <input type="radio" name="contact-method" className="peer sr-only" />
                        <div className="w-5 h-5 border-2 border-gray-300 rounded-full peer-checked:border-brand-blue peer-checked:bg-brand-blue transition-all"></div>
                        <div className="absolute w-2 h-2 bg-white rounded-full opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                      </div>
                      <span className="font-medium text-gray-600 group-hover:text-navy-900 transition-colors">Email</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <div className="relative flex items-center justify-center">
                        <input type="radio" name="contact-method" className="peer sr-only" />
                        <div className="w-5 h-5 border-2 border-gray-300 rounded-full peer-checked:border-brand-blue peer-checked:bg-brand-blue transition-all"></div>
                        <div className="absolute w-2 h-2 bg-white rounded-full opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                      </div>
                      <span className="font-medium text-gray-600 group-hover:text-navy-900 transition-colors">Text</span>
                    </label>
                  </div>
                </div>

                <button type="submit" className="w-full bg-brand-blue hover:bg-brand-light text-white font-bold py-5 rounded-xl transition-all shadow-lg hover:shadow-blue-500/20 transform hover:-translate-y-0.5 mt-4 text-lg">
                  Request Service
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
