'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About Me', href: '/pages/aboutme' },
    { label: 'Achievements', href: '/achievements' },
    { label: 'Book Published', href: '/books' },
    { label: 'Research', href: '/research' },
    { label: 'Workshops', href: '/workshops' },
    { label: 'Clubs', href: '/clubs' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-blue-100 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-xl font-bold text-blue-700">
            <Link href="/">Prof. Rupali Umbare</Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href} className="text-gray-700 hover:text-blue-700 transition font-medium">
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-700 focus:outline-none">
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-blue-50 px-4 py-3 space-y-2 shadow-md">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="block text-gray-700 hover:text-blue-700 transition font-medium"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
