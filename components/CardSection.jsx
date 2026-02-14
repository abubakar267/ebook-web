import React from 'react';

const CardSection = () => {
  return (
    <section className="bg-white py-12 md:py-20 px-6 md:px-20 min-h-[600px] flex items-center">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20 lg:gap-48 items-center">
        
        {/* Left Column: Content */}
        <div className="flex flex-col space-y-4">
          <span className="text-[#4B9DA9] font-bold text-[15px] tracking-widest uppercase">
            How It Works
          </span>
          
          <h2 className="text-[#1a1a1a] text-[25px] md:text-6xl font-bold leading-tight">
            We Help You Prioritize Your Mental Health
          </h2>
          
          <p className="text-[#1a1a1a]/70 text-lg md:text-xl max-w-md leading-relaxed">
            Browse therapists, book a session, and start your healing journey with trusted professionals.
          </p>
          
          <div className="pt-4 flex items-center gap-4">
            <button className="bg-[#4B9DA9] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-[#e54d23] transition-colors duration-300">
              Find A Therapist
            </button>
            <img 
              src="/happy_face.png" 
              alt="Happy face" 
              className="md:hidden w-15 h-15 rotate-30 -translate-y-8 translate-x-4"
            />
          </div>
        </div>

        {/* Right Column: Illustration Container */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="bg-white rounded-[60px] w-full max-w-[600px] aspect-square flex items-center justify-center overflow-hidden relative">
            <img
              src="/bookimg.jpg"
              alt="Illustration"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default CardSection;