import React, { useState } from 'react';
import { BookOpen, Gamepad2, Search, CheckCircle2, Bookmark, Clock } from 'lucide-react';
import { IT_BOOKS, BOARD_GAMES } from '../data/cafeData';

export default function LibraryAndGames() {
  const [activeTab, setActiveTab] = useState('books'); // 'books' or 'games'
  const [searchQuery, setSearchQuery] = useState('');

  const filteredBooks = IT_BOOKS.filter(b =>
    b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    b.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
    b.field.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredGames = BOARD_GAMES.filter(g =>
    g.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    g.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="library-games" className="py-20 bg-slate-950 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-semibold mb-3">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Learn & Relax</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              IT Tech Library & <span className="text-purple-400">Board Games</span>
            </h2>
            <p className="text-slate-400 text-sm mt-2 max-w-xl">
              Free to enjoy for all patrons! Deepen your knowledge with IT classics or unwind with tabletop games during coffee breaks.
            </p>
          </div>

          {/* Tab & Search Switch */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
              <input
                type="text"
                placeholder={activeTab === 'books' ? "Search books or fields..." : "Search board games..."}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-9 pr-4 py-2 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-purple-500"
              />
            </div>

            <div className="flex bg-slate-900 border border-slate-800 rounded-xl p-1 w-full sm:w-auto">
              <button
                onClick={() => setActiveTab('books')}
                className={`flex-1 sm:flex-initial flex items-center justify-center space-x-1.5 px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeTab === 'books'
                    ? 'bg-purple-500 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>IT Library ({IT_BOOKS.length})</span>
              </button>

              <button
                onClick={() => setActiveTab('games')}
                className={`flex-1 sm:flex-initial flex items-center justify-center space-x-1.5 px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeTab === 'games'
                    ? 'bg-rose-500 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Gamepad2 className="w-3.5 h-3.5" />
                <span>Board Games ({BOARD_GAMES.length})</span>
              </button>
            </div>
          </div>
        </div>

        {/* Tab 1: Books */}
        {activeTab === 'books' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBooks.map((book) => (
              <div
                key={book.id}
                className="rounded-2xl bg-slate-900 border border-slate-800 p-6 flex flex-col justify-between hover:border-purple-500/40 transition-all shadow-xl group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-950 text-slate-400 border border-slate-800">
                      Field: {book.field}
                    </span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${book.coverColor}`}>
                      {book.status}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">
                    {book.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-mono mb-4">
                    by {book.author}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span>Level: {book.level}</span>
                  <span className="flex items-center text-purple-400">
                    <Bookmark className="w-3.5 h-3.5 mr-1" />
                    Shelf A-4
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Board Games */}
        {activeTab === 'games' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGames.map((game) => (
              <div
                key={game.id}
                className="rounded-2xl bg-slate-900 border border-slate-800 p-6 flex flex-col justify-between hover:border-rose-500/40 transition-all shadow-xl group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${game.badgeColor}`}>
                      {game.type}
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                      ✓ {game.status}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-rose-300 transition-colors">
                    {game.title}
                  </h3>
                </div>

                <div className="pt-4 border-t border-slate-800/80 grid grid-cols-3 gap-2 text-center text-[11px] font-mono text-slate-300">
                  <div className="bg-slate-950 p-2 rounded-lg border border-slate-800">
                    <span className="text-slate-500 block text-[9px]">PLAYERS</span>
                    {game.players}
                  </div>
                  <div className="bg-slate-950 p-2 rounded-lg border border-slate-800">
                    <span className="text-slate-500 block text-[9px]">TIME</span>
                    {game.duration}
                  </div>
                  <div className="bg-slate-950 p-2 rounded-lg border border-slate-800">
                    <span className="text-slate-500 block text-[9px]">LEVEL</span>
                    {game.difficulty}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
