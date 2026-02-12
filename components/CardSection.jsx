import React from 'react';

const CardSection = () => {
  return (
    <section className="bg-slate-50 py-12 md:py-20 px-6 md:px-20 min-h-[600px] flex items-center">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20 lg:gap-48 items-center">
        
        {/* Left Column: Content */}
        <div className="flex flex-col space-y-6">
          <span className="text-[#FE5D33] font-bold text-xs tracking-widest uppercase">
            How It Works
          </span>
          
          <h2 className="text-[#1a1a1a] text-4xl md:text-6xl font-extrabold leading-tight">
            We Help You <br /> Prioritize Your <br /> Mental Health
          </h2>
          
          <p className="text-[#1a1a1a]/70 text-lg md:text-xl max-w-md leading-relaxed">
            Browse therapists, book a session, and start your healing journey with trusted professionals.
          </p>
          
          <div className="pt-4">
            <button className="bg-[#FE5D33] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-[#e54d23] transition-colors duration-300">
              Find A Therapist
            </button>
          </div>
        </div>

        {/* Right Column: Illustration Container */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="bg-[#ddff66] rounded-[60px] w-full max-w-[500px] aspect-square flex items-center justify-center overflow-hidden relative">
            
            {/* Inner Circular Background Decor */}
            <div className="absolute w-[80%] h-[80%] bg-[#FE5432] rounded-full flex items-center justify-center overflow-hidden">
                {/* Visual Placeholder for the Illustration */}
                <img 
                  src="/path-to-your-illustration.png" 
                  alt="Mental health illustration"
                  className="w-full h-full object-cover scale-110 translate-y-4"
                />
            </div>

            {/* Subtle floating shapes (matching the image) */}
            <div className="absolute top-1/4 right-12 w-8 h-8 text-white opacity-40">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0L14.5 9.5H24L16.5 15.5L19 25L12 19L5 25L7.5 15.5L0 9.5H9.5L12 0Z"/></svg>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CardSection;