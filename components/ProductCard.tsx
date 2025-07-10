import React from 'react';
import type { Product } from '../types';
import { useCart } from '../hooks/useCart';

interface ProductCardProps {
  product: Product;
  onAddToCart: (productName: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const { addToCart } = useCart();
  
  const handleAddToCart = () => {
    addToCart(product);
    onAddToCart(product.name);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl group">
      <div className="relative h-64">
        <img className="w-full h-full object-cover" src={product.image} alt={product.name} />
        <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-colors duration-300"></div>
      </div>
      <div className="p-5">
        <p className="text-sm text-slate-500 mb-1">{product.category}</p>
        <h3 className="text-lg font-semibold text-slate-800 truncate" title={product.name}>{product.name}</h3>
        <p className="text-slate-600 mt-2 text-sm h-10 line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-2xl font-bold text-slate-900">${product.price.toFixed(2)}</span>
          <button 
            onClick={handleAddToCart}
            aria-label={`Add ${product.name} to cart`}
            className="flex items-center bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 transition-colors duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;