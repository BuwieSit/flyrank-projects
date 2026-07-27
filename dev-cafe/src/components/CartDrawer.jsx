import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, ArrowRight, CheckCircle2 } from 'lucide-react';

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
        <div className="p-5 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <ShoppingBag className="w-4 h-4 text-amber-400" />
            <h3 className="text-base font-bold text-white">Your Order</h3>
            <span className="text-xs text-slate-400 font-mono">({cartItems.length})</span>
          </div>
          <button
            onClick={handleClose}
            className="p-1 text-slate-400 hover:text-white rounded bg-slate-800"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* List */}
        {!checkoutComplete ? (
          <>
            <div className="p-5 flex-1 overflow-y-auto space-y-3">
              {cartItems.length === 0 ? (
                <div className="text-center py-16 text-slate-400 text-xs">
                  Your order list is empty. Add drinks or pastries from the menu!
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
                        className="w-10 h-10 rounded object-cover"
                      />
                      <div>
                        <h4 className="text-xs font-bold text-white">{item.name}</h4>
                        <p className="text-[10px] text-slate-400">{item.selectedSizeLabel}</p>
                        <p className="text-xs font-mono text-amber-400 font-bold">
                          ${item.finalPrice.toFixed(2)}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <div className="flex items-center bg-slate-900 border border-slate-800 rounded">
                        <button
                          onClick={() => onUpdateQuantity(index, item.quantity - 1)}
                          className="px-2 py-0.5 text-slate-400 hover:text-white text-xs font-bold"
                        >
                          -
                        </button>
                        <span className="px-1.5 text-xs font-mono text-white">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(index, item.quantity + 1)}
                          className="px-2 py-0.5 text-slate-400 hover:text-white text-xs font-bold"
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => onRemoveItem(index)}
                        className="p-1 text-slate-500 hover:text-rose-400"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cartItems.length > 0 && (
              <div className="p-5 border-t border-slate-800 bg-slate-950 space-y-3 font-mono text-xs">
                <div className="space-y-1 text-slate-400">
                  <div className="flex justify-between">
                    <span>Subtotal:</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax (8%):</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-white font-bold pt-2 border-t border-slate-800">
                    <span>Total:</span>
                    <span className="text-amber-400">${total.toFixed(2)}</span>
                  </div>
                </div>

                <button
                  onClick={handleCheckout}
                  className="w-full py-2.5 font-sans font-bold text-xs text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl flex items-center justify-center space-x-1"
                >
                  <span>Submit Order</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="p-6 flex-1 flex flex-col justify-center items-center text-center space-y-3">
            <CheckCircle2 className="w-10 h-10 text-emerald-400" />
            <h3 className="text-lg font-bold text-white">Order Received!</h3>
            <p className="text-xs text-slate-400">Your barista is preparing your order.</p>
            <button
              onClick={() => {
                onClearCart();
                handleClose();
              }}
              className="px-4 py-2 text-xs font-bold text-slate-950 bg-amber-400 rounded-lg"
            >
              Done
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
