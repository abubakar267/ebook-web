import React from 'react';

const ServicesSection = () => {
  return (
    <section className="bg-[#F8F7F5] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="text-[#003B3B] font-bold text-xs tracking-[0.2em] uppercase">
            Services
          </span>
          <h2 className="text-[#003B3B] text-4xl md:text-5xl font-extrabold mt-4 mb-6">
            Your Path to <br /> Well-being
          </h2>
          <p className="text-[#003B3B]/70 text-lg max-w-lg mx-auto">
            Discover expert guidance for a healthier mind and balanced life.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1: Mindfulness */}
          <div className="bg-[#FDEBD2] rounded-[40px] p-10 flex flex-col justify-between min-h-[380px] relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-[#003B3B] text-3xl font-bold mb-4 leading-tight max-w-[200px]">
                Mindfulness & Meditation
              </h3>
              <p className="text-[#003B3B]/80 text-md mb-8 max-w-[240px]">
                Guided meditation sessions and stress management techniques.
              </p>
              <button className="border border-[#003B3B]/20 rounded-full px-6 py-2 font-bold text-[#003B3B] hover:bg-white/50 transition-colors">
                Learn More
              </button>
            </div>
            {/* Illustrative Hearts Placeholder */}
            <div className="absolute right-8 bottom-12 flex flex-col gap-2 opacity-90">
                <div className="w-16 h-16 bg-orange-500 rounded-full rounded-tr-none rotate-45" />
                <div className="w-12 h-12 bg-white rounded-full rounded-tr-none rotate-45 ml-[-20px]" />
            </div>
          </div>

          {/* Card 2: One-on-One */}
          <div className="bg-white rounded-[40px] p-10 flex flex-col justify-between min-h-[380px]">
            <div>
              <h3 className="text-[#003B3B] text-3xl font-bold mb-4 leading-tight">
                One-on-One <br /> Therapy
              </h3>
              <p className="text-[#003B3B]/80 text-md mb-8 max-w-[240px]">
                Virtual and in-person therapy sessions with licensed professionals.
              </p>
              <button className="border border-[#003B3B]/20 rounded-full px-6 py-2 font-bold text-[#003B3B] hover:bg-gray-50 transition-colors">
                Learn More
              </button>
            </div>
          </div>

          {/* Card 3: Full Width Wellness Coaching */}
          <div className="md:col-span-2 bg-white rounded-[40px] p-10 md:p-14 flex flex-col md:flex-row items-center gap-10 relative overflow-hidden">
            <div className="flex-1 z-10">
              <h3 className="text-[#003B3B] text-4xl font-bold mb-6">
                Wellness Coaching
              </h3>
              <div className="space-y-4 max-w-lg">
                <p className="text-[#003B3B]/80 text-md">
                  Personalized guidance to help you build healthier habits, manage stress, and achieve balance in all areas of your life.
                </p>
                <p className="text-[#003B3B]/80 text-md">
                  Our wellness coaches support you in creating sustainable routines for mental, emotional, and physical well-being.
                </p>
              </div>
              <button className="mt-10 bg-[#003B3B] text-white rounded-full px-8 py-3 font-bold hover:bg-teal-900 transition-colors">
                Learn More
              </button>
            </div>

            {/* Illustration Placeholder */}
            <div className="flex-1 relative flex justify-center">
               <div className="w-64 h-64 bg-[#FDEBD2] rounded-full flex items-center justify-center relative">
                  {/* Inner character visual mimic */}
                  <div className="w-40 h-40 bg-[#003B3B] rounded-full overflow-hidden border-8 border-white">
                     <div className="w-full h-full bg-yellow-400 mt-4 rounded-full" />
                  </div>
                  <div className="absolute top-0 right-0 w-12 h-12 bg-orange-500 rounded-full rounded-bl-none" />
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServicesSection;