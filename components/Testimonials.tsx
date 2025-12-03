import { Star, Quote, MessageSquarePlus } from "lucide-react";
import Link from "next/link";

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
      role: "FOUNDER, ROGERS HEALY",
      text: "In the fast-paced world of real estate, partnering with professionals who share our commitment to excellence is key.",
      platform: "google",
      stars: 5,
      date: "FEBRUARY 2025",
      avatar: "R" 
    },
    {
      name: "James H.",
      role: "HOMEOWNER",
      text: "Matthew was very responsive and got a plumber to go out and look at an issue I was told needed to be fixed immediately.",
      platform: "yelp",
      stars: 5,
      date: "JANUARY 2025",
      avatar: "J"
    },
    {
      name: "Sarah Kirkpatrick",
      role: "MOM OF 2",
      text: "5 Stars! Highly recommend Cornerstone Plumbing! We recently hired this plumbing company to perform repairs.",
      platform: "google",
      stars: 5,
      date: "JANUARY 2025",
      avatar: "S"
    },
    {
      name: "Anali Michael Zack",
      role: "",
      text: "We recently used Cornerstone Modern Plumbing for a yard sewer repair and we were very impressed with their professionalism.",
      platform: "facebook",
      stars: 5,
      date: "JANUARY 2025",
      avatar: "A"
    },
    {
      name: "Bill Case",
      role: "",
      text: "We called Cornerstone Modern Plumbing for a quote to replace an older tankless hot water heater. Their quote was fair.",
      platform: "google",
      stars: 5,
      date: "JANUARY 2025",
      avatar: "B"
    },
    {
      name: "Floyd Burnside",
      role: "",
      text: "Cornerstone Modern Plumbing did a phenomenal job for my family. We had a pipe bust on the outside wall and they fixed it fast.",
      platform: "google",
      stars: 5,
      date: "FEBRUARY 2025",
      avatar: "F"
    }
  ];

  return (
    <section id="reviews" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-navy-900">Why Homeowners Love Cornerstone</h2>
          <div className="text-gray-600 text-lg flex flex-wrap items-center gap-2">
            <span className="font-bold text-navy-900">112 reviews</span> with an overall 4.9 star ranking
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
          </div>
        </div>

        {/* Leave a Review Button - Links to Google Reviews */}
        <a 
          href="https://g.page/r/CornerstonePlumbing/review" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-navy-900 hover:bg-brand-blue text-white px-5 py-2.5 rounded-full text-sm font-bold transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 whitespace-nowrap"
        >
          <MessageSquarePlus className="w-4 h-4" />
          Leave a Review
        </a>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full">
        {/* Gradient Masks for smooth fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex gap-6 animate-marquee w-max px-4 hover:[animation-play-state:paused]">
          {/* Render reviews twice for seamless loop */}
          {[...reviews, ...reviews].map((review, idx) => (
            <div 
              key={idx} 
              className="w-[260px] md:w-[300px] bg-navy-900 p-6 rounded-3xl flex-shrink-0 relative group cursor-default shadow-xl transform transition-transform hover:scale-[1.02]"
            >
              {/* Top Row: Platform Icon & Avatar */}
              <div className="flex justify-between items-start mb-4">
                <div className="p-1.5 bg-white rounded-full shadow-sm">
                  {review.platform === 'google' && <GoogleIcon />}
                  {review.platform === 'yelp' && <YelpIcon />}
                  {review.platform === 'facebook' && <FacebookIcon />}
                </div>
                <div className="w-8 h-8 rounded-full bg-navy-800 flex items-center justify-center text-white text-xs font-bold border border-white/10">
                  {review.avatar}
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 text-white mb-4">
                {[...Array(review.stars)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-white text-white" />
                ))}
              </div>

              {/* Name & Role */}
              <div className="relative z-10 mb-3">
                <h3 className="font-bold text-base text-white leading-tight mb-0.5">{review.name}</h3>
                {review.role && (
                  <p className="text-[10px] text-brand-blue font-bold uppercase tracking-wider">{review.role}</p>
                )}
              </div>

              {/* Text */}
              <p className="text-gray-300 text-sm leading-relaxed mb-4 relative z-10 line-clamp-4">
                "{review.text}"
              </p>

              {/* Date */}
              <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest border-t border-white/10 pt-3">
                {review.date}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
