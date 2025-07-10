import React from 'react';

const ProductCardSkeleton: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
      <div className="relative h-64 bg-gray-200"></div>
      <div className="p-5">
        <div className="h-4 bg-gray-200 rounded w-1/3 mb-2"></div>
        <div className="h-6 bg-gray-300 rounded w-3/4 mb-3"></div>
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6 mt-1"></div>
        <div className="flex items-center justify-between mt-4">
          <div className="h-8 bg-gray-300 rounded w-1/4"></div>
          <div className="h-10 bg-gray-300 rounded-lg w-1/3"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;