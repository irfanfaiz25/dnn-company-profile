import { motion, useScroll, useTransform } from "motion/react";
import Background from "../../assets/img/tobacco-leaf.jpg";
import PackKedhaton from "../../assets/img/pack-kedhaton.png";
import PackMataram from "../../assets/img/pack-mataram.png";
import PackDinasti from "../../assets/img/pack-dinasti.png";
import DetailKedhaton from "../../assets/img/detail-kedhaton.png";
import DetailMataram from "../../assets/img/detail-mataram.png";
import DetailDinasti from "../../assets/img/detail-dinasti.png";
import { useRef, useState } from "react";
import { CircleArrowUp } from "lucide-react";

const Produk = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 270]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  const [selectedProduct, setSelectedProduct] = useState(null);
  const detailRefs = useRef([]);

  const handleProductClick = (productId) => {
    setSelectedProduct(productId);
    const index = products.findIndex((p) => p.id === productId);
    const targetElement = detailRefs.current[index];

    if (targetElement) {
      const elementPosition = targetElement.getBoundingClientRect().top;
      const startPosition = window.pageYOffset;
      const distance = elementPosition;
      const duration = 2000; // Increased duration (in ms) for slower scroll
      let start = null;

      const animation = (currentTime) => {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const progress = Math.min(timeElapsed / duration, 1);

        // Easing function for smoother animation
        const easeInOutCubic = (progress) => {
          return progress < 0.5
            ? 4 * progress * progress * progress
            : 1 - Math.pow(-2 * progress + 2, 3) / 2;
        };

        window.scrollTo(0, startPosition + distance * easeInOutCubic(progress));

        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      };

      requestAnimationFrame(animation);
    }
  };

  const handleBackToProducts = () => {
    const productsSection = document.querySelector(".products-grid-section");
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: "smooth" });
    }
    setSelectedProduct(null);
  };

  const products = [
    {
      id: 1,
      name: "Kedhaton Nusantara",
      series: "Signature Series",
      stock: "In Stock",
      description:
        "Kedhaton Nusantara adalah perwujudan sempurna dari warisan rasa tradisional yang dibalut dalam kemewahan modern. Setiap batang menghadirkan pengalaman merokok yang tak tertandingi, hasil dari seleksi tembakau terbaik dan proses produksi yang mengutamakan kualitas premium.",
      details: {
        racikan: "Tembakau Virginia & Oriental Premium",
        karakter: "Kuat",
        rempah: "Tembakau Premium & Cengkeh",
        kemasan: "12 Batang Premium",
      },
      image: DetailKedhaton,
      packImage: PackKedhaton,
      bgColor: "bg-gradient-to-br from-primary-gold via-yellow-100 to-white",
    },
    {
      id: 2,
      name: "Mataram Nusantara",
      series: "Premium Blend",
      stock: "In Stock",
      description:
        "Kedhaton Nusantara merupakan manifestasi dari keanggunan cita rasa klasik yang dipadukan dengan sentuhan modernitas. Diproduksi secara eksklusif dengan tembakau pilihan dari lembah-lembah subur Nusantara, setiap batang merupakan hasil kurasi yang ketat dan proses pemeraman yang sempurna.",
      details: {
        racikan: "Tembakau Virginia & Oriental Premium",
        karakter: "Sedang dan Lembut",
        rempah: "Kayu Manis & Cengkeh",
        kemasan: "12 Batang Premium",
      },
      image: DetailMataram,
      packImage: PackMataram,
      bgColor: "bg-white",
    },
    {
      id: 3,
      name: "Dinasti Nusantara",
      series: "Limited Edition",
      stock: "In Stock",
      description:
        "Dinasti Nusantara merupakan karya istimewa yang menggabungkan keagungan rasa klasik dengan inovasi modern. Diproduksi dalam jumlah terbatas, setiap batang menawarkan pengalaman eksklusif dengan tembakau pilihan yang diproses menggunakan teknik tradisional yang telah disempurnakan.",
      details: {
        racikan: "Tembakau Virginia & Oriental Pilihan",
        karakter: "Kuat dan Kompleks",
        rempah: "Tembakau Premium & Kayu Manis",
        kemasan: "12 Batang Premium",
      },
      image: DetailDinasti,
      packImage: PackDinasti,
      bgColor: "bg-white",
    },
  ];

  return (
    <div className="w-full">
      {/* Sejarah */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full h-screen relative"
      >
        <motion.img
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src={Background}
          className="w-full h-full object-cover"
          alt="background image"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="w-full h-full absolute top-0 bg-gradient-to-b from-black/80 via-black/50 to-transparent"
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          style={{ y, opacity }}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <h1 className="text-2xl md:text-6xl text-gray-50 font-bold font-display text-center">
            Produk Kami
          </h1>
          <p className="mt-4 md:mt-2 text-sm/5 md:text-lg/7 text-gray-200 font-normal text-center">
            Tembakau premium kami diperkaya dengan perpaduan rempah-rempah
            nusantara yang memikat. Setiap hisapan menghadirkan sensasi cengkeh
            pilihan yang menghangatkan, aroma kayu manis yang menenangkan, dan
            sentuhan kapulaga yang menyegarkan. Diproses dengan kearifan
            tradisional dan teknologi modern, menciptakan harmoni rasa yang
            memanjakan para penikmat rokok premium sejati.
          </p>
        </motion.div>
      </motion.div>

      <div className="min-h-screen px-4 py-16 md:px-24 md:py-24 bg-gradient-to-br from-white via-yellow-50 to-primary-gold overflow-hidden relative products-grid-section">
        <div className="flex flex-col items-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-4xl font-display font-bold text-center text-gray-800"
          >
            Produk Kami
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-24 h-1.5 bg-primary-gold mt-5 mb-24 rounded-full"
            style={{ originX: 0.5 }}
          />
        </div>

        <div className="mt-10 relative">
          {/* Products Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 md:gap-16 w-full px-4 xl:px-24">
            {products.map((product, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -20 }}
                onClick={() => handleProductClick(product.id)}
              >
                <div className="w-full h-[500px] bg-gradient-to-br from-primary-gold/30 via-primary-gold/20 to-transparent backdrop-blur-sm rounded-3xl relative flex flex-col items-center justify-end pb-20 overflow-hidden">
                  <motion.div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <motion.img
                    src={product.packImage}
                    alt={product.name}
                    className="absolute top-2 w-[12rem] group-hover:scale-110 transition-transform duration-500"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.3 }}
                  />
                  <motion.div
                    className="text-center z-10 mt-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <h2 className="text-3xl font-bold font-display text-gray-800 group-hover:text-primary-gold transition-colors duration-300">
                      {product.name}
                    </h2>
                    <p className="text-gray-200 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {product.series}
                    </p>
                  </motion.div>
                </div>

                <motion.button
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-primary-gold text-gray-50 px-5 py-2.5 rounded-full opacity-100 md:opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleProductClick(product.id)}
                >
                  Lebih Lanjut
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Detail Product */}
      {products.map((product, index) => (
        <div
          key={index}
          ref={(el) => (detailRefs.current[index] = el)}
          className={`w-full h-fit xl:h-[700px] ${
            selectedProduct === product.id
              ? "bg-gradient-to-br from-primary-gold via-yellow-100 to-white"
              : "bg-white"
          } flex items-center justify-center px-4 py-16 md:px-8 xl:px-24 xl:py-0 transition-all duration-500 ${
            selectedProduct === product.id ? "opacity-100" : "opacity-70"
          }`}
        >
          {selectedProduct === product.id && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              onClick={handleBackToProducts}
              className="fixed text-sm md:text-base bottom-2 right-1/4 md:bottom-7 md:right-[37%] lg:bottom-15 xl:bottom-75 lg:right-8 bg-primary-gold text-gray-700 px-6 py-3 rounded-full font-medium shadow-lg hover:scale-105 transition-transform duration-300 flex items-center gap-2 z-50"
            >
              <CircleArrowUp />
              Kembali ke Produk
            </motion.button>
          )}
          <motion.div
            className={`flex flex-col lg:flex-row ${
              index % 2 === 1 ? "lg:flex-row-reverse" : ""
            } gap-12 max-w-7xl mx-auto`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div className="lg:w-1/2 relative group hover:scale-105 transition-transform duration-1000">
              <motion.img
                src={product.image}
                className="w-full h-[250px] md:h-[470px] object-cover rounded-3xl shadow-2xl"
                alt={`${product.name} Detail`}
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </motion.div>

            <div className="lg:w-1/2 space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-3xl md:text-5xl font-bold font-display text-gray-800 mb-2 md:mb-4">
                  {product.name}
                </h1>
                <div className="flex items-center justify-between gap-2 md:gap-4 mb-6">
                  <div className="flex items-center gap-2 md:gap-4">
                    <span className="text-xs md:text-base px-4 py-1.5 bg-amber-600/50 text-amber-700 rounded-full font-medium shadow-md">
                      {product.series}
                    </span>
                    <span className="text-xs md:text-base px-4 py-1.5 bg-gray-100 text-gray-600 rounded-full font-medium shadow-md">
                      {product.stock}
                    </span>
                  </div>
                  {/* order products button */}
                  <button
                    className="text-xs md:text-base px-6 py-1.5 bg-secondary-green hover:bg-secondary-green/90 text-gray-50 rounded-full font-medium shadow-md"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent triggering parent onClick
                      const message = `Halo, saya ingin memesan produk ${product.name}. Mohon informasi lebih lanjut.`;
                      const encodedMessage = encodeURIComponent(message);
                      const whatsappUrl = `https://wa.me/+6285339462767?text=${encodedMessage}`;
                      window.open(whatsappUrl, "_blank");
                    }}
                  >
                    Order
                  </button>
                </div>
              </motion.div>

              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
              >
                <p className="text-sm/5 md:text-lg/8 font-normal text-gray-600">
                  {product.description}
                </p>

                <div className="grid grid-cols-2 gap-6 pt-6">
                  {Object.entries(product.details).map(([key, value]) => (
                    <div key={key} className="space-y-2">
                      <h3 className="text-gray-400 text-sm font-medium">
                        {key.toUpperCase()}
                      </h3>
                      <p className="text-gray-800 font-medium text-sm md:text-base">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default Produk;
