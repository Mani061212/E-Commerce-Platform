import React from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { useTheme } from '@/context/ThemeContext';
import { SunIcon, MoonIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'; 

const Navbar: React.FC = () => {
  const { itemCount } = useCart();
  const { theme, toggleTheme } = useTheme();

  return (
    
    <nav className="bg-white dark:bg-gray-800 shadow-lg border-b border-gray-200 dark:border-gray-700 py-4 md:py-5 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-6"> {}
        <Link href="/" className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200">
          MyEcom
        </Link>
        <div className="flex items-center space-x-4 md:space-x-8"> { }
          <Link href="/products" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-lg transition-colors duration-200">
            Products
          </Link>
          <Link href="/cart" className="relative text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
            <ShoppingCartIcon className="h-7 w-7 md:h-8 md:w-8" /> { }
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-bounce-once shadow-md">
                {itemCount}
              </span>
            )}
          </Link>
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              <MoonIcon className="h-6 w-6 text-gray-700 dark:text-gray-300" />
            ) : (
              <SunIcon className="h-6 w-6 text-yellow-500" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;