"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Check, Phone, ChevronDown, ChevronUp, ArrowRight } from "lucide-react";
import { useState } from "react";
import { usePageLoadAnimation } from "@/hooks/useScrollAnimation";
import { Service } from "@/data/services";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface ServicePageContentProps {
  service: Service;
  relatedServices: Service[];
}

export default function ServicePageContent({ service, relatedServices }: ServicePageContentProps) {
  const isLoaded = usePageLoadAnimation(100);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="min-h-screen bg-white selection:bg-brand-blue selection:text-white">
      <Header />
      
      {/* Hero Section - Compact on mobile */}
      <section className="relative bg-navy-900 overflow-hidden pt-12 pb-16 md:pt-20 md:pb-32">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src={service.heroImage}
            alt={service.name}
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/95 to-navy-900/80" />
        </div>

        {/* Abstract Shape - Smaller on mobile */}
        <div 
          className={`absolute top-0 right-0 w-[50vh] md:w-[80vh] h-[50vh] md:h-[80vh] bg-brand-blue/20 rounded-full blur-3xl transition-all duration-1000 ease-out
            ${isLoaded ? 'opacity-100 translate-x-[30%] -translate-y-[40%] md:translate-x-[20%] md:-translate-y-[30%]' : 'opacity-0 translate-x-[40%] -translate-y-[50%]'}`}
        />

        <div className="container mx-auto px-4 relative z-10">
          {/* Back Link */}
          <Link 
            href="/#services" 
            className={`inline-flex items-center gap-2 text-brand-light hover:text-white transition-all duration-300 mb-4 md:mb-8 group text-sm md:text-base
              ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
          >
            <ArrowLeft className="w-3 h-3 md:w-4 md:h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Services
          </Link>

          <div className="max-w-3xl">
            {/* Badge */}
            <div 
              className={`inline-block bg-brand-blue/20 text-brand-light px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-bold uppercase tracking-wider mb-4 md:mb-6 transition-all duration-700 delay-100
                ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              Professional Service
            </div>

            {/* Title */}
            <h1 
              className={`text-2xl md:text-6xl font-bold text-white mb-3 md:mb-6 leading-tight transition-all duration-700 delay-200
                ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              {service.name}
            </h1>

            {/* Description */}
            <p 
              className={`text-sm md:text-xl text-gray-300 mb-6 md:mb-10 leading-relaxed transition-all duration-700 delay-300
                ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              {service.shortDescription}
            </p>

            {/* CTA Buttons - Stack on mobile */}
            <div 
              className={`flex flex-col sm:flex-row gap-3 md:gap-4 transition-all duration-700 delay-400
                ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <Link 
                href="/#contact" 
                className="btn-primary bg-white text-navy-900 md:bg-brand-blue md:text-white hover:bg-gray-100 md:hover:bg-brand-light px-6 py-3 md:px-8 md:py-4 rounded-full font-bold shadow-lg text-center text-sm md:text-base"
              >
                Get a Free Quote
              </Link>
              <a 
                href="tel:3058487178" 
                className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-bold transition-all text-sm md:text-base"
              >
                <Phone className="w-4 h-4 md:w-5 md:h-5" />
                (305) 848-7178
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Contact Sticky Bar */}
      <div className="lg:hidden sticky top-[80px] z-30 bg-navy-900 border-b border-white/10 px-4 py-3">
        <div className="flex gap-2">
          <a 
            href="tel:3058487178" 
            className="flex-1 flex items-center justify-center gap-2 bg-white/10 text-white py-2.5 rounded-lg font-bold text-sm"
          >
            <Phone className="w-4 h-4" />
            Call Now
          </a>
          <Link 
            href="/#contact" 
            className="flex-1 bg-brand-blue text-white py-2.5 rounded-lg font-bold text-sm text-center"
          >
            Get Quote
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-10 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
            
            {/* Left Content - 2 cols */}
            <div className="lg:col-span-2">
              {/* Description */}
              <div className="mb-10 md:mb-16">
                <h2 className="text-xl md:text-3xl font-bold text-navy-900 mb-4 md:mb-6">About This Service</h2>
                <p className="text-gray-600 text-sm md:text-lg leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Features */}
              <div className="mb-10 md:mb-16">
                <h2 className="text-xl md:text-3xl font-bold text-navy-900 mb-4 md:mb-6">What We Offer</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-4">
                  {service.features.map((feature, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-start gap-2 md:gap-3 p-3 md:p-4 bg-gray-50 rounded-lg md:rounded-xl hover:bg-brand-blue/5 transition-colors"
                    >
                      <div className="w-5 h-5 md:w-6 md:h-6 bg-brand-blue/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 md:w-4 md:h-4 text-brand-blue" strokeWidth={3} />
                      </div>
                      <span className="text-navy-900 font-medium text-sm md:text-base">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div className="mb-10 md:mb-16">
                <h2 className="text-xl md:text-3xl font-bold text-navy-900 mb-4 md:mb-6">Why Choose Us</h2>
                <div className="space-y-3 md:space-y-6">
                  {service.benefits.map((benefit, idx) => (
                    <div 
                      key={idx} 
                      className="bg-white border border-gray-100 rounded-xl md:rounded-2xl p-4 md:p-6 shadow-sm hover:shadow-lg transition-all card-hover"
                    >
                      <h3 className="text-base md:text-xl font-bold text-navy-900 mb-1 md:mb-2">{benefit.title}</h3>
                      <p className="text-gray-600 text-sm md:text-base">{benefit.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQs */}
              <div>
                <h2 className="text-xl md:text-3xl font-bold text-navy-900 mb-4 md:mb-6">Common Questions</h2>
                <div className="space-y-2 md:space-y-4">
                  {service.faqs.map((faq, idx) => (
                    <div 
                      key={idx} 
                      className={`rounded-xl md:rounded-2xl overflow-hidden transition-all duration-300 ${
                        openFaq === idx 
                          ? 'bg-navy-900 text-white' 
                          : 'bg-gray-50 hover:bg-gray-100'
                      }`}
                    >
                      <button
                        className="w-full flex items-center justify-between p-4 md:p-6 text-left"
                        onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      >
                        <span className={`font-bold text-sm md:text-lg pr-3 md:pr-4 ${openFaq === idx ? 'text-white' : 'text-navy-900'}`}>
                          {faq.question}
                        </span>
                        <div className={`flex-shrink-0 w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center transition-all ${
                          openFaq === idx ? 'bg-brand-blue text-white' : 'bg-white text-navy-900 shadow-sm'
                        }`}>
                          {openFaq === idx ? <ChevronUp className="w-4 h-4 md:w-5 md:h-5" /> : <ChevronDown className="w-4 h-4 md:w-5 md:h-5" />}
                        </div>
                      </button>
                      <div className={`overflow-hidden transition-all duration-300 ${
                        openFaq === idx ? 'max-h-40 pb-4 md:pb-6' : 'max-h-0'
                      }`}>
                        <p className={`px-4 md:px-6 leading-relaxed text-sm md:text-base ${openFaq === idx ? 'text-gray-300' : 'text-gray-600'}`}>
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sidebar - Hidden on mobile, shown on desktop */}
            <div className="hidden lg:block lg:col-span-1">
              <div className="sticky top-28 space-y-6">
                {/* Contact Card */}
                <div className="bg-navy-900 text-white rounded-3xl p-8 shadow-xl">
                  <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
                  <p className="text-gray-300 mb-6">
                    Contact us today for a free quote on {service.name.toLowerCase()} services.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <a 
                      href="tel:3058487178" 
                      className="flex items-center gap-3 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors"
                    >
                      <Phone className="w-5 h-5 text-brand-light" />
                      <div>
                        <p className="text-xs text-gray-400 uppercase tracking-wider">Call Now</p>
                        <p className="font-bold">(305) 848-7178</p>
                      </div>
                    </a>
                  </div>

                  <Link 
                    href="/#contact" 
                    className="btn-primary block w-full text-center bg-brand-blue hover:bg-brand-light text-white py-4 rounded-xl font-bold shadow-lg"
                  >
                    Request Service
                  </Link>
                </div>

                {/* Service Area */}
                <div className="bg-gray-50 rounded-3xl p-8">
                  <h3 className="text-xl font-bold text-navy-900 mb-4">Service Area</h3>
                  <p className="text-gray-600 mb-4">
                    We proudly serve Miami and surrounding areas including:
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Miami Beach</li>
                    <li>• Coral Gables</li>
                    <li>• Brickell</li>
                    <li>• Coconut Grove</li>
                    <li>• Kendall</li>
                    <li>• Doral</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services - Horizontal scroll on mobile */}
      <section className="py-10 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6 md:mb-12">
            <h2 className="text-xl md:text-3xl font-bold text-navy-900 mb-2 md:mb-4">Other Services You May Need</h2>
            <p className="text-gray-500 text-sm md:text-base">Explore more of our professional plumbing services</p>
          </div>

          {/* Horizontal scroll on mobile, grid on desktop */}
          <div className="flex md:grid md:grid-cols-3 gap-4 md:gap-8 max-w-5xl mx-auto overflow-x-auto pb-4 md:pb-0 -mx-4 px-4 md:mx-auto hide-scrollbar">
            {relatedServices.map((related, idx) => (
              <Link 
                key={idx}
                href={`/services/${related.slug}`}
                className="bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all card-hover card-image-zoom group flex-shrink-0 w-[240px] md:w-auto"
              >
                <div className="relative h-32 md:h-48 overflow-hidden">
                  <Image
                    src={related.image}
                    alt={related.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/20 transition-colors" />
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="text-sm md:text-xl font-bold text-navy-900 mb-1 md:mb-2 group-hover:text-brand-blue transition-colors line-clamp-1">
                    {related.name}
                  </h3>
                  <p className="text-gray-500 text-xs md:text-sm mb-2 md:mb-4 line-clamp-2">{related.shortDescription}</p>
                  <span className="inline-flex items-center gap-1 md:gap-2 text-brand-blue font-bold text-xs md:text-sm">
                    Learn More <ArrowRight className="w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Compact on mobile */}
      <section className="py-10 md:py-20 bg-brand-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl md:text-4xl font-bold text-white mb-3 md:mb-6">
            Need {service.name} Help Today?
          </h2>
          <p className="text-white/90 text-sm md:text-lg mb-6 md:mb-10 max-w-2xl mx-auto">
            Our expert plumbers are standing by. Call now for same-day service.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
            <a 
              href="tel:3058487178" 
              className="btn-primary bg-white text-brand-blue hover:bg-gray-100 px-6 py-3 md:px-10 md:py-4 rounded-full font-bold shadow-lg text-sm md:text-base"
            >
              Call (305) 848-7178
            </a>
            <Link 
              href="/#contact" 
              className="bg-navy-900 text-white hover:bg-navy-800 px-6 py-3 md:px-10 md:py-4 rounded-full font-bold shadow-lg transition-all text-sm md:text-base"
            >
              Schedule Online
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
