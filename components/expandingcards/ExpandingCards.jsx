import React, { useState } from 'react';
import { ArrowUpRight, BookOpen, PenTool, Globe, Megaphone } from 'lucide-react';

const cards = [
    {
        id: 1,
        title: "Editing",
        description: "Polish your manuscript with professional editorial guidance. From structural feedback to line-level refinement. We help your story flow clearly and read effortlessly.",
        icon: <PenTool size={24} />,
        tags: ["Editing", "Proofreading", "Manuscript Review"],
        image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=800&auto=format&fit=crop", // Writing/Editing
        color: "from-[#4B9DA9]/80 to-[#2a5c63]/80" // Teal
    },
    {
        id: 2,
        title: "Ghostwriting",
        description: "Bring your ideas to life with experienced writers who capture your voice. From concept to completed manuscript, we craft compelling narratives that feel authentically yours.",
        icon: <BookOpen size={24} />,
        tags: ["Cover Design", "Typesetting", "Illustrations"],
        image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=800&auto=format&fit=crop", // Book Design/Art
        color: "from-[#76A89E]/80 to-[#91C6BC]/80" // Light Teal (Darkened bottom for text)
    },
    {
        id: 3,
        title: "Global Publishing",
        description: "From local bookshelves to international markets, we guide your book through every step of publication and distribution. Your work reaches readers wherever it belongs.",
        icon: <Globe size={24} />,
        tags: ["Print on Demand", "E-book", "Global Retailers"],
        image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=800&auto=format&fit=crop", // Books/Library
        color: "from-cyan-900/80 to-slate-700/80" // Dull Dark Cyan
    },
    {
        id: 4,
        title: "Targeted Marketing",
        description: "A great book deserves visibility. We create tailored marketing strategies, connecting your story to the right audience through thoughtful campaigns and promotional support.",
        icon: <Megaphone size={24} />,
        tags: ["Social Media", "Book Tours", "PR Campaigns"],
        image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800&auto=format&fit=crop", // Marketing/Team
        color: "from-teal-800/80 to-slate-600/80" // Dull Teal/Slate
    }
];

const ExpandingCards = () => {
    const [activeId, setActiveId] = useState(null);

    return (
        <section className="py-20 px-4 bg-slate-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-sm font-bold tracking-[0.2em] text-[#2F7A85] uppercase block mb-3">
                        What We Do
                    </span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900">
                        Services We Offer
                    </h2>
                </div>
                <div
                    className="flex flex-col md:flex-row gap-4 h-[600px]"
                    onMouseLeave={() => setActiveId(null)}
                >
                    {cards.map((card) => (
                        <div
                            key={card.id}
                            className={`relative rounded-3xl overflow-hidden cursor-pointer transition-[flex] duration-[1500ms] ease-[cubic-bezier(0.25,1,0.5,1)] border border-white/20 shadow-xl
                ${activeId === card.id ? 'md:flex-[3] flex-[3]' : 'md:flex-[1] flex-[1] grayscale hover:grayscale-0'}`}
                            onMouseEnter={() => setActiveId(card.id)}
                            onClick={() => setActiveId(card.id)}
                        >
                            {/* Background Image */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-[2000ms] w-full h-full"
                                style={{
                                    backgroundImage: `url(${card.image})`,
                                    transform: activeId === card.id ? 'scale(1.1)' : 'scale(1)'
                                }}
                            />

                            {/* Gradient Overlay for Active Card */}
                            <div className={`absolute inset-0 transition-opacity duration-[1500ms] bg-gradient-to-t ${activeId === card.id ? card.color : 'from-black/60 to-transparent'}`} />

                            {/* Content Container */}
                            <div className="absolute inset-0 p-6 flex flex-col justify-between">

                                {/* Top Right Arrow (Only visible when active) */}
                                <div className={`self-end bg-white/20 backdrop-blur-md p-3 rounded-full text-white transition-opacity duration-500 delay-100 ${activeId === card.id ? 'opacity-100' : 'opacity-0'}`}>
                                    <ArrowUpRight size={24} />
                                </div>

                                {/* Bottom Content */}
                                <div className={`transition-all duration-[1500ms] transform ${activeId === card.id ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-80'}`}>

                                    {/* Icon & Title Group */}
                                    <div className="mb-2">
                                        <div className={`inline-flex items-center justify-center p-2 rounded-lg bg-white/20 backdrop-blur-md text-white mb-3 transition-opacity duration-500 ${activeId !== null && activeId !== card.id ? 'opacity-0 hidden md:flex' : 'opacity-100'}`}>
                                            {card.icon}
                                        </div>
                                        {/* 
                                           Title Logic:
                                           - If card is active: Large visual.
                                           - If card is NOT active: Show visible title (no rotation), but maybe smaller or hidden if cramped?
                                           - User asked: "no rotating titles".
                                           - So we keep it horizontal always.
                                           - Problem: If flex-1, long title might break.
                                           - Solution: Use whitespace-nowrap and hidden overflow, or just let it wrap if needed. 
                                           - Let's keep whitespace-nowrap but remove rotation.
                                        */}
                                        {/* Large Title (Active) */}
                                        <h3
                                            className={`font-bold text-white leading-tight text-3xl mb-2 absolute top-0 left-0 whitespace-nowrap transition-opacity
                                            ${activeId === card.id
                                                    ? 'opacity-100 relative duration-[1500ms] delay-300'
                                                    : 'opacity-0 absolute duration-200 pointer-events-none'}`}
                                            aria-hidden={activeId !== card.id}
                                        >
                                            {card.title}
                                        </h3>

                                        {/* Small Title (Inactive) */}
                                        <h3
                                            className={`font-bold text-white leading-tight text-xl whitespace-nowrap transition-opacity
                                            ${activeId === null
                                                    ? 'opacity-100 relative duration-[1500ms] delay-300'
                                                    : 'opacity-0 absolute duration-200 pointer-events-none'}`}
                                            aria-hidden={activeId !== null}
                                        >
                                            {card.title}
                                        </h3>
                                    </div>

                                    {/* Description & Tags (Only visible when active) */}
                                    <div className={`space-y-4 overflow-hidden transition-[max-height,opacity] duration-[1500ms] ease-in-out ${activeId === card.id ? 'max-h-96 opacity-100 delay-[1000ms]' : 'max-h-0 opacity-0'}`}>
                                        <p className="text-white/90 text-lg font-medium">
                                            {card.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {card.tags.map(tag => (
                                                <span key={tag} className="px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-xs text-white font-medium">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExpandingCards;
