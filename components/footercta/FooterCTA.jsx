import React from 'react';
import { Mail, ArrowRight, Laptop, Lamp, BookOpen, Coffee, Sparkles } from 'lucide-react';
import FooterIllustration from './FooterIllustration';

const FooterCTA = () => {
    return (
        <section className="bg-[#2F7A85] text-white py-16 md:py-11 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">

                {/* Text Content */}
                <div className="flex-1 text-center md:text-left">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 font-extrabold">
                        Get Started
                    </h2>
                    <p className="text-lg md:text-xl text-white/90 mb-8 max-w-lg leading-relaxed">
                        Ready to bring your ideas to life? Contact us today to discuss your project and see how we can help you succeed.
                    </p>
                    <button className="bg-[#1f2937] text-white font-bold py-4 px-8 rounded-full shadow-lg hover:bg-gray-800 transition-transform transform hover:scale-105 flex items-center gap-3 mx-auto md:mx-0">
                        Contact Us <ArrowRight size={20} />
                    </button>
                </div>

                {/* Illustration Area */}
                <div className="flex-1 w-full max-w-lg relative h-64 md:h-96 flex items-center justify-center">
                    <FooterIllustration />
                </div>
            </div>

            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
                <svg width="100%" height="100%">
                    <pattern id="pattern-circles" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                        <circle cx="2" cy="2" r="1" fill="currentColor" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#pattern-circles)" />
                </svg>
            </div>
        </section>
    );
};

export default FooterCTA;
