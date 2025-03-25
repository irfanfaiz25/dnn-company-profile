import { motion } from "motion/react";

const Testimonials = () => {
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
            Apa Kata Mereka?
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
                <h4 className="font-semibold">Hendra Wijaya</h4>
                <p className="text-gray-500">Malang</p>
              </div>
            </div>
            <p className="text-gray-600">
              "Aroma tembakau yang khas dan berkualitas tinggi. Setiap hisapan
              memberikan sensasi yang menenangkan dan memuaskan."
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
                <h4 className="font-semibold">Rudi Hartono</h4>
                <p className="text-gray-500">Kudus</p>
              </div>
            </div>
            <p className="text-gray-600">
              "Tembakau pilihan dengan cita rasa yang konsisten. Perpaduan
              sempurna antara tradisi dan kualitas modern."
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
                <h4 className="font-semibold">Bambang Suryanto</h4>
                <p className="text-gray-500">Temanggung</p>
              </div>
            </div>
            <p className="text-gray-600">
              "Produk tembakau terbaik yang pernah saya coba. Karakteristik rasa
              yang kuat dan aroma yang memukau."
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
