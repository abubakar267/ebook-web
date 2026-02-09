"use client";

import React, { useState } from 'react';
import { Search, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [active, setActive] = useState('Home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home'},
    { name: 'Services'},
    { name: 'About' },
    { name: 'Reviews'},
    { name: 'Portfolio'},
    { name: 'Contacts'},
  ];

  return (
    <nav className="flex items-center justify-between px-4 md:px-8 py-4 bg-white font-sans">
      {/* Logo Section */}
      <div className="flex items-center gap-2 cursor-pointer">
        <div className="relative w-8 h-8 flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-gray-800 rounded-full"></div>
          <div className="absolute top-1 right-1 w-2 h-2 bg-gray-800 rounded-full"></div>
        </div>
        <span className="text-lg md:text-xl font-bold tracking-tight text-gray-900">
          Goodspeed Publishing
        </span>
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex items-center gap-4">
        {navLinks.map((link) => (
          <button
            key={link.name}
            onClick={() => setActive(link.name)}
            className={`relative px-6 lg:px-8 py-3 lg:py-4 text-base lg:text-[18px] font-semibold transition-all duration-200 rounded-3xl flex items-center gap-1.5 text-black hover:bg-[#c2f15e] ${
              active === link.name ? 'bg-[#c2f15e]' : ''
            }`}
          >
            {link.name}
          </button>
        ))}
      </div>

      {/* Desktop Search Icon */}
      <div className="hidden md:flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full cursor-pointer hover:bg-gray-200 transition-colors">
        <Search size={20} className="text-gray-800" />
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden flex items-center justify-center w-10 h-10 text-gray-800"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg border-t md:hidden">
          <div className="flex flex-col p-4 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => {
                  setActive(link.name);
                  setIsMenuOpen(false);
                }}
                className={`text-left px-4 py-3 text-base font-semibold rounded-2xl transition-all duration-200 text-black hover:bg-[#c2f15e] ${
                  active === link.name ? 'bg-[#c2f15e]' : ''
                }`}
              >
                {link.name}
              </button>
            ))}
            <div className="flex justify-center pt-2">
              <div className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full cursor-pointer hover:bg-gray-200 transition-colors">
                <Search size={18} className="text-gray-800" />
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;