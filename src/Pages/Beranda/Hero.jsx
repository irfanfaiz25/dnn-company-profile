import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import Picture1 from "../../assets/img/picture1.jpg";
import Picture2 from "../../assets/img/picture2.jpg";
import Picture3 from "../../assets/img/picture3.jpg";
import Picture4 from "../../assets/img/picture4.jpg";

const Hero = () => {
  const containerRef = useRef(null);
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
    <div
      ref={containerRef}
      className="relative min-h-[200vh] section-background p-6 md:p-4 lg:p-0"
    >
      <div className="sticky top-0 min-h-screen overflow-hidden">
        {/* Header content with initial animations */}
        <motion.div
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute top-15 left-0 w-full pt-6 md:pt-12 lg:pt-20"
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
                className="text-2xl/8 md:text-5xl/15 lg:text-6xl/19 text-gray-800 font-display font-bold"
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
                className="text-2xl/8 md:text-5xl/15 lg:text-6xl/19 text-gray-800 font-display font-bold"
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
              className="mt-2 md:mt-6 text-wrap mx-auto"
            >
              <p className="text-sm md:text-lg/6 lg:text-xl/7 text-gray-700 font-sans font-normal hover:text-gray-900 transition-colors duration-300">
                Kami menantang batas, meracik harmoni rasa yang memukau dari
                kekayaan rempah nusantara.
              </p>
              <p className="text-sm md:text-lg/6 lg:text-xl/7 text-gray-700 font-sans font-normal hover:text-gray-900 transition-colors duration-300">
                Nusantara - bagi mereka yang berani mengejar yang tak biasa,
                menghadirkan sensasi autentik yang menggetarkan jiwa.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Transitioning Image - This is the key component that grows and moves */}
        <div className="habsolute mt-6 md:-mt-3 lg:mt-16 w-full flex justify-center">
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
  );
};

export default Hero;
