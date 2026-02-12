'use client';

import React from 'react';

const AboutUsHeader = () => {
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
        {/* Decorative Floating Circles */}
        <div className="absolute top-1/4 left-10 w-16 h-16 bg-white/20 rounded-full blur-sm float-1" />
        <div className="absolute bottom-1/4 left-32 w-20 h-20 bg-blue-200/40 rounded-full float-2" />
        <div className="absolute bottom-1/3 left-28 w-14 h-14 bg-pink-200/40 rounded-full float-3" />
        <div className="absolute top-1/3 right-20 w-12 h-12 bg-purple-300/40 rounded-full float-4" />
        <div className="absolute bottom-1/4 right-40 w-16 h-16 bg-blue-100/30 rounded-full float-5" />
        <div className="absolute top-1/2 right-32 w-14 h-14 bg-black/40 rounded-full float-6" />

        {/* Hero Content */}
        <main className="relative z-10 flex flex-col items-start text-left px-6 md:px-12 pt-12 md:pt-20 pb-20 md:pb-40">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight">
            Build Better Habits. <br /> One Day at a Time.
          </h1>
          <p className="max-w-xl text-base md:text-lg lg:text-xl opacity-90 mb-6 md:mb-10 leading-relaxed">
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

          {/* Social Proof Badge */}
          <div className="mt-8 md:mt-16 bg-black/30 backdrop-blur-md px-3 md:px-4 py-2 rounded-full flex items-center gap-2 border border-white/10">
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
      <div className="flex w-full md:w-1/2 h-[400px] md:h-[700px] bg-[#ccff66] rounded-[30px] md:rounded-[50px] p-6 md:p-8 flex-col justify-center items-center gap-4 md:gap-6">
        <div className="w-32 h-32 md:w-48 md:h-48 bg-white/30 rounded-3xl flex items-center justify-center">
          <span className="text-4xl md:text-6xl">📚</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-black text-center">Your Content Here</h2>
        <p className="text-sm md:text-lg text-black/80 text-center max-w-md">Add your images and content to showcase your features</p>
        <div className="flex gap-3 md:gap-4">
          <div className="w-16 h-16 md:w-24 md:h-24 bg-white/30 rounded-2xl flex items-center justify-center">
            <span className="text-2xl md:text-3xl">✨</span>
          </div>
          <div className="w-16 h-16 md:w-24 md:h-24 bg-white/30 rounded-2xl flex items-center justify-center">
            <span className="text-2xl md:text-3xl">🎯</span>
          </div>
          <div className="w-16 h-16 md:w-24 md:h-24 bg-white/30 rounded-2xl flex items-center justify-center">
            <span className="text-2xl md:text-3xl">🚀</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsHeader;