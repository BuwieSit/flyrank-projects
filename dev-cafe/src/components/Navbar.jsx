import React, { useState } from 'react';
import { Coffee, Wifi, Zap, ShoppingBag, Menu as MenuIcon, X, Calendar } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeData';

export default function Navbar({ cartCount, onOpenCart, onOpenBooking }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Amenities', href: '#amenities' },
    { label: 'Menu & Prices', href: '#menu' },
    { label: 'Meeting Pods', href: '#meeting-rooms' },
    { label: 'IT Library & Games', href: '#library-games' },
    { label: 'Location & Hours', href: '#location' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-slate-950/85 backdrop-blur-md border-b border-slate-800 text-slate-100">
      {/* Top Banner Status Bar */}
      <div className="bg-gradient-to-r from-amber-600/30 via-slate-900 to-cyan-600/30 border-b border-slate-800 px-4 py-1.5 text-xs text-slate-300">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center space-x-4">
            <span className="flex items-center text-emerald-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping mr-1.5 inline-block"></span>
              Open Now • {CAFE_INFO.hours}
            </span>
            <span className="hidden sm:flex items-center text-cyan-400">
              <Wifi className="w-3.5 h-3.5 mr-1" />
              {CAFE_INFO.wifiSpeed}
            </span>
            <span className="hidden md:flex items-center text-amber-400">
              <Zap className="w-3.5 h-3.5 mr-1" />
              {CAFE_INFO.outletsStatus}
            </span>
          </div>
          <div className="text-slate-400 text-[11px]">
            📍 {CAFE_INFO.location}
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo */}
          <a href="#" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
              <Coffee className="w-5 h-5 text-slate-950 stroke-[2.5]" />
            </div>
            <div>
              <div className="flex items-center">
                <span className="font-extrabold text-xl tracking-tight text-white font-mono">
                  Dev<span className="text-amber-400">&lt;</span>Cafe<span className="text-amber-400">&gt;</span>
                </span>
              </div>
              <p className="text-[10px] text-slate-400 tracking-wide font-sans">Craft Coffee & Dev Lounge</p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-amber-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-3">
            <button
              onClick={onOpenBooking}
              className="hidden sm:flex items-center space-x-2 px-3.5 py-2 text-xs font-semibold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors shadow-md shadow-amber-500/10"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Pod</span>
            </button>

            <button
              onClick={onOpenCart}
              aria-label="View Cart"
              className="relative p-2.5 rounded-lg bg-slate-900 border border-slate-700 hover:border-slate-500 text-slate-200 transition-colors"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-amber-500 text-slate-950 text-xs font-bold flex items-center justify-center animate-bounce">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-slate-900 text-slate-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 border-b border-slate-800 px-4 pt-2 pb-6 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-slate-800 hover:text-amber-400"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenBooking();
            }}
            className="w-full flex items-center justify-center space-x-2 py-2.5 text-sm font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Private Pod</span>
          </button>
        </div>
      )}
    </header>
  );
}
