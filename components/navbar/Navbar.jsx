"use client";

import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Products', hasDropdown: true },
    { name: 'Pricing', hasDropdown: false },
    { name: 'Create', hasDropdown: false },
    { name: 'Sell', hasDropdown: true },
    { name: 'Resources', hasDropdown: true },
    { name: 'Bookstore', hasDropdown: false },
  ];

  return (
    <nav className="relative bg-white font-sans border-b border-gray-100">
      <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 md:h-16 relative">

          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer flex-shrink-0 z-20">
            <div className="relative w-8 h-8 flex items-center justify-center">
              <div className="w-6 h-6 border-2 border-slate-900 rounded-full"></div>
              <div className="absolute top-1 right-1 w-2 h-2 bg-slate-900 rounded-full"></div>
            </div>
            <span className="text-xl md:text-2xl font-black tracking-tight text-slate-900">
              EverCrest Publishing
            </span>
          </div>

          {/* Desktop Navigation - Absolute Centered */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => setActive(link.name)}
                className={`group flex items-center gap-1.5 text-[15px] font-bold tracking-tight transition-colors duration-200 outline-none
                  ${active === link.name ? 'text-[#91C6BC]' : 'text-slate-600 hover:text-[#91C6BC]'}
                `}
              >
                {link.name}
                {link.hasDropdown && (
                  <ChevronDown size={14} className="stroke-[3px] mt-0.5 text-slate-400 group-hover:text-[#91C6BC] group-hover:rotate-180 transition-all duration-200" />
                )}
              </button>
            ))}
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
              <button
                key={link.name}
                onClick={() => {
                  setActive(link.name);
                  setIsMenuOpen(false);
                }}
                className="flex items-center justify-between w-full p-4 text-left text-base font-bold text-slate-700 hover:bg-slate-50 hover:text-[#91C6BC] rounded-lg transition-colors"
              >
                {link.name}
                {link.hasDropdown && <ChevronDown size={16} />}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;