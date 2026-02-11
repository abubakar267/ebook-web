"use client";

const MainHeader = () => {
    return (
        <section className="container mx-auto px-4 pb-8 pt-2">
            <div className="w-full">
                {/* Hero Card: Software House Style - Adjusted for viewport fit */}
                <div className="px-4 py-6 md:p-8 flex flex-col items-center text-center relative overflow-hidden justify-center max-w-5xl mx-auto">

                    {/* Background Abstract Shapes */}


                    <div className="z-10 max-w-4xl mx-auto">
                        <div className="inline-block mb-4">
                            <span className="bg-slate-900/10 text-slate-900 border border-slate-900/20 px-3 py-1.5 rounded-full font-bold text-xs tracking-wide uppercase">
                                Innovative Solutions
                            </span>
                        </div>

                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] mb-6 tracking-tight">
                            Building Future-Ready <br className="hidden md:block" />
                            <span className="relative inline-block">
                                Digital Experiences
                                {/* <svg className="absolute w-full h-2 -bottom-1 left-0 text-slate-900 opacity-20" viewBox="0 0 200 9" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M2.00025 6.48972C49.9576 4.60623 98.4046 2.84272 146.368 1.48721C164.27 0.981881 182.162 0.582823 200.046 0.285645C200.758 0.27419 201.277 0.9029 201 1.60333C200.776 2.1691 200.323 2.5832 199.761 2.76632C154.551 17.5186 102.738 8.85196 55.4851 8.85196C37.3888 8.85196 19.3308 8.53036 1.30053 7.89204C0.493922 7.86377 -0.116669 7.02706 0.0526744 6.22596C0.198308 5.53587 1.09631 4.98126 1.8364 5.0877L2.00025 6.48972Z"></path></svg> */}
                            </span>
                        </h1>

                        <p className="text-base md:text-lg font-medium text-slate-800 mb-6 max-w-xl mx-auto leading-relaxed opacity-90">
                            We transform complex challenges into elegant, high-performance software solutions. Elevate your business with our cutting-edge development expertise.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <button className="bg-slate-900 text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-slate-800 transition-all transform hover:scale-105 hover:shadow-xl flex items-center group">
                                Start Your Project
                                <span className="ml-2 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white text-slate-900 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover:-rotate-45 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </span>
                            </button>

                            <button className="px-5 py-3 rounded-full font-bold text-sm text-slate-900 border-2 border-slate-900/20 hover:bg-slate-900/5 transition-colors flex items-center">
                                <span className="mr-2 text-lg">⚡</span>
                                View Our Work
                            </button>
                        </div>


                    </div>
                </div>
            </div>
        </section >
    );
};

export default MainHeader;
