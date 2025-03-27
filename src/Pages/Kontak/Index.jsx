import React from "react";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { motion } from "motion/react";

const Kontak = () => {
  return (
    <div className="min-h-screen section-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8 xl:px-0 pt-28 pb-16">
        <div className="flex flex-col items-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-5xl font-display font-bold text-center text-gray-800 mb-4"
          >
            Bangun Kesuksesan Bersama Kami
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-gray-600 text-sm md:text-lg"
          >
            Wujudkan Visi Anda Menjadi Realita
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-24 h-1.5 bg-primary-gold mt-5 mb-24 rounded-full"
            style={{ originX: 0.5 }}
          />
        </div>

        {/* Contact Info Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Location Card */}
          <motion.div
            className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex justify-center mb-4">
              <motion.div
                className="p-3 bg-red-50 rounded-full"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <MapPin className="w-6 h-6 text-red-500" />
              </motion.div>
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">Kunjungi Kami</h3>
            <p className="text-gray-600 text-sm">
              Jl. Raya Karanggede - Kedungjati, Dusun I, Kebonan, Kec.
              Karanggede, Kabupaten Boyolali, Jawa Tengah 57381
            </p>
          </motion.div>

          {/* Phone Card */}
          <motion.div
            className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex justify-center mb-4">
              <motion.div
                className="p-3 bg-red-50 rounded-full"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Phone className="w-6 h-6 text-red-500" />
              </motion.div>
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">Hubungi Kami</h3>
            <a
              href="tel:+622983539040"
              className="text-gray-600 text-sm hover:text-red-500"
            >
              0298-3539-040
            </a>
            <a
              href="https://wa.me/6285117225313"
              className="text-gray-600 text-sm hover:text-red-500 block mt-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              (WhatsApp) +62851-1722-5313
            </a>
          </motion.div>

          {/* Email Card */}
          <motion.div
            className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex justify-center mb-4">
              <motion.div
                className="p-3 bg-red-50 rounded-full"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Mail className="w-6 h-6 text-red-500" />
              </motion.div>
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">Alamat Email</h3>
            <a
              href="mailto:info@dwipanusantara.id"
              className="text-gray-600 text-sm hover:text-red-500"
            >
              info@dwipanusantaraniaga.id
            </a>
          </motion.div>

          {/* Hours Card */}
          <motion.div
            className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex justify-center mb-4">
              <motion.div
                className="p-3 bg-red-50 rounded-full"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Clock className="w-6 h-6 text-red-500" />
              </motion.div>
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">
              Jam Operasional
            </h3>
            <p className="text-gray-600 text-sm">
              Senin - Jumat: 08.00 - 16.00
              <br />
              Sabtu: 08.00 - 12.00
              <br />
              Minggu (Tutup)
            </p>
          </motion.div>
        </motion.div>

        {/* Map Section */}
        <motion.div
          className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg mb-16"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.018245944182!2d110.64041711149015!3d-7.351846992626381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a750000d35891%3A0x7312daad2f9ede83!2sDwipa%20Nusantara%20Niaga!5e0!3m2!1sid!2sid!4v1743032375641!5m2!1sid!2sid"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </motion.div>
      </div>
    </div>
  );
};

export default Kontak;
