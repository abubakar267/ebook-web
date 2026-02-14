import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';
import Image from 'next/image';
import { Permanent_Marker } from 'next/font/google';

const permanentMarker = Permanent_Marker({
  weight: '400',
  subsets: ['latin']
});

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1a1a1a] text-white pt-16 font-sans relative overflow-hidden">
      {/* Footer Image on extreme left */}
      <div className="z-0 absolute -left-8 sm:-left-10 md:-left-14 lg:-left-18 top-1 sm:top-2 md:top-12 lg:top-20 w-24 sm:w-28 md:w-40 lg:w-48 xl:w-56 h-auto">
        <Image 
          src="/extra/footer-img.png" 
          alt="Footer decoration" 
          width={200} 
          height={200}
          className="w-full h-auto object-contain"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-1">
        {/* Main Heading */}
        <h2 className={`${permanentMarker.className} text-[#91c6bc] text-3xl md:text-7xl mb-8 sm:mb-12 tracking-tighter`}>
          Let's Start Now!
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-gray-800">
          {/* Column 1: Contact */}
          <div className="space-y-6">
            <p className="text-white text-[16px] sm:text-lg max-w-xs">
              Expertise meets passion—that's the Goodspeed Publishing difference.
            </p>
            <a 
              href="mailto:info@goodspeedpublishing.com" 
              className="text-[#91c6bc] text-[14px] md:text-2xl font-bold break-words hover:opacity-80 transition-opacity"
            >
              info@goodspeedpublishing.com
            </a>

            <div className="flex flex-wrap gap-2 pt-4">
              {['Instagram', 'X (Formerly Twitter)', 'Facebook', 'LinkedIn'].map((social) => (
                <button
                  key={social}
                  className="px-4 py-1 border border-gray-400 rounded-full text-sm hover:bg-white hover:text-black transition-colors"
                >
                  {social}
                </button>
              ))}
            </div>
          </div>

          {/* Column 2: Links */}
          <div className="md:pl-12 sm:border-l border-gray-800">
            <h3 className="text-xl font-bold mb-6">Useful Links</h3>
            <ul className="space-y-3 text-gray-300">
              {['Book Writing', 'Book Editing', 'Book Marketing', 'Book Publishing', 'Audio Books', 'About', 'Schedule a Call'].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-[#4B9DA9] transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Message Box */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Give Us a Message</h3>
            <textarea 
              placeholder="Type your message here..."
              className="w-full h-32 bg-white/10 border border-gray-600 rounded-2xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#91c6bc] focus:ring-2 focus:ring-[#91c6bc]/50 transition-all resize-none"
            />
            <button className="w-full bg-[#91c6bc] text-black font-bold py-3 rounded-full hover:bg-[#7fb5ab] transition-colors">
              Send Message
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="py-8 text-white text-sm relative z-1">
          © 2026 Goodspeed Publishing. All Rights Reserved
        </div>
      </div>

      {/* Footer Image 2 on extreme bottom right */}
      <div className="absolute -right-8 sm:-right-10 md:-right-14 lg:-right-16 -bottom-8 sm:-bottom-10 md:-bottom-12 lg:-bottom-16 w-24 sm:w-28 md:w-40 lg:w-48 xl:w-56 h-auto">
        <Image
          src="/extra/footer-img2.png"
          alt="Footer decoration"
          width={200}
          height={200}
          className="w-full h-auto object-contain"
        />
      </div>
    </footer>
  );
};

export default Footer;