import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { CartProvider } from '@/context/CartContext';
import { ThemeProvider } from '@/context/ThemeContext';
import Navbar from '@/components/Navbar'; 

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <CartProvider>
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Component {...pageProps} />
        </main>
      </CartProvider>
    </ThemeProvider>
  );
}