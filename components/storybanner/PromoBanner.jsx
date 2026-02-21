import React from 'react';

const PromoBanner = () => {
  return (
    <div className="flex items-center justify-center w-full min-h-[400px] p-6 bg-gray-50">
      <div className="relative w-full max-w-7xl h-[500px] overflow-hidden rounded-[40px] shadow-2xl flex flex-col items-center justify-center text-center px-6">
        
        {/* Background Image Container */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ 
            // If the image itself is low-res, try a higher quality source
            backgroundImage: `url('/texture-cta.webp')`, 
          }}
        >
          {/* REMOVED backdrop-blur here to keep the texture sharp */}
          <div className="absolute inset-0 bg-[#1e3a4f]/60 mix-blend-multiply"></div>
        </div>

        {/* Content Layer */}
        <div className="relative z-10 max-w-2xl space-y-6">
          <h1 className="text-white text-4xl md:text-6xl font-serif tracking-tight leading-tight">
            Stay Ahead. Hire Smarter.
          </h1>
          
          <p className="text-blue-50 text-sm md:text-lg leading-relaxed font-light max-w-lg mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse 
            varius enim in eros elementum tristique.
          </p>

          <div className="pt-4">
            <button className="px-12 py-4 bg-white hover:bg-blue-50 text-[#1e3a4f] font-bold rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl active:scale-95">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;