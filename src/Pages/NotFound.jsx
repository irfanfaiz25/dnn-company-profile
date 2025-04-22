import { Link } from "react-router";
import { motion } from "framer-motion";
import { ChevronLeftCircle } from "lucide-react";
import Logo from "../assets/img/logo.png";

const NotFound = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-white via-yellow-100 to-primary-gold px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-3xl p-8 bg-white rounded-2xl shadow-2xl text-center"
      >
        <div className="flex justify-center mb-6">
          <img src={Logo} alt="Dwipa Nusantara Niaga Logo" className="h-16" />
        </div>
        
        <motion.h1 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-6xl md:text-8xl font-bold text-gray-800 mb-4"
        >
          404
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-2">Halaman Tidak Ditemukan</h2>
          <p className="text-gray-600 mb-8">Maaf, halaman yang Anda cari tidak dapat ditemukan atau telah dipindahkan.</p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-center gap-4"
        >
          <Link
            to="/"
            className="flex items-center gap-2 px-6 py-3 bg-primary-gold hover:bg-yellow-600 text-white rounded-md transition-colors duration-200 w-full md:w-auto justify-center"
          >
            <ChevronLeftCircle className="w-5 h-5" />
            Kembali ke Beranda
          </Link>
          
          <Link
            to="/kontak"
            className="px-6 py-3 border-2 border-primary-gold text-primary-gold hover:bg-primary-gold hover:text-white rounded-md transition-colors duration-200 w-full md:w-auto"
          >
            Hubungi Kami
          </Link>
        </motion.div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="mt-8 text-gray-600 text-sm"
      >
        © {new Date().getFullYear()} PT. Dwipa Nusantara Niaga. All rights reserved.
      </motion.div>
    </div>
  );
};

export default NotFound;