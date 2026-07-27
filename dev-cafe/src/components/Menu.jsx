import React, { useState } from 'react';
import { Coffee, Plus, Check } from 'lucide-react';
import { MENU_ITEMS } from '../data/cafeData';

export default function Menu({ onAddToCart }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [addedItemIds, setAddedItemIds] = useState([]);
  const [itemSizeSelections, setItemSizeSelections] = useState({});

  const categories = ['All', 'Developer Specials', 'Artisan Coffee', 'Teas & Refreshers', 'Pastries & Brain Food'];

  const handleSizeChange = (itemId, sizeIndex) => {
    setItemSizeSelections(prev => ({
      ...prev,
      [itemId]: sizeIndex
    }));
  };

  const filteredItems = selectedCategory === 'All'
    ? MENU_ITEMS
    : MENU_ITEMS.filter(item => item.category === selectedCategory);

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

    setAddedItemIds(prev => [...prev, item.id]);
    setTimeout(() => {
      setAddedItemIds(prev => prev.filter(id => id !== item.id));
    }, 1500);
  };

  return (
    <section id="menu" className="py-16 bg-slate-950 text-white border-b border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Menu & Dynamic Pricing
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-2">
            Handcrafted espresso, high-caffeine cold brews, teas, and brain food pastries.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex justify-center space-x-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                selectedCategory === cat
                  ? 'bg-amber-400 text-slate-950 font-bold'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {filteredItems.map((item) => {
            const selectedSizeIndex = itemSizeSelections[item.id] || 0;
            const currentSize = item.sizes[selectedSizeIndex];
            const computedPrice = item.price + (currentSize ? currentSize.modifier : 0);
            const isAdded = addedItemIds.includes(item.id);

            return (
              <div
                key={item.id}
                className="rounded-2xl bg-slate-900/40 border border-slate-800/90 overflow-hidden flex flex-col justify-between hover:border-slate-700 transition-all"
              >
                <div>
                  <div className="h-40 overflow-hidden bg-slate-950 relative">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2.5 right-2.5 bg-slate-950/80 backdrop-blur-sm text-slate-300 text-[10px] font-mono px-2 py-0.5 rounded border border-slate-800">
                      ☕ {item.caffeine} Caffeine
                    </div>
                  </div>

                  <div className="p-4">
                    <span className="text-[10px] font-mono text-amber-400 uppercase tracking-wider block mb-1">
                      {item.category}
                    </span>
                    <h3 className="text-base font-bold text-white mb-1.5">{item.name}</h3>
                    <p className="text-slate-400 text-xs leading-relaxed mb-4">
                      {item.description}
                    </p>

                    {item.sizes && item.sizes.length > 1 && (
                      <div className="mb-2">
                        <div className="flex gap-1">
                          {item.sizes.map((sz, idx) => (
                            <button
                              key={sz.label}
                              onClick={() => handleSizeChange(item.id, idx)}
                              className={`flex-1 py-1 px-1 rounded text-[10px] font-mono text-center border transition-all ${
                                selectedSizeIndex === idx
                                  ? 'bg-amber-400/10 text-amber-300 border-amber-500/40 font-bold'
                                  : 'bg-slate-950 text-slate-400 border-slate-800'
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

                <div className="p-4 pt-0 flex items-center justify-between border-t border-slate-800/60 mt-2">
                  <span className="text-base font-extrabold text-amber-400 font-mono">
                    ${computedPrice.toFixed(2)}
                  </span>

                  <button
                    onClick={() => handleAddToCart(item)}
                    className={`flex items-center space-x-1 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                      isAdded
                        ? 'bg-emerald-500 text-slate-950'
                        : 'bg-amber-400 hover:bg-amber-300 text-slate-950'
                    }`}
                  >
                    {isAdded ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Added</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-3.5 h-3.5" />
                        <span>Add</span>
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
