import React from 'react';

const StoryBanner = () => {
    return (
        <div className="w-full bg-slate-50 py-24 px-6">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-5xl font-bold leading-tight text-slate-900">
                    <span className="inline-block bg-[#E37434] text-white px-2 py-1 rotate-[-2deg] mr-2 rounded-md">
                        Your story
                    </span>
                    matters. We{"'"}re here to help you write it, refine it, and share it with the world
                    <span className="inline-block bg-[#4B9DA9] text-white px-2 py-1 rotate-[1deg] ml-2 rounded-md">
                        beautifully and boldly
                    </span>
                </h2>
            </div>
        </div>
    );
};

export default StoryBanner;
