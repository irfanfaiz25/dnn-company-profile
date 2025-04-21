import { motion } from "motion/react";
import { useState, useEffect, useRef } from "react";
import { useApi } from "../../hooks/useApi";
import {
  fetchUserTestimonialData,
  fetchUserTestimonialHeadlineData,
  submitTestimonial,
} from "../../services/api";

const Testimonials = () => {
  // Initialize state with data from localStorage or default data
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    testimonial: "",
  });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const carouselRef = useRef(null);
  const autoSlideTimerRef = useRef(null);

  const {
    data: headlineData,
    loading: headlineLoading,
    error: headlineError,
  } = useApi(fetchUserTestimonialHeadlineData);
  const {
    data: testimonialsData = [],
    loading: testimonialsLoading,
    error: testimonialsError,
    refetch: refetchTestimonials,
  } = useApi(fetchUserTestimonialData);

  // Auto-slide functionality
  useEffect(() => {
    if (!testimonialsData || testimonialsLoading) return;

    const visibleCount = getVisibleCount();
    const maxIndex = Math.max(0, testimonialsData.length - visibleCount);

    // Only set up auto-slide if we have more testimonials than visible count
    if (testimonialsData.length > visibleCount) {
      // Clear any existing timer
      if (autoSlideTimerRef.current) {
        clearInterval(autoSlideTimerRef.current);
      }

      // Set up new timer if not paused
      if (!isPaused) {
        autoSlideTimerRef.current = setInterval(() => {
          setCurrentIndex((prevIndex) => {
            // Loop back to start when reaching the end
            return prevIndex >= maxIndex ? 0 : prevIndex + 1;
          });
        }, 5000); // 5 seconds interval
      }
    }

    // Cleanup on unmount
    return () => {
      if (autoSlideTimerRef.current) {
        clearInterval(autoSlideTimerRef.current);
      }
    };
  }, [testimonialsData, isPaused, currentIndex, testimonialsLoading]);

  // Handle form input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });

    // Clear any previous submission messages when user starts typing again
    if (submitSuccess) setSubmitSuccess(false);
    if (submitError) setSubmitError(null);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(false);

    try {
      // Prepare the data for submission
      const testimonialData = {
        name: formData.name,
        city: formData.location, // Map location to city for the API
        testimonial: formData.testimonial,
      };

      // Submit the testimonial
      await submitTestimonial(testimonialData);

      // Reset form on success
      setFormData({
        name: "",
        location: "",
        testimonial: "",
      });

      // Show success message
      setSubmitSuccess(true);

      // Refetch testimonials to include the new one
      refetchTestimonials();
    } catch (error) {
      // Handle submission error
      setSubmitError(
        error.message || "Failed to submit testimonial. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // Calculate how many testimonials to show based on screen size
  const getVisibleCount = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1024) return 3; // lg screens
      if (window.innerWidth >= 768) return 2; // md screens
      return 1; // sm screens
    }
    return 3; // Default for SSR
  };

  const visibleCount = getVisibleCount();
  const maxIndex = testimonialsData
    ? Math.max(0, testimonialsData.length - visibleCount)
    : 0;

  // Navigation functions
  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  // Testimonial card skeleton component
  const TestimonialCardSkeleton = ({ index }) => (
    <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 p-4 animate-pulse">
      <div className="bg-white p-6 rounded-lg shadow-lg h-full">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
          <div>
            <div className="h-4 bg-gray-200 rounded w-24 mb-2"></div>
            <div className="h-3 bg-gray-200 rounded w-16"></div>
          </div>
        </div>
        <div className="space-y-2">
          <div className="h-3 bg-gray-200 rounded w-full"></div>
          <div className="h-3 bg-gray-200 rounded w-full"></div>
          <div className="h-3 bg-gray-200 rounded w-5/6"></div>
        </div>
      </div>
    </div>
  );

  // Generate skeleton cards
  const renderSkeletonCards = () => {
    return Array(visibleCount * 2)
      .fill(0)
      .map((_, index) => (
        <TestimonialCardSkeleton key={`skeleton-${index}`} index={index} />
      ));
  };

  return (
    <div className="bg-gradient-to-t from-primary-gold via-yellow-100 to-white px-4 py-16 lg:px-24 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          {headlineLoading ? (
            <div className="animate-pulse space-y-4 w-full max-w-2xl">
              <div className="h-8 bg-gray-200 rounded-lg w-3/4 mx-auto"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
              <div className="w-24 h-1.5 bg-gray-200 mt-5 mb-24 rounded-full mx-auto"></div>
            </div>
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
                {headlineData?.title || "Tentang Revolusi Rasa"}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-gray-600 text-base md:text-lg text-center md:text-start"
              >
                {headlineData?.subtitle ||
                  "Pengalaman Autentik dari Para Penikmat Nusantara"}
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto mb-16 p-6 bg-white rounded-xl shadow-lg"
        >
          {submitSuccess && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-md">
              <p className="text-green-700 font-medium">
                Terima kasih! Testimonial Anda telah berhasil dikirim.
              </p>
            </div>
          )}

          {submitError && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md">
              <p className="text-red-700 font-medium">{submitError}</p>
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-700"
              >
                Nama
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-primary-gold focus:border-primary-gold focus:outline-primary-gold"
                placeholder="Masukkan nama Anda"
                required
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label
                htmlFor="location"
                className="block text-sm font-semibold text-gray-700"
              >
                Kota
              </label>
              <input
                type="text"
                id="location"
                value={formData.location}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-primary-gold focus:border-primary-gold focus:outline-primary-gold"
                placeholder="Masukkan kota Anda"
                required
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label
                htmlFor="testimonial"
                className="block text-sm font-semibold text-gray-700"
              >
                Testimonial
              </label>
              <textarea
                id="testimonial"
                rows={4}
                value={formData.testimonial}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-primary-gold focus:border-primary-gold focus:outline-primary-gold resize-none"
                placeholder="Bagikan pengalaman Anda dengan produk kami"
                required
                disabled={isSubmitting}
              />
            </div>

            <motion.button
              whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              className={`w-full ${
                isSubmitting ? "bg-primary-gold/70" : "bg-primary-gold"
              } text-white py-2.5 px-4 rounded-md hover:bg-primary-gold/90 transition-colors duration-300 flex justify-center items-center`}
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Mengirim...
                </>
              ) : (
                "Kirim Testimonial"
              )}
            </motion.button>
          </form>
        </motion.div>

        {/* Testimonials Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Carousel Navigation Buttons */}
          {!testimonialsLoading &&
            testimonialsData &&
            testimonialsData.length > visibleCount && (
              <>
                <button
                  onClick={prevSlide}
                  disabled={currentIndex === 0}
                  className={`absolute -left-7 md:-left-10 top-[45%] -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md ${
                    currentIndex === 0
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-gray-100"
                  }`}
                  aria-label="Previous testimonials"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary-gold"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  onClick={nextSlide}
                  disabled={currentIndex === maxIndex}
                  className={`absolute -right-7 md:-right-10 top-[45%] -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md ${
                    currentIndex === maxIndex
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-gray-100"
                  }`}
                  aria-label="Next testimonials"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary-gold"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </>
            )}

          {/* Carousel Container */}
          <div className="overflow-hidden">
            {testimonialsLoading ? (
              <div className="flex">{renderSkeletonCards()}</div>
            ) : testimonialsError ? (
              <div className="text-center p-8 bg-red-50 rounded-lg">
                <h3 className="text-xl font-bold text-red-600 mb-2">
                  Error Loading Testimonials
                </h3>
                <p className="text-gray-700">
                  {testimonialsError?.message ||
                    "Failed to load testimonials. Please try again later."}
                </p>
              </div>
            ) : testimonialsData && testimonialsData.length > 0 ? (
              <motion.div
                ref={carouselRef}
                className="flex transition-all duration-500 ease-in-out"
                animate={{
                  x: `-${currentIndex * (100 / visibleCount)}%`,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {testimonialsData.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.1,
                      ease: "easeOut",
                    }}
                    viewport={{ once: true }}
                    className={`flex-shrink-0 w-full md:w-1/2 lg:w-1/3 p-4`}
                  >
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                      <motion.div
                        className="flex items-center mb-4"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                      >
                        <div className="w-12 h-12 flex items-center justify-center bg-primary-gold/10 rounded-full mr-4">
                          <span className="text-xl font-semibold text-primary-gold">
                            {item.name.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <h4 className="font-semibold">{item.name}</h4>
                          <p className="text-gray-500">
                            {item.city || item.location}
                          </p>
                        </div>
                      </motion.div>
                      <motion.p
                        className="text-gray-600"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.4, delay: index * 0.1 + 0.5 }}
                      >
                        {item.testimonial}
                      </motion.p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <div className="text-center p-8">
                <p className="text-gray-600">
                  No testimonials available at the moment.
                </p>
              </div>
            )}
          </div>

          {/* Pagination Indicators */}
          {!testimonialsLoading &&
            testimonialsData &&
            testimonialsData.length > visibleCount && (
              <div className="flex justify-center mt-6 space-x-2">
                {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 w-2 rounded-full transition-all ${
                      currentIndex === index
                        ? "bg-primary-gold w-4"
                        : "bg-gray-300"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
