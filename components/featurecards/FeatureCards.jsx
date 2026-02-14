import { ArrowRight, Code, Globe, ShoppingBag, BarChart3, ChevronRight, PenTool, Megaphone, Heart } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const CardGraphic1 = () => (
    <div className="h-48 w-full relative flex items-end justify-center gap-1 overflow-hidden" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-t from-[#4B9DA9]/20 to-transparent z-10" />
        {[...Array(20)].map((_, i) => (
            <div
                key={i}
                className={`w-4 rounded-t-sm transition-all duration-500 hover:translate-y-2 ${['bg-[#4B9DA9]', 'bg-[#3A8D99]', 'bg-[#E37434]', 'bg-[#91C6BC]', 'bg-white', 'bg-[#3A8D99]'][i % 6]
                    }`}
                style={{ height: `${Math.max(40, Math.random() * 100)}%` }}
            />
        ))}
    </div>
);

const CardGraphic2 = () => (
    <div className="h-48 w-full relative flex items-center justify-center p-4 bg-black/5 rounded-t-xl" aria-hidden="true">
        <div className="relative w-full h-full">
            {/* Background Dots */}
            <div className="absolute top-0 left-0 w-full h-full opacity-20"
                style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '10px 10px' }}></div>

            {/* Floating Badges */}
            <div className="absolute top-4 left-4 bg-white shadow-lg p-2 rounded-lg rotate-[-6deg] animate-pulse">
                <span className="font-bold text-[#4B9DA9] text-xs">WIX</span>
            </div>
            <div className="absolute bottom-12 right-8 bg-white shadow-lg p-2 rounded-lg rotate-[12deg] animate-bounce">
                <ShoppingBag className="w-5 h-5 text-[#E37434]" />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white shadow-xl p-4 rounded-xl z-10 flex flex-col items-center">
                <Globe className="w-8 h-8 text-[#3A8D99] mb-1" />
                <span className="font-bold text-slate-900 text-sm">Direct</span>
            </div>
            <div className="absolute top-8 right-12 bg-white shadow-lg p-2 rounded-lg rotate-[3deg]">
                <span className="font-bold text-slate-900 text-xs">API</span>
            </div>

            {/* Connecting Lines (svg) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-50">
                <path d="M50,30 Q150,50 150,80" fill="none" stroke="black" strokeWidth="2" strokeDasharray="4 4" />
                <path d="M250,50 Q180,80 150,80" fill="none" stroke="black" strokeWidth="2" strokeDasharray="4 4" />
                <path d="M220,130 Q180,100 150,80" fill="none" stroke="black" strokeWidth="2" strokeDasharray="4 4" />
            </svg>
        </div>
    </div>
);

const CardGraphic3 = () => (
    <div className="h-48 w-full relative flex items-center justify-center p-4 bg-slate-200 rounded-t-xl overflow-hidden text-slate-800" aria-hidden="true">
        <div className="bg-slate-900 w-full max-w-[240px] rounded-lg shadow-2xl overflow-hidden transform rotate-1 hover:rotate-0 transition-transform duration-500">
            <div className="bg-slate-800 p-2 flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
            </div>
            <div className="p-3 font-mono text-[10px] text-[#E37434] leading-relaxed opacity-90">
                <div className="flex gap-2">
                    <span className="text-[#4B9DA9]">const</span>
                    <span className="text-[#3A8D99]">book</span> = <span className="text-[#91C6BC]">new Book()</span>;
                </div>
                <div>book.<span className="text-[#3A8D99]">print()</span>;</div>
                <div className="text-slate-500">// API Request</div>
            </div>
        </div>
        <div className="absolute top-8 right-8 bg-white p-2 rounded-lg shadow-lg rotate-12">
            <Code className="w-6 h-6 text-[#4B9DA9]" />
        </div>
    </div>
);

const CardGraphic4 = () => (
    <div className="h-48 w-full relative flex items-center justify-center p-4 bg-white border-b border-slate-100 rounded-t-xl overflow-hidden" aria-hidden="true">
        <div className="relative w-full max-w-[200px] h-full flex items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full border-[12px] border-slate-100 border-t-[#4B9DA9] animate-spin" style={{ animationDuration: '3s' }}></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full border-[8px] border-slate-100 border-r-[#E37434] animate-spin" style={{ animationDuration: '2s', animationDirection: 'reverse' }}></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
                <BarChart3 className="w-8 h-8 text-slate-700" />
            </div>
        </div>
        {/* Floating Stat Card */}
        <div className="absolute bottom-4 right-4 bg-white shadow-lg p-2 rounded-lg animate-bounce border border-slate-100">
            <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                <span className="text-[10px] font-bold text-slate-700">+24%</span>
            </div>
        </div>
    </div>
);

const CardGraphic5 = () => (
    <div className="h-48 w-full relative flex items-center justify-center p-4 bg-slate-50 rounded-t-xl overflow-hidden" aria-hidden="true">
        <div className="relative w-full max-w-sm">
            {/* Abstract drafting/design tools */}
            <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-lg shadow-sm border border-slate-200 rotate-[-5deg]"></div>
            <div className="absolute top-8 left-8 w-40 h-24 bg-white rounded-lg shadow-md border border-slate-200 flex flex-col p-2 space-y-2">
                <div className="w-2/3 h-2 bg-slate-100 rounded"></div>
                <div className="w-full h-12 bg-slate-50 rounded border border-dashed border-slate-200"></div>
            </div>
            {/* Pen Tool Icon Floating */}
            <div className="absolute bottom-6 right-10 bg-[#E37434] text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform">
                <PenTool className="w-6 h-6" />
            </div>
        </div>
    </div>
);

const CardGraphic6 = () => (
    <div className="h-48 w-full relative flex items-center justify-center p-4 bg-purple-50 rounded-t-xl overflow-hidden" aria-hidden="true">
        {/* Social Media Post Mockup */}
        <div className="bg-white w-40 h-32 rounded-lg shadow-md border border-purple-100 p-3 flex flex-col gap-2 rotate-[-3deg] absolute left-10 top-6">
            <div className="flex gap-2 items-center">
                <div className="w-6 h-6 rounded-full bg-[#3A8D99]"></div>
                <div className="w-20 h-2 bg-slate-100 rounded"></div>
            </div>
            <div className="w-full h-12 bg-slate-50 rounded bg-[#3A8D99]/10"></div>
            <div className="flex justify-between mt-auto">
                <div className="w-6 h-6 rounded-full bg-pink-50 flex items-center justify-center border border-pink-100"><Heart className="w-3 h-3 text-[#E37434] fill-[#E37434]" /></div>
                <div className="w-12 h-2 bg-slate-100 rounded"></div>
            </div>
        </div>

        {/* Floating Megaphone */}
        <div className="absolute bottom-6 right-8 bg-[#4B9DA9] text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform animate-bounce">
            <Megaphone className="w-6 h-6" />
        </div>

        {/* Floating Tag */}
        <div className="absolute top-4 right-6 bg-[#91C6BC] text-slate-900 px-2.5 py-1 rounded-md shadow-sm rotate-[12deg] text-[10px] font-bold border border-[#E37434]">
            PROMO
        </div>
    </div>
);


const FeatureCards = () => {
    const cards = [
        {
            id: 1,
            title: "Fast Book Publishing & Printing",
            description: "In under a day, publish your book and have it available for sale on Lulu Bookstore. Use our free templates to generate a PDF to have your book printed.",
            buttonText: "Book Creation Options",
            buttonColor: "bg-[#4B9DA9] hover:bg-[#3A8D99]",
            graphicBg: "bg-[#4B9DA9]/10",
            Graphic: CardGraphic1
        },
        {
            id: 2,
            title: "Sell Your Books Direct",
            description: "Ditch the overhead, sell books direct-to-consumer, and unlock true on-demand scalability. Print single copies or bulk shipments exactly when you need them.",
            buttonText: "Sell Your Books",
            buttonColor: "bg-[#3A8D99] hover:bg-[#2F7A85]",
            graphicBg: "bg-[#3A8D99]/10",
            Graphic: CardGraphic2
        },
        {
            id: 3,
            title: "Customize Your Book Printing With API",
            description: "Level up by plugging in our Print API and enabling automated print and global fulfillment for books, magazines, workbooks, and more.",
            buttonText: "Explore the API",
            buttonColor: "bg-[#E37434] hover:bg-[#C9632C]",
            graphicBg: "bg-[#E37434]/10",
            Graphic: CardGraphic3
        },
        {
            id: 4,
            title: "Analytics & Global Insights",
            description: "Track your success with real-time data on sales, revenue, and reader demographics across our global distribution network.",
            buttonText: "View Analytics",
            buttonColor: "bg-[#4B9DA9] hover:bg-[#3A8D99]",
            graphicBg: "bg-[#4B9DA9]/10",
            Graphic: CardGraphic4
        },
        {
            id: 5,
            title: "Expert Design Services",
            description: "Need help with your cover design or interior formatting? Collaborate with our vetted design professionals to make your book stand out.",
            buttonText: "Hire a Pro",
            buttonColor: "bg-[#3A8D99] hover:bg-[#2F7A85]",
            graphicBg: "bg-[#3A8D99]/10",
            Graphic: CardGraphic5
        },
        {
            id: 6,
            title: "Built-in Marketing Tools",
            description: "Promote your book with ease. Use our suite of social media assets, discount codes, and pre-order campaigns to drive sales.",
            buttonText: "Start Promoting",
            buttonColor: "bg-[#E37434] hover:bg-[#C9632C]",
            graphicBg: "bg-[#E37434]/10",
            Graphic: CardGraphic6
        }
    ];

    return (
        <section className="w-full pb-12 pt-16 pr-8 md:pr-16 pl-0 bg-slate-50 -mt-32 overflow-visible">

            {/* Section Header - Static with Highlights */}
            {/* <div className="max-w-[95rem] mx-auto px-4 md:px-8 mb-16 relative z-20 text-center">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tighter whitespace-nowrap">
                    Explore the <span className="text-[#4B9DA9]">Services</span> we offer to help you <span className="text-[#E37434]">Succeed</span>
                </h2>
            </div> */}

            <div className="bg-[#F6F3C2] rounded-r-[50px] rounded-l-none py-8 pr-8 pl-0 md:py-16 md:pr-0 md:pl-0 shadow-[0_-10px_20px_-5px_rgba(0,0,0,0.05)] relative overflow-hidden">
                {/* Decorative Shape resembling header style */}
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-white opacity-40 blur-3xl pointer-events-none"></div>

                {/* New Decorative Elements */}
                <div className="absolute bottom-0 left-10 w-64 h-64 rounded-full border-[20px] border-[#91C6BC] opacity-20 pointer-events-none -mb-32"></div>
                <div className="absolute top-20 left-1/4 w-12 h-12 bg-[#3A8D99] rounded-full opacity-10 pointer-events-none animate-pulse"></div>
                <svg className="absolute top-10 right-1/3 w-24 h-24 text-slate-400 opacity-10 pointer-events-none rotate-12" viewBox="0 0 100 100" fill="currentColor">
                    <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                        <circle cx="2" cy="2" r="2" />
                    </pattern>
                    <rect width="100" height="100" fill="url(#dots)" />
                </svg>

                <div className="max-w-[90rem] mx-auto relative z-10">

                    {/* Wrapper with padding - Left padding creates gutter for fade so card isn't obscured */}
                    <div className="relative -ml-4 md:-ml-16 pr-0 md:pr-0 md:-mr-[30px]">
                        {/* Navigation Arrow - Vertically Centered on Right, Outside Mask */}
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 z-[60] hidden md:block translate-x-1/2 md:right-[-90px]">
                            <button className="swiper-prev-btn bg-white p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all text-slate-800 border border-slate-100">
                                <ArrowRight className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Swiper with CSS Mask for perfect blending - Tighter mask to keep cards visible */}
                        <div className="pl-4 md:pl-16 [mask-image:linear-gradient(to_right,transparent,black_16px,black_calc(100%-20px),transparent)] md:[mask-image:linear-gradient(to_right,transparent,black_64px,black_calc(100%-100px),transparent)] py-4">
                            <Swiper
                                key="manual-slider-v2"
                                modules={[Navigation]}
                                spaceBetween={32}
                                slidesPerView={1}
                                allowTouchMove={false}
                                navigation={{
                                    prevEl: '.swiper-prev-btn',
                                    nextEl: null,
                                }}
                                breakpoints={{
                                    768: {
                                        slidesPerView: 2,
                                    },
                                    1200: {
                                        slidesPerView: 3,
                                    },
                                }}
                                loop={true}
                                speed={800}
                                className="!overflow-visible !pb-10"
                            >
                                {cards.map((card) => (
                                    <SwiperSlide key={card.id} className="!h-auto">
                                        <div className="bg-white text-slate-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col h-full border border-slate-200 group min-h-[500px]">
                                            <div className={`${card.graphicBg} pt-8 px-4 pb-0 overflow-hidden relative transition-colors h-48 shrink-0`}>
                                                <card.Graphic />
                                            </div>

                                            <div className="p-8 flex-1 flex flex-col">
                                                <h3 className="text-2xl font-bold mb-4 line-clamp-2">{card.title}</h3>
                                                <p className="text-slate-600 mb-8 flex-1 leading-relaxed line-clamp-4">
                                                    {card.description}
                                                </p>
                                                <button className={`w-full py-3 px-6 rounded-lg ${card.buttonColor} text-white font-bold transition-colors flex items-center justify-center gap-2 group-hover:gap-3`}>
                                                    {card.buttonText} <ArrowRight className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeatureCards;
