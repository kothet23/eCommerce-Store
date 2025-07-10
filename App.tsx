import React, { useState, useEffect } from 'react';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import Cart from './components/Cart';
import Notification from './components/Notification';

const App: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [notification, setNotification] = useState({ show: false, message: '' });

  const handleAddToCart = (productName: string) => {
    setNotification({ show: true, message: `${productName} added to cart!` });
  };
  
  useEffect(() => {
    if (notification.show) {
      const timer = setTimeout(() => {
        setNotification({ show: false, message: '' });
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  return (
    <CartProvider>
      <div className="flex flex-col min-h-screen">
        <Header onCartClick={() => setIsCartOpen(true)} />
        <main className="flex-grow bg-gray-50">
          <ProductList onAddToCart={handleAddToCart} />
        </main>
        <Footer />
        <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        <Notification show={notification.show} message={notification.message} />
      </div>
    </CartProvider>
  );
};

export default App;