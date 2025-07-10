import React from 'react';
import CartIcon from './CartIcon';

interface HeaderProps {
  onCartClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onCartClick }) => {
  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2 cursor-pointer group">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-teal-600 group-hover:text-teal-700 transition-colors">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5A.75.75 0 0 1 14.25 12h.75c.414 0 .75.336.75.75v7.5m0 0H18A2.25 2.25 0 0 0 20.25 18v-1.5a2.25 2.25 0 0 0-2.25-2.25H15m-1.5 6H12a2.25 2.25 0 0 1-2.25-2.25V18.75a2.25 2.25 0 0 1 2.25-2.25h1.5m-1.5 6h-1.5a2.25 2.25 0 0 0-2.25 2.25v1.5A2.25 2.25 0 0 0 9.75 21h1.5m0 0h1.5a2.25 2.25 0 0 0 2.25-2.25v-1.5a2.25 2.25 0 0 0-2.25-2.25h-1.5m-6 3.75a.75.75 0 0 1-.75-.75V11.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-.75.75h-1.5Zm0-11.25a.75.75 0 0 1-.75-.75V6.75a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-1.5Z" />
            </svg>
            <h1 className="text-2xl font-bold text-slate-800 group-hover:text-slate-900 transition-colors">ShopSphere</h1>
          </div>
          <CartIcon onClick={onCartClick} />
        </div>
      </div>
    </header>
  );
};

export default Header;