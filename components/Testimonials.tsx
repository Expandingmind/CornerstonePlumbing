import { Star, Quote } from "lucide-react";
import Image from "next/image";

// Platform Icons
const GoogleIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
  </svg>
);

const YelpIcon = () => (
  <svg className="w-5 h-5 text-red-600" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
  </svg>
);

const FacebookIcon = () => (
  <svg className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

export default function Testimonials() {
  const reviews = [
    {
      name: "Rogers Healy",
      role: "FOUNDER, ROGERS HEALY & ASSOCIATES REAL ESTATE",
      text: "In the fast-paced world of real estate, partnering with professionals who share our commitment to excellence...",
      platform: "google",
      stars: 5,
      date: "FEBRUARY 2025",
      avatar: "R" 
    },
    {
      name: "James H.",
      role: "HOMEOWNER MOVING OUT",
      text: "Matthew was very responsive and got a plumber to go out and look at an issue I was told needed to be...",
      platform: "yelp",
      stars: 5,
      date: "JANUARY 2025",
      avatar: "J"
    },
    {
      name: "Sarah Kirkpatrick",
      role: "MOM OF 2",
      text: "5 Stars! Highly recommend Cornerstone Plumbing! We recently hired this plumbing company to perform...",
      platform: "google",
      stars: 5,
      date: "JANUARY 2025",
      avatar: "S"
    },
    {
      name: "Anali Michael Zack",
      role: "",
      text: "We recently used Cornerstone Modern Plumbing for a yard sewer repair and we were very impressed with their...",
      platform: "facebook",
      stars: 5,
      date: "JANUARY 2025",
      avatar: "A"
    },
    {
      name: "Bill Case",
      role: "",
      text: "We called Cornerstone Modern Plumbing for a quote to replace an older tankless hot water heater. Their...",
      platform: "google",
      stars: 5,
      date: "JANUARY 2025",
      avatar: "B"
    },
    {
      name: "Floyd Burnside",
      role: "",
      text: "Cornerstone Modern Plumbing did a phenomenal job for my family. We had a pipe bust on the outside wall...",
      platform: "google",
      stars: 5,
      date: "FEBRUARY 2025",
      avatar: "F"
    }
  ];

  return (
    <section id="reviews" className="py-20 bg-navy-900 text-white overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Homeowners Love Cornerstone</h2>
          <p className="text-gray-400 text-lg flex items-center gap-2">
            112 reviews with an overall 4.9 star ranking
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
          </p>
        </div>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full">
        <div className="flex gap-6 animate-marquee w-max px-4 hover:[animation-play-state:paused]">
          {/* Render reviews twice for seamless loop */}
          {[...reviews, ...reviews].map((review, idx) => (
            <div 
              key={idx} 
              className="w-[350px] md:w-[400px] bg-[#1a2332] p-8 rounded-3xl flex-shrink-0 relative group cursor-default border border-white/5 hover:border-brand-blue/30 transition-colors"
            >
              {/* Top Row: Platform Icon & Avatar */}
              <div className="flex justify-between items-start mb-6">
                <div className="p-2 bg-white rounded-full">
                  {review.platform === 'google' && <GoogleIcon />}
                  {review.platform === 'yelp' && <YelpIcon />}
                  {review.platform === 'facebook' && <FacebookIcon />}
                </div>
                <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white font-bold border-2 border-navy-900">
                  {/* Using text avatar as placeholder since we don't have images */}
                  {review.avatar}
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-1 text-white mb-6">
                {[...Array(review.stars)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-white text-white" />
                ))}
              </div>

              {/* Quote Icon (Decoration) */}
              <div className="absolute top-24 left-8 text-brand-blue/20">
                <Quote className="w-12 h-12 fill-current transform rotate-180" />
              </div>

              {/* Name & Role */}
              <div className="relative z-10 mb-4">
                <h3 className="font-bold text-lg text-white mb-1">{review.name}</h3>
                {review.role && (
                  <p className="text-xs text-gray-400 uppercase tracking-wider font-medium mb-4">{review.role}</p>
                )}
              </div>

              {/* Text */}
              <p className="text-white text-lg leading-relaxed mb-4 relative z-10 line-clamp-3">
                {review.text}
              </p>

              {/* Show More */}
              <div className="mb-8">
                <span className="text-white underline decoration-white/30 underline-offset-4 hover:decoration-white cursor-pointer text-sm font-medium">
                  Show more
                </span>
              </div>

              {/* Date */}
              <div className="text-xs text-gray-500 font-bold uppercase tracking-widest">
                {review.date}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
