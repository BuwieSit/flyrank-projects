import React from 'react';
import { Wifi, Zap, Users, BookOpen } from 'lucide-react';
import { AMENITIES } from '../data/cafeData';

const iconMap = {
  Wifi: Wifi,
  Zap: Zap,
  Users: Users,
  BookOpen: BookOpen,
};

export default function Amenities({ onOpenBooking }) {
  return (
    <section id="amenities" className="py-16 bg-slate-950 text-white border-b border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Venue Amenities & Features
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-2">
            Optimized for productivity, pair programming, study sessions, and casual coffee breaks.
          </p>
        </div>

        {/* 2x2 Clean Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {AMENITIES.map((item) => {
            const IconComponent = iconMap[item.icon] || Wifi;
            return (
              <div
                key={item.id}
                className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/90 flex flex-col justify-between hover:border-slate-700 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-amber-400">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                {item.id === 'meeting-rooms' && (
                  <button
                    onClick={onOpenBooking}
                    className="self-start text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors"
                  >
                    Reserve a pod room →
                  </button>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
