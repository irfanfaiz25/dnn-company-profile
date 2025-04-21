import React from "react";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { motion } from "motion/react";
import { useApi } from "../../hooks/useApi";
import { fetchKontakData, fetchKontakHeadlineData } from "../../services/api";

const Kontak = () => {
  const {
    data: headlineData,
    loading: headlineLoading,
    error: headlineError,
  } = useApi(fetchKontakHeadlineData);

  const {
    data: contactData,
    loading: contactLoading,
    error: contactError,
  } = useApi(fetchKontakData);

  // Headline skeleton component
  const HeadlineSkeleton = () => (
    <div className="flex flex-col items-center animate-pulse">
      <div className="h-10 md:h-14 bg-gray-200 rounded-lg w-64 md:w-96 mb-4"></div>
      <div className="h-4 bg-gray-200 rounded w-full max-w-md mb-5"></div>
      <div className="w-24 h-1.5 bg-gray-200 rounded-full mb-24"></div>
    </div>
  );

  // Contact card skeleton component
  const ContactCardSkeleton = ({ icon }) => (
    <div className="bg-white rounded-lg shadow-md p-6 text-center animate-pulse">
      <div className="flex justify-center mb-4">
        <div className="p-3 bg-gray-200 rounded-full">{icon}</div>
      </div>
      <div className="h-5 bg-gray-200 rounded w-32 mx-auto mb-3"></div>
      <div className="h-4 bg-gray-200 rounded w-40 mx-auto"></div>
    </div>
  );

  // Map skeleton component
  const MapSkeleton = () => (
    <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg mb-16 bg-gray-200 animate-pulse flex items-center justify-center">
      <svg
        className="w-12 h-12 text-gray-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
        ></path>
      </svg>
    </div>
  );

  return (
    <div className="min-h-screen section-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8 xl:px-0 pt-28 pb-16">
        {/* Headline Section */}
        {headlineLoading ? (
          <HeadlineSkeleton />
        ) : headlineError ? (
          <div className="flex flex-col items-center mb-24">
            <div className="p-6 bg-red-50 rounded-lg text-center max-w-2xl w-full">
              <h3 className="text-xl font-bold text-red-600 mb-2">
                Error Loading Content
              </h3>
              <p className="text-gray-700">
                {headlineError?.message ||
                  "Failed to load headline data. Please try again later."}
              </p>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl md:text-5xl font-display font-bold text-center text-gray-800 mb-4"
            >
              {headlineData?.title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-gray-600 text-sm md:text-lg"
            >
              {headlineData?.subtitle}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="w-24 h-1.5 bg-primary-gold mt-5 mb-24 rounded-full"
              style={{ originX: 0.5 }}
            />
          </div>
        )}

        {/* Contact Info Cards */}
        {contactLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <ContactCardSkeleton
              icon={<MapPin className="w-6 h-6 text-gray-300" />}
            />
            <ContactCardSkeleton
              icon={<Phone className="w-6 h-6 text-gray-300" />}
            />
            <ContactCardSkeleton
              icon={<Mail className="w-6 h-6 text-gray-300" />}
            />
            <ContactCardSkeleton
              icon={<Clock className="w-6 h-6 text-gray-300" />}
            />
          </div>
        ) : contactError ? (
          <div className="mb-16">
            <div className="p-6 bg-red-50 rounded-lg text-center max-w-3xl mx-auto">
              <h3 className="text-xl font-bold text-red-600 mb-2">
                Error Loading Contact Information
              </h3>
              <p className="text-gray-700">
                {contactError?.message ||
                  "Failed to load contact data. Please try again later."}
              </p>
            </div>
          </div>
        ) : (
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
              <h3 className="font-semibold text-gray-900 mb-1">
                Kunjungi Kami
              </h3>
              <p className="text-gray-600 text-sm">{contactData?.address}</p>
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
                href={`tel:+${contactData?.phone}`}
                className="text-gray-600 text-sm hover:text-red-500"
              >
                {contactData?.phone}
              </a>
              <a
                href={`https://wa.me/${contactData?.whatsapp}`}
                className="text-gray-600 text-sm hover:text-red-500 mt-2 flex items-center justify-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                {contactData?.whatsapp}
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
                href={`mailto:${contactData?.email}`}
                className="text-gray-600 text-sm hover:text-red-500"
              >
                {contactData?.email}
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
                {contactData?.weekdayOpen}
                <br />
                {contactData?.weekendOpen}
              </p>
            </motion.div>
          </motion.div>
        )}

        {/* Map Section */}
        {contactLoading ? (
          <MapSkeleton />
        ) : contactError ? null : (
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
        )}
      </div>
    </div>
  );
};

export default Kontak;
