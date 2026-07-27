import React, { useState } from 'react';
import { Coffee, ShoppingBag, Menu as MenuIcon, X, Calendar } from 'lucide-react';

export default function Navbar({ cartCount, onOpenCart, onOpenBooking }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Amenities', href: '#amenities' },
    { label: 'Menu & Prices', href: '#menu' },
    { label: 'Meeting Pods', href: '#meeting-rooms' },
    { label: 'Library & Games', href: '#library-games' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 text-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center text-slate-950 shadow-md">
              <Coffee className="w-4 h-4" />
            </div>
            <span className="font-bold text-lg text-white font-mono tracking-tight">
              Dev<span className="text-amber-400">&lt;</span>Cafe<span className="text-amber-400">&gt;</span>
            </span>
          </a>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-medium text-slate-300 hover:text-amber-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center space-x-3">
            <button
              onClick={onOpenBooking}
              className="hidden sm:flex items-center space-x-1.5 px-3.5 py-1.5 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors shadow-sm"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Pod</span>
            </button>

            <button
              onClick={onOpenCart}
              aria-label="Cart"
              className="relative p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
            >
              <ShoppingBag className="w-4 h-4" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-amber-400 text-slate-950 text-[10px] font-bold flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-400 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950 border-b border-slate-800 px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-sm font-medium text-slate-300 hover:bg-slate-900 hover:text-amber-400"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenBooking();
            }}
            className="w-full flex items-center justify-center space-x-2 py-2 text-xs font-semibold text-slate-950 bg-amber-400 rounded-lg"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Meeting Pod</span>
          </button>
        </div>
      )}
    </header>
  );
}
