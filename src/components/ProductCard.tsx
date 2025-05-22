
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types';
import { useCart } from '@/context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="group border border-gray-200 dark:border-gray-700 rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 ease-in-out flex flex-col justify-between overflow-hidden">
      <Link href={`/product/${product.id}`} className="block h-full"> {}
        <div className="relative w-full h-48 mb-4 overflow-hidden rounded-t-lg">
          <Image
            src={product.image}
            alt={product.title}
            layout="fill"
            objectFit="contain"
            className="rounded-t-lg transform group-hover:scale-105 transition-transform duration-300 ease-in-out" 
            loading="lazy"
          />
        </div>
        <div className="flex-grow flex flex-col"> {}
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-1 truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200" title={product.title}>
            {product.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm mt-1 mb-2 capitalize">{product.category}</p> {}
          <p className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-auto">${product.price.toFixed(2)}</p> {}
        </div>
      </Link>
      <button
        onClick={() => addToCart(product)}
        className="mt-4 w-full bg-blue-600 text-white py-2.5 px-4 rounded-lg hover:bg-blue-700 active:bg-blue-800 transition-all duration-200 dark:bg-blue-700 dark:hover:bg-blue-800 dark:active:bg-blue-900 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;