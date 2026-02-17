"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [logoAnimated, setLogoAnimated] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLogoAnimated(false);
    }, 2000); // Adjust timing based on your GIF duration

    return () => clearTimeout(timer);
  }, []);

  const navLinks = [
    { name: 'Products', href: '/products', hasDropdown: true },
    { name: 'Pricing', href: '/pricing', hasDropdown: false },
    { name: 'About', href: '/about', hasDropdown: false },
    { name: 'Contact', href: '/contact-us', hasDropdown: false },
    { name: 'Resources', href: '/resources', hasDropdown: true },
    { name: 'Bookstore', href: '/bookstore', hasDropdown: false },
  ];

  return (
    <nav className="relative bg-white font-sans border-b border-gray-100 z-100">
      <div className="w-full px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between md:justify-start md:gap-12 h-14 md:h-16 relative">

          {/* Logo */}
          <Link href="/" className="flex items-center cursor-pointer flex-shrink-0 z-20">
            {/* <img src={logoAnimated ? "/logo3.gif" : "/logo.png"} alt="Logo" className="w-70 h-20 object-contain" /> */}
            <img src="/logo.png" alt="Logo" className="w-70 h-20 object-contain" />
          </Link>

          {/* Desktop Navigation - Left Aligned */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setActive(link.name)}
                className={`group flex items-center gap-1.5 text-[15px] font-bold tracking-tight transition-colors duration-200 outline-none
                  ${active === link.name ? 'text-[#91C6BC]' : 'text-slate-600 hover:text-[#91C6BC]'}
                `}
              >
                {link.name}
                {link.hasDropdown && (
                  <ChevronDown size={14} className="stroke-[3px] mt-0.5 text-slate-400 group-hover:text-[#91C6BC] group-hover:rotate-180 transition-all duration-200" />
                )}
              </Link>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex ml-auto">
            <Link href="/contact-us">
              <button className="relative px-6 py-2.5 bg-[#E37434] text-white font-bold rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-lg group">
                <span className="relative z-10">Contact Us</span>
                <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 animate-shine group-hover:animate-none" />
              </button>
            </Link>
            <style jsx global>{`
              @keyframes shine {
                0% { left: -100%; }
                100% { left: 200%; }
              }
              .animate-shine {
                animation: shine 3s infinite linear;
              }
            `}</style>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 text-slate-900 hover:bg-slate-50 rounded-full transition-colors z-20"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-100 md:hidden z-50">
          <div className="flex flex-col p-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => {
                  setActive(link.name);
                  setIsMenuOpen(false);
                }}
                className="flex items-center justify-between w-full p-4 text-left text-base font-bold text-slate-700 hover:bg-slate-50 hover:text-[#91C6BC] rounded-lg transition-colors"
              >
                {link.name}
                {link.hasDropdown && <ChevronDown size={16} />}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;