import React, { Fragment } from 'react';
import { useCart } from '../hooks/useCart';
import type { CartItem } from '../types';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartItemRow: React.FC<{item: CartItem}> = ({ item }) => {
    const { removeFromCart, increaseQuantity, decreaseQuantity } = useCart();
    return (
        <li className="flex py-6">
            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
            <img src={item.image} alt={item.name} className="h-full w-full object-cover object-center" />
            </div>

            <div className="ml-4 flex flex-1 flex-col">
            <div>
                <div className="flex justify-between text-base font-medium text-gray-900">
                <h3>{item.name}</h3>
                <p className="ml-4">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
                <p className="mt-1 text-sm text-gray-500">{item.category}</p>
            </div>
            <div className="flex flex-1 items-end justify-between text-sm">
                <div className="flex items-center border border-gray-200 rounded">
                    <button aria-label="Decrease quantity" onClick={() => decreaseQuantity(item.id)} className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors">-</button>
                    <p className="px-3 text-base">{item.quantity}</p>
                    <button aria-label="Increase quantity" onClick={() => increaseQuantity(item.id)} className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors">+</button>
                </div>

                <div className="flex">
                <button
                    type="button"
                    onClick={() => removeFromCart(item.id)}
                    className="font-medium text-teal-600 hover:text-teal-500 transition-colors"
                >
                    Remove
                </button>
                </div>
            </div>
            </div>
        </li>
    );
};


const Cart: React.FC<CartProps> = ({ isOpen, onClose }) => {
  const { cartItems, totalPrice, clearCart } = useCart();

  return (
    <div className={`relative z-50 ${isOpen ? '' : 'pointer-events-none'}`} aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
      {/* Background overlay */}
      <div className={`fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}></div>
      
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className={`pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 transform transition ease-in-out duration-300 sm:duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="pointer-events-auto w-screen max-w-md">
              <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                  <div className="flex items-start justify-between">
                    <h2 className="text-lg font-medium text-gray-900" id="slide-over-title">Shopping Cart</h2>
                    <div className="ml-3 flex h-7 items-center">
                      <button type="button" className="-m-2 p-2 text-gray-400 hover:text-gray-500" onClick={onClose}>
                        <span className="sr-only">Close panel</span>
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="mt-8">
                    {cartItems.length === 0 ? (
                        <div className="text-center text-gray-500 px-6 py-16">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-24 h-24 mx-auto text-gray-300">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c.51 0 .962-.328 1.09-.822l2.85-7.09a1.5 1.5 0 0 0-1.09-2.185H5.438M7.5 14.25 5.106 5.165M7.5 14.25v-2.25" />
                            </svg>
                            <p className="mt-6 text-xl font-semibold">Your cart is empty</p>
                            <p className="mt-2 text-sm">Looks like you haven't added anything yet. Let's get shopping!</p>
                             <div className="mt-6">
                                <button onClick={onClose} className="flex items-center justify-center rounded-md border border-transparent bg-teal-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-teal-700">Continue Shopping</button>
                            </div>
                        </div>
                    ) : (
                        <div className="flow-root">
                            <ul role="list" className="-my-6 divide-y divide-gray-200">
                                {cartItems.map(item => <CartItemRow key={item.id} item={item} />)}
                            </ul>
                        </div>
                    )}
                  </div>
                </div>

                {cartItems.length > 0 && (
                  <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <p>Subtotal</p>
                      <p>${totalPrice.toFixed(2)}</p>
                    </div>
                    <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                    <div className="mt-6">
                      <a href="#" className="flex items-center justify-center rounded-md border border-transparent bg-teal-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-teal-700">Checkout</a>
                    </div>
                    <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                      <p>
                        or
                        <button type="button" onClick={clearCart} className="font-medium text-teal-600 hover:text-teal-500 ml-1">
                          Clear Cart
                        </button>
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;