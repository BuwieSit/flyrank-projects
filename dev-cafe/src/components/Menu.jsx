import React, { useState } from 'react';
import { Coffee, Flame, Leaf, Plus, Check, Filter } from 'lucide-react';
import { MENU_ITEMS } from '../data/cafeData';

export default function Menu({ onAddToCart }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [veganOnly, setVeganOnly] = useState(false);
  const [addedItemIds, setAddedItemIds] = useState([]);
  const [itemSizeSelections, setItemSizeSelections] = useState({});

  const categories = ['All', 'Developer Specials', 'Artisan Coffee', 'Teas & Refreshers', 'Pastries & Brain Food'];

  // Handle Size change per item
  const handleSizeChange = (itemId, sizeIndex) => {
    setItemSizeSelections(prev => ({
      ...prev,
      [itemId]: sizeIndex
    }));
  };

  // Filter logic
  const filteredItems = MENU_ITEMS.filter(item => {
    if (selectedCategory !== 'All' && item.category !== selectedCategory) return false;
    if (veganOnly && !item.isVegan) return false;
    return true;
  });

  const handleAddToCart = (item) => {
    const selectedSizeIndex = itemSizeSelections[item.id] || 0;
    const selectedSize = item.sizes[selectedSizeIndex];
    const finalPrice = item.price + (selectedSize ? selectedSize.modifier : 0);

    const cartItem = {
      ...item,
      selectedSizeLabel: selectedSize ? selectedSize.label : 'Standard',
      finalPrice: finalPrice
    };

    onAddToCart(cartItem);

    // Show temporary added check animation
    setAddedItemIds(prev => [...prev, item.id]);
    setTimeout(() => {
      setAddedItemIds(prev => prev.filter(id => id !== item.id));
    }, 1500);
  };

  return (
    <section id="menu" className="py-20 bg-slate-950 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold mb-3">
              <Coffee className="w-3.5 h-3.5" />
              <span>Fuel Your Productivity</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Menu & <span className="text-amber-400">Dynamic Pricing</span>
            </h2>
            <p className="text-slate-400 text-sm mt-2 max-w-xl">
              Freshly roasted single-origin coffees, high-caffeine developer brews, teas, and delicious brain-fuel pastries.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setVeganOnly(!veganOnly)}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                veganOnly
                  ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/50'
                  : 'bg-slate-900 text-slate-400 border-slate-800 hover:border-slate-700'
              }`}
            >
              <Leaf className="w-3.5 h-3.5 text-emerald-400" />
              <span>Plant-Based / Vegan</span>
            </button>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex space-x-2 overflow-x-auto pb-4 mb-8 no-scrollbar border-b border-slate-800">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-amber-400 text-slate-950 font-bold shadow-lg shadow-amber-500/20'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => {
            const selectedSizeIndex = itemSizeSelections[item.id] || 0;
            const currentSize = item.sizes[selectedSizeIndex];
            const computedPrice = item.price + (currentSize ? currentSize.modifier : 0);
            const isAdded = addedItemIds.includes(item.id);

            return (
              <div
                key={item.id}
                className="rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden flex flex-col justify-between hover:border-amber-500/40 transition-all shadow-xl group"
              >
                <div>
                  {/* Image Container */}
                  <div className="relative h-44 overflow-hidden bg-slate-950">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>

                    {/* Badges */}
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                      {item.popular && (
                        <span className="bg-amber-500 text-slate-950 text-[10px] font-bold px-2 py-0.5 rounded shadow">
                          ★ Best Seller
                        </span>
                      )}
                      {item.isVegan && (
                        <span className="bg-emerald-500/90 text-slate-950 text-[10px] font-bold px-2 py-0.5 rounded shadow flex items-center">
                          <Leaf className="w-3 h-3 mr-0.5" /> Vegan
                        </span>
                      )}
                    </div>

                    <div className="absolute bottom-3 right-3 bg-slate-950/80 backdrop-blur-sm border border-slate-800 text-slate-300 text-[11px] font-mono px-2 py-0.5 rounded">
                      ☕ {item.caffeine}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5">
                    <span className="text-[11px] font-semibold text-amber-400 uppercase tracking-wider">
                      {item.category}
                    </span>
                    <h3 className="text-lg font-bold text-white mt-1 mb-2">
                      {item.name}
                    </h3>
                    <p className="text-slate-400 text-xs leading-relaxed mb-4 line-clamp-3">
                      {item.description}
                    </p>

                    {/* Size Selector */}
                    {item.sizes && item.sizes.length > 1 && (
                      <div className="mb-4">
                        <label className="text-[11px] font-mono text-slate-400 block mb-1">Select Tier / Size:</label>
                        <div className="grid grid-cols-2 gap-1.5">
                          {item.sizes.map((sz, idx) => (
                            <button
                              key={sz.label}
                              onClick={() => handleSizeChange(item.id, idx)}
                              className={`px-2 py-1 rounded text-[11px] font-medium border text-center transition-all ${
                                selectedSizeIndex === idx
                                  ? 'bg-amber-400/20 text-amber-300 border-amber-500/50 font-bold'
                                  : 'bg-slate-950 text-slate-400 border-slate-800 hover:border-slate-700'
                              }`}
                            >
                              {sz.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Footer Price & Add Button */}
                <div className="p-5 pt-0 flex items-center justify-between border-t border-slate-800/80 mt-2">
                  <div>
                    <span className="text-[10px] text-slate-500 uppercase block font-mono">Price</span>
                    <span className="text-lg font-extrabold text-amber-400 font-mono">
                      ${computedPrice.toFixed(2)}
                    </span>
                  </div>

                  <button
                    onClick={() => handleAddToCart(item)}
                    className={`flex items-center space-x-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-md ${
                      isAdded
                        ? 'bg-emerald-500 text-slate-950'
                        : 'bg-amber-400 hover:bg-amber-300 text-slate-950 hover:scale-105'
                    }`}
                  >
                    {isAdded ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>Added!</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-4 h-4" />
                        <span>Add to Order</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
