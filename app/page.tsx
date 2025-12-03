import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBand from "@/components/TrustBand";
import Intro from "@/components/Intro";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";
import Services from "@/components/Services";
import Membership from "@/components/Membership";
import BlogPreview from "@/components/BlogPreview";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white selection:bg-brand-blue selection:text-white">
      <Header />
      <Hero />
      <TrustBand />
      <Intro />
      <Testimonials />
      <WhyChooseUs />
      <Services />
      <Membership />
      <BlogPreview />
      <FAQ />
      <Contact />
      <CallToAction />
      <Footer />
    </main>
  );
}
