// src/components/CartItem.tsx
import React from 'react';
import Image from 'next/image';
import { CartItem as TCartItem } from '@/types';
import { useCart } from '@/context/CartContext';
import Link from 'next/link'; 

interface CartItemProps {
  item: TCartItem;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { removeFromCart, updateQuantity } = useCart();

  return (
    <div className="flex items-center space-x-4 md:space-x-6 border-b border-gray-200 dark:border-gray-700 py-5 last:border-b-0"> { }
      <Link href={`/product/${item.id}`} className="flex-shrink-0">
        <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-lg overflow-hidden">
          <Image
            src={item.image}
            alt={item.title}
            layout="fill"
            objectFit="contain"
            className="rounded-lg transform hover:scale-105 transition-transform duration-200"
          />
        </div>
      </Link>
      <div className="flex-grow flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Link href={`/product/${item.id}`}>
            <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 line-clamp-2">
              {item.title}
            </h3>
          </Link>
          <p className="text-gray-600 dark:text-gray-400 mt-1">${item.price.toFixed(2)}</p>
        </div>
        <div className="flex items-center mt-3 sm:mt-0">
          {}
          <div className="flex border border-gray-300 dark:border-gray-600 rounded-md overflow-hidden shadow-sm">
            <button
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
              className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1.5 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              -
            </button>
            <input
              type="number"
              value={item.quantity}
              onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
              className="w-16 text-center bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" // Hide spin buttons for consistent look
              min="1"
            />
            <button
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
              className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1.5 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              +
            </button>
          </div>
          {}
          <button
            onClick={() => removeFromCart(item.id)}
            className="ml-4 text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-600 px-3 py-1.5 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
          >
            Remove
          </button>
        </div>
      </div>
      <p className="font-bold text-lg md:text-xl text-gray-900 dark:text-gray-100 flex-shrink-0 ml-4">${(item.price * item.quantity).toFixed(2)}</p>
    </div>
  );
};

export default CartItem;