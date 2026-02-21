import React from 'react';

const ServicesHero = () => {
  const data = [
    { id: 1, title: "Explore Nature", btn: "Learn More", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80" },
    { id: 2, title: "Mountain Adventure", btn: "Discover", img: "https://images.unsplash.com/photo-1511576661531-b3837da1a05c?auto=format&fit=crop&w=800&q=80" },
    { id: 3, title: "Green Forests", btn: "See Trails", img: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80" },
    { id: 4, title: "River Journeys", btn: "Book A Trip", img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80" },
  ];

  // Helper component for the overlay content
  const Overlay = ({ title, btn }) => (
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-8 transition-opacity duration-300">
      <h3 className="text-white text-2xl font-bold mb-3 transform transition-transform duration-500 group-hover:-translate-y-2">
        {title}
      </h3>
      <button className="w-fit px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-full text-sm font-semibold transition-all duration-300 transform group-hover:-translate-y-2 shadow-lg">
        {btn}
      </button>
    </div>
  );

  return (
    <div className="flex items-center justify-center min-h-screen bg-white p-8">
      <div className="w-full max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[750px]">
          
          {/* Column 1: Left Tall */}
          <div className="relative group overflow-hidden rounded-3xl shadow-xl h-[400px] md:h-full">
            <img src={data[0].img} alt={data[0].title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <Overlay title={data[0].title} btn={data[0].btn} />
          </div>

          {/* Column 2: Middle Split */}
          <div className="grid grid-rows-2 gap-6 h-[600px] md:h-full">
            <div className="relative group overflow-hidden rounded-3xl shadow-xl">
              <img src={data[1].img} alt={data[1].title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <Overlay title={data[1].title} btn={data[1].btn} />
            </div>
            <div className="relative group overflow-hidden rounded-3xl shadow-xl">
              <img src={data[2].img} alt={data[2].title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <Overlay title={data[2].title} btn={data[2].btn} />
            </div>
          </div>

          {/* Column 3: Right Tall */}
          <div className="relative group overflow-hidden rounded-3xl shadow-xl h-[400px] md:h-full">
            <img src={data[3].img} alt={data[3].title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <Overlay title={data[3].title} btn={data[3].btn} />
          </div>

        </div>
      </div>
    </div>
  );
};

export default ServicesHero;