import React, { useState, useEffect, useRef } from 'react';

// Extracted exactly from your provided HTML snippet
const featuresData = [
  {
    id: 1,
    leftHeading: "Visual Branding and Identity Development",
    leftText: "We help shape how your audience sees and remembers you. From logos and color palettes to brand voice and guidelines, we craft cohesive identities that reflect your values and stand out in any market.",
    buttonLink: "/contact-1",
    rightIcon: "https://cdn.prod.website-files.com/68922bb037c172082614e0db/68b47a25de1360479bda3e9c_Multi%20pltform.svg",
    rightHeading: "Multi-Platform",
    rightText: "Your brand’s story deserves to be told with impact. Through compelling copy, visuals, and multimedia content, we craft narratives that spark connection. We help shape how your audience sees and remembers you."
  },
  {
    id: 2,
    leftHeading: "Custom Website Design and Build",
    leftText: "We create visually stunning, user-focused websites that bring your brand to life online. Each site is built to perform—responsive across devices, easy to navigate, and optimized for both speed and search engines.",
    buttonLink: "/contact-2",
    rightIcon: "https://cdn.prod.website-files.com/68922bb037c172082614e0db/68b47a33a1ca22525677f74b_Imannovation.svg",
    rightHeading: "Innovative Solutions",
    rightText: "Your brand’s story deserves to be told with impact. Through compelling copy, visuals, and multimedia content, we craft narratives that spark connection. We help shape how your audience sees and remembers you."
  },
  {
    id: 3,
    leftHeading: "Creative Content and Storytelling Services",
    leftText: "Your brand’s story deserves to be told with impact. Through compelling copy, visuals, and multimedia content, we craft narratives that spark connection, build trust, and drive action across all platforms.",
    buttonLink: "/contact-3",
    rightIcon: "https://cdn.prod.website-files.com/68922bb037c172082614e0db/68b47a1efd3c36b689a26200_Design.svg",
    rightHeading: "Custom Website",
    rightText: "Your brand’s story deserves to be told with impact. Through compelling copy, visuals, and multimedia content, we craft narratives that spark connection. We help shape how your audience sees and remembers you."
  }
];

export default function ServicesScroller() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef([]);

  useEffect(() => {
    // Intersection Observer to detect which left-side text is currently active
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setActiveIndex(index);
          }
        });
      },
      {
        // Triggers when the item is roughly in the middle 30% of the viewport
        rootMargin: '-35% 0px -35% 0px', 
      }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full bg-[#f8f8f8] py-16 lg:py-0">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* =========================================
            DESKTOP LAYOUT (Split Screen & Sticky)
            ========================================= */}
        <div className="hidden lg:flex w-full relative">
          
          {/* Left Column - Scrollable Area */}
          <div className="w-1/2 pr-16 py-[20vh]">
            {featuresData.map((feature, index) => (
              <div
                key={feature.id}
                ref={(el) => (sectionRefs.current[index] = el)}
                data-index={index}
                // The opacity changes just like the Webflow `opacity: 1` vs `opacity: 0.2`
                className={`min-h-[60vh] flex flex-col justify-center transition-opacity duration-500 ease-in-out ${
                  activeIndex === index ? 'opacity-100' : 'opacity-20'
                }`}
              >
                <div className="mb-6">
                  <h3 className="text-4xl lg:text-5xl font-medium tracking-tight mb-6">
                    {feature.leftHeading}
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {feature.leftText}
                  </p>
                </div>
                <div>
                  <a 
                    href={feature.buttonLink} 
                    className="inline-block bg-black text-white text-sm font-bold uppercase tracking-wide py-4 px-8 rounded-full hover:bg-gray-800 transition-colors"
                  >
                    Book a Session
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - Sticky Visual Area */}
          <div className="w-1/2 h-screen sticky top-0 flex items-center justify-center pl-8">
            <div className="relative w-full h-[65vh] bg-white rounded-lg p-12 shadow-sm overflow-hidden">
              {featuresData.map((feature, index) => (
                <div
                  key={`visual-${feature.id}`}
                  className={`absolute inset-0 p-12 flex flex-col justify-between transition-all duration-700 ease-in-out ${
                    activeIndex === index 
                      ? 'opacity-100 translate-y-0 pointer-events-auto' 
                      : 'opacity-0 translate-y-8 pointer-events-none'
                  }`}
                >
                  <div className="w-24 h-24 mt-4">
                    <img 
                      src={feature.rightIcon} 
                      alt={feature.rightHeading} 
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                  <div className="mb-4">
                    <h5 className="text-3xl font-medium mb-4">
                      {feature.rightHeading}
                    </h5>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {feature.rightText}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* =========================================
            MOBILE LAYOUT (Stacked & Interleaved)
            ========================================= */}
        <div className="flex flex-col gap-16 lg:hidden">
          {featuresData.map((feature) => (
            <div key={`mobile-${feature.id}`} className="flex flex-col gap-8">
              {/* Mobile Left Equivalent */}
              <div>
                <h3 className="text-3xl font-medium tracking-tight mb-4">
                  {feature.leftHeading}
                </h3>
                <p className="text-gray-700 text-base leading-relaxed mb-6">
                  {feature.leftText}
                </p>
                <a 
                  href={feature.buttonLink} 
                  className="inline-block bg-black text-white text-sm font-bold uppercase tracking-wide py-3 px-8 rounded-full hover:bg-gray-800 transition-colors"
                >
                  Book a Session
                </a>
              </div>

              {/* Mobile Right Equivalent (Visual Card) */}
              <div className="bg-white rounded-lg p-8 shadow-sm flex flex-col gap-6">
                <div className="w-16 h-16">
                  <img 
                    src={feature.rightIcon} 
                    alt={feature.rightHeading} 
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h5 className="text-2xl font-medium mb-3">
                    {feature.rightHeading}
                  </h5>
                  <p className="text-gray-600 text-base leading-relaxed">
                    {feature.rightText}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}