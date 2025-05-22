import { GetStaticProps } from 'next';
import Head from 'next/head';
import ProductCard from '@/components/ProductCard';
import { Product } from '@/types';
import { fetchProducts } from '@/lib/api';
import React, { useState, useMemo } from 'react';

interface ProductsPageProps {
  products: Product[];
  categories: string[];
}

const ProductsPage: React.FC<ProductsPageProps> = ({ products, categories }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [minPrice, setMinPrice] = useState<string>(''); // State for min price input
  const [maxPrice, setMaxPrice] = useState<string>(''); // State for max price input

  // Parse price inputs to numbers, defaulting to null/undefined if empty
  const parsedMinPrice = useMemo(() => parseFloat(minPrice), [minPrice]);
  const parsedMaxPrice = useMemo(() => parseFloat(maxPrice), [maxPrice]);


  const filteredProducts = useMemo(() => {
    let tempProducts = products;

    // 1. Filter by category
    if (selectedCategory !== 'all') {
      tempProducts = tempProducts.filter(
        (product) => product.category === selectedCategory
      );
    }

    // 2. Filter by search term (case-insensitive on title and description)
    if (searchTerm) {
      tempProducts = tempProducts.filter(
        (product) =>
          product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // 3. Filter by price range
    if (!isNaN(parsedMinPrice)) { // Check if minPrice is a valid number
      tempProducts = tempProducts.filter((product) => product.price >= parsedMinPrice);
    }
    if (!isNaN(parsedMaxPrice)) { // Check if maxPrice is a valid number
      tempProducts = tempProducts.filter((product) => product.price <= parsedMaxPrice);
    }

    return tempProducts;
  }, [products, searchTerm, selectedCategory, parsedMinPrice, parsedMaxPrice]); // Add price dependencies

  return (
    <>
      <Head>
        <title>All Products - MyEcom</title>
        <meta name="description" content="Browse all available products." />
      </Head>
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-gray-100">All Products</h1>

      {/* Search and Filter Controls */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8 items-center"> {/* Added items-center for alignment */}
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search products..."
          className="flex-grow p-3 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-gray-100 dark:placeholder-gray-400"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Category Filter Dropdown */}
        <select
          className="p-3 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 dark:text-gray-100 focus:ring-blue-500 focus:border-blue-500"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="all">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </option>
          ))}
        </select>

        {/* Price Filter Inputs */}
        <div className="flex gap-2">
          <input
            type="number"
            placeholder="Min Price"
            className="w-28 p-3 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-gray-100 dark:placeholder-gray-400"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            min="0" // Ensure non-negative input
          />
          <input
            type="number"
            placeholder="Max Price"
            className="w-28 p-3 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-gray-100 dark:placeholder-gray-400"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            min="0" // Ensure non-negative input
          />
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="text-center text-gray-600 dark:text-gray-400 col-span-full">
            No products found matching your criteria.
          </p>
        )}
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps<ProductsPageProps> = async () => {
  try {
    const products = await fetchProducts();

    const categories = Array.from(new Set(products.map((product) => product.category)));

    return {
      props: {
        products,
        categories,
      },
      revalidate: 60,
    };
  } catch (error) {
    console.error('Failed to fetch products for products page:', error);
    return {
      notFound: true,
    };
  }
};

export default ProductsPage;