"use client";
import BlurText from "../animations//BlurText";
import BookSlider from "../sliders/BookSlider";
const MainHeader = () => {
    return (
        <section className="w-full sm:pl-4 pr-0 pb-8 pt-4 sm:pt-10">
            <div className="w-full">
                {/* Hero Card: Software House Style - Adjusted for viewport fit */}
                <div className="px-0 my-6 md:pl-8 md:py-8 md:pr-0 flex flex-col items-start text-left relative overflow-hidden justify-center w-full">

                    {/* Background Abstract Shapes */}


                    <div className="z-10 w-full flex justify-start pl-0 md:pl-0">
                        <div className="bg-[#7AB2B2] p-6 md:p-20 rounded-[50px]  sm:rounded-r-none shadow-lg w-full min-h-[520px] sm:min-h-[650px] flex flex-col justify-center text-left relative overflow-hidden">

                            {/* Decorative Background Shapes */}
                            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-white opacity-40 blur-3xl pointer-events-none"></div>


                            {/* Random Icons & Shapes */}
                            {/* Large Heart - Top Right */}
                            <svg className="absolute top-10 right-[20%] w-32 h-32 text-[#8B9DA9] opacity-20 rotate-12 pointer-events-none animate-pulse" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2L2 22h20L12 2z" />
                            </svg>
                            {/* Giant Star - Bottom Left */}
                            <svg className="absolute bottom-10 left-[5%] w-40 h-40 text-[#4B9DA9] opacity-20 -rotate-12 pointer-events-none" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                            {/* Massive Squiggly Arrow - Middle Left */}
                            <svg className="absolute top-[20%] left-[30%] w-48 h-48 text-[#91C6BC] opacity-30 rotate-45 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>

                            {/* Triangle - Top Left */}
                            <svg className="absolute top-16 left-16 w-24 h-24 text-[#E37434] opacity-20 rotate-12 pointer-events-none" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2L2 22h20L12 2z" />
                            </svg>
                            {/* Circle - Middle Right */}
                            <div className="absolute top-1/2 right-20 w-32 h-32 bg-[#4B9DA9] rounded-full opacity-10 pointer-events-none"></div>

                            {/* Circle Grid - Left */}
                            <div className="absolute top-40 left-10 w-40 h-40 grid grid-cols-4 gap-4 opacity-20 pointer-events-none">
                                {[...Array(16)].map((_, i) => (
                                    <div key={i} className="w-3 h-3 bg-[#4B9DA9] rounded-full"></div>
                                ))}
                            </div>

                            {/* Wavy Lines - Bottom Center */}
                            <svg className="absolute bottom-10 left-[40%] w-64 h-32 text-[#91C6BC] opacity-30 pointer-events-none" viewBox="0 0 100 20" preserveAspectRatio="none">
                                <path d="M0 10 Q 25 20 50 10 T 100 10" fill="none" stroke="currentColor" strokeWidth="2" />
                            </svg>

                            {/* Additional Shapes */}
                            <svg className="absolute top-[15%] left-[50%] w-20 h-20 text-white opacity-10 rotate-45 pointer-events-none" viewBox="0 0 24 24" fill="currentColor">
                                <rect width="20" height="20" x="2" y="2" rx="4" />
                            </svg>
                            <div className="absolute bottom-20 right-[35%] w-16 h-16 bg-[#E37434] rounded-full opacity-10 blur-sm pointer-events-none"></div>
                            <svg className="absolute top-[60%] left-[10%] w-32 h-32 text-[#91C6BC] opacity-5 -rotate-12 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                                <path d="M12 2L2 22h20L12 2z" />
                            </svg>

                            {/* Right Side Slider Section */}
                            <div className="absolute right-[-250px] top-1/2 -translate-y-1/2 w-[60%] z-10 opacity-90 scale-90">
                                <BookSlider />
                            </div>

                            {/* Fade Overlay for Slider Effect */}
                            <div className="absolute right-0 top-0 bottom-0 w-96 bg-gradient-to-l from-[#7AB2B2] via-[#7AB2B2]/90 to-transparent z-20 pointer-events-none"></div>

                            {/* Left Side Fade Overlay */}
                            <div className="absolute left-80 top-0 bottom-0 w-[900px] bg-gradient-to-r from-[#7AB2B2] via-[#7AB2B2] to-transparent z-20 pointer-events-none"></div>


                            <div className="relative z-30 max-w-3xl">
                                {/* Backdrop for Text legibility */}
                                {/* <div className="absolute inset-0 -m-10 bg-[#7AB2B2]/40 -z-10 rounded-3xl"></div> */}

                                {/* <div className="inline-block mb-4">
                                    <span className="bg-[#4B9DA9]/10 text-[#4B9DA9] border border-[#4B9DA9]/20 px-3 py-1.5 rounded-full font-bold text-xs tracking-wide uppercase">
                                        Innovative Solutions
                                    </span>
                                </div> */}

                                <div className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#FFFFFF] leading-[1.1] mb-6 tracking-tight text-left">
                                    <BlurText
                                        text="Thoughtful Publishing."
                                        delay={200}
                                        animateBy="words"
                                        direction="top"
                                        className=""
                                    />

                                    <BlurText
                                        text="Real Results."
                                        delay={200}
                                        animateBy="words"
                                        direction="top"
                                        className=""
                                    />
                                </div>



                                <p className="text-[14px] md:text-lg font-medium text-slate-800 mb-6 max-w-xl leading-relaxed opacity-90 text-left">
                                    We collaborate with writers to develop manuscripts that are professionally written, carefully edited, thoughtfully designed, and responsibly published.
                                    <br/><br/>
                                    Some authors choose independent publishing. Others aim for traditional routes. In both cases, the foundation remains the same. Clarity, structure, and readiness for a competitive marketplace.
                                    <br/><br/>
                                    Publishing is not simply about printing a book.
                                    <br/>
                                    It is about preparing it properly
                            
                                </p>

                                <div className="flex flex-col sm:flex-row items-left justify-start gap-6">
                                    <button className="w-[210px] bg-[#4B9DA9] text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-[#3A8D99] transition-all transform hover:scale-105 hover:shadow-xl flex items-center group">
                                        Get a quote
                                        <span className="ml-2 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white text-[#4B9DA9] transition-colors">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover:-rotate-45 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </button>

                                    {/* <button className="w-[210px] px-5 py-3 rounded-full font-bold text-sm text-[#E37434] border-2 border-[#E37434]/20 hover:bg-[#E37434]/5 transition-colors flex items-center">
                                        <span className="mr-2 text-lg">⚡</span>
                                        View Our Work
                                    </button> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default MainHeader;
