'use client';

import React, { useState } from 'react';

const AboutUsHeader = () => {
  const [activeTab, setActiveTab] = useState(0);

  const steps = [
    {
      id: 0,
      number: '01',
      title: 'Segment',
      description: 'Define your audience based on specific behaviors and attributes.'
    },
    {
      id: 1,
      number: '02',
      title: 'Design',
      description: 'Create beautiful, high-converting templates with our drag-and-drop editor.'
    },
    {
      id: 2,
      number: '03',
      title: 'Send',
      description: 'One-off announcements or automatically triggered flows.'
    },
    {
      id: 3,
      number: '04',
      title: 'Convert',
      description: 'Track ROI and customer engagement in real-time with our dashboard.'
    }
  ];

  return (
    <div className="p-4 md:px-8 md:py-24 flex flex-col md:flex-row gap-6 md:gap-8 -mt-8 max-w-[1850px] mx-auto">
      {/* Left Section - Smaller */}
      <div className="relative w-full md:w-1/2 h-[500px] md:h-[700px] bg-[#FE5D33] overflow-hidden font-sans text-white rounded-[30px] md:rounded-[50px]">
        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
          .float-1 { animation: float 6s ease-in-out infinite; }
          .float-2 { animation: float 8s ease-in-out infinite 0.5s; }
          .float-3 { animation: float 7s ease-in-out infinite 1s; }
          .float-4 { animation: float 5s ease-in-out infinite 1.5s; }
          .float-5 { animation: float 9s ease-in-out infinite 2s; }
          .float-6 { animation: float 6.5s ease-in-out infinite 0.8s; }
        `}</style>
        
        {/* Social Proof Badge - Top Right on Mobile */}
        <div className="absolute top-4 right-4 md:hidden bg-black/30 backdrop-blur-md px-3 py-2 rounded-full flex items-center gap-2 border border-white/10 z-20">
          <span className="text-yellow-400">★</span>
          <span className="text-xs font-medium">Loved by 1M+ users worldwide</span>
        </div>
        
        {/* Decorative Floating Circles */}
        <div className="absolute top-1/4 left-4 md:left-10 w-12 h-12 md:w-16 md:h-16 bg-white/20 rounded-full blur-sm float-1" />
        <div className="absolute bottom-1/15 left-20 md:left-32 w-16 h-16 md:w-20 md:h-20 bg-blue-200/40 rounded-full float-2" />
        <div className="absolute bottom-1/3 left-16 md:left-28 w-10 h-10 md:w-14 md:h-14 bg-pink-200/40 rounded-full float-3" />
        <div className="absolute top-1/5 right-10 md:right-20 w-10 h-10 md:w-12 md:h-12 bg-purple-300/40 rounded-full float-4" />
        <div className="absolute bottom-1/4 right-24 md:right-40 w-12 h-12 md:w-16 md:h-16 bg-blue-100/30 rounded-full float-5" />
        <div className="absolute top-1/2 right-20 md:right-32 w-10 h-10 md:w-14 md:h-14 bg-black/40 rounded-full float-6" />

        {/* Hero Content */}
        <main className="relative z-10 flex flex-col items-start text-left mt-12 px-6 md:px-12 pt-12 md:pt-20 pb-20 md:pb-40">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-bold mb-4 md:mb-6 leading-tight">
            About Us
          </h1>
          <p className="max-w-xl text-base md:text-lg lg:text-xl opacity-90 mb-6 md:mb-10 leading-relaxed">
            Track your daily routines, stay consistent, and turn goals into habits — all in one beautiful app.
            Track your daily routines, stay consistent, and turn goals into habits — all in one beautiful app.
            
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-start gap-3 md:gap-4">
            <button className="bg-white text-[#FF5733] px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg hover:shadow-lg transition-all">
              Get Started Free
            </button>
            <button className="flex items-center gap-2 border-2 border-white/30 bg-white/10 px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg hover:bg-white/20 transition-all">
              <span className="w-0 h-0 border-t-8 border-t-transparent border-l-[12px] border-l-white border-b-8 border-b-transparent ml-1" />
              Watch Demo
            </button>
          </div>

          {/* Social Proof Badge - Desktop Only */}
          <div className="hidden md:flex mt-8 md:mt-16 bg-black/30 backdrop-blur-md px-3 md:px-4 py-2 rounded-full items-center gap-2 border border-white/10">
            <span className="text-yellow-400">★</span>
            <span className="text-xs md:text-sm font-medium">Loved by 1M+ users worldwide</span>
          </div>
        </main>

        {/* UI Mockup Placeholder (Bottom Section) */}
        <div className="hidden md:flex absolute bottom-[-100px] left-0 w-full justify-center gap-4 px-4 pointer-events-none">
          {/* Simplified card shapes to mimic the phone mockups */}
          <div className="w-64 h-80 bg-white rounded-3xl shadow-2xl rotate-[-10deg] transform translate-y-10" />
          <div className="w-64 h-80 bg-white rounded-3xl shadow-2xl translate-y-20" />
          <div className="w-64 h-80 bg-white rounded-3xl shadow-2xl rotate-[10deg] transform translate-y-10" />
        </div>
      </div>

      {/* Right Section - Content */}
      <div className="flex w-full md:w-1/2 h-[400px] md:h-[700px] bg-[#ccff66] rounded-[30px] md:rounded-[50px] p-6 md:p-8 flex-col justify-center items-start gap-4 md:gap-6 relative overflow-hidden">
        <style jsx>{`
          @keyframes rotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .circular-text { animation: rotate 20s linear infinite; }
        `}</style>
        
        {/* Circular Text - Top Right Quarter */}
        <div className="absolute -top-32 -right-32 sm:-top-40 sm:-right-40 md:-top-56 md:-right-56 lg:-top-64 lg:-right-64 w-64 h-64 sm:w-80 sm:h-80 md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px]">
          <svg viewBox="0 0 200 200" className="circular-text w-full h-full">
            <defs>
              <path id="circlePath" d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" />
            </defs>
            <text className="text-xs sm:text-sm md:text-base lg:text-xl font-bold fill-black">
              <textPath href="#circlePath" startOffset="0%">
                READ • LEARN • GROW • READ • LEARN • GROW • 
              </textPath>
            </text>
          </svg>
        </div>
  
        {/* Vertical Stepper */}
        <div className="flex flex-col space-y-0 max-w-md lg:max-w-lg z-10">
          {steps.map((step, index) => {
            const isActive = activeTab === index;
            
            return (
              <div 
                key={step.id} 
                className="group cursor-pointer relative"
                onClick={() => setActiveTab(index)}
              >
                <div className="flex items-start gap-4 md:gap-6 lg:gap-8 py-3 md:py-4">
                  <span className={`text-xl md:text-2xl lg:text-3xl font-mono italic transition-colors duration-300 ${
                    isActive ? 'text-black font-bold' : 'text-black/40'
                  }`}>
                    {step.number}
                  </span>

                  <div className="flex flex-col">
                    <h3 className={`text-xl md:text-2xl lg:text-4xl font-bold transition-colors duration-300 ${
                      isActive ? 'text-black' : 'text-black/50'
                    }`}>
                      {step.title}
                    </h3>
                    
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      isActive ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0'
                    }`}>
                      <p className="text-black/70 leading-relaxed text-sm md:text-base lg:text-lg max-w-[250px] md:max-w-[300px] lg:max-w-[350px]">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>

                {index !== steps.length - 1 && (
                  <div className="absolute left-[1rem] md:left-[1.15rem] lg:left-[1.4rem] top-10 md:top-12 lg:top-14 bottom-0 w-[1px] bg-black/20">
                    {isActive && (
                      <div className="absolute top-0 left-0 w-full h-1/2 bg-black" />
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Lady Reading Book Image */}
        <img 
          src="/lady-reading-book.png" 
          alt="Lady reading book" 
          className="absolute bottom-0 right-0 w-42 sm:w-40 md:w-56 lg:w-120 h-auto object-contain md:opacity-100 opacity-30"
        />
      </div>
    </div>
  );
};

export default AboutUsHeader;