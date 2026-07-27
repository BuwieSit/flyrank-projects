import React, { useState } from 'react';
import { Users, CheckCircle2, Calendar, X } from 'lucide-react';
import { MEETING_ROOMS } from '../data/cafeData';

export default function MeetingRooms({ isOpen, onClose }) {
  const [selectedPod, setSelectedPod] = useState(MEETING_ROOMS[0]);
  const [reserveDate, setReserveDate] = useState('2026-07-28');
  const [reserveTime, setReserveTime] = useState('14:00');
  const [durationHours, setDurationHours] = useState(2);
  const [bookingSubmitted, setBookingSubmitted] = useState(false);

  const handleBookSubmit = (e) => {
    e.preventDefault();
    setBookingSubmitted(true);
  };

  const resetForm = () => {
    setBookingSubmitted(false);
    onClose();
  };

  return (
    <section id="meeting-rooms" className="py-16 bg-slate-950 text-white border-b border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Soundproof Meeting Rooms
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-2">
            Quiet collaboration pods equipped with 4K screens, whiteboards, and fast Wi-Fi.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {MEETING_ROOMS.map((room) => (
            <div
              key={room.id}
              className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/90 flex flex-col justify-between hover:border-slate-700 transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    ● {room.status}
                  </span>
                  <span className="text-sm font-bold text-amber-400 font-mono">
                    ${room.hourlyRate.toFixed(2)}/hr
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-1">{room.name}</h3>
                <p className="text-xs text-slate-400 mb-3 flex items-center">
                  <Users className="w-3.5 h-3.5 mr-1 text-slate-500" /> {room.capacity}
                </p>
                <p className="text-slate-400 text-xs leading-relaxed mb-4">{room.description}</p>

                <div className="space-y-1.5 border-t border-slate-800/60 pt-3 mb-4 text-xs text-slate-300">
                  {room.equipment.map((eq, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400 mr-1.5 flex-shrink-0" />
                      <span className="text-[11px]">{eq}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => {
                  setSelectedPod(room);
                  onClose(true);
                }}
                className="w-full py-2 px-3 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors text-center"
              >
                Reserve Pod
              </button>
            </div>
          ))}
        </div>

      </div>

      {/* Reservation Dialog */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-md w-full p-6 shadow-2xl relative">
            <button
              onClick={resetForm}
              className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-white rounded-lg bg-slate-800"
            >
              <X className="w-4 h-4" />
            </button>

            {!bookingSubmitted ? (
              <form onSubmit={handleBookSubmit} className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white">Book {selectedPod.name}</h3>
                  <p className="text-xs text-slate-400">
                    ${selectedPod.hourlyRate.toFixed(2)}/hr • {selectedPod.capacity}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs text-slate-400 block mb-1">Date</label>
                    <input
                      type="date"
                      value={reserveDate}
                      onChange={(e) => setReserveDate(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-200"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-xs text-slate-400 block mb-1">Time</label>
                    <select
                      value={reserveTime}
                      onChange={(e) => setReserveTime(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-200"
                    >
                      <option value="09:00">09:00 AM</option>
                      <option value="14:00">02:00 PM</option>
                      <option value="16:00">04:00 PM</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs text-slate-400 block mb-1">Duration (Hours)</label>
                  <input
                    type="number"
                    min="1"
                    max="8"
                    value={durationHours}
                    onChange={(e) => setDurationHours(parseInt(e.target.value) || 1)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-200"
                  />
                </div>

                <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 flex justify-between font-mono text-xs">
                  <span className="text-slate-400">Total:</span>
                  <span className="font-bold text-amber-400">${(selectedPod.hourlyRate * durationHours).toFixed(2)}</span>
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 font-bold text-xs text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl"
                >
                  Confirm Reservation
                </button>
              </form>
            ) : (
              <div className="text-center py-6 space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white">Pod Reserved!</h3>
                <p className="text-xs text-slate-400">
                  Reserved {selectedPod.name} for {reserveDate} at {reserveTime}.
                </p>
                <button
                  onClick={resetForm}
                  className="px-5 py-2 text-xs font-bold text-slate-950 bg-amber-400 rounded-lg"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
