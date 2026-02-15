import React from 'react';
import { Mail, Instagram, Twitter, Linkedin, Facebook, Heart, MessageCircle, Share2, ShoppingBag, Store, Globe, Star } from 'lucide-react';

const MarketingCard = () => {
    return (
        <section className="w-full bg-[#F6F3C2] py-20 px-4 md:px-8 text-slate-900 overflow-hidden">
            <div className="max-w-6xl mx-auto">
                {/* Title */}
                <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-16 tracking-tight">
                    Marketing That Moves Books and Minds
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center relative">

                    {/* Left Column */}
                    <div className="space-y-12 text-center md:text-left order-2 md:order-1">
                        <div className="group">
                            <h3 className="text-2xl font-bold mb-3 border-b-2 border-slate-900 inline-block pb-1">Social Media Marketing</h3>
                            <p className="font-medium text-lg leading-relaxed">
                                Promoting your book across platforms like Instagram, Facebook, TikTok, Twitter, and LinkedIn.
                            </p>
                        </div>

                        <div className="group">
                            <h3 className="text-2xl font-bold mb-3 border-b-2 border-slate-900 inline-block pb-1">Email & Direct Marketing</h3>
                            <p className="font-medium text-lg leading-relaxed">
                                Reaching readers directly with targeted communication.
                            </p>
                        </div>
                    </div>

                    {/* Middle Column - Phone Mockup */}
                    <div className="flex justify-center order-1 md:order-2 mb-12 md:mb-0 relative z-10">
                        {/* Phone Frame */}
                        <div className="w-[300px] h-[600px] bg-slate-900 rounded-[3rem] p-4 shadow-2xl relative border-4 border-slate-800">
                            {/* Inner Screen */}
                            <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden flex flex-col relative">
                                {/* Status Bar */}
                                <div className="h-8 flex justify-between items-center px-6 pt-2">
                                    <span className="text-xs font-bold">9:41</span>
                                    <div className="flex bg-black rounded-full w-20 h-6 absolute left-1/2 -translate-x-1/2 top-2"></div>
                                    <div className="w-4 h-4 rounded-full border border-black"></div>
                                </div>

                                {/* App Header */}
                                <div className="px-5 py-4 flex justify-between items-center border-b border-gray-100">
                                    <div className="font-bold text-xl">Instagram</div>
                                    <div className="flex gap-3">
                                        <Heart className="w-6 h-6" />
                                        <MessageCircle className="w-6 h-6" />
                                    </div>
                                </div>

                                {/* Stories */}
                                <div className="flex gap-3 px-5 py-4 overflow-x-hidden">
                                    {['You', 'Sarah', 'Mike', 'BookClub'].map((name, i) => (
                                        <div key={i} className="flex flex-col items-center gap-1">
                                            <div className={`w-14 h-14 rounded-full p-[2px] ${i === 0 ? 'border-2 border-dashed border-gray-300' : 'bg-gradient-to-tr from-slate-50 to-[#E37434]'}`}>
                                                <div className="w-full h-full bg-gray-200 rounded-full border-2 border-white" />
                                            </div>
                                            <span className="text-xs font-medium">{name}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Feed Post */}
                                <div className="flex-1 overflow-hidden bg-gray-50/50">
                                    <div className="bg-white pb-4 mb-2 shadow-sm">
                                        <div className="flex items-center gap-3 px-4 py-3">
                                            <div className="w-8 h-8 rounded-full bg-[#E37434]"></div>
                                            <span className="font-bold text-sm">Evercrest Publishing    </span>
                                        </div>
                                        {/* Post Image Placeholder */}
                                        <div className="w-full aspect-square bg-slate-200 relative overflow-hidden group">
                                            <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                                                <div className="text-center p-8">
                                                    <div className="w-24 h-32 bg-white mx-auto shadow-lg mb-4 rotate-[-3deg] border border-gray-200" />
                                                    <p className="text-xs text-gray-400 font-serif italic">"A masterpiece of modern fiction..."</p>
                                                </div>
                                            </div>
                                            {/* Floating Reactions */}
                                            <div className="absolute bottom-4 right-4 flex flex-col gap-2">
                                                <div className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-[#E37434] animate-bounce">
                                                    <Heart size={14} fill="currentColor" />
                                                </div>
                                                <div className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-[#4B9DA9] animate-pulse delay-75">
                                                    <Star size={14} fill="currentColor" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="px-4 py-3">
                                            <div className="flex gap-4 mb-2">
                                                <Heart className="w-6 h-6" />
                                                <MessageCircle className="w-6 h-6" />
                                                <Share2 className="w-6 h-6" />
                                            </div>
                                            <p className="text-sm"><span className="font-bold">BestSeller_Author</span> Excited to announce the launch of my new book! Available now at all major retailers. #bookstagram #newrelease</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Bottom Nav */}
                                <div className="h-16 border-t border-gray-100 flex items-center justify-around pb-2 bg-white">
                                    <div className="w-6 h-6 bg-slate-900 rounded-md"></div>
                                    <div className="w-6 h-6 border-2 border-gray-300 rounded-md"></div>
                                    <div className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center text-white text-xl pb-1">+</div>
                                    <div className="w-6 h-6 border-2 border-gray-300 rounded-md"></div>
                                    <div className="w-6 h-6 rounded-full bg-gray-300"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-12 text-center md:text-right order-3 relative">
                        {/* Card Styled Item */}
                        <div className="bg-white p-8 rounded-2xl shadow-xl transform rotate-2 hover:rotate-0 transition-transform duration-300 text-left relative z-20">
                            <h3 className="text-2xl font-bold mb-3 border-b-2 border-slate-900 inline-block pb-1">Influencer & PR Marketing</h3>
                            <p className="font-medium text-lg leading-relaxed text-slate-700">
                                Leveraging third-party voices to build credibility and buzz.
                            </p>
                            <div className="mt-4 flex gap-2">
                                <div className="h-8 w-8 rounded-full bg-[#91C6BC]"></div>
                                <div className="h-8 w-8 rounded-full bg-[#E37434]"></div>
                                <div className="h-8 w-8 rounded-full bg-[#4B9DA9]"></div>
                            </div>
                        </div>

                        <div className="group pt-4">
                            <h3 className="text-2xl font-bold mb-3 border-b-2 border-slate-900 inline-block pb-1">Platform & Retail Marketing</h3>
                            <p className="font-medium text-lg leading-relaxed">
                                Optimizing visibility and sales on online and physical marketplaces.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default MarketingCard;
