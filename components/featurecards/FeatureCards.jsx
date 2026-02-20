import React from 'react';
import { ArrowRight, Quote } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const TestimonialCards = () => {
    const cards = [
        {
            id: 1,
            name: "Omar H.",
            role: "Business Author",
            description: "I was honestly skeptical at first because there are so many publishing services out there. What convinced me was how detailed their editorial feedback was. They didn’t just fix grammar they challenged the structure of my chapters. It was uncomfortable at times, but my book is stronger because of it.",
            accentColor: "text-[#4B9DA9]",
            bgColor: "bg-[#4B9DA9]/5"
        },
        {
            id: 2,
            name: "Daniel S.",
            role: "Fiction Author",
            description: "I approached them thinking my manuscript was ready for traditional publishing. They were honest and told me it needed more development before it could compete. I appreciated that transparency. We worked through revisions, and the improvement was noticeable.",
            accentColor: "text-[#3A8D99]",
            bgColor: "bg-[#3A8D99]/5"
        },
        {
            id: 3,
            name: "Michael Tilman.",
            role: "Non-Fiction Writer",
            description: "What stood out to me was that they didn’t overpromise. They explained the realities of marketing and distribution instead of making unrealistic sales claims. That honesty made me trust them more.",
            accentColor: "text-[#E37434]",
            bgColor: "bg-[#E37434]/5"
        },
        {
            id: 4,
            name: "Ayesha Muhemmed.",
            role: "First-Time Author",
            description: "As a first-time author, I had a lot of questions — probably too many. They walked me through each step, from editing to distribution. The learning curve was real, but I felt supported throughout.",
            accentColor: "text-[#4B9DA9]",
            bgColor: "bg-[#4B9DA9]/5"
        },
        {
            id: 5,
            name: "Emily R.",
            role: "Memoir Writer",
            description: "The process took a little longer than I expected, but looking back, that extra time went into proper editing and design. Nothing felt rushed. The final cover and layout looked like something I’d see in a bookstore.",
            accentColor: "text-[#3A8D99]",
            bgColor: "bg-[#3A8D99]/5"
        },
    ];

    return (
        <section className="w-full pb-12 pt-16 pr-8 md:pr-16 pl-0 bg-slate-50 -mt-32 overflow-visible">
            <div className="bg-[#F6F3C2] rounded-r-[50px] ml-4 md:ml-0 rounded-l-[50px] md:rounded-l-none py-8 pr-8 pl-8 md:py-16 md:pr-0 md:pl-0 shadow-[0_-10px_20px_-5px_rgba(0,0,0,0.05)] relative overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-white opacity-40 blur-3xl pointer-events-none"></div>
                <div className="absolute bottom-0 left-10 w-64 h-64 rounded-full border-[20px] border-[#91C6BC] opacity-20 pointer-events-none -mb-32"></div>

                <div className="max-w-[90rem] mx-auto relative z-10">
                    <div className="relative ml-0 md:-ml-16 pr-0 md:pr-0 md:-mr-[30px]">
                        {/* Navigation Arrow */}
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 z-[60] block translate-x-1/2 md:right-[-90px]">
                            <button className="swiper-prev-btn bg-white p-3 md:p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all text-slate-800 border border-slate-100">
                                <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
                            </button>
                        </div>

                        <div className="pl-0 md:pl-16 md:[mask-image:linear-gradient(to_right,transparent,black_64px,black_calc(100%-100px),transparent)] py-4">
                            <Swiper
                                modules={[Navigation]}
                                spaceBetween={24}
                                slidesPerView={1}
                                allowTouchMove={true}
                                navigation={{
                                    prevEl: '.swiper-prev-btn',
                                    nextEl: null,
                                }}
                                breakpoints={{
                                    768: { slidesPerView: 2, spaceBetween: 20 },
                                    1200: { slidesPerView: 3, spaceBetween: 20 },
                                }}
                                loop={true}
                                speed={800}
                                className="!overflow-visible !pb-3"
                            >
                                {cards.map((card) => (
                                    <SwiperSlide key={card.id} className="!h-auto">
                                        <div className="bg-white mt-1 text-slate-900 rounded-[30px] md:rounded-[40px] overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-slate-200 group min-h-[300px] max-w-[450px]">
                                            <div className="p-8 md:p-10 flex-1 flex flex-col">
                                                <Quote className={`w-10 h-10 ${card.accentColor} opacity-20 mb-4`} />
                                                
                                                <p className="text-slate-600 text-[12px] md:text-xl italic mb-8 flex-1 leading-relaxed">
                                                    "{card.description}"
                                                </p>

                                                <div className="mt-auto pt-6 border-t border-slate-100">
                                                    <h3 className="text-lg md:text-xl font-bold text-slate-900">
                                                        {card.name}
                                                    </h3>
                                                    <p className={`text-sm font-medium ${card.accentColor}`}>
                                                        {card.role}
                                                    </p>
                                                </div>
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

export default TestimonialCards;