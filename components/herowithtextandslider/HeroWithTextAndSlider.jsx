"use client";
import React from 'react';
import BookSlider from '../sliders/BookSlider';

const HeroWithTextAndSlider = () => {
    return (
        <div className="relative w-full overflow-hidden bg-slate-50">
            {/* Squiggly SVG Background */}
            <div className="absolute inset-0 z-0">
                <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 800" preserveAspectRatio="none">
                    {/* Gradient Definition */}
                    <defs>
                        <linearGradient id="squigglyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style={{ stopColor: '#6366f1', stopOpacity: 0.1 }} />
                            <stop offset="100%" style={{ stopColor: '#8b5cf6', stopOpacity: 0.05 }} />
                        </linearGradient>
                    </defs>

                    {/* Multiple Squiggly Waves */}
                    <path
                        d="M0,300 Q360,250 720,300 T1440,300 L1440,800 L0,800 Z"
                        fill="url(#squigglyGradient)"
                    />
                    <path
                        d="M0,350 Q360,400 720,350 T1440,350 L1440,800 L0,800 Z"
                        fill="#f1f5f9"
                        opacity="0.5"
                    />
                    <path
                        d="M0,400 Q360,450 720,400 T1440,400"
                        stroke="#818cf8"
                        strokeWidth="2"
                        fill="none"
                        opacity="0.3"
                    />
                </svg>
            </div>

            {/* Main Content Container */}
            <div className="relative z-10 container mx-auto px-4 py-20">
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-0">

                    {/* Left Side: Text Content with Fade Box */}
                    <div className="w-full lg:w-1/2 relative z-20">
                        {/* Fading Box Container */}
                        <div className="relative">
                            {/* The Box with Right Fade */}
                            <div className="relative bg-white rounded-2xl shadow-2xl border border-slate-200 p-8 lg:p-12 fade-box-container">
                                {/* Content */}
                                <div className="relative z-10">
                                    <div className="inline-block mb-4">
                                        <span className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-full font-bold text-xs tracking-wide uppercase shadow-lg">
                                            Featured Collection
                                        </span>
                                    </div>

                                    <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black text-slate-900 mb-6 leading-tight">
                                        Discover Your Next
                                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                                            Great Read
                                        </span>
                                    </h2>

                                    <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                        Explore our curated collection of bestselling ebooks across all genres. From gripping thrillers to inspiring self-help, find the perfect story that speaks to you.
                                    </p>

                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <button className="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-bold text-sm overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105">
                                            <span className="relative z-10 flex items-center justify-center gap-2">
                                                Browse Collection
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                                </svg>
                                            </span>
                                            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        </button>

                                        <button className="px-8 py-4 bg-white border-2 border-slate-300 text-slate-900 rounded-full font-bold text-sm hover:bg-slate-50 hover:border-slate-400 transition-all duration-300 hover:shadow-lg">
                                            Learn More
                                        </button>
                                    </div>
                                </div>

                                {/* Right Fade Effect */}
                                <div className="absolute top-0 right-0 h-full w-1/3 bg-gradient-to-r from-transparent to-white pointer-events-none z-20 rounded-r-2xl"></div>
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-full opacity-20 blur-2xl"></div>
                            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-20 blur-2xl"></div>
                        </div>
                    </div>

                    {/* Right Side: Book Slider */}
                    <div className="w-full lg:w-1/2 relative z-10 lg:-ml-32">
                        <BookSlider />
                    </div>
                </div>
            </div>

            {/* Additional Styling */}
            <style jsx>{`
                .fade-box-container {
                    position: relative;
                    overflow: hidden;
                }
                
                /* Enhanced gradient fade on the right */
                .fade-box-container::after {
                    content: '';
                    position: absolute;
                    top: 0;
                    right: 0;
                    height: 100%;
                    width: 200px;
                    background: linear-gradient(
                        to right,
                        rgba(255, 255, 255, 0) 0%,
                        rgba(255, 255, 255, 0.8) 50%,
                        rgba(255, 255, 255, 1) 100%
                    );
                    pointer-events: none;
                    z-index: 15;
                }

                @media (max-width: 1024px) {
                    .fade-box-container::after {
                        display: none;
                    }
                }
            `}</style>
        </div>
    );
};

export default HeroWithTextAndSlider;
