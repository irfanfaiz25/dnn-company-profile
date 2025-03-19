import { motion } from "motion/react";
import { Link } from "react-router";
import Picture1 from "../../assets/img/picture1.jpg";
import Picture2 from "../../assets/img/picture2.jpg";
import Picture3 from "../../assets/img/picture3.jpg";

const FeaturedProducts = () => {
  return (
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
                Dipilih dari bahan berkualitas terbaik, diproses dengan standar
                mutu tinggi untuk menghasilkan produk premium
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
  );
};

export default FeaturedProducts;
