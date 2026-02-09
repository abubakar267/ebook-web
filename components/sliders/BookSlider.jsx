import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

const books = [
  { id: 1, title: 'Lead Magnet Formula', author: 'Sylvia Melena', color: 'bg-purple-600', image: '/book.jpg' },
  { id: 2, title: 'The New Side Hustle', author: 'Andrew Richards', color: 'bg-orange-400', image: '/book.jpg' },
  { id: 3, title: 'Make Money Online', author: 'William Richards', color: 'bg-orange-500', image: '/book.jpg' },
  { id: 4, title: 'The Brave Human Mate', author: 'Michelle Arlene', color: 'bg-purple-700', image: '/book.jpg' },
  { id: 5, title: 'Memories of Smoke', author: 'Jane Anne', color: 'bg-orange-300', image: '/book.jpg' },
  { id: 6, title: 'Claiming Jafar', author: 'Astrid Vail', color: 'bg-orange-600', image: '/book.jpg' },
    { id: 7, title: 'Memories of Smoke', author: 'Jane Anne', color: 'bg-orange-300', image: '/book.jpg' },
  { id: 8, title: 'Claiming Jafar', author: 'Astrid Vail', color: 'bg-orange-600', image: '/book.jpg' },
];

const BookSlider = () => {
  return (
    <div className="bg-[#f3f3f3] py-20 overflow-hidden">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={5}
        centeredSlides={true}
        loop={true}
        autoplay={{ delay: 4000 }}
        breakpoints={{
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
        className="book-swiper !overflow-visible"
      >
        {books.map((book) => (
          <SwiperSlide key={book.id} className="flex flex-col items-center">
            {/* The Main Container with tilted effect */}
            <div className="relative group perspective-1000 w-48 h-64">
              
              {/* Colored Background Card */}
              <div className={`aspect-[3/4] ${book.color} rounded-lg shadow-xl transition-transform duration-500 group-hover:scale-112`} />

              {/* Tilted Book Image */}
              <div className="absolute inset-0 -top-3 -left-1 rotate-[-15deg] transition-transform duration-500 hover:rotate-0 hover:-translate-y-2">
                <img 
                  src={book.image} 
                  alt={book.title} 
                  className="w-full h-full object-cover rounded-md shadow-2xl border-l-4 border-black/20"
                />
              </div>
            </div>

            {/* Author Badge - Moved outside and down */}
            <div className="mt-6 flex justify-center">
              <span className="bg-[#ccff66] text-black px-4 py-1.5 rounded-full font-semibold text-xs shadow-md whitespace-nowrap">
                {book.author}
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Styles for 3D depth */}
      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        
        /* Optional: Scale up the center slide slightly */
        .swiper-slide-active {
          transform: scale(1.1);
          z-index: 10;
          transition: transform 0.5s ease;
        }
      `}</style>
    </div>
  );
};

export default BookSlider;