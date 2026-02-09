import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1a1a1a] text-white pt-16 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Heading */}
        <h2 className="text-[#a3e635] text-5xl md:text-7xl font-black mb-12 italic tracking-tighter">
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
              className="text-[#a3e635] text-xl md:text-2xl font-bold break-words hover:opacity-80 transition-opacity"
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
                  <a href="#" className="hover:text-[#a3e635] transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Subscribe */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Subscribe</h3>
            <div className="relative border-b border-gray-400 pb-2 flex items-center justify-between">
              <span className="text-gray-400">Get news & updates</span>
              <Mail className="text-[#a3e635] w-5 h-5" />
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

      {/* Bottom Large Logo Section */}
      <div className="relative mt-10">
        <div className="bg-[#ccff66] rounded-t-[100px] py-12 flex justify-center items-center px-6">
          <div className="flex items-center gap-4 text-black">
            {/* Simple SVG Logo implementation */}
            <div className="w-12 h-12 border-2 border-black rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-black rounded-full"></div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Goodspeed Publishing
            </h1>
          </div>
        </div>


      </div>
    </footer>
  );
};

export default Footer;