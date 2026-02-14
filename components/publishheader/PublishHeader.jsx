"use client";
import React from 'react';
import BookSlider from '../sliders/BookSlider';

const PublishHeader = () => {
    return (
        <div className="relative bg-[#5b50d6] text-white overflow-hidden font-sans">
            {/* Background Pattern - Dots */}
            <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
                    backgroundSize: '20px 20px'
                }}
            />

            {/* Background Abstract Global Squiggles/Blobs */}
            <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-20 pointer-events-none blur-3xl rounded-full bg-gradient-to-r from-purple-400 to-blue-400 mix-blend-screen animate-pulse">
            </div>

            {/* Additional Custom Squiggles */}
            <div className="absolute top-20 right-0 w-64 h-64 opacity-10 pointer-events-none z-0">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#ffffff" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,79.6,-46.3C87.4,-33.5,90.1,-18,88.5,-3.3C86.9,11.4,81,25.3,71.4,37C61.8,48.7,48.5,58.2,34.4,65.3C20.3,72.4,5.4,77.1,-8.5,75.4C-22.4,73.8,-35.3,65.8,-46.9,56.5C-58.5,47.2,-68.8,36.6,-75.4,23.5C-82,10.4,-84.9,-5.2,-79.8,-18.2C-74.7,-31.2,-61.6,-41.6,-48.7,-49.2C-35.8,-56.8,-23.1,-61.6,-9.9,-63.8C3.3,-66,16.6,-86.3,30.5,-83.6L44.7,-76.4Z" transform="translate(100 100)" />
                </svg>
            </div>

            <div className="absolute bottom-40 left-10 w-48 h-48 opacity-10 pointer-events-none z-0">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#ffffff" d="M41.7,-68.6C54.8,-62.4,66.9,-53.9,76.3,-43.3C85.7,-32.7,92.4,-20,90.6,-8.1C88.7,3.8,78.3,14.9,68.7,25.4C59.1,35.9,50.3,45.8,39.9,53.2C29.5,60.6,17.5,65.5,5.1,64.4C-7.3,63.3,-20.1,56.2,-31.6,48.1C-43.1,40,-53.3,30.9,-60.8,19.3C-68.3,7.7,-73.1,-6.4,-69.7,-19.1C-66.3,-31.8,-54.7,-43.1,-43.1,-50.2C-31.5,-57.3,-19.9,-60.2,-8.1,-61.6C3.7,-63,15.5,-73.8,28.6,-74.8L41.7,-68.6Z" transform="translate(100 100)" />
                </svg>
            </div>

            {/* Top Wave */}
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180 z-0">
                <svg
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                    className="relative block w-[calc(100%+1.3px)] h-[80px] md:h-[120px]"
                    fill="#4c43b3"
                >
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill" fillOpacity="0.3"></path>
                </svg>
            </div>


            {/* Main Content */}
            <div className="relative z-10 container mx-auto px-4 pt-20 pb-32 text-center">

                {/* Headline */}
                <h1 className="text-4xl md:text-6xl font-serif font-black mb-6 tracking-tight drop-shadow-sm">
                    Publish. Print. Prosper.
                </h1>

                {/* Subhead */}
                <p className="max-w-3xl mx-auto text-lg md:text-xl text-blue-100 mb-8 leading-relaxed font-medium">
                    Lulu is the leading print-on-demand partner for creators, businesses, and publishers.
                </p>

                <p className="max-w-4xl mx-auto text-sm md:text-base text-blue-100 mb-10 leading-relaxed hidden md:block opacity-90">
                    Our international network of printers offers affordable, high-quality book printing, whether you need one copy, short-run printing, or bulk printing. Sell directly and increase your profits, eliminating the risk and hassle of inventory and fulfillment with Lulu's retail distribution options, ecommerce sales solutions, and even a custom print API.
                </p>

                {/* CTA Button */}
                <button className="bg-[#333333] hover:bg-black text-white font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 text-sm md:text-base">
                    Create a Free Account
                </button>

            </div>

            {/* Bottom Wave Area */}
            <div className="absolute bottom-0 left-0 w-full z-0">
                {/* Wave Shape */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
                    className="w-full block"
                    preserveAspectRatio="none"
                    height="200"
                >
                    <path
                        fill="#f8fafc" // Matches slate-50 usually
                        fillOpacity="1"
                        d="M0,96L80,112C160,128,320,160,480,149.3C640,139,800,85,960,85.3C1120,85,1280,139,1360,165.3L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
                    ></path>
                </svg>
            </div>

            {/* Books Container - Overlapping the bottom wave */}
            <div className="relative w-full z-20 -mt-32 md:-mt-48 pb-10">
                <BookSlider />
            </div>

        </div>
    );
};

export default PublishHeader;
