import { motion } from "motion/react";
import { Link } from "react-router";
import { fetchAboutData } from "../../services/api";
import { useApi } from "../../hooks/useApi";

const AboutUs = () => {
  const { data, loading, error } = useApi(fetchAboutData);
  const baseUrl = import.meta.env.VITE_BASE_URL;

  const aboutData = data && data.length > 0 ? data[0] : [];

  // Skeleton loader component
  const SkeletonLoader = () => (
    <div className="flex flex-col-reverse md:flex-row items-center gap-12 animate-pulse">
      <div className="md:w-1/2">
        <div className="h-12 bg-gray-200 rounded-lg w-3/4 mb-8"></div>
        <div className="h-4 bg-gray-200 rounded w-full mb-3"></div>
        <div className="h-4 bg-gray-200 rounded w-full mb-3"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6 mb-3"></div>
        <div className="h-4 bg-gray-200 rounded w-4/6 mb-6"></div>
        <div className="h-10 bg-gray-200 rounded-md w-40"></div>
      </div>
      <div className="md:w-1/2">
        <div className="relative h-[450px] rounded-lg overflow-hidden bg-gray-200">
          <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-gray-300 via-gray-200 to-transparent">
            <div className="h-6 bg-gray-300 rounded w-3/4"></div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-white min-h-screen flex flex-col justify-center">
      <div className="container mx-auto px-4 py-16 lg:px-24 lg:py-24">
        {loading ? (
          <SkeletonLoader />
        ) : error ? (
          <div className="text-center p-8 bg-red-50 rounded-lg">
            <h3 className="text-xl font-bold text-red-600 mb-2">
              Error Loading Content
            </h3>
            <p className="text-gray-700">
              {error?.message ||
                "Failed to load about section. Please try again later."}
            </p>
          </div>
        ) : (
          <div className="flex flex-col-reverse md:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-800 mb-8">
                {aboutData?.title}
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-gray-600 mb-6">
                {aboutData?.description}
              </p>
              <Link
                to="/sejarah"
                className="inline-block text-sm md:text-base px-8 py-3 bg-primary-gold text-white rounded-md font-semibold hover:bg-opacity-90 transform hover:scale-105 transition-all duration-300"
              >
                Lebih Lanjut
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2"
            >
              <div className="relative h-[450px] rounded-lg overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                <img
                  src={aboutData?.image ? baseUrl + aboutData.image : ""}
                  alt={aboutData?.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/60"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 via-black/50 to-transparent backdrop-blur-[2px]">
                  <p className="text-white text-lg font-medium leading-relaxed tracking-wide drop-shadow-lg transform hover:translate-x-2 transition-transform duration-300">
                    "{aboutData?.content}"
                  </p>
                </div>
                <div className="absolute inset-0 ring-1 ring-white/10"></div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutUs;
