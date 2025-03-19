import React from "react";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { motion } from "motion/react";

const Kontak = () => {
  return (
    <div className="min-h-screen section-background">
      <div className="max-w-7xl mx-auto pt-28 pb-16">
        {/* Contact Info Cards */}
        <div className="flex flex-col items-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl font-display font-bold text-center text-gray-800 mb-4"
          >
            Bangun Kesuksesan Bersama Kami
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-gray-600 text-lg"
          >
            Wujudkan Visi Anda Menjadi Realitas
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
              Dusun III, Repaking, Kec. Wonosegoro, Kabupaten Boyolali, Jawa
              Tengah 57382
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
              href="tel:+6221234567890"
              className="text-gray-600 text-sm hover:text-red-500"
            >
              +62 21 234 567 890
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
              href="mailto:info@dwipanusantara.com"
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
              Senin - Jumat: 09.00 - 18.00
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
            src="https://maps.google.com/maps?width=600&height=400&hl=en&q=kukus%20dwipa&t=&z=14&ie=UTF8&iwloc=B&output=embed"
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
