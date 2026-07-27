import React from 'react';
import { Wifi, Zap, Users, BookOpen, Gamepad2, CheckCircle2, ShieldCheck } from 'lucide-react';
import { AMENITIES } from '../data/cafeData';

const iconMap = {
  Wifi: Wifi,
  Zap: Zap,
  Users: Users,
  BookOpen: BookOpen,
  Gamepad2: Gamepad2,
};

export default function Amenities({ onOpenBooking }) {
  return (
    <section id="amenities" className="py-20 bg-slate-900 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Built for Work & Relaxation</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Designed for Developers, <br className="hidden sm:block" />
            <span className="text-amber-400">Welcoming to Everyone</span>
          </h2>

          <p className="text-slate-400 text-base leading-relaxed">
            Dev Cafe blends the precision of an engineering workspace with the cozy atmosphere of an artisan coffee shop. Here is what you can enjoy when you visit us.
          </p>
        </div>

        {/* Grid of Amenities */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {AMENITIES.map((item) => {
            const IconComponent = iconMap[item.icon] || Wifi;
            return (
              <div
                key={item.id}
                className={`relative rounded-2xl bg-slate-950 p-6 border ${item.borderColor} bg-gradient-to-br ${item.color} flex flex-col justify-between hover:scale-[1.02] transition-all shadow-xl`}
              >
                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-slate-900/90 border border-slate-800 ${item.iconColor} shadow-md`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-900/80 border border-slate-800 text-slate-300">
                      {item.badge}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl font-bold text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold text-amber-400/90 uppercase tracking-wider mb-3">
                    {item.tagline}
                  </p>

                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <ul className="space-y-2 border-t border-slate-800/80 pt-4 mb-4">
                    {item.highlights.map((point, index) => (
                      <li key={index} className="flex items-center text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-amber-400 mr-2 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer Action if Meeting Room */}
                {item.id === 'meeting-rooms' && (
                  <button
                    onClick={onOpenBooking}
                    className="w-full mt-2 py-2.5 px-4 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors text-center"
                  >
                    Reserve a Meeting Pod Now
                  </button>
                )}
              </div>
            );
          })}
        </div>

        {/* Feature Notice Callout */}
        <div className="mt-16 rounded-2xl bg-gradient-to-r from-amber-500/10 via-slate-900 to-cyan-500/10 border border-slate-800 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="text-lg font-bold text-white flex items-center justify-center md:justify-start">
              <Zap className="w-5 h-5 text-amber-400 mr-2" />
              Power Outlets & Workstations Policy
            </h4>
            <p className="text-sm text-slate-300 max-w-2xl">
              While our desk layouts are heavily optimized for multi-screen developer setups with 100W USB-C PD fast chargers and AC sockets, <strong className="text-amber-400">Dev Cafe is open to all general customers</strong>. Whether you're coding, studying, reading, or grabbing coffee with friends, you are welcome!
            </p>
          </div>
          <a
            href="#menu"
            className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 whitespace-nowrap"
          >
            Check Coffee Menu
          </a>
        </div>

      </div>
    </section>
  );
}
