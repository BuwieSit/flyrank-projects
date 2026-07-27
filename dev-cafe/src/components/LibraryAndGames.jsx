import React, { useState } from 'react';
import { BookOpen, Gamepad2 } from 'lucide-react';
import { IT_BOOKS, BOARD_GAMES } from '../data/cafeData';

export default function LibraryAndGames() {
  const [activeTab, setActiveTab] = useState('books');

  return (
    <section id="library-games" className="py-16 bg-slate-950 text-white border-b border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              IT Library & Board Games
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-1">
              Free to read and play for all customers.
            </p>
          </div>

          <div className="flex bg-slate-900 border border-slate-800 rounded-xl p-1 self-start">
            <button
              onClick={() => setActiveTab('books')}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                activeTab === 'books'
                  ? 'bg-amber-400 text-slate-950'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>IT Books ({IT_BOOKS.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('games')}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                activeTab === 'games'
                  ? 'bg-amber-400 text-slate-950'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Gamepad2 className="w-3.5 h-3.5" />
              <span>Board Games ({BOARD_GAMES.length})</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Books */}
        {activeTab === 'books' && (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {IT_BOOKS.map((book) => (
              <div
                key={book.id}
                className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-mono text-amber-400 block mb-1">
                    {book.field}
                  </span>
                  <h3 className="text-sm font-bold text-white mb-1">{book.title}</h3>
                  <p className="text-xs text-slate-400 font-mono mb-3">by {book.author}</p>
                </div>
                <span className="text-[10px] text-emerald-400 font-mono">
                  ✓ {book.status}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Board Games */}
        {activeTab === 'games' && (
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {BOARD_GAMES.map((game) => (
              <div
                key={game.id}
                className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-mono text-rose-400 block mb-1">
                    {game.type}
                  </span>
                  <h3 className="text-sm font-bold text-white mb-2">{game.title}</h3>
                </div>
                <div className="text-[10px] font-mono text-slate-400 flex justify-between">
                  <span>{game.players}</span>
                  <span>{game.duration}</span>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
