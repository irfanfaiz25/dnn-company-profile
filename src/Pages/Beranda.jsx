import { motion, useScroll, useTransform } from "motion/react";
import Picture1 from "../assets/img/picture1.jpg";
import Picture2 from "../assets/img/picture2.jpg";
import Picture3 from "../assets/img/picture3.jpg";
import Picture4 from "../assets/img/picture4.jpg";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { Posts } from "../assets/data/Posts";
import { ChevronRight } from "lucide-react";

const Beranda = () => {
  const containerRef = useRef(null);
  const limitText = (text, limit) => {
    if (text.length > limit) {
      return text.substring(0, limit) + "...";
    } else {
      return text;
    }
  };

  const [currentImage, setCurrentImage] = useState(0);
  const imagesCarousel = [
    {
      id: 1,
      image: Picture1,
      title: "Rokok Kretek Premium",
      description:
        "Nikmati sensasi rokok kretek premium dengan campuran tembakau pilihan dan cengkeh berkualitas tinggi.",
    },
    {
      id: 2,
      image: Picture2,
      title: "Tembakau Asli Nusantara",
      description:
        "Tembakau pilihan dari berbagai daerah di Nusantara, diproses dengan standar kualitas terbaik.",
    },
    {
      id: 3,
      image: Picture3,
      title: "Racikan Spesial",
      description:
        "Perpaduan sempurna antara tembakau premium dan rempah khas Indonesia untuk pengalaman merokok yang istimewa.",
    },
    {
      id: 4,
      image: Picture4,
      title: "Tradisi dan Inovasi",
      description:
        "Menggabungkan kearifan lokal dengan teknologi modern dalam setiap produk tembakau kami.",
    },
  ];

  // Auto slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % imagesCarousel.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  // Track scroll progress for the entire component
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Values for the transitioning image
  const imageWidth = useTransform(scrollYProgress, [0, 0.3], ["70%", "90%"]); // wider initial width
  const imageHeight = useTransform(
    scrollYProgress,
    [0, 0.3],
    ["27px", "40rem"] // reduced initial height
  );
  const imageY = useTransform(scrollYProgress, [0, 0.3], ["44vh", "20vh"]); // moved down from top
  const imageX = useTransform(scrollYProgress, [0, 0.3], ["0%", "0%"]);
  const imageScale = useTransform(scrollYProgress, [0, 0.3], [1, 1]);

  const captionOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);

  // Header section opacity (fade out as we scroll)
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <>
      <div
        ref={containerRef}
        className="relative min-h-[200vh] section-background"
      >
        <div className="sticky top-0 min-h-screen overflow-hidden">
          {/* Header content with initial animations */}
          <motion.div
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute top-15 left-0 w-full pt-20"
            style={{ opacity: headerOpacity }}
          >
            <div className="mx-auto text-center">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-wrap mx-auto tracking-tight drop-shadow-lg hover:scale-105 transition-transform duration-300"
              >
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    type: "spring",
                    stiffness: 100,
                    delay: 0.2,
                  }}
                  className="text-6xl/19 text-gray-800 font-display font-bold"
                >
                  Bukan Sekedar{" "}
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                    className="text-secondary-green"
                  >
                    Kenikmatan
                  </motion.span>
                  ,
                </motion.h1>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    type: "spring",
                    stiffness: 100,
                    delay: 0.6,
                  }}
                  className="text-6xl/19 text-gray-800 font-display font-bold"
                >
                  Ini adalah{" "}
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.8 }}
                    className="bg-clip-text text-transparent bg-gradient-to-r from-gray-800 via-primary-gold to-gray-800 bg-[length:200%_auto] animate-[var(--animate-shine)] transition-[background-position] ease-[var(--bounce-in)]"
                  >
                    Revolusi Rasa
                  </motion.span>
                  .
                </motion.h1>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="mt-6 text-wrap mx-auto"
              >
                <p className="text-xl/7 text-gray-700 font-sans font-normal hover:text-gray-900 transition-colors duration-300">
                  Kami menantang batas, meracik harmoni rasa yang memukau dari
                  kekayaan rempah nusantara.
                </p>
                <p className="text-xl/7 text-gray-700 font-sans font-normal hover:text-gray-900 transition-colors duration-300">
                  Nusantara - bagi mereka yang berani mengejar yang tak biasa,
                  menghadirkan sensasi autentik yang menggetarkan jiwa.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Transitioning Image - This is the key component that grows and moves */}
          <div className="absolute w-full flex justify-center">
            <motion.div
              className="relative rounded-md overflow-hidden"
              style={{
                width: imageWidth,
                height: imageHeight,
                y: imageY,
                x: imageX,
                scale: imageScale,
                zIndex: 20,
                transition: { type: "spring", stiffness: 300, damping: 30 },
              }}
            >
              <div className="relative w-full h-full">
                {imagesCarousel.map((img, index) => (
                  <motion.div
                    key={index}
                    className="absolute w-full h-full"
                    initial={{ opacity: 0, x: "100%" }}
                    animate={{
                      opacity: currentImage === index ? 1 : 0,
                      x: currentImage === index ? "0%" : "-100%",
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <img
                      src={img.image}
                      alt={`Slide ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}

                {/* Carousel Navigation */}
                <div className="absolute bottom-28 left-0 right-0 flex justify-center gap-2 z-30">
                  {imagesCarousel.map((_, index) => (
                    <button
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all ${
                        currentImage === index ? "bg-white w-4" : "bg-white/50"
                      }`}
                      onClick={() => setCurrentImage(index)}
                    />
                  ))}
                </div>
              </div>

              {/* Existing caption */}
              <motion.div
                className="absolute bottom-0 w-full h-24 p-3 bg-black/50 rounded-b-md"
                style={{ opacity: captionOpacity }}
              >
                <h3 className="text-lg text-gray-50 font-semibold">
                  {imagesCarousel[currentImage].title}
                </h3>
                <p className="text-base font-normal text-gray-200">
                  {imagesCarousel[currentImage].description}
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Spacer div to allow for scrolling - adjust height as needed */}
        <div style={{ height: "100vh" }}></div>
      </div>

      {/* About Us Section with Parallax */}
      <div className="bg-white min-h-screen flex flex-col justify-center">
        <div className="container mx-auto p-24">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2"
            >
              <h2 className="text-5xl font-display font-bold text-gray-800 mb-8">
                Kisah Kami
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                Berawal dari passion untuk menghadirkan cita rasa autentik
                tembakau, Nusantara hadir sebagai pionir dalam revolusi produk
                tembakau Indonesia.
              </p>
              <p className="text-xl text-gray-600 mb-8">
                Setiap produk kami adalah hasil dari penelitian mendalam dan
                dedikasi untuk melestarikan warisan tembakau bangsa dengan
                sentuhan inovasi modern.
              </p>
              <Link
                to="/sejarah"
                className="inline-block px-8 py-3 bg-primary-gold text-white rounded-md font-semibold hover:bg-opacity-90 transform hover:scale-105 transition-all duration-300"
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
                  src={Picture2}
                  alt="Kisah Kami"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/60"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 via-black/50 to-transparent backdrop-blur-[2px]">
                  <p className="text-white text-lg font-medium leading-relaxed tracking-wide drop-shadow-lg transform hover:translate-x-2 transition-transform duration-300">
                    "Setiap rempah memiliki ceritanya sendiri, dan kami di sini
                    untuk menceritakannya melalui setiap produk kami."
                  </p>
                </div>
                <div className="absolute inset-0 ring-1 ring-white/10"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="w-full min-h-screen bg-primary-gold/20 p-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-5xl font-display font-bold text-center text-gray-800 mb-4"
              >
                Keunggulan Produk Kami
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-gray-600 text-lg"
              >
                Menghadirkan Pengalaman Tembakau Premium Khas Nusantara
              </motion.p>
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="w-24 h-1.5 bg-primary-gold mt-5 mb-24 rounded-full"
                style={{ originX: 0.5 }}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Premium Quality Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden group"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={Picture1}
                  alt="Premium Quality"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 bg-gradient-to-b from-white to-gray-50">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Kualitas Premium
                </h3>
                <p className="text-gray-600 mb-4">
                  Dipilih dari bahan berkualitas terbaik, diproses dengan
                  standar mutu tinggi untuk menghasilkan produk premium
                </p>
              </div>
            </motion.div>

            {/* Authentic Taste Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden group"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={Picture2}
                  alt="Authentic Taste"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 bg-gradient-to-b from-white to-gray-50">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Cita Rasa Autentik
                </h3>
                <p className="text-gray-600 mb-4">
                  Memadukan resep tradisional dengan teknologi modern untuk
                  menghadirkan pengalaman rasa yang tak tertandingi
                </p>
              </div>
            </motion.div>

            {/* Innovation Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden group"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={Picture3}
                  alt="Innovation"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 bg-gradient-to-b from-white to-gray-50">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Inovasi Berkelanjutan
                </h3>
                <p className="text-gray-600 mb-4">
                  Terus berinovasi dalam mengembangkan produk untuk memberikan
                  pengalaman terbaik bagi pelanggan
                </p>
              </div>
            </motion.div>
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
              className="px-8 py-4 bg-primary-gold text-white rounded-md font-semibold text-lg hover:bg-opacity-90 hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Jelajahi Semua Produk
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Latest News Section */}
      <div className="bg-white to-white min-h-screen p-24">
        <div className="flex flex-col items-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl font-display font-bold text-center text-gray-800 mb-4"
          >
            Sorotan Terbaru
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-gray-600 text-lg"
          >
            Temukan Cerita Inspiratif dan Inovasi Terkini dalam Dunia Tembakau
            Premium
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-24 h-1.5 bg-primary-gold mt-5 mb-24 rounded-full"
            style={{ originX: 0.5 }}
          />
        </div>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* News Card */}
            {Posts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={post.media[0].url}
                    alt={post.slug}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm text-primary-gold font-semibold mb-2">
                    {post.date}
                  </p>
                  <h3 className="text-xl text-gray-800 font-display font-bold mb-3">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 line-clamp-2">
                    {limitText(post.description, 290)}
                  </p>
                  <Link
                    to={`/revolusi-dalam-sorotan/${post.slug}`}
                    className="mt-4 text-gray-500 font-semibold hover:text-primary-gold transition-colors duration-300 flex items-center gap-2"
                  >
                    Baca Selengkapnya
                    <ChevronRight />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Main CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex justify-center mt-12"
          >
            <Link
              to="/revolusi-dalam-sorotan"
              className="px-8 py-4 bg-primary-gold text-white rounded-md font-semibold text-lg hover:bg-opacity-90 hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Jelajahi Lebih Banyak Sorotan
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gradient-to-t from-primary-gold via-yellow-100 to-white p-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-5xl font-display font-bold text-center text-gray-800 mb-4"
            >
              Apa Kata Mereka?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-gray-600 text-lg"
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold">Budi Santoso</h4>
                  <p className="text-gray-500">Food Enthusiast</p>
                </div>
              </div>
              <p className="text-gray-600">
                "Rasanya benar-benar otentik! Setiap gigitan membawa saya pada
                perjalanan rasa yang menakjubkan."
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold">Siti Rahma</h4>
                  <p className="text-gray-500">Chef Profesional</p>
                </div>
              </div>
              <p className="text-gray-600">
                "Kualitas rempah yang digunakan sangat premium. Aromanya kuat
                dan rasanya konsisten."
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold">Ahmad Ridwan</h4>
                  <p className="text-gray-500">Pecinta Kuliner</p>
                </div>
              </div>
              <p className="text-gray-600">
                "Kedathon menghadirkan revolusi dalam dunia kuliner. Inovasi
                yang tak terlupakan!"
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Beranda;
