import { GetStaticProps } from 'next';
import Head from 'next/head';
import ProductCard from '@/components/ProductCard';
import { Product } from '@/types';
import { fetchProducts } from '@/lib/api'; 

interface HomeProps {
  products: Product[];
}

const Home: React.FC<HomeProps> = ({ products }) => {
  return (
    <>
      <Head>
        <title>MyEcom - Shop Now!</title>
        <meta name="description" content="A responsive e-commerce platform built with Next.js and TypeScript." />
      </Head>
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-gray-100">Featured Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  try {
    const products = await fetchProducts();
    return {
      props: {
        products,
      },
      revalidate: 60, // Regenerate page every 60 seconds (ISR)
    };
  } catch (error) {
    console.error('Failed to fetch products for homepage:', error);
    return {
      notFound: true, // Or redirect to an error page
    };
  }
};

export default Home;