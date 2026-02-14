"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';

const books = [
    { id: 1, title: 'Lead Magnet Formula', author: 'Sylvia Melena', color: 'bg-purple-600', image: '/book.jpg' },
    { id: 2, title: 'The New Side Hustle', author: 'Andrew Richards', color: 'bg-orange-400', image: '/book.jpg' },
    { id: 3, title: 'Make Money Online', author: 'William Richards', color: 'bg-orange-500', image: '/book.jpg' },
    // Duplicates for seamless looping (Swiper needs slidesPerView * 2)
    { id: 4, title: 'Lead Magnet Formula', author: 'Sylvia Melena', color: 'bg-purple-600', image: '/book.jpg' },
    { id: 5, title: 'The New Side Hustle', author: 'Andrew Richards', color: 'bg-orange-400', image: '/book.jpg' },
    { id: 6, title: 'Make Money Online', author: 'William Richards', color: 'bg-orange-500', image: '/book.jpg' },
];

const BookSlider = ({ className = "" }) => {
    return (
        <div className={`bg-transparent overflow-visible ${className} py-20`}>
            <Swiper
                modules={[Autoplay]}
                spaceBetween={40}
                slidesPerView={3}
                centeredSlides={true}
                loop={true}
                speed={1000}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                className="book-swiper !overflow-visible"
            >
                {books.map((book) => (
                    <SwiperSlide key={book.id} className="!w-auto">
                        {/* The Main Container with tilted effect */}
                        <div className="relative group perspective-1000 w-48 h-64 mx-4">

                            {/* Colored Background Card */}
                            <div className={`aspect-[3/4] bg-book-card rounded-lg shadow-xl transition-transform duration-500 group-hover:scale-112 group-hover:-translate-y-4`} />

                            {/* Tilted Book Image */}
                            <div className="absolute inset-0 -top-3 -left-1 rotate-[-15deg] transition-transform duration-500 hover:rotate-0 hover:-translate-y-2">
                                <img
                                    src={book.image}
                                    alt={book.title}
                                    className="w-full h-full object-cover rounded-md shadow-2xl border-l-4 border-black/20"
                                />
                            </div>
                        </div>


                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Custom Styles for 3D depth */}
            <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        
        /* Target the INNER container for the scaling to avoid conflicts with Swiper's own transforms on the slide */
        .swiper-slide .perspective-1000 {
            transition: all 1s ease-out;
            will-change: transform, opacity; 
            transform: scale(0.8);
            opacity: 0.6;
            filter: blur(1px);
        }

        /* Active slide inner container: larger */
        .swiper-slide-active .perspective-1000 {
          transform: scale(1.3);
          opacity: 1;
          filter: blur(0px);
          z-index: 50;
        }
      `}</style>
        </div>
    );
};

export default BookSlider;