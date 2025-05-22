import { motion } from "motion/react";
import { Link } from "react-router";
import { useApi } from "../../hooks/useApi";
import {
  fetchFeaturedProductsData,
  fetchFeaturedProductsHeadlineData,
} from "../../services/api";

const FeaturedProducts = () => {
  const {
    data: headlineData,
    loading: headlineLoading,
    error: headlineError,
  } = useApi(fetchFeaturedProductsHeadlineData);
  const {
    data: sectionData,
    loading: sectionLoading,
    error: sectionError,
  } = useApi(fetchFeaturedProductsData);
  const baseUrl = import.meta.env.VITE_BASE_URL;

  // Headline skeleton component
  const HeadlineSkeleton = () => (
    <div className="flex flex-col items-center animate-pulse">
      <div className="h-10 bg-gray-200 rounded-lg w-3/4 mb-4"></div>
      <div className="h-4 bg-gray-200 rounded w-1/2 mb-5"></div>
      <div className="w-24 h-1.5 bg-gray-200 mt-5 mb-24 rounded-full"></div>
    </div>
  );

  // Product card skeleton component
  const ProductCardSkeleton = ({ delay = 0 }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-lg shadow-lg overflow-hidden animate-pulse"
    >
      <div className="h-64 bg-gray-200"></div>
      <div className="p-6">
        <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6 mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-4/6 mb-2"></div>
      </div>
    </motion.div>
  );

  // Generate an array of skeleton cards
  const renderSkeletonCards = () => {
    return Array(3)
      .fill(0)
      .map((_, index) => (
        <ProductCardSkeleton key={`skeleton-${index}`} delay={0.1 * index} />
      ));
  };

  return (
    <div className="w-full min-h-screen bg-primary-gold/20 px-4 py-16 lg:px-24 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center">
            {headlineLoading ? (
              <HeadlineSkeleton />
            ) : headlineError ? (
              <div className="text-center p-4 bg-red-50 rounded-lg mb-24">
                <h3 className="text-xl font-bold text-red-600 mb-2">
                  Error Loading Content
                </h3>
                <p className="text-gray-700">
                  {headlineError?.message ||
                    "Failed to load headline. Please try again later."}
                </p>
              </div>
            ) : (
              <>
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-2xl md:text-4xl lg:text-5xl font-display font-bold text-center text-gray-800 mb-4"
                >
                  {headlineData?.title}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-gray-600 text-base md:text-lg text-center"
                >
                  {headlineData?.subtitle}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, scaleX: 0 }}
                  whileInView={{ opacity: 1, scaleX: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="w-24 h-1.5 bg-primary-gold mt-5 mb-24 rounded-full"
                  style={{ originX: 0.5 }}
                />
              </>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sectionLoading ? (
            renderSkeletonCards()
          ) : sectionError ? (
            <div className="col-span-full text-center p-8 bg-red-50 rounded-lg">
              <h3 className="text-xl font-bold text-red-600 mb-2">
                Error Loading Products
              </h3>
              <p className="text-gray-700">
                {sectionError?.message ||
                  "Failed to load products. Please try again later."}
              </p>
            </div>
          ) : sectionData && sectionData.length > 0 ? (
            sectionData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.2 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden group"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={item.image ? baseUrl + item.image : ""}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 bg-gradient-to-b from-white to-gray-50">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center p-8">
              <p className="text-gray-600">
                No products available at the moment.
              </p>
            </div>
          )}
        </div>

        {/* Main CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex justify-center mt-12"
        >
          <Link
            to="/produk"
            className="px-4 py-2.5 md:px-8 md:py-4 bg-primary-gold text-white rounded-md font-semibold text-lg hover:bg-opacity-90 hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Jelajahi Semua Produk
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
