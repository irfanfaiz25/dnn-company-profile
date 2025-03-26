import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import Picture1 from "../../assets/img/picture1.jpg";
import Picture2 from "../../assets/img/picture2.jpg";
import Picture3 from "../../assets/img/picture3.jpg";

const Hero = () => {
  const containerRef = useRef(null);
  const [currentImage, setCurrentImage] = useState(0);

  const imagesCarousel = [
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

  // Auto slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % imagesCarousel.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  // Track scroll progress for the entire component
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  return (
    <div
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden"
    >
      {imagesCarousel.map((item, index) => (
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
            src={item.image}
            alt={item.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center text-white"
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
              className="py-5 text-5xl font-bold font-display bg-clip-text text-transparent bg-gradient-to-r from-amber-200 via-primary-gold to-amber-100 bg-[length:200%_auto] animate-[var(--animate-shine)] transition-[background-position] ease-[var(--bounce-in)]"
            >
              {item.title}
            </motion.h1>
            <p className="max-w-3xl text-center text-xl">{item.description}</p>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default Hero;
