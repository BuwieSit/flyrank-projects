import React from 'react';
import { Wifi, Zap, Users, BookOpen, Gamepad2, Coffee, ChevronRight, Terminal } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeData';

export default function Hero({ onExploreMenu, onOpenBooking }) {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white pt-12 pb-20 border-b border-slate-800">
      {/* Background Ambient Glow Gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-amber-500/30 text-amber-400 text-xs font-mono">
              <Terminal className="w-3.5 h-3.5" />
              <span>// Dev-First Co-Working Cafe</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white">
              Where <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500">Code Meets</span> Craft Coffee.
            </h1>

            <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
              {CAFE_INFO.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#menu"
                onClick={onExploreMenu}
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl font-semibold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 transition-all shadow-lg shadow-amber-500/20 hover:scale-[1.02]"
              >
                <Coffee className="w-5 h-5" />
                <span>Explore Menu & Order</span>
                <ChevronRight className="w-4 h-4 ml-1" />
              </a>

              <a
                href="#amenities"
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 transition-all"
              >
                <span>View Cafe Amenities</span>
              </a>
            </div>

            {/* Quick Badges */}
            <div className="pt-4 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-slate-300">
              <div className="flex items-center space-x-2">
                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <Wifi className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Wi-Fi Speed</p>
                  <p className="text-sm font-bold text-slate-100">500 Mbps</p>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Outlets</p>
                  <p className="text-sm font-bold text-slate-100">Every Desk</p>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Meeting Pods</p>
                  <p className="text-sm font-bold text-slate-100">4 Pods</p>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Tech Books</p>
                  <p className="text-sm font-bold text-slate-100">150+ Library</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Code Terminal / Mock Showcase Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-slate-900 border border-slate-800 p-5 shadow-2xl relative overflow-hidden group">
              {/* Window Controls Header */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                </div>
                <span className="text-xs font-mono text-slate-400">dev-cafe-status.config.js</span>
                <span className="text-[10px] text-emerald-400 font-mono bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  HTTP 200 OK
                </span>
              </div>

              {/* Terminal Code Snippet */}
              <div className="font-mono text-xs sm:text-sm space-y-2.5 text-slate-300">
                <p><span className="text-purple-400">const</span> <span className="text-amber-300">devCafe</span> = &#123;</p>
                <p className="pl-4"><span className="text-cyan-300">wifi</span>: <span className="text-emerald-400">"500 Mbps Fiber (Zero Lag)"</span>,</p>
                <p className="pl-4"><span className="text-cyan-300">outlets</span>: <span className="text-emerald-400">"100% Seats + 100W USB-C"</span>,</p>
                <p className="pl-4"><span className="text-cyan-300">targetAudience</span>: [<span className="text-emerald-400">"Developers"</span>, <span className="text-emerald-400">"General Public"</span>],</p>
                <p className="pl-4"><span className="text-cyan-300">amenities</span>: &#123;</p>
                <p className="pl-8"><span className="text-purple-300">meetingPods</span>: <span className="text-amber-400">4</span>,</p>
                <p className="pl-8"><span className="text-purple-300">itBookLibrary</span>: <span className="text-amber-400">150</span> <span className="text-slate-500">// Volumes</span>,</p>
                <p className="pl-8"><span className="text-purple-300">boardGames</span>: <span className="text-amber-400">30</span> <span className="text-slate-500">// Tabletop games</span></p>
                <p className="pl-4">&#125;,</p>
                <p className="pl-4"><span className="text-cyan-300">todaysSpecial</span>: <span className="text-emerald-400">"Async Espresso + Cache Miss Croissant"</span></p>
                <p>&#125;;</p>
              </div>

              {/* Action Inside Card */}
              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                <div className="flex items-center space-x-2 text-xs text-slate-400">
                  <Gamepad2 className="w-4 h-4 text-rose-400" />
                  <span>Physical Games Lounge Open</span>
                </div>
                <button
                  onClick={onOpenBooking}
                  className="text-xs font-semibold text-amber-400 hover:text-amber-300 flex items-center space-x-1"
                >
                  <span>Reserve Room</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
