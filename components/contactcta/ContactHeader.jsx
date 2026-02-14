"use client";

import React from 'react';

const ContactHeader = () => {
  return (
    <div className="w-full bg-[#f4f1ea] p-4 md:p-8 font-sans">
      <header className="relative max-w-7xl mx-auto bg-white rounded-[40px] overflow-hidden shadow-sm border border-slate-100">
        <div className="grid lg:grid-cols-2 min-h-[550px]">
          
          {/* Left Content Column */}
          <div className="p-10 md:p-20 flex flex-col justify-center relative z-10 bg-white">
            {/* Branding / Logo Area */}
            <div className="absolute top-12 left-12">
              <div className="text-sm font-black tracking-tighter leading-none uppercase text-slate-900">
                Design <br /> Thinkers <br /> Academy <br /> London
              </div>
            </div>
            
            {/* Main Hero Text */}
            <div className="mt-12">
              <h1 className="text-6xl md:text-8xl font-black text-slate-900 leading-[0.85] tracking-tight">
                Design thinking <br /> 
                <span className="flex items-baseline gap-2">
                  & design doing<span className="text-lime-400">.</span>
                </span>
              </h1>
              
              <p className="mt-8 text-xl text-slate-600 max-w-md font-medium leading-relaxed">
                Learn new ways to innovate & change the way you work.
              </p>
              
              {/* Pill Button */}
              <button className="mt-10 px-8 py-4 border-2 border-black rounded-full font-bold text-lg hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-105 active:scale-95">
                Explore our courses
              </button>
            </div>
          </div>

          {/* Right Image Column */}
          <div className="relative hidden lg:block overflow-hidden">
            {/* Background Image */}
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2070" 
              alt="Team collaborating with sticky notes" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            
            {/* The Signature "Lime Circles" Accents */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Large central lime curve overlap */}
              <div className="absolute top-0 -left-20 h-full w-40 bg-white rounded-full blur-2xl opacity-20"></div>
              
              {/* Solid Lime Orbs */}
              <div className="absolute top-1/4 -left-8 w-16 h-16 bg-lime-400 rounded-full border-[8px] border-white shadow-lg"></div>
              <div className="absolute top-[40%] -left-12 w-24 h-24 bg-lime-400 rounded-full border-[10px] border-white shadow-lg"></div>
              <div className="absolute bottom-1/4 -left-6 w-10 h-10 bg-lime-400 rounded-full border-[6px] border-white shadow-lg"></div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default ContactHeader;