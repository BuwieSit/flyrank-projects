import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, ArrowRight, CheckCircle2, Coffee } from 'lucide-react';

export default function CartDrawer({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem, onClearCart }) {
  const [checkoutComplete, setCheckoutComplete] = useState(false);

  const subtotal = cartItems.reduce((acc, item) => acc + item.finalPrice * item.quantity, 0);
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  const handleCheckout = () => {
    setCheckoutComplete(true);
  };

  const handleClose = () => {
    setCheckoutComplete(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-950/80 backdrop-blur-sm flex justify-end">
      <div className="w-full max-w-md bg-slate-900 border-l border-slate-800 h-full flex flex-col justify-between shadow-2xl relative">
        
        {/* Header */}
        <div className="p-6 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <ShoppingBag className="w-5 h-5 text-amber-400" />
            <h3 className="text-lg font-bold text-white">Your Coffee Order</h3>
            <span className="text-xs bg-slate-800 text-amber-400 px-2 py-0.5 rounded-full font-mono">
              {cartItems.length} items
            </span>
          </div>
          <button
            onClick={handleClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {!checkoutComplete ? (
          <>
            <div className="p-6 flex-1 overflow-y-auto space-y-4">
              {cartItems.length === 0 ? (
                <div className="text-center py-16 text-slate-400 space-y-3">
                  <Coffee className="w-12 h-12 text-slate-700 mx-auto" />
                  <p className="text-sm">Your order list is currently empty.</p>
                  <p className="text-xs text-slate-500">Add some artisan espresso or brain snacks from the menu!</p>
                </div>
              ) : (
                cartItems.map((item, index) => (
                  <div
                    key={`${item.id}-${item.selectedSizeLabel}-${index}`}
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800"
                  >
                    <div className="flex items-center space-x-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                      <div>
                        <h4 className="text-sm font-bold text-white">{item.name}</h4>
                        <p className="text-[11px] text-slate-400">Size: {item.selectedSizeLabel}</p>
                        <p className="text-xs font-mono text-amber-400 font-bold">
                          ${item.finalPrice.toFixed(2)}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <div className="flex items-center bg-slate-900 border border-slate-800 rounded-lg">
                        <button
                          onClick={() => onUpdateQuantity(index, item.quantity - 1)}
                          className="px-2 py-1 text-slate-400 hover:text-white text-xs font-bold"
                        >
                          -
                        </button>
                        <span className="px-2 text-xs font-mono text-white font-bold">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(index, item.quantity + 1)}
                          className="px-2 py-1 text-slate-400 hover:text-white text-xs font-bold"
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => onRemoveItem(index)}
                        className="p-1.5 text-slate-500 hover:text-rose-400"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer Calculation & Checkout */}
            {cartItems.length > 0 && (
              <div className="p-6 border-t border-slate-800 bg-slate-950 space-y-4 font-mono text-xs">
                <div className="space-y-1.5 text-slate-300">
                  <div className="flex justify-between">
                    <span>Subtotal:</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Estimated Tax (8%):</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm font-bold text-white pt-2 border-t border-slate-800">
                    <span>Total Due:</span>
                    <span className="text-amber-400">${total.toFixed(2)}</span>
                  </div>
                </div>

                <button
                  onClick={handleCheckout}
                  className="w-full py-3 font-sans font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-all shadow-lg flex items-center justify-center space-x-2 text-sm"
                >
                  <span>Place Coffee Pre-Order</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="p-6 flex-1 flex flex-col justify-center items-center text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white">Order Sent to Barista!</h3>
            <p className="text-xs text-slate-300 max-w-xs">
              Your order <span className="font-mono text-amber-400 font-bold">#DEV-8082</span> has been placed. You will receive a notification when it's ready at the counter.
            </p>
            <button
              onClick={() => {
                onClearCart();
                handleClose();
              }}
              className="px-6 py-2.5 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl"
            >
              Done & Return
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
