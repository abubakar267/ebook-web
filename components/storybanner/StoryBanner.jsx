import React from 'react';

const StoryBanner = () => {
    return (
        <div className="w-full bg-slate-50 py-8 sm:py-24 px-6">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-1xl md:text-3xl font-bold leading-tight text-slate-900">
                    <span className="inline-block bg-[#4B9DA9] text-white px-2 py-1 rotate-[-2deg] mr-2 rounded-md">
                        Prepared
                    </span>
                    to Compete. Today{"'"}s publishing landscape is crowded. We help authors enter it with clarity — supported by professional marketing, distribution networks, and structured launch strategies.
                    <span className="inline-block bg-[#E37434] text-white px-2 py-1 rotate-[1deg] ml-2 rounded-md">
                        Strong books deserve smart visibility.
                    </span>
                </h2>
            </div>
        </div>
    );
};

export default StoryBanner;
