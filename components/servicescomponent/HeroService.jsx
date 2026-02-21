import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const HeroService = () => {
  return (
    <section className="w-full bg-white py-16 px-6 lg:px-12 xl:px-24 overflow-hidden">
      
      {/* Main container with a large responsive gap:
          lg:gap-32 (128px) for desktop 
          xl:gap-40 (160px) for extra large screens 
      */}
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-32 xl:gap-40">
        
        {/* Left Content */}
        <div className="flex-1 space-y-8 text-left">
          <div className="inline-block px-3 py-1 border border-red-400 rounded-md">
            <span className="text-red-400 text-sm font-medium tracking-wide">Services</span>
          </div>
          
          <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-black leading-tight tracking-tight">
            AI Solutions, Built <br /> for Your Industry
          </h1>
          
          <p className="text-slate-600 text-lg max-w-xl leading-relaxed">
           Lorem, ipsum dolor sit amet consectetur adipisicing elit. A delectus provident reiciendis exercitationem laudantium similique pariatur cum non veniam, est nobis iste autem, atque, ullam impedit magni maxime modi itaque!
          </p>

          <button className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all group shadow-lg hover:shadow-blue-200">
            Get in Touch
            <div className="bg-white/20 rounded-full p-1 group-hover:bg-white/30 transition-colors">
              <ArrowUpRight size={20} />
            </div>
          </button>
        </div>

        {/* Right Side: Single Large Image */}
        <div className="flex-1 w-full max-w-2xl">
          <div className="relative  overflow-hiddengroup ">
            <img 
              src="./service-hero-img.jpg" 
              alt="AI Industry Solutions" 
              className="w-full h-full object-cover transition-transform duration-1000"
            />
           
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroService;