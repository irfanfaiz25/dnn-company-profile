import Achievements from "./Achievements";
import Branches from "./Branches";
import Testimonials from "./Testimonials";
import TeamImage from "../../assets/img/teams.jpeg";
import { motion } from "motion/react";
import { useRef } from "react";
import { useApi } from "../../hooks/useApi";
import { fetchTimHeroData } from "../../services/api";

const TimManajemen = () => {
  const achievementsRef = useRef(null);

  const scrollToAchievements = () => {
    achievementsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const { data, loading, error } = useApi(fetchTimHeroData);
  const baseUrl = import.meta.env.VITE_BASE_URL;

  // Hero section skeleton component
  const HeroSkeleton = () => (
    <div className="w-full min-h-screen relative overflow-hidden flex flex-col justify-end items-center">
      <div className="absolute inset-0 z-0 bg-gray-300 animate-pulse"></div>

      <div className="container mx-auto px-4 md:px-0 lg:px-14 h-full flex flex-col items-center justify-center relative z-10 py-20">
        <div className="md:w-1/2 text-center mb-12 md:mb-0 animate-pulse">
          <div className="h-1.5 bg-gray-400 mb-6 rounded-full mx-auto w-20"></div>
          <div className="h-12 bg-gray-400 mb-4 rounded-lg mx-auto"></div>
          <div className="h-12 bg-gray-400 mb-6 rounded-lg mx-auto"></div>
          <div className="space-y-3 max-w-xl mx-auto">
            <div className="h-4 bg-gray-400 rounded w-full"></div>
            <div className="h-4 bg-gray-400 rounded w-5/6 mx-auto"></div>
            <div className="h-4 bg-gray-400 rounded w-4/6 mx-auto"></div>
          </div>
          <div className="h-12 w-40 bg-gray-400 rounded-full mx-auto mt-8"></div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full h-full">
      {/* Hero Section with Skeleton Loader */}
      {loading ? (
        <HeroSkeleton />
      ) : error ? (
        <div className="w-full min-h-screen flex items-center justify-center bg-gray-100">
          <div className="max-w-md p-8 bg-white rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold text-red-600 mb-4">
              Error Loading Content
            </h2>
            <p className="text-gray-700 mb-6">
              {error?.message ||
                "Failed to load team management data. Please try again later."}
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2 bg-primary-gold text-white font-medium rounded-full hover:bg-primary-gold/90 transition-all duration-300"
            >
              Retry
            </button>
          </div>
        </div>
      ) : (
        <motion.div
          className="w-full min-h-screen relative overflow-hidden flex flex-col justify-end items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Background Image with Overlay */}
          <motion.div
            className="absolute inset-0 z-0"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <img
              src={data?.image ? baseUrl + data?.image : TeamImage}
              alt="Team Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60" />
          </motion.div>

          {/* Content Container */}
          <div className="container mx-auto px-4 md:px-0 lg:px-14 h-full flex flex-col items-center justify-center relative z-10 py-20">
            {/* Text Content */}
            <motion.div
              className="md:w-1/2 text-center mb-12 md:mb-0"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "80px" }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="h-1.5 bg-primary-gold mb-6 rounded-full mx-auto"
              />
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
                {data?.title?.split(" ").map((word, index, array) => (
                  <span
                    key={index}
                    className={index === 1 ? "text-primary-gold" : "text-white"}
                  >
                    {word}
                    {index < array.length - 1 ? " " : ""}
                  </span>
                ))}
              </h1>
              <p className="text-lg md:text-xl text-gray-200 max-w-xl mb-8 mx-auto">
                Kami adalah tim yang berdedikasi untuk memberikan produk
                berkualitas tinggi dengan standar layanan terbaik untuk kepuasan
                pelanggan.
              </p>
              <motion.button
                onClick={scrollToAchievements}
                className="px-8 py-3 bg-primary-gold text-white font-medium rounded-full hover:bg-primary-gold/90 transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Kenali Kami
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      )}

      <div className="bg-white overflow-hidden">
        {/* Achievements Display */}
        <div ref={achievementsRef}>
          <Achievements />
        </div>

        {/* Branches Display */}
        <Branches />
      </div>

      {/* Testimonials Display */}
      <Testimonials />
    </div>
  );
};

export default TimManajemen;
