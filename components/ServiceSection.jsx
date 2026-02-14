'use client';

import React, { useEffect, useRef, useState } from 'react';

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#ebe7dd] py-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="text-[#4B9DA9] font-bold text-xs tracking-[0.2em] uppercase">
            Services
          </span>
          <h2 className="text-[#1a1a1a] text-4xl md:text-5xl font-extrabold mt-4 mb-6">
            Your Path to <br /> Well-being
          </h2>
          <p className="text-[#1a1a1a]/70 text-lg max-w-lg mx-auto">
            Discover expert guidance for a healthier mind and balanced life.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1: Mindfulness */}
          <div className={`bg-[#F6F3C2] rounded-[40px] p-10 flex flex-col justify-between min-h-[380px] relative overflow-hidden transition-all duration-3000 ease-out shadow-lg hover:shadow-2xl hover:-translate-y-2 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
          }`}>
            {/* Background Decorative Shapes */}
            <div className="absolute top-10 right-16 w-20 h-20 bg-[#91C6BC]/20 rounded-full" />
            <div className="absolute top-24 right-8 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[35px] border-b-[#E37434]/20" />
            <div className="absolute bottom-32 left-8 w-16 h-16 bg-white/40 rounded-full" />
            
            {/* Corner Triangles */}
            <div className="absolute -top-4 -left-4 w-0 h-0 border-t-[40px] border-t-[#E37434] border-r-[40px] border-r-transparent" />
            <div className="absolute -bottom-4 -right-4 w-0 h-0 border-b-[40px] border-b-[#4B9DA9] border-l-[40px] border-l-transparent" />
            
            <div className="relative z-10">
              <h3 className="text-[#1a1a1a] text-3xl font-bold mb-4 leading-tight max-w-[200px]">
                Mindfulness & Meditation
              </h3>
              <p className="text-[#1a1a1a]/80 text-md mb-8 max-w-[240px]">
                Guided meditation sessions and stress management techniques.
              </p>
              <button className="border border-[#4B9DA9] rounded-full px-6 py-2 font-bold text-[#4B9DA9] hover:bg-white/50 transition-colors">
                Learn More
              </button>
            </div>
            {/* Illustrative Triangles Placeholder */}
            <div className="absolute right-8 bottom-12 flex flex-col gap-2 opacity-90">
                <div className="w-0 h-0 border-l-[32px] border-l-transparent border-r-[32px] border-r-transparent border-b-[56px] border-b-[#E37434]" />
                <div className="w-0 h-0 border-l-[24px] border-l-transparent border-r-[24px] border-r-transparent border-b-[42px] border-b-white ml-[-20px]" />
            </div>
          </div>

          {/* Card 2: One-on-One */}
          <div className={`bg-white rounded-[40px] p-10 flex flex-col justify-between min-h-[380px] relative overflow-hidden transition-all duration-1000 delay-200 ease-out shadow-lg hover:shadow-2xl hover:-translate-y-2 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
          }`}>
            {/* Background Decorative Shapes */}
            <div className="absolute top-16 left-12 w-24 h-24 bg-[#F6F3C2]/30 rounded-full" />
            <div className="absolute bottom-20 right-12 w-0 h-0 border-l-[18px] border-l-transparent border-r-[18px] border-r-transparent border-b-[32px] border-b-[#91C6BC]/20" />
            <div className="absolute top-32 right-20 w-14 h-14 bg-[#E37434]/10 rounded-full" />
            
            {/* Corner Triangles */}
            <div className="absolute -top-4 -right-4 w-0 h-0 border-t-[40px] border-t-[#91C6BC] border-l-[40px] border-l-transparent" />
            <div className="absolute -bottom-4 -left-4 w-0 h-0 border-b-[40px] border-b-[#E37434] border-r-[40px] border-r-transparent" />
            
            <div>
              <h3 className="text-[#1a1a1a] text-3xl font-bold mb-4 leading-tight">
                One-on-One <br /> Therapy
              </h3>
              <p className="text-[#1a1a1a]/80 text-md mb-8 max-w-[240px]">
                Virtual and in-person therapy sessions with licensed professionals.
              </p>
              <button className="border border-[#4B9DA9] rounded-full px-6 py-2 font-bold text-[#4B9DA9] hover:bg-gray-50 transition-colors">
                Learn More
              </button>
            </div>
          </div>

          {/* Card 3: Full Width Wellness Coaching */}
          <div className={`md:col-span-2 bg-white rounded-[40px] p-10 md:p-14 flex flex-col md:flex-row items-center gap-10 relative overflow-hidden transition-all duration-1000 delay-400 ease-out shadow-lg hover:shadow-2xl hover:-translate-y-2 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}>
            {/* Background Decorative Shapes */}
            <div className="absolute top-20 left-1/4 w-28 h-28 bg-[#F6F3C2]/20 rounded-full" />
            <div className="absolute bottom-16 left-16 w-0 h-0 border-l-[22px] border-l-transparent border-r-[22px] border-r-transparent border-b-[38px] border-b-[#4B9DA9]/15" />
            <div className="absolute top-1/2 right-1/3 w-20 h-20 bg-[#91C6BC]/10 rounded-full" />
            
            {/* Corner Triangles */}
            <div className="absolute -top-4 -left-4 w-0 h-0 border-t-[50px] border-t-[#4B9DA9] border-r-[50px] border-r-transparent" />
            <div className="absolute -top-4 -right-4 w-0 h-0 border-t-[50px] border-t-[#E37434] border-l-[50px] border-l-transparent" />
            <div className="absolute -bottom-4 -left-4 w-0 h-0 border-b-[50px] border-b-[#F6F3C2] border-r-[50px] border-r-transparent" />
            <div className="absolute -bottom-4 -right-4 w-0 h-0 border-b-[50px] border-b-[#91C6BC] border-l-[50px] border-l-transparent" />
            
            <div className="flex-1 z-10">
              <h3 className="text-[#1a1a1a] text-4xl font-bold mb-6">
                Wellness Coaching
              </h3>
              <div className="space-y-4 max-w-lg">
                <p className="text-[#1a1a1a]/80 text-md">
                  Personalized guidance to help you build healthier habits, manage stress, and achieve balance in all areas of your life.
                </p>
                <p className="text-[#1a1a1a]/80 text-md">
                  Our wellness coaches support you in creating sustainable routines for mental, emotional, and physical well-being.
                </p>
              </div>
              <button className="mt-10 bg-[#4B9DA9] text-white rounded-full px-8 py-3 font-bold hover:bg-[#3a8a96] transition-colors">
                Learn More
              </button>
            </div>

            {/* Illustration Placeholder with Triangles */}
            <div className="flex-1 relative flex justify-center">
               <div className="w-64 h-64 bg-[#F6F3C2] rounded-full flex items-center justify-center relative">
                  {/* Inner character visual mimic */}
                  <div className="w-40 h-40 bg-[#4B9DA9] rounded-full overflow-hidden border-8 border-white">
                     <div className="w-full h-full bg-[#91C6BC] mt-4 rounded-full" />
                  </div>
                  <div className="absolute top-0 right-0 w-0 h-0 border-l-[24px] border-l-transparent border-r-[24px] border-r-transparent border-b-[42px] border-b-[#E37434]" />
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServicesSection;