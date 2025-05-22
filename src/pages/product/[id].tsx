import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Product } from '@/types';
import { fetchProductById, fetchProducts } from '@/lib/api'; // Adjust path
import { useCart } from '@/context/CartContext';

interface ProductDetailProps {
  product: Product;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  const { addToCart } = useCart();

  if (!product) {
    return <p className="text-center text-gray-600 dark:text-gray-400">Product not found.</p>;
  }

  return (
    <>
      <Head>
        <title>{product.title} - MyEcom</title>
        <meta name="description" content={product.description} />
      </Head>
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
        <div className="relative w-full md:w-1/2 h-80 flex-shrink-0">
          <Image
            src={product.image}
            alt={product.title}
            layout="fill"
            objectFit="contain"
            className="rounded-lg"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">{product.title}</h1>
          <p className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">${product.price.toFixed(2)}</p>
          <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">{product.description}</p>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">Category: {product.category}</p>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">
            Rating: {product.rating.rate} ({product.rating.count} reviews)
          </p>
          <button
            onClick={() => addToCart(product)}
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-md text-lg font-medium hover:bg-blue-700 transition-colors duration-200 dark:bg-blue-700 dark:hover:bg-blue-800"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const products = await fetchProducts();
  const paths = products.map((product) => ({
    params: { id: product.id.toString() },
  }));

  return {
    paths,
    fallback: true, // true to allow new paths to be generated on demand
  };
};

export const getStaticProps: GetStaticProps<ProductDetailProps> = async ({ params }) => {
  const id = params?.id;

  if (!id) {
    return { notFound: true };
  }

  try {
    const product = await fetchProductById(Number(id));
    return {
      props: {
        product,
      },
      revalidate: 60, // ISR for product pages
    };
  } catch (error) {
    console.error(`Failed to fetch product with ID ${id}:`, error);
    return {
      notFound: true,
    };
  }
};

export default ProductDetail;