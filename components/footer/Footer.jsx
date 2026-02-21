import React from 'react';
import {
  Instagram,
  Facebook,
  Linkedin,
  Youtube,
  Twitter,
  ChevronDown,
  Podcast
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 pt-16 pb-8 border-t border-slate-200 font-sans text-slate-600">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Section: Links & Language */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6 mb-12">
          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-4 text-sm font-semibold text-slate-800">
            <a href="#" className="hover:text-[#4B9DA9] transition-colors">About us</a>
            <a href="#" className="hover:text-[#4B9DA9] transition-colors">Services</a>
            <a href="#" className="hover:text-[#4B9DA9] transition-colors">Contact us</a>
            <a href="#" className="hover:text-[#4B9DA9] transition-colors">Portfolio</a>
            <a href="#" className="hover:text-[#4B9DA9] transition-colors">Blog</a>
          </div>

          {/* Language Selector */}
          <div className="flex items-center gap-2 text-sm font-semibold text-slate-800 cursor-pointer hover:text-[#4B9DA9] transition-colors">
            <span>English</span>
            <ChevronDown size={16} />
          </div>
        </div>

        {/* Middle Section: Socials & Newsletter */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-16">

          {/* Social Icons */}
          <div className="flex gap-4">
            {[
              { Icon: Instagram, href: '#' },
              { Icon: Facebook, href: '#' },
              { Icon: Linkedin, href: '#' },
              { Icon: Youtube, href: '#' },
              { Icon: Podcast, href: '#' }, // Using Podcast icon as a placeholder for the mic icon
              { Icon: Twitter, href: '#' }, // Using Twitter icon for X
            ].map(({ Icon, href }, index) => (
              <a
                key={index}
                href={href}
                className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 hover:bg-[#4B9DA9] hover:text-white transition-all duration-300"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>

          {/* Newsletter */}
          <div className="w-full max-w-lg">
            <p className="text-slate-600 text-sm mb-4 leading-relaxed">
              Get exclusive Publishing & Marketing tips to help you create and sell your books more effectively! You can unsubscribe at any time.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Email"
                className="flex-1 px-4 py-3 rounded-lg border border-slate-300 bg-white text-slate-800 placeholder-slate-500 focus:outline-none focus:border-[#4B9DA9] focus:ring-1 focus:ring-[#4B9DA9]"
              />
              <button className="px-8 py-3 bg-[#4B9DA9] text-white font-bold rounded-lg hover:bg-[#3d8b96] transition-colors shadow-sm">
                Submit
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section: Logo & Legal */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-200 gap-8">

          {/* Logo (from Navbar) */}
          <div className="flex-shrink-0">
            <img src="/logo.png" alt="Logo" className="h-12 w-auto object-contain opacity-80 mix-blend-multiply" />
          </div>

          {/* Legal Links & Copyright */}
          <div className="flex flex-col items-center md:items-end gap-4 text-xs text-slate-500">
            <div className="flex gap-6">
              <a href="#" className="hover:text-[#4B9DA9] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#4B9DA9] transition-colors">Terms & Conditions</a>
              <a href="#" className="hover:text-[#4B9DA9] transition-colors">Security</a>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
              <span>Copyright © {currentYear} Goodspeed Publishing. All rights reserved.</span>
              {/* Optional B-Corp logo placeholder if needed, otherwise omitted as per user request to use Navbar logo */}
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;