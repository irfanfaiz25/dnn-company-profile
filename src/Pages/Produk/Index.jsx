import { motion, useScroll, useTransform } from "motion/react";
import Background from "../../assets/img/tobacco-leaf.jpg";
import { useRef, useState } from "react";
import { CircleArrowUp } from "lucide-react";
import { useApi } from "../../hooks/useApi";
import { fetchProductData, fetchProductHeroData } from "../../services/api";

const Produk = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 270]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  const [selectedProduct, setSelectedProduct] = useState(null);
  const detailRefs = useRef([]);

  // Hero section skeleton component
  const HeroSkeleton = () => (
    <div className="w-full h-screen relative animate-pulse">
      <div className="w-full h-full bg-gray-300"></div>
      <div className="w-full h-full absolute top-0 bg-gradient-to-b from-black/80 via-black/50 to-transparent"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl px-4 text-center">
        <div className="h-12 md:h-16 bg-gray-200 rounded-lg mx-auto mb-6 max-w-xl"></div>
        <div className="space-y-3 max-w-2xl mx-auto">
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6 mx-auto"></div>
          <div className="h-4 bg-gray-200 rounded w-4/6 mx-auto"></div>
        </div>
      </div>
    </div>
  );

  // Product card skeleton component
  const ProductCardSkeleton = ({ index }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative animate-pulse"
    >
      <div className="w-full h-[500px] bg-gradient-to-br from-gray-200 via-gray-100 to-gray-50 rounded-3xl relative flex flex-col items-center justify-end pb-20 overflow-hidden">
        <div className="absolute top-2 w-[12rem] h-[12rem] bg-gray-300 rounded-lg"></div>
        <div className="text-center z-10 mt-8 w-full px-6">
          <div className="h-8 bg-gray-300 rounded-lg w-48 mx-auto mb-3"></div>
          <div className="h-4 bg-gray-200 rounded w-32 mx-auto"></div>
        </div>
      </div>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-32 h-10 bg-gray-300 rounded-full"></div>
    </motion.div>
  );

  // Product detail skeleton component
  const ProductDetailSkeleton = ({ index }) => (
    <div className="w-full h-fit xl:h-[700px] bg-white flex items-center justify-center px-4 py-16 md:px-8 xl:px-24 xl:py-0">
      <div
        className={`flex flex-col lg:flex-row ${
          index % 2 === 1 ? "lg:flex-row-reverse" : ""
        } gap-12 max-w-7xl mx-auto animate-pulse`}
      >
        <div className="lg:w-1/2 relative">
          <div className="w-full h-[250px] md:h-[470px] bg-gray-300 rounded-3xl"></div>
        </div>
        <div className="lg:w-1/2 space-y-8">
          <div>
            <div className="h-10 bg-gray-300 rounded-lg w-64 mb-4"></div>
            <div className="flex items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-4">
                <div className="h-8 w-24 bg-gray-200 rounded-full"></div>
                <div className="h-8 w-24 bg-gray-200 rounded-full"></div>
              </div>
              <div className="h-8 w-20 bg-gray-200 rounded-full"></div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="space-y-3">
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              <div className="h-4 bg-gray-200 rounded w-4/6"></div>
            </div>
            <div className="grid grid-cols-2 gap-6 pt-6">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded w-20"></div>
                  <div className="h-5 bg-gray-300 rounded w-full"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Generate skeleton cards
  const renderSkeletonCards = () => {
    return Array(3)
      .fill(0)
      .map((_, index) => (
        <ProductCardSkeleton key={`skeleton-${index}`} index={index} />
      ));
  };

  // Generate skeleton details
  const renderSkeletonDetails = () => {
    return Array(3)
      .fill(0)
      .map((_, index) => (
        <ProductDetailSkeleton key={`detail-skeleton-${index}`} index={index} />
      ));
  };

  const handleProductClick = (productId) => {
    setSelectedProduct(productId);
    const index = productData.findIndex((p) => p.id === productId);
    const targetElement = detailRefs.current[index];

    if (targetElement) {
      const elementPosition = targetElement.getBoundingClientRect().top;
      const startPosition = window.pageYOffset;
      const distance = elementPosition;
      const duration = 2000; // Increased duration (in ms) for slower scroll
      let start = null;

      const animation = (currentTime) => {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const progress = Math.min(timeElapsed / duration, 1);

        // Easing function for smoother animation
        const easeInOutCubic = (progress) => {
          return progress < 0.5
            ? 4 * progress * progress * progress
            : 1 - Math.pow(-2 * progress + 2, 3) / 2;
        };

        window.scrollTo(0, startPosition + distance * easeInOutCubic(progress));

        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      };

      requestAnimationFrame(animation);
    }
  };

  const handleBackToProducts = () => {
    const productsSection = document.querySelector(".products-grid-section");
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: "smooth" });
    }
    setSelectedProduct(null);
  };

  const {
    data: heroData,
    loading: heroLoading,
    error: heroError,
  } = useApi(fetchProductHeroData);

  const {
    data: productData,
    loading: productLoading,
    error: productError,
  } = useApi(fetchProductData);

  const baseUrl = import.meta.env.VITE_BASE_URL;

  return (
    <div className="w-full">
      {/* Hero Section */}
      {heroLoading ? (
        <HeroSkeleton />
      ) : heroError ? (
        <div className="w-full h-screen relative flex items-center justify-center">
          <div className="p-6 bg-red-50 rounded-lg text-center max-w-2xl w-full mx-4">
            <h3 className="text-xl font-bold text-red-600 mb-2">
              Error Loading Content
            </h3>
            <p className="text-gray-700">
              {heroError?.message ||
                "Failed to load hero data. Please try again later."}
            </p>
          </div>
        </div>
      ) : (
        <motion.div
          key="hero-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full h-screen relative"
        >
          <motion.img
            key="hero-image"
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src={heroData?.image ? baseUrl + heroData.image : Background}
            className="w-full h-full object-cover"
            alt="background image"
          />
          <motion.div
            key="hero-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="w-full h-full absolute top-0 bg-gradient-to-b from-black/80 via-black/50 to-transparent"
          />
          <motion.div
            key="hero-content"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            style={{ y, opacity }}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <h1 className="text-2xl md:text-6xl text-gray-50 font-bold font-display text-center">
              {heroData?.title}
            </h1>
            <p className="mt-4 md:mt-2 text-sm/5 md:text-lg/7 text-gray-200 font-normal text-center">
              {heroData?.description}
            </p>
          </motion.div>
        </motion.div>
      )}

      <div className="min-h-screen px-4 py-16 md:px-24 md:py-24 bg-gradient-to-br from-white via-yellow-50 to-primary-gold overflow-hidden relative products-grid-section">
        <div className="flex flex-col items-center">
          <motion.h2
            key="products-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-4xl font-display font-bold text-center text-gray-800"
          >
            Produk Kami
          </motion.h2>
          <motion.div
            key="products-divider"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-24 h-1.5 bg-primary-gold mt-5 mb-24 rounded-full"
            style={{ originX: 0.5 }}
          />
        </div>

        <div className="mt-10 relative">
          {/* Products Grid */}
          {productLoading ? (
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 md:gap-16 w-full px-4 xl:px-24">
              {renderSkeletonCards()}
            </div>
          ) : productError ? (
            <div className="px-4 xl:px-24">
              <div className="p-6 bg-red-50 rounded-lg text-center max-w-3xl mx-auto">
                <h3 className="text-xl font-bold text-red-600 mb-2">
                  Error Loading Products
                </h3>
                <p className="text-gray-700">
                  {productError?.message ||
                    "Failed to load product data. Please try again later."}
                </p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 md:gap-16 w-full px-4 xl:px-24">
              {productData?.map((product, index) => (
                <motion.div
                  key={`product-${product.id}`}
                  className="group relative"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ y: -20 }}
                  onClick={() => handleProductClick(product.id)}
                >
                  <div className="w-full h-[500px] bg-gradient-to-br from-primary-gold/30 via-primary-gold/20 to-transparent backdrop-blur-sm rounded-3xl relative flex flex-col items-center justify-end pb-20 overflow-hidden">
                    <motion.div
                      key={`overlay-${product.id}`}
                      className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    <motion.img
                      key={`pack-${product.id}`}
                      src={product.packImage && baseUrl + product.packImage}
                      alt={product.name}
                      className="absolute top-2 w-[12rem] group-hover:scale-110 transition-transform duration-500"
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.3 }}
                    />
                    <motion.div
                      key={`info-${product.id}`}
                      className="text-center z-10 mt-8"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <h2 className="text-3xl font-bold font-display text-gray-800 group-hover:text-primary-gold transition-colors duration-300">
                        {product.name}
                      </h2>
                      <p className="text-gray-200 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {product.series}
                      </p>
                    </motion.div>
                  </div>

                  <motion.button
                    key={`button-${product.id}`}
                    className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-primary-gold text-gray-50 px-5 py-2.5 rounded-full opacity-100 md:opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleProductClick(product.id)}
                  >
                    Lebih Lanjut
                  </motion.button>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Detail Product */}
      {productLoading
        ? renderSkeletonDetails()
        : productError
        ? null
        : productData?.map((product, index) => (
            <div
              key={`detail-${product.id}`}
              ref={(el) => (detailRefs.current[index] = el)}
              className={`w-full h-fit xl:h-[700px] ${
                selectedProduct === product.id
                  ? "bg-gradient-to-br from-primary-gold via-yellow-100 to-white"
                  : "bg-white"
              } flex items-center justify-center px-4 py-16 md:px-8 xl:px-24 xl:py-0 transition-all duration-500 ${
                selectedProduct === product.id ? "opacity-100" : "opacity-70"
              }`}
            >
              {selectedProduct === product.id && (
                <motion.button
                  key={`back-button-${product.id}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  onClick={handleBackToProducts}
                  className="fixed text-sm md:text-base bottom-2 right-1/4 md:bottom-7 md:right-[37%] lg:bottom-15 xl:bottom-75 lg:right-8 bg-primary-gold text-gray-700 px-6 py-3 rounded-full font-medium shadow-lg hover:scale-105 transition-transform duration-300 flex items-center gap-2 z-50"
                >
                  <CircleArrowUp />
                  Kembali ke Produk
                </motion.button>
              )}
              <motion.div
                key={`detail-content-${product.id}`}
                className={`flex flex-col lg:flex-row ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                } gap-12 max-w-7xl mx-auto`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  key={`detail-image-container-${product.id}`}
                  className="lg:w-1/2 relative group hover:scale-105 transition-transform duration-1000"
                >
                  <motion.img
                    key={`detail-image-${product.id}`}
                    src={product.detailImage && baseUrl + product.detailImage}
                    className="w-full h-[250px] md:h-[470px] object-cover rounded-3xl shadow-2xl"
                    alt={`${product.name} Detail`}
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </motion.div>

                <div className="lg:w-1/2 space-y-8">
                  <motion.div
                    key={`detail-header-${product.id}`}
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    <h1 className="text-3xl md:text-5xl font-bold font-display text-gray-800 mb-2 md:mb-4">
                      {product.name}
                    </h1>
                    <div className="flex items-center justify-between gap-2 md:gap-4 mb-6">
                      <div className="flex items-center gap-2 md:gap-4">
                        <span className="text-xs md:text-base px-4 py-1.5 bg-amber-600/50 text-amber-700 rounded-full font-medium shadow-md">
                          {product.series}
                        </span>
                        <span className="text-xs md:text-base px-4 py-1.5 bg-gray-100 text-gray-600 rounded-full font-medium shadow-md">
                          {product.stock ? "Dalam Stok" : "Habis"}
                        </span>
                      </div>
                      <button
                        key={`order-button-${product.id}`}
                        className="text-xs md:text-base px-6 py-1.5 bg-secondary-green hover:bg-secondary-green/90 text-gray-50 rounded-full font-medium shadow-md"
                        onClick={(e) => {
                          e.stopPropagation();
                          const message = `Halo, saya ingin memesan produk ${product.name}. Mohon informasi lebih lanjut.`;
                          const encodedMessage = encodeURIComponent(message);
                          const whatsappUrl = `https://wa.me/+6285339462767?text=${encodedMessage}`;
                          window.open(whatsappUrl, "_blank");
                        }}
                      >
                        Order
                      </button>
                    </div>
                  </motion.div>

                  <motion.div
                    key={`detail-info-${product.id}`}
                    className="space-y-6"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <p className="text-sm/5 md:text-lg/8 font-normal text-gray-600">
                      {product.description}
                    </p>

                    <div className="grid grid-cols-2 gap-6 pt-6">
                      {[
                        { label: "RACIKAN", value: product.racikan },
                        { label: "KARAKTER", value: product.karakter },
                        { label: "REMPAH", value: product.rempah },
                        { label: "KEMASAN", value: product.kemasan },
                      ].map((item, i) => (
                        <div
                          key={`${product.id}-${item.label}`}
                          className="space-y-2"
                        >
                          <h3 className="text-gray-400 text-sm font-medium">
                            {item.label}
                          </h3>
                          <p className="text-gray-800 font-medium text-sm md:text-base">
                            {item.value}
                          </p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          ))}
    </div>
  );
};

export default Produk;
