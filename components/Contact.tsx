"use client";

import { Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would typically send the data to your backend
    console.log("Form submitted");
  };

  return (
    <section id="contact" className="py-20 bg-navy-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Left Column: Info */}
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Fix Your Plumbing Problem?</h2>
            <p className="text-xl text-gray-300 mb-12">
              Tell us what’s going on and we’ll reach out quickly. We're here to help, day or night.
            </p>

            <div className="space-y-8">
              <a href="tel:3058487178" className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-brand-light uppercase font-bold tracking-wider">Call Us Now</p>
                  <p className="text-2xl font-bold group-hover:text-brand-blue transition-colors">(305) 848-7178</p>
                </div>
              </a>

              <a href="mailto:Joseph@thecornerstoneplumbing.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-navy-800 border border-white/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-brand-light uppercase font-bold tracking-wider">Email Us</p>
                  <p className="text-xl font-bold group-hover:text-brand-blue transition-colors break-all">Joseph@thecornerstoneplumbing.com</p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-navy-800 border border-white/10 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-brand-light uppercase font-bold tracking-wider">Service Area</p>
                  <p className="text-xl font-bold">Miami & Surrounding Areas</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="bg-white text-navy-900 p-8 md:p-10 rounded-3xl shadow-xl">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <span className="text-4xl">✓</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">Request Received!</h3>
                <p className="text-gray-600">We'll be in touch shortly to confirm your appointment.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-brand-blue font-bold hover:underline"
                >
                  Send another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold mb-2">Name</label>
                    <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-blue" placeholder="Your name" required />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">Phone</label>
                    <input type="tel" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-blue" placeholder="(305) 555-0123" required />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2">Email</label>
                  <input type="email" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-blue" placeholder="email@example.com" required />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2">Service Needed</label>
                  <select className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-blue appearance-none">
                    <option>General Plumbing Repair</option>
                    <option>Emergency Service</option>
                    <option>Leak Detection</option>
                    <option>Drain Cleaning</option>
                    <option>Water Heater Service</option>
                    <option>Commercial Plumbing</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2">Tell us what's wrong</label>
                  <textarea className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 h-32 focus:outline-none focus:ring-2 focus:ring-brand-blue resize-none" placeholder="Describe your issue..."></textarea>
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2">Preferred Contact Method</label>
                  <div className="flex gap-6">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="contact-method" className="w-4 h-4 text-brand-blue" defaultChecked />
                      <span>Phone</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="contact-method" className="w-4 h-4 text-brand-blue" />
                      <span>Email</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="contact-method" className="w-4 h-4 text-brand-blue" />
                      <span>Text</span>
                    </label>
                  </div>
                </div>

                <button type="submit" className="w-full bg-brand-blue hover:bg-brand-light text-white font-bold py-4 rounded-lg transition-all shadow-lg hover:shadow-blue-500/20 transform hover:-translate-y-0.5">
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

