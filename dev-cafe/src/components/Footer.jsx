import React from 'react';
import { Coffee, MapPin, Phone, Clock } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeData';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800/80 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid md:grid-cols-3 gap-8 mb-8 pb-8 border-b border-slate-900">
          <div>
            <div className="flex items-center space-x-2 mb-3">
              <div className="w-7 h-7 rounded bg-amber-500 flex items-center justify-center text-slate-950">
                <Coffee className="w-4 h-4" />
              </div>
              <span className="font-bold text-white text-base font-mono">
                Dev<span className="text-amber-400">&lt;</span>Cafe<span className="text-amber-400">&gt;</span>
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              Craft coffee, high-speed fiber internet, desk outlets for developer setups, soundproof pods, IT books, and tabletop board games.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-2">Location & Contact</h4>
            <p className="flex items-center text-slate-400 mb-1">
              <MapPin className="w-3.5 h-3.5 mr-1.5 text-amber-400 flex-shrink-0" />
              {CAFE_INFO.location}
            </p>
            <p className="flex items-center text-slate-400">
              <Phone className="w-3.5 h-3.5 mr-1.5 text-amber-400 flex-shrink-0" />
              {CAFE_INFO.phone}
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-2">Opening Hours</h4>
            <p className="flex items-center text-slate-400">
              <Clock className="w-3.5 h-3.5 mr-1.5 text-emerald-400 flex-shrink-0" />
              {CAFE_INFO.hours}
            </p>
            <span className="text-[10px] text-emerald-400 font-mono mt-1 inline-block">
              Open 7 days a week
            </span>
          </div>
        </div>

        <div className="text-center text-slate-500 text-[11px] font-mono">
          © {new Date().getFullYear()} Dev Cafe. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
