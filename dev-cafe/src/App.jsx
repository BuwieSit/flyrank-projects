import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Amenities from './components/Amenities';
import Menu from './components/Menu';
import ProductForm from './components/ProductForm';
import MeetingRooms from './components/MeetingRooms';
import LibraryAndGames from './components/LibraryAndGames';
import CartDrawer from './components/CartDrawer';
import Footer from './components/Footer';

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  // Cart operations
  const handleAddToCart = (item) => {
    setCartItems((prevItems) => {
      const existingIndex = prevItems.findIndex(
        (i) => i.id === item.id && i.selectedSizeLabel === item.selectedSizeLabel
      );
      if (existingIndex > -1) {
        const updated = [...prevItems];
        updated[existingIndex].quantity += 1;
        return updated;
      }
      return [...prevItems, { ...item, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (index, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(index);
      return;
    }
    setCartItems((prev) => {
      const updated = [...prev];
      updated[index].quantity = newQty;
      return updated;
    });
  };

  const handleRemoveItem = (index) => {
    setCartItems((prev) => prev.filter((_, idx) => idx !== index));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const totalCartCount = cartItems.reduce((acc, i) => acc + i.quantity, 0);

  // Handle adding new coffee product from ProductForm
  const handleAddProduct = (newProduct) => {
    const productWithId = {
      ...newProduct,
      id: Date.now(),
      image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80"
    };
    // Dispatch custom event or alert feedback if needed
    console.log("New product added:", productWithId);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-400 selection:text-slate-950">
      {/* Navigation Header */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenBooking={() => setIsBookingOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero
          onExploreMenu={() => {
            const menuEl = document.getElementById('menu');
            if (menuEl) menuEl.scrollIntoView({ behavior: 'smooth' });
          }}
          onOpenBooking={() => setIsBookingOpen(true)}
        />

        {/* Cafe Amenities Section */}
        <Amenities
          onOpenBooking={() => setIsBookingOpen(true)}
        />

        {/* Menu & Dynamic Pricing Section */}
        <Menu
          onAddToCart={handleAddToCart}
        />

        {/* Add New Coffee Product Form */}
        <section id="add-product" className="py-8 bg-slate-950 border-b border-slate-800/80">
          <div className="max-w-5xl mx-auto px-4">
            <ProductForm onAddProduct={handleAddProduct} />
          </div>
        </section>

        {/* Soundproof Meeting Rooms */}
        <MeetingRooms
          isOpen={isBookingOpen}
          onClose={(openState) => {
            if (typeof openState === 'boolean') {
              setIsBookingOpen(openState);
            } else {
              setIsBookingOpen(false);
            }
          }}
        />

        {/* IT Tech Books & Physical Board Games Lounge */}
        <LibraryAndGames />
      </main>

      {/* Cart Side Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
