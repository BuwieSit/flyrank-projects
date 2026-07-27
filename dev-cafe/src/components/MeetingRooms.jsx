import React, { useState } from 'react';
import { Users, Monitor, Clock, ShieldCheck, CheckCircle2, Calendar, X } from 'lucide-react';
import { MEETING_ROOMS } from '../data/cafeData';

export default function MeetingRooms({ isOpen, onClose }) {
  const [selectedPod, setSelectedPod] = useState(MEETING_ROOMS[0]);
  const [reserveDate, setReserveDate] = useState('2026-07-28');
  const [reserveTime, setReserveTime] = useState('14:00');
  const [durationHours, setDurationHours] = useState(2);
  const [attendeesCount, setAttendeesCount] = useState(4);
  const [coffeeAddon, setCoffeeAddon] = useState(true);
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
    <section id="meeting-rooms" className="py-20 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
            <Users className="w-3.5 h-3.5" />
            <span>Private Collaboration Pods</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Soundproof <span className="text-emerald-400">Meeting Rooms</span>
          </h2>

          <p className="text-slate-300 text-base leading-relaxed">
            Need a quiet space for team standups, sprint planning, client calls, or pair programming? Our meeting pods are acoustically insulated and fully tech-equipped.
          </p>
        </div>

        {/* Pod Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {MEETING_ROOMS.map((room) => (
            <div
              key={room.id}
              className="rounded-2xl bg-slate-950 border border-slate-800 p-6 flex flex-col justify-between hover:border-emerald-500/40 transition-all shadow-xl"
            >
              <div>
                {/* Header Status */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-md border ${room.statusColor}`}>
                    ● {room.status}
                  </span>
                  <div className="text-right">
                    <span className="text-xl font-extrabold text-emerald-400 font-mono">${room.hourlyRate.toFixed(2)}</span>
                    <span className="text-xs text-slate-400"> / hr</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-1">{room.name}</h3>
                <p className="text-xs font-medium text-slate-400 mb-4 flex items-center">
                  <Users className="w-3.5 h-3.5 mr-1 text-emerald-400" />
                  Capacity: {room.capacity}
                </p>

                <p className="text-slate-300 text-xs leading-relaxed mb-6">
                  {room.description}
                </p>

                {/* Specs */}
                <div className="space-y-2 border-t border-slate-800/80 pt-4 mb-6">
                  <p className="text-[11px] font-mono text-slate-400 uppercase">Included Tech & Amenities:</p>
                  {room.equipment.map((item, idx) => (
                    <div key={idx} className="flex items-center text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mr-2 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => {
                  setSelectedPod(room);
                  onClose(true); // open modal state
                }}
                className="w-full py-3 px-4 text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-all shadow-md shadow-emerald-500/10 text-center"
              >
                Reserve {room.name}
              </button>
            </div>
          ))}
        </div>

      </div>

      {/* Booking Modal Dialog */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative">
            <button
              onClick={resetForm}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>

            {!bookingSubmitted ? (
              <form onSubmit={handleBookSubmit} className="space-y-5">
                <div>
                  <div className="inline-flex items-center space-x-2 text-emerald-400 text-xs font-mono mb-1">
                    <Calendar className="w-4 h-4" />
                    <span>Reserve Space</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Book {selectedPod.name}
                  </h3>
                  <p className="text-xs text-slate-400">
                    ${selectedPod.hourlyRate.toFixed(2)} / hour • Capacity: {selectedPod.capacity}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-medium text-slate-300 block mb-1">Date</label>
                    <input
                      type="date"
                      value={reserveDate}
                      onChange={(e) => setReserveDate(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-emerald-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="text-xs font-medium text-slate-300 block mb-1">Start Time</label>
                    <select
                      value={reserveTime}
                      onChange={(e) => setReserveTime(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-emerald-500"
                    >
                      <option value="09:00">09:00 AM</option>
                      <option value="11:00">11:00 AM</option>
                      <option value="14:00">02:00 PM</option>
                      <option value="16:00">04:00 PM</option>
                      <option value="18:00">06:00 PM</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-medium text-slate-300 block mb-1">Duration (Hours)</label>
                    <input
                      type="number"
                      min="1"
                      max="8"
                      value={durationHours}
                      onChange={(e) => setDurationHours(parseInt(e.target.value) || 1)}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-medium text-slate-300 block mb-1">Attendees</label>
                    <input
                      type="number"
                      min="1"
                      max="10"
                      value={attendeesCount}
                      onChange={(e) => setAttendeesCount(parseInt(e.target.value) || 1)}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>

                <div className="flex items-center space-x-2 bg-slate-950 p-3 rounded-xl border border-slate-800">
                  <input
                    type="checkbox"
                    id="addon"
                    checked={coffeeAddon}
                    onChange={(e) => setCoffeeAddon(e.target.checked)}
                    className="w-4 h-4 rounded accent-emerald-500"
                  />
                  <label htmlFor="addon" className="text-xs text-slate-300 cursor-pointer">
                    Include Fresh Brewed Coffee Service (+$5.00/person)
                  </label>
                </div>

                {/* Total Price Summary */}
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex items-center justify-between font-mono text-sm">
                  <span className="text-slate-400">Total Reservation Fee:</span>
                  <span className="text-xl font-bold text-emerald-400">
                    ${(selectedPod.hourlyRate * durationHours + (coffeeAddon ? attendeesCount * 5 : 0)).toFixed(2)}
                  </span>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-all shadow-lg"
                >
                  Confirm & Reserve Room
                </button>
              </form>
            ) : (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">Reservation Confirmed!</h3>
                <p className="text-xs text-slate-300 max-w-sm mx-auto">
                  We have reserved <strong className="text-emerald-400">{selectedPod.name}</strong> for you on <strong className="text-white">{reserveDate}</strong> at <strong className="text-white">{reserveTime}</strong> ({durationHours} hours).
                </p>
                <button
                  onClick={resetForm}
                  className="px-6 py-2.5 text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl"
                >
                  Done
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
