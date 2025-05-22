import Head from 'next/head';
import CartItem from '@/components/CartItem';
import { useCart } from '@/context/CartContext'; 
import Link from 'next/link';

const CartPage: React.FC = () => {
  const { cart, cartTotal, clearCart } = useCart();

  return (
    <>
      <Head>
        <title>Your Cart - MyEcom</title>
        <meta name="description" content="Review your shopping cart items." />
      </Head>
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-gray-100">Your Shopping Cart</h1>
      {cart.length === 0 ? (
        <div className="text-center text-gray-600 dark:text-gray-400">
          <p className="text-lg mb-4">Your cart is empty.</p>
          <Link href="/products" className="text-blue-600 hover:underline dark:text-blue-400">
            Start shopping!
          </Link>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-grow bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          <div className="lg:w-1/3 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg self-start">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Order Summary</h2>
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg text-gray-700 dark:text-gray-300">Total:</span>
              <span className="text-2xl font-bold text-gray-900 dark:text-gray-100">${cartTotal.toFixed(2)}</span>
            </div>
            <button
              onClick={() => alert('Proceeding to checkout (not implemented)')} // Placeholder
              className="w-full bg-green-600 text-white py-3 px-6 rounded-md text-lg font-medium hover:bg-green-700 transition-colors duration-200 dark:bg-green-700 dark:hover:bg-green-800"
            >
              Proceed to Checkout
            </button>
            <button
              onClick={clearCart}
              className="mt-4 w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition-colors duration-200 dark:bg-red-600 dark:hover:bg-red-700"
            >
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CartPage;