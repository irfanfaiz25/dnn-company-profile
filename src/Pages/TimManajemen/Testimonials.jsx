import { motion } from "motion/react";
import Profile1 from "../../assets/img/profil1.png";
import { MessageSquareQuote } from "lucide-react";
import { useApi } from "../../hooks/useApi";
import {
  fetchTimTestimonialData,
  fetchTimTestimonialHeadlineData,
} from "../../services/api";

const Testimonials = () => {
  const {
    data: headlineData,
    loading: headlineLoading,
    error: headlineError,
  } = useApi(fetchTimTestimonialHeadlineData);

  const {
    data: testimonialData,
    loading: testimonialLoading,
    error: testimonialError,
  } = useApi(fetchTimTestimonialData);

  const baseUrl = import.meta.env.VITE_BASE_URL;

  // Headline skeleton component
  const HeadlineSkeleton = () => (
    <div className="flex flex-col items-center animate-pulse">
      <div className="h-10 bg-gray-200 rounded-lg w-64 mb-5"></div>
      <div className="w-24 h-1.5 bg-gray-200 rounded-full mb-8"></div>
      <div className="space-y-3 max-w-2xl w-full">
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6 mx-auto"></div>
        <div className="h-4 bg-gray-200 rounded w-4/6 mx-auto"></div>
      </div>
    </div>
  );

  // Testimonial card skeleton component
  const TestimonialCardSkeleton = ({ index }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="bg-white p-6 md:p-8 rounded-2xl shadow-lg relative animate-pulse"
    >
      <div className="absolute top-6 right-6 w-10 h-10 bg-gray-200 rounded"></div>

      <div className="flex items-start mb-6">
        <div className="relative">
          <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gray-200"></div>
          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gray-300 rounded-full"></div>
        </div>
        <div className="ml-4">
          <div className="h-5 bg-gray-200 rounded w-32 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-40"></div>
        </div>
      </div>

      <div className="space-y-3">
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <div className="h-3 bg-gray-200 rounded w-20"></div>
        <div className="flex space-x-1">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-4 h-4 bg-gray-200 rounded-full"></div>
          ))}
        </div>
      </div>
    </motion.div>
  );

  // Generate skeleton cards
  const renderSkeletonCards = () => {
    return Array(3)
      .fill(0)
      .map((_, index) => (
        <TestimonialCardSkeleton key={`skeleton-${index}`} index={index} />
      ));
  };

  return (
    <div className="mx-auto min-h-screen px-4 md:px-6 xl:px-24 py-16 md:py-24 bg-gradient-to-t from-primary-gold via-amber-100 to-white">
      {/* Headline Section */}
      {headlineLoading ? (
        <HeadlineSkeleton />
      ) : headlineError ? (
        <div className="flex flex-col items-center">
          <div className="p-6 bg-red-50 rounded-lg text-center max-w-2xl w-full">
            <h3 className="text-xl font-bold text-red-600 mb-2">
              Error Loading Content
            </h3>
            <p className="text-gray-700">
              {headlineError?.message ||
                "Failed to load headline data. Please try again later."}
            </p>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-4xl font-display font-bold text-center text-gray-800"
          >
            {headlineData?.title}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-24 h-1.5 bg-primary-gold mt-5 mb-8 rounded-full"
            style={{ originX: 0.5 }}
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center text-gray-600 max-w-2xl mb-10 md:mb-16 px-4"
          >
            {headlineData?.subtitle}
          </motion.p>
        </div>
      )}

      <div className="relative">
        {/* Decorative elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute -top-6 left-10 w-20 h-20 bg-primary-gold/10 rounded-full blur-xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute bottom-10 right-10 w-32 h-32 bg-primary-gold/20 rounded-full blur-xl"
        />

        {/* Testimonial Cards */}
        {testimonialLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 relative z-10">
            {renderSkeletonCards()}
          </div>
        ) : testimonialError ? (
          <div className="relative z-10">
            <div className="p-6 bg-red-50 rounded-lg text-center max-w-3xl mx-auto">
              <h3 className="text-xl font-bold text-red-600 mb-2">
                Error Loading Testimonials
              </h3>
              <p className="text-gray-700">
                {testimonialError?.message ||
                  "Failed to load testimonial data. Please try again later."}
              </p>
            </div>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, staggerChildren: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 relative z-10"
          >
            {testimonialData?.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{
                  scale: 1.02,
                  y: -8,
                  transition: { duration: 0.3 },
                }}
                className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group relative"
              >
                <MessageSquareQuote
                  size={40}
                  className="absolute top-6 right-6 text-primary-gold/10 group-hover:text-primary-gold/20 transition-colors duration-300"
                />

                <motion.div
                  className="flex items-start mb-6"
                  initial={{ x: -20 }}
                  whileInView={{ x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.3 }}
                >
                  <div className="relative">
                    {testimonial.image ? (
                      <motion.div
                        className="w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-primary-gold"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <img
                          src={
                            testimonial.image
                              ? baseUrl + testimonial.image
                              : Profile1
                          }
                          alt={testimonial.name}
                          className="w-full h-full object-contain"
                        />
                      </motion.div>
                    ) : (
                      <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center bg-primary-gold/10 rounded-full mr-4 border-2 border-primary-gold">
                        <span className="text-xl font-semibold text-primary-gold">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                    )}
                    <motion.div
                      className="absolute -bottom-2 -right-2 bg-primary-gold text-white p-2 rounded-full"
                      whileHover={{ rotate: 180 }}
                      transition={{ duration: 0.3 }}
                    >
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
                      </svg>
                    </motion.div>
                  </div>
                  <div className="ml-4">
                    <motion.h3
                      className="text-lg font-semibold text-gray-800 group-hover:text-primary-gold transition-colors"
                      whileHover={{ scale: 1.05 }}
                    >
                      {testimonial.name}
                    </motion.h3>
                    <p className="text-sm text-gray-600">
                      {testimonial.position}
                    </p>
                  </div>
                </motion.div>
                <motion.p
                  className="text-gray-700 leading-relaxed text-sm md:text-base"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.4 }}
                >
                  {testimonial.message}
                </motion.p>
                <motion.div
                  className="mt-6 flex items-center justify-between"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.5 }}
                >
                  <p className="text-xs md:text-sm text-gray-500">
                    {testimonial.date}
                  </p>
                  <div className="flex text-primary-gold">
                    {[...Array(5)].map((_, i) => (
                      <motion.svg
                        key={i}
                        className="w-3 h-3 md:w-4 md:h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                        whileHover={{ scale: 1.2, rotate: 180 }}
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </motion.svg>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Testimonials;
