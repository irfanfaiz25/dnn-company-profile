import { motion, useScroll, useTransform } from "motion/react";
import Background1 from "../assets/img/background1.jpg";
import { useRef } from "react";

const Hero = () => {
  const containerRef = useRef(null);

  // Track scroll progress for the entire component
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Values for the transitioning image
  // Update these values for the transitioning image
  const imageWidth = useTransform(scrollYProgress, [0, 0.3], ["70%", "90%"]); // wider initial width
  const imageHeight = useTransform(
    scrollYProgress,
    [0, 0.3],
    ["27px", "40rem"] // reduced initial height
  );
  const imageY = useTransform(scrollYProgress, [0, 0.3], ["44vh", "20vh"]); // moved down from top
  const imageX = useTransform(scrollYProgress, [0, 0.3], ["0%", "0%"]);
  const imageScale = useTransform(scrollYProgress, [0, 0.3], [1, 1]);

  // Text caption opacity
  const captionOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);

  // Header section opacity (fade out as we scroll)
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div
      ref={containerRef}
      className="relative min-h-[200vh] section-background"
    >
      {/* Sticky container that will hold our transitioning elements */}
      <div className="sticky top-0 min-h-screen overflow-hidden">
        {/* Header content that fades out */}
        <motion.div
          className="absolute top-15 left-0 w-full pt-20"
          style={{ opacity: headerOpacity }}
        >
          <div className="mx-auto text-center">
            <div className="text-wrap mx-auto animate-fade-in-up tracking-tight drop-shadow-lg hover:scale-105 transition-transform duration-300">
              <h1 className="text-6xl/19 text-gray-800 font-display font-bold">
                Bukan Sekedar <span className="text-secondary">Kenikmatan</span>
                ,
              </h1>
              <h1 className="text-6xl/19 text-gray-800 font-display font-bold">
                Ini adalah{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-800 via-primary-gold to-gray-800 bg-[length:200%_auto] animate-[var(--animate-shine)] transition-[background-position] ease-[var(--bounce-in)]">
                  Revolusi Rasa
                </span>
                .
              </h1>
            </div>
            <div className="mt-6 text-wrap mx-auto">
              <p className="text-xl/7 text-gray-700 font-sans font-normal animate-fade-in-up delay-200 hover:text-gray-900 transition-colors duration-300">
                Kami menantang batas, meracik harmoni rasa yang memukau dari
                kekayaan rempah nusantara.
              </p>
              <p className="text-xl/7 text-gray-700 font-sans font-normal animate-fade-in-up delay-200 hover:text-gray-900 transition-colors duration-300">
                <span className="text-tertiary-red font-semibold">
                  Kedathon -{" "}
                </span>
                bagi mereka yang berani mengejar yang tak biasa, menghadirkan
                sensasi autentik yang menggetarkan jiwa.
              </p>
            </div>
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
            <img
              src={Background1}
              alt="Featured background"
              className="w-full h-full object-cover"
            />

            {/* Caption that fades in as we scroll */}
            <motion.div
              className="absolute bottom-0 w-full h-24 p-3 bg-black/50 rounded-b-md"
              style={{ opacity: captionOpacity }}
            >
              <h3 className="text-lg text-gray-50 font-semibold">
                Lorem Ipsum
              </h3>
              <p className="text-base font-normal text-gray-200">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Tempora quidem cum perferendis maxime quo delectus officiis
                porro.
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
