import React from 'react';
import { Mail, ArrowRight, MessageSquare, Sparkles, Send } from 'lucide-react';

const ContactCTA = () => {
    return (
        <section className="py-24 px-4 bg-slate-50">
            <div className="max-w-7xl mx-auto">
                <div className="bg-[var(--color-brand-green)] pt-12 md:pt-20 px-8 md:px-20 pb-12 md:pb-20 relative overflow-hidden text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-12 shadow-2xl rounded-[3rem]">

                    {/* Content */}
                    <div className="relative z-10 max-w-xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 text-white text-sm font-bold mb-8 shadow-md">
                            <Sparkles size={16} className="text-[#C1F25D]" />
                            <span>Let's build something amazing</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight tracking-tight">
                            Ready to Bring Your Ideas to Life?
                        </h2>
                        <p className="text-slate-800 text-lg md:text-xl mb-10 leading-relaxed font-medium max-w-lg">
                            Whether you have a fully drafted manuscript or just a spark of an idea, our team is here to guide you every step of the way.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                            <button className="px-10 py-5 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-2xl transition-all transform hover:scale-105 flex items-center justify-center gap-3 shadow-xl text-lg group">
                                Contact Us Now <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>

                    {/* Illustration Area */}
                    <div className="relative z-10 w-full max-w-md md:w-[500px] h-[400px] flex items-center justify-center">
                        {/* Abstract Composition */}
                        <div className="relative w-full h-full scale-110 md:scale-125 origin-center">
                            {/* Mail Card */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-56 bg-white rounded-3xl shadow-2xl flex flex-col items-center justify-center z-20 transform -rotate-3 transition-transform hover:rotate-0 duration-500 border-4 border-slate-900">
                                <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mb-5 text-slate-900">
                                    <Mail size={40} strokeWidth={1.5} />
                                </div>
                                <div className="h-4 w-32 bg-slate-200 rounded-full mb-3"></div>
                                <div className="h-4 w-20 bg-slate-200 rounded-full"></div>

                                {/* Notification Badge */}
                                <div className="absolute -top-4 -right-4 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center border-4 border-white text-white font-bold shadow-lg transform rotate-12">
                                    1
                                </div>
                            </div>

                            {/* Chat Bubble */}
                            <div className="absolute top-12 right-4 bg-slate-900 p-5 rounded-2xl rounded-tr-none shadow-xl transform rotate-6 z-10 border-2 border-slate-700 hover:scale-110 transition-transform">
                                <MessageSquare className="text-white w-10 h-10" strokeWidth={1.5} />
                            </div>

                            {/* Floating Send Icon */}
                            <div className="absolute bottom-16 left-0 bg-white p-4 rounded-full shadow-xl transform -rotate-12 z-30 flex items-center justify-center text-slate-900 border-2 border-slate-100 animate-bounce">
                                <Send size={28} />
                            </div>

                            {/* Decor Shapes */}
                            <div className="absolute top-0 left-12 w-4 h-4 bg-slate-900 rounded-full opacity-80"></div>
                            <div className="absolute bottom-24 right-8 w-6 h-6 bg-white rounded-full border-2 border-slate-900"></div>
                            {/* Dashed Path (svg) */}
                            <svg className="absolute inset-0 pointer-events-none opacity-30" viewBox="0 0 100 100" preserveAspectRatio="none">
                                <path d="M20,80 Q50,20 80,40" stroke="black" strokeWidth="0.5" fill="none" strokeDasharray="2 2" />
                            </svg>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ContactCTA;
