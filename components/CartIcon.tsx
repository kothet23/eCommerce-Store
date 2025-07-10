
import React from 'react';
import { useCart } from '../hooks/useCart';

interface CartIconProps {
  onClick: () => void;
}

const CartIcon: React.FC<CartIconProps> = ({ onClick }) => {
  const { cartCount } = useCart();

  return (
    <button onClick={onClick} className="relative p-2 rounded-full hover:bg-slate-200 transition-colors">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-slate-700">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c.51 0 .962-.328 1.09-.822l2.85-7.09a1.5 1.5 0 0 0-1.09-2.185H5.438M7.5 14.25 5.106 5.165M7.5 14.25v-2.25" />
      </svg>
      {cartCount > 0 && (
        <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-teal-500 text-xs font-bold text-white">
          {cartCount}
        </span>
      )}
    </button>
  );
};

export default CartIcon;
