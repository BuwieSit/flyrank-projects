import React from 'react';
import { Wifi, Zap, Users, BookOpen, Coffee, ArrowRight } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeData';

export default function Hero({ onExploreMenu, onOpenBooking }) {
  return (
    <section className="relative bg-slate-950 text-white pt-16 pb-20 border-b border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Top Tag */}
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-amber-400 text-xs font-mono mb-6">
          <Coffee className="w-3.5 h-3.5" />
          <span>Craft Coffee & Developer Lounge</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
          Where <span className="text-amber-400">code</span> meets craft coffee.
        </h1>

        {/* Subtitle */}
        <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
          {CAFE_INFO.description}
        </p>

        {/* Action Buttons */}
        <div className="flex items-center justify-center space-x-4 mb-14">
          <a
            href="#menu"
            onClick={onExploreMenu}
            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl font-semibold text-xs text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors shadow-md"
          >
            <span>Explore Menu & Order</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={onOpenBooking}
            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl font-semibold text-xs text-slate-300 bg-slate-900 hover:bg-slate-800 border border-slate-800 transition-colors"
          >
            <span>Book Meeting Pod</span>
          </button>
        </div>

        {/* Metric Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-slate-900 max-w-4xl mx-auto">
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 text-left">
            <div className="flex items-center space-x-2 text-cyan-400 text-xs font-mono mb-1">
              <Wifi className="w-4 h-4" />
              <span>Wi-Fi Speed</span>
            </div>
            <p className="text-sm font-bold text-white">500 Mbps Fiber</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 text-left">
            <div className="flex items-center space-x-2 text-amber-400 text-xs font-mono mb-1">
              <Zap className="w-4 h-4" />
              <span>Desk Outlets</span>
            </div>
            <p className="text-sm font-bold text-white">100% Coverage</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 text-left">
            <div className="flex items-center space-x-2 text-emerald-400 text-xs font-mono mb-1">
              <Users className="w-4 h-4" />
              <span>Meeting Pods</span>
            </div>
            <p className="text-sm font-bold text-white">4 Private Pods</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 text-left">
            <div className="flex items-center space-x-2 text-purple-400 text-xs font-mono mb-1">
              <BookOpen className="w-4 h-4" />
              <span>IT Books & Games</span>
            </div>
            <p className="text-sm font-bold text-white">150+ Library</p>
          </div>
        </div>

      </div>
    </section>
  );
}
