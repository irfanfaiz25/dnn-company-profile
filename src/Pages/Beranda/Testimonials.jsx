import { motion } from "motion/react";
import { useState, useEffect, useRef } from "react";

const Testimonials = () => {
  // Initialize state with data from localStorage or default data
  const [testimonialsData, setTestimonialsData] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    testimonial: "",
  });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef(null);
  const autoSlideTimerRef = useRef(null);

  // Load testimonials from localStorage on component mount
  useEffect(() => {
    const storedTestimonials = localStorage.getItem("testimonials");
    if (storedTestimonials) {
      setTestimonialsData(JSON.parse(storedTestimonials));
    } else {
      // Default testimonials if none in localStorage
      const defaultTestimonials = [
        {
          id: 1,
          name: "Hendra Wijaya",
          location: "Malang",
          testimonial:
            "Aroma tembakau yang khas dan berkualitas tinggi. Setiap hisapan memberikan sensasi yang menenangkan dan memuaskan.",
        },
        {
          id: 2,
          name: "Rudi Hartono",
          location: "Kudus",
          testimonial:
            "Tembakau pilihan dengan cita rasa yang konsisten. Perpaduan sempurna antara tradisi dan kualitas modern.",
        },
        {
          id: 3,
          name: "Bambang Suryanto",
          location: "Temanggung",
          testimonial:
            "Produk tembakau terbaik yang pernah saya coba. Karakteristik rasa yang kuat dan aroma yang memukau.",
        },
      ];
      setTestimonialsData(defaultTestimonials);
      localStorage.setItem("testimonials", JSON.stringify(defaultTestimonials));
    }
  }, []);

  // Auto-slide functionality
  useEffect(() => {
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
  }, [testimonialsData, isPaused, currentIndex]);

  // Handle form input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create new testimonial with unique ID
    const newTestimonial = {
      id: Date.now(), // Use timestamp as unique ID
      name: formData.name,
      location: formData.location,
      testimonial: formData.testimonial,
    };

    // Update state with new testimonial
    const updatedTestimonials = [...testimonialsData, newTestimonial];
    setTestimonialsData(updatedTestimonials);

    // Save to localStorage
    localStorage.setItem("testimonials", JSON.stringify(updatedTestimonials));

    // Reset form
    setFormData({
      name: "",
      location: "",
      testimonial: "",
    });
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
  const maxIndex = Math.max(0, testimonialsData.length - visibleCount);

  // Navigation functions
  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="bg-gradient-to-t from-primary-gold via-yellow-100 to-white px-4 py-16 lg:px-24 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl md:text-4xl lg:text-5xl font-display font-bold text-center text-gray-800 mb-4"
          >
            Tentang Revolusi Rasa
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-gray-600 text-base md:text-lg text-center md:text-start"
          >
            Pengalaman Autentik dari Para Penikmat Nusantara
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-24 h-1.5 bg-primary-gold mt-5 mb-24 rounded-full"
            style={{ originX: 0.5 }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto mb-16 p-6 bg-white rounded-xl shadow-lg"
        >
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
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-primary-gold text-white py-2.5 px-4 rounded-md hover:bg-primary-gold/90 transition-colors duration-300"
              type="submit"
            >
              Kirim Testimonial
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
          {testimonialsData.length > visibleCount && (
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
                        <p className="text-gray-500">{item.location}</p>
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
          </div>

          {/* Pagination Indicators */}
          {testimonialsData.length > visibleCount && (
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
