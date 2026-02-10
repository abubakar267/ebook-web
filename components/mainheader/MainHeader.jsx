"use client";

const MainHeader = () => {
    return (
        <section className="container mx-auto px-4 pb-8 pt-2">
            <div className="w-full">
                {/* Hero Card: Software House Style - Adjusted for viewport fit */}
                <div className="bg-brand-green rounded-[3rem] md:rounded-[4rem] px-8 py-12 md:p-16 flex flex-col items-center text-center relative overflow-hidden min-h-[calc(100vh-140px)] justify-center">

                    {/* Background Abstract Shapes */}
                    <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-10">
                        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
                            <path d="M0 100 L0 50 Q 50 20 100 50 L100 100 Z" fill="black" />
                        </svg>
                    </div>

                    <div className="z-10 max-w-4xl mx-auto">
                        <div className="inline-block mb-6">
                            <span className="bg-slate-900/10 text-slate-900 border border-slate-900/20 px-4 py-2 rounded-full font-bold text-sm tracking-wide uppercase">
                                Innovative Solutions
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-slate-900 leading-[1.1] mb-8 tracking-tight">
                            Building Future-Ready <br className="hidden md:block" />
                            <span className="relative inline-block">
                                Digital Experiences
                                <svg className="absolute w-full h-3 -bottom-1 left-0 text-slate-900 opacity-20" viewBox="0 0 200 9" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M2.00025 6.48972C49.9576 4.60623 98.4046 2.84272 146.368 1.48721C164.27 0.981881 182.162 0.582823 200.046 0.285645C200.758 0.27419 201.277 0.9029 201 1.60333C200.776 2.1691 200.323 2.5832 199.761 2.76632C154.551 17.5186 102.738 8.85196 55.4851 8.85196C37.3888 8.85196 19.3308 8.53036 1.30053 7.89204C0.493922 7.86377 -0.116669 7.02706 0.0526744 6.22596C0.198308 5.53587 1.09631 4.98126 1.8364 5.0877L2.00025 6.48972Z"></path></svg>
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl font-medium text-slate-800 mb-8 max-w-2xl mx-auto leading-relaxed opacity-90">
                            We transform complex challenges into elegant, high-performance software solutions. Elevate your business with our cutting-edge development expertise.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <button className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold text-base hover:bg-slate-800 transition-all transform hover:scale-105 hover:shadow-2xl flex items-center group">
                                Start Your Project
                                <span className="ml-3 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white text-slate-900 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover:-rotate-45 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </span>
                            </button>

                            <button className="px-6 py-4 rounded-full font-bold text-base text-slate-900 border-2 border-slate-900/20 hover:bg-slate-900/5 transition-colors flex items-center">
                                <span className="mr-3 text-xl">⚡</span>
                                View Our Work
                            </button>
                        </div>

                        {/* Stats Row - Centered and Integrated */}
                        <div className="mt-12 pt-6 border-t border-slate-900/10 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 text-center">
                            <div>
                                <h4 className="text-2xl md:text-3xl font-black text-slate-900">500+</h4>
                                <p className="text-xs font-semibold uppercase tracking-wider opacity-70">Projects Delivered</p>
                            </div>
                            <div>
                                <h4 className="text-2xl md:text-3xl font-black text-slate-900">98%</h4>
                                <p className="text-xs font-semibold uppercase tracking-wider opacity-70">Client Retention</p>
                            </div>
                            <div>
                                <h4 className="text-2xl md:text-3xl font-black text-slate-900">12+</h4>
                                <p className="text-xs font-semibold uppercase tracking-wider opacity-70">Years Experience</p>
                            </div>
                            <div>
                                <h4 className="text-2xl md:text-3xl font-black text-slate-900">24/7</h4>
                                <p className="text-xs font-semibold uppercase tracking-wider opacity-70">Support Team</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section >
    );
};

export default MainHeader;
