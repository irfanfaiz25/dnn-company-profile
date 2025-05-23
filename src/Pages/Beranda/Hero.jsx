import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import Picture1 from "../../assets/img/picture1.jpg";
import Picture2 from "../../assets/img/picture2.jpg";
import Picture3 from "../../assets/img/picture3.jpg";
import { useApi } from "../../hooks/useApi";
import { fetchHeroData } from "../../services/api";

const Hero = () => {
  const containerRef = useRef(null);
  const [currentImage, setCurrentImage] = useState(0);

  const { data, loading, error } = useApi(fetchHeroData);
  const baseUrl = import.meta.env.VITE_BASE_URL;

  // Default carousel data as fallback
  const defaultImagesCarousel = [
    {
      id: 1,
      image: Picture1,
      title: "Bergerak Maju Menang",
      description:
        "Melangkah dengan tekad kuat menuju kesuksesan, menghadirkan produk tembakau berkualitas tinggi untuk Indonesia.",
    },
    {
      id: 2,
      image: Picture2,
      title: "Revolusi Rasa",
      description:
        "Perpaduan sempurna antara tembakau pilihan dan rempah nusantara menciptakan sensasi rasa yang tak tertandingi.",
    },
    {
      id: 3,
      image: Picture3,
      title: "Pusaka Warisan Nusantara",
      description:
        "Melestarikan warisan leluhur melalui racikan tembakau dan rempah tradisional yang telah terjaga keasliannya selama generasi.",
    },
  ];

  // Determine which data to use - API data or fallback
  const carouselData = data && data.length > 0 ? data : defaultImagesCarousel;

  // Auto slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % carouselData.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [carouselData.length]);

  // Loading overlay component
  const LoadingOverlay = () => (
    <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="flex flex-col items-center">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary-gold border-t-transparent"></div>
        <p className="mt-4 text-white">Loading content...</p>
      </div>
    </div>
  );

  // Error overlay component
  const ErrorOverlay = () => (
    <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="max-w-md rounded-lg bg-white p-6 text-center shadow-lg">
        <h3 className="mb-2 text-xl font-bold text-red-600">
          Error Loading Content
        </h3>
        <p className="mb-4 text-gray-700">
          {error?.message ||
            "Failed to load hero content. Please try again later."}
        </p>
        <button
          onClick={() => window.location.reload()}
          className="rounded bg-primary-gold px-4 py-2 text-white hover:bg-amber-600"
        >
          Refresh Page
        </button>
      </div>
    </div>
  );

  return (
    <div
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Show loading overlay while fetching data */}
      {loading && <LoadingOverlay />}

      {/* Show error overlay if there's an error */}
      {error && <ErrorOverlay />}

      {/* Render carousel items */}
      {carouselData.map((item, index) => (
        <motion.div
          key={item.id}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{
            opacity: currentImage === index ? 1 : 0,
            scale: currentImage === index ? 1 : 1.2,
          }}
          transition={{
            opacity: { duration: 1, ease: "easeInOut" },
            scale: { duration: 6, ease: "easeOut" },
          }}
        >
          <img
            src={data && data.length > 0 ? baseUrl + item.image : item.image}
            alt={item.title}
            className="h-full w-full object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                defaultImagesCarousel[
                  index % defaultImagesCarousel.length
                ].image;
            }}
          />
          <div className="absolute inset-0 bg-black/60" />
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center px-4 text-white"
            initial={{ y: 20, opacity: 0 }}
            animate={{
              y: currentImage === index ? 0 : 20,
              opacity: currentImage === index ? 1 : 0,
            }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.8 }}
              className="py-4 text-3xl md:text-4xl lg:text-5xl font-bold font-display text-center bg-clip-text text-transparent bg-gradient-to-r from-amber-200 via-primary-gold to-amber-100 bg-[length:200%_auto] animate-[var(--animate-shine)] transition-[background-position] ease-[var(--bounce-in)]"
            >
              {item.title}
            </motion.h1>
            <p className="max-w-3xl text-center text-base md:text-lg lg:text-xl">
              {item.description}
            </p>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default Hero;
