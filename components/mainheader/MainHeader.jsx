"use client";
import BlurText from "../animations//BlurText";
import BookSlider from "../sliders/BookSlider";
const MainHeader = () => {
    return (
        <section className="w-full sm:pl-4 pr-0 pb-8 pt-4 sm:pt-10">
            <div className="w-full">
                {/* Hero Card: Software House Style - Adjusted for viewport fit - Removed overflow-hidden to fix shadow cutoff */}
                <div className="px-0 my-6 md:pl-8 md:py-8 md:pr-0 flex flex-col items-start text-left relative justify-center w-full">

                    {/* Background Abstract Shapes */}


                    <div className="z-10 w-full flex justify-start pl-0 md:pl-0">
                        <div className="bg-[#7AB2B2] p-6 md:p-20 rounded-[50px]  sm:rounded-r-none shadow-lg w-full min-h-[520px] sm:min-h-[650px] flex flex-col justify-center text-left relative overflow-hidden">

                            {/* Decorative Background Shapes */}
                            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-white opacity-40 blur-3xl pointer-events-none"></div>


                            {/* Book Icon - Top Right - User Provided SVG */}
                            <svg className="absolute top-4 right-4 md:top-10 md:right-[20%] w-24 h-24 md:w-32 md:h-32 text-[#4B9DA9] opacity-30 md:opacity-20 rotate-12 pointer-events-none animate-pulse" viewBox="0 0 64 64" fill="currentColor">
                                <g strokeWidth="0"></g>
                                <g strokeLinecap="round" strokeLinejoin="round"></g>
                                <g>
                                    <path fill="currentColor" d="M31,7.663L2.516,0.067c-0.17-0.045-0.343-0.066-0.515-0.066c-0.437,0-0.866,0.142-1.22,0.413 C0.289,0.793,0,1.379,0,2v41.495l31,8.206V7.663z M24.43,40.274C24.304,40.714,23.903,41,23.469,41 c-0.092,0-0.184-0.013-0.275-0.038L8.727,36.829c-0.531-0.152-0.839-0.705-0.688-1.236c0.152-0.532,0.709-0.833,1.236-0.688 l14.467,4.133C24.273,39.19,24.581,39.743,24.43,40.274z M24.43,33.274C24.304,33.714,23.903,34,23.469,34 c-0.092,0-0.184-0.013-0.275-0.038L8.727,29.828c-0.531-0.152-0.839-0.706-0.688-1.236c0.152-0.532,0.709-0.833,1.236-0.688 l14.467,4.134C24.273,32.19,24.581,32.744,24.43,33.274z M24.43,26.274C24.304,26.714,23.903,27,23.469,27 c-0.092,0-0.184-0.013-0.275-0.038L8.727,22.828c-0.531-0.152-0.839-0.706-0.688-1.236c0.152-0.532,0.709-0.834,1.236-0.688 l14.467,4.134C24.273,25.19,24.581,25.744,24.43,26.274z M24.43,19.274C24.304,19.714,23.903,20,23.469,20 c-0.092,0-0.184-0.013-0.275-0.038L8.727,15.828c-0.531-0.152-0.839-0.706-0.688-1.236c0.152-0.532,0.709-0.833,1.236-0.688 l14.467,4.134C24.273,18.19,24.581,18.744,24.43,19.274z"></path> <path fill="currentColor" d="M63.219,0.414c-0.354-0.271-0.784-0.413-1.221-0.413c-0.172,0-0.345,0.022-0.514,0.066L33,7.663v44.038 l31-8.206V2C64,1.379,63.711,0.793,63.219,0.414z M39.424,32l14.467-4.134c0.528-0.145,1.084,0.155,1.236,0.688 c0.151,0.53-0.156,1.084-0.688,1.236l-14.467,4.134c-0.092,0.025-0.184,0.038-0.275,0.038c-0.435,0-0.835-0.286-0.961-0.726 C38.585,32.706,38.893,32.152,39.424,32z M54.742,36.829l-14.467,4.133C40.184,40.987,40.092,41,40,41 c-0.435,0-0.835-0.286-0.961-0.726c-0.151-0.531,0.156-1.084,0.688-1.236l14.467-4.133c0.528-0.145,1.084,0.155,1.236,0.688 C55.581,36.124,55.273,36.677,54.742,36.829z M54.742,22.828l-14.467,4.134C40.184,26.987,40.092,27,40,27 c-0.435,0-0.835-0.286-0.961-0.726c-0.151-0.53,0.156-1.084,0.688-1.236l14.467-4.134c0.528-0.146,1.084,0.155,1.236,0.688 C55.581,22.122,55.273,22.676,54.742,22.828z M54.742,15.828l-14.467,4.134C40.184,19.987,40.092,20,40,20 c-0.435,0-0.835-0.286-0.961-0.726c-0.151-0.53,0.156-1.084,0.688-1.236l14.467-4.134c0.528-0.145,1.084,0.155,1.236,0.688 C55.581,15.122,55.273,15.676,54.742,15.828z"></path> <polygon fill="currentColor" points="31,53.77 0,45.564 0,47.495 31,55.701 "></polygon> <polygon fill="currentColor" points="33,55.701 64,47.495 64,45.564 33,53.77 "></polygon> <path fill="currentColor" d="M35,58.034c0,1.657-1.343,3-3,3s-3-1.343-3-3c0-0.266,0.046-0.52,0.11-0.765L0,49.564v2.435 c0,0.906,0.609,1.699,1.484,1.933l25.873,6.899C28.089,62.685,29.887,64,32,64s3.911-1.315,4.643-3.169l25.873-6.899 C63.391,53.698,64,52.905,64,51.999v-2.435L34.89,57.27C34.954,57.515,35,57.769,35,58.034z"></path> </g>
                            </svg>

                            {/* Pen Icon - Bottom Left - User Provided SVG */}
                            <svg className="absolute bottom-10 left-[5%] w-40 h-40 text-[#4B9DA9] opacity-20 -rotate-12 pointer-events-none" viewBox="0 0 1024 1024" fill="currentColor">
                                <g strokeWidth="0"></g>
                                <g strokeLinecap="round" strokeLinejoin="round"></g>
                                <g>
                                    <path d="M282.2 1011c-2.1 0-4.2-0.5-6.2-1.5-7.4-3.8-72.4-37.5-91.4-61-11-13.7-21.7-45.3-9.5-69.7 12.9-25.8 43.3-30.2 66.6-29.4 23.4 0.8 38.7-5.1 45.5-17.6 8-14.8 2.5-36-2.6-43.3-4.8-6.8-19.7-22-64.6-48.1-26.4-15.3-50.1-26.8-50.4-26.9-6.8-3.3-9.6-11.4-6.4-18.2 3.3-6.8 11.4-9.6 18.2-6.4 1 0.5 25 12.1 52.2 27.9 37.7 21.9 62.3 40.7 73.1 55.8 9.9 13.9 18.2 46.4 4.5 72-8 14.8-25.7 32-65.4 32.1-1.7 0-3.4 0-5.1-0.1-15.2-0.5-34.8 1.5-41.2 14.4-6.5 13 0.8 33.4 6.3 40.3 11.6 14.3 56.8 40.7 82.6 53.9 6.7 3.4 9.4 11.7 5.9 18.4-2.4 4.7-7.2 7.4-12.1 7.4z" fill="currentColor"></path>
                                    <path d="M598.6 420.8l-71.3-71.3-71.3-71.3-189.8 74s-3.2 162.5-54.1 266.7c-20.3 41.5-36.4 81-37.2 83.1 2.1-0.8 41.6-16.9 83.1-37.2 104.2-50.9 266.7-54.1 266.7-54.1l73.9-189.9z" fill="currentColor"></path>
                                    <path d="M174.9 715.6c-3.6 0-7-1.4-9.7-4-3.9-3.9-5.1-9.7-3-14.8 0.7-1.7 17.1-42 37.6-83.9 49-100.2 52.7-259.4 52.8-261 0.1-5.5 3.5-10.4 8.7-12.4l189.8-74c5-2 10.8-0.8 14.6 3.1l142.5 142.5c3.8 3.8 5 9.6 3.1 14.6l-74 189.8c-2 5.2-6.9 8.6-12.5 8.7-1.6 0-160.7 3.8-261 52.8-42.1 20.6-82.2 36.9-83.9 37.6-1.5 0.7-3.3 1-5 1z m104.7-354c-0.6 15.1-2.5 47.2-7.8 86.6-9.7 72.7-25.7 132.1-47.4 176.6-9.1 18.5-17.3 36.7-23.7 51.3 14.5-6.4 32.7-14.6 51.3-23.7 44.5-21.8 104-37.7 176.6-47.4 39.4-5.3 71.6-7.1 86.6-7.8l67.5-173.1-130-129.9-173.1 67.4z" fill="currentColor"></path>
                                    <path d="M432.2 444.6m-37.1 0a37.1 37.1 0 1 0 74.2 0 37.1 37.1 0 1 0-74.2 0Z" fill="currentColor"></path>
                                    <path d="M432.1 444.7L204.5 672.3" fill="currentColor"></path>
                                    <path d="M204.5 686c-3.5 0-7-1.3-9.7-4-5.3-5.3-5.3-14 0-19.3l227.6-227.6c5.3-5.3 14-5.3 19.3 0 5.3 5.3 5.3 14 0 19.3L214.2 682c-2.7 2.7-6.2 4-9.7 4z" fill="currentColor"></path>
                                    <path d="M599.7 421.8L455 277.1l182.6-248 210.2 210.1z" fill="currentColor"></path>
                                    <path d="M599.7 435.5c-3.5 0-7-1.4-9.7-4L445.4 286.8c-4.8-4.8-5.3-12.3-1.3-17.7L626.6 21c2.4-3.2 6-5.2 10-5.5 4-0.3 7.9 1.1 10.7 4l210.1 210.1c2.8 2.8 4.3 6.7 4 10.7-0.3 4-2.3 7.6-5.5 10l-248 182.6c-2.5 1.7-5.4 2.6-8.2 2.6zM473 275.8l128.1 128.1 225.8-166.2L639.2 50 473 275.8z" fill="currentColor"></path>
                                </g>
                            </svg>

                            {/* Open Book - Middle Left - Rounded */}
                            <svg className="absolute top-[20%] left-[30%] w-48 h-48 text-[#4B9DA9] opacity-30 rotate-45 pointer-events-none" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z" />
                            </svg>

                            {/* Feather Pen - Top Left - Rounded */}
                            <svg className="absolute top-16 left-16 w-24 h-24 text-[#4B9DA9] opacity-20 rotate-12 pointer-events-none" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M21.41 3.41c-2.61-1.39-7.23 2.15-8.8 6.01-.1-.03-.21-.05-.31-.05-1.66 0-3 1.34-3 3 0 .42.09.81.24 1.17L4.42 18.7c-.57.57-.46 1.41.01 1.99.28.34.7.53 1.14.53.33 0 .66-.11.93-.32l10-10c-3-1.6-.72-3.83.6-5.2s5.6-3.7 4.31-2.29zM10.8 12.3c-.62 1.63-1.54 2.76-1.54 2.76.5-.47.82-1.13.84-1.86.02-.33-.04-.65-.1-.9z" />
                            </svg>

                            {/* Circle - Middle Right */}
                            <div className="absolute top-1/2 right-20 w-32 h-32 bg-[#4B9DA9] rounded-full opacity-10 pointer-events-none"></div>

                            {/* Circle Grid - Left */}
                            <div className="absolute top-40 left-10 w-40 h-40 grid grid-cols-4 gap-4 opacity-20 pointer-events-none">
                                {[...Array(16)].map((_, i) => (
                                    <div key={i} className="w-3 h-3 bg-[#4B9DA9] rounded-full"></div>
                                ))}
                            </div>

                            {/* Stack of Books - Bottom Center - Rounded */}
                            <svg className="absolute bottom-10 left-[40%] w-64 h-32 text-[#4B9DA9] opacity-30 pointer-events-none" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 8h-2v-2H7v2H5c-1.1 0-2 .9-2 2v1c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-1c0-1.1-.9-2-2-2zm0 8h-2v-2H7v2H5c-1.1 0-2 .9-2 2v1c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-1c0-1.1-.9-2-2-2z" />
                            </svg>

                            {/* Fountain Pen Tip - Top Center - Rounded */}
                            <svg className="absolute top-[15%] left-[50%] w-20 h-20 text-[#4B9DA9] opacity-20 rotate-45 pointer-events-none" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm.55 16.55L11 17l1.55-1.55c.78-.78.78-2.05 0-2.83L11.75 11.8l2.83-2.83 2.83 2.83c.78.78.78 2.05 0 2.83L15.9 15.9l-3.35 2.65z" />
                            </svg>

                            <div className="absolute bottom-20 right-[35%] w-16 h-16 bg-[#4B9DA9] rounded-full opacity-10 blur-sm pointer-events-none"></div>

                            {/* Ink Bottle - Bottom Left/Mid - Rounded */}
                            <svg className="absolute top-[60%] left-[10%] w-32 h-32 text-[#4B9DA9] opacity-10 -rotate-12 pointer-events-none" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M19.8 18.4L14 10.67V6.5l1.35-1.69c.26-.33.02-.81-.4-.81H9.05c-.42 0-.66.48-.4.81L10 6.5v4.17L4.2 18.4c-.49.66-.02 1.6.8 1.6h14c.82 0 1.29-.94.8-1.6z" />
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
                                        text="Building Future-Ready"
                                        delay={200}
                                        animateBy="words"
                                        direction="top"
                                        className=""
                                    />

                                    <BlurText
                                        text="Digital Experiences"
                                        delay={200}
                                        animateBy="words"
                                        direction="top"
                                        className=""
                                    />
                                </div>



                                <p className="text-base md:text-lg font-medium text-slate-800 mb-6 max-w-xl leading-relaxed opacity-90 text-left">
                                    We transform complex challenges into elegant, high-performance software solutions. Elevate your business with our cutting-edge development expertise.
                                </p>

                                <div className="flex flex-col sm:flex-row items-left justify-start gap-6">
                                    <button className="w-[210px] bg-[#4B9DA9] text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-[#3A8D99] transition-all transform hover:scale-105 hover:shadow-xl flex items-center group">
                                        Start Your Project
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
