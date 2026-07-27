import React from 'react';
import { Coffee, Wifi, Zap, MapPin, Phone, Clock, Terminal } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeData';

export default function Footer() {
  return (
    <footer id="location" className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800">
      
      {/* Location & Hours Callout Box */}
      <div className="border-b border-slate-800 bg-slate-900/50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-slate-300">
            
            <div className="flex items-start space-x-3">
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-amber-400">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-white text-sm mb-1">Visit Our Lounge</h4>
                <p className="text-xs text-slate-400">{CAFE_INFO.location}</p>
                <span className="text-[11px] text-amber-400 font-mono mt-1 inline-block">Easy parking & bike racks available</span>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-emerald-400">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-white text-sm mb-1">Opening Hours</h4>
                <p className="text-xs text-slate-400">{CAFE_INFO.hours}</p>
                <span className="text-[11px] text-emerald-400 font-mono mt-1 inline-block">● Open 7 days a week</span>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-white text-sm mb-1">Get In Touch</h4>
                <p className="text-xs text-slate-400">Phone: {CAFE_INFO.phone}</p>
                <p className="text-xs text-slate-400">Email: hello@devcafe.io</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-amber-500 flex items-center justify-center text-slate-950 font-bold">
                <Coffee className="w-5 h-5" />
              </div>
              <span className="font-extrabold text-lg text-white font-mono">
                Dev<span className="text-amber-400">&lt;</span>Cafe<span className="text-amber-400">&gt;</span>
              </span>
            </div>
            <p className="text-slate-400 max-w-md leading-relaxed">
              A physical co-working coffee sanctuary offering 500Mbps Fiber Wi-Fi, desk power outlets for developer setups, soundproof meeting rooms, an IT book library, and tabletop board games.
            </p>
            <div className="flex items-center space-x-4 font-mono text-[11px]">
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-cyan-400">
                ⚡ 500Mbps Fiber
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-amber-400">
                🔌 Outlets 100%
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-purple-400">
                📚 150+ IT Books
              </span>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white text-sm mb-4">Venue Features</h4>
            <ul className="space-y-2">
              <li><a href="#amenities" className="hover:text-amber-400 transition-colors">High-Speed Wi-Fi</a></li>
              <li><a href="#amenities" className="hover:text-amber-400 transition-colors">Power Outlets for All Desk Seats</a></li>
              <li><a href="#meeting-rooms" className="hover:text-amber-400 transition-colors">Private Soundproof Meeting Pods</a></li>
              <li><a href="#library-games" className="hover:text-amber-400 transition-colors">IT & Tech Book Collection</a></li>
              <li><a href="#library-games" className="hover:text-amber-400 transition-colors">Physical Board & Tabletop Games</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white text-sm mb-4">Developer Tech Stack</h4>
            <ul className="space-y-2 font-mono text-[11px] text-slate-400">
              <li className="flex items-center"><Terminal className="w-3.5 h-3.5 mr-1.5 text-amber-400" /> React 19 (Vite)</li>
              <li className="flex items-center"><Terminal className="w-3.5 h-3.5 mr-1.5 text-cyan-400" /> Tailwind CSS v4</li>
              <li className="flex items-center"><Terminal className="w-3.5 h-3.5 mr-1.5 text-purple-400" /> Lucide Icons</li>
              <li className="flex items-center"><Terminal className="w-3.5 h-3.5 mr-1.5 text-emerald-400" /> Node.js & Git</li>
            </ul>
          </div>

        </div>

        <div className="pt-8 mt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-slate-500 text-[11px]">
          <p>© {new Date().getFullYear()} Dev Cafe Showcase. Built with craft coffee and clean code.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="hover:text-slate-300">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300">Terms of Service</a>
            <a href="#" className="hover:text-slate-300">Wi-Fi Guidelines</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
