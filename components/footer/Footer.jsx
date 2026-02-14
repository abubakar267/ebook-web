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
      <div className="absolute -left-8 sm:-left-10 md:-left-14 lg:-left-18 top-1 sm:top-2 md:top-12 lg:top-20 w-24 sm:w-28 md:w-40 lg:w-48 xl:w-56 h-auto">
        <Image
          src="/extra/footer-img.png"
          alt="Footer decoration"
          width={200}
          height={200}
          className="w-full h-auto object-contain"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Main Heading */}
        <h2 className={`${permanentMarker.className} text-[#F6F3C2] text-5xl md:text-7xl mb-12 tracking-tighter`}>
          Let's Start Now!
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-gray-800">
          {/* Column 1: Contact */}
          <div className="space-y-6">
            <p className="text-gray-300 text-lg max-w-xs">
              Expertise meets passion—that's the Goodspeed Publishing difference.
            </p>
            <a
              href="mailto:info@goodspeedpublishing.com"
              className="text-[#E37434] text-xl md:text-2xl font-bold break-words hover:opacity-80 transition-opacity"
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
          <div className="md:pl-12 border-l border-gray-800">
            <h3 className="text-xl font-bold mb-6">Useful Links</h3>
            <ul className="space-y-3 text-gray-300">
              {['Book Writing', 'Book Editing', 'Book Marketing', 'Book Publishing', 'Audio Books', 'About', 'Schedule a Call'].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-[#4B9DA9] transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Subscribe */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Subscribe</h3>
            <div className="relative border-b border-gray-400 pb-2 flex items-center justify-between">
              <span className="text-gray-400">Get news & updates</span>
              <Mail className="text-[#4B9DA9] w-5 h-5" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              It's our deep industry knowledge and unwavering passion for publishing that distinguishes us from the rest.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="py-8 text-gray-500 text-sm">
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