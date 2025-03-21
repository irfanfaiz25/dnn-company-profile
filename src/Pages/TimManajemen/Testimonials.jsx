import { motion } from "motion/react";
import Profile1 from "../../assets/img/profil1.png";
import Profile2 from "../../assets/img/profil2.png";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Bambang Setiawan",
      position: "Bekerja sejak tahun 2007",
      message:
        "Bangga bekerja dengan Nojoprino, perusahaan yang sangat menjunjung tinggi rasa kekeluargaan. Tercermin nyata dari hangat perhatian yang tercipta dari atasan maupun rekan kerja.",
      image: Profile1,
      date: "15 Januari 2024",
    },
    {
      name: "Siti Rahayu",
      position: "Bekerja sejak tahun 2010",
      message:
        "Selama 14 tahun berkarir disini, saya merasakan pertumbuhan yang luar biasa. Perusahaan sangat mendukung pengembangan karyawan melalui berbagai program pelatihan.",
      image: Profile2,
      date: "12 Januari 2024",
    },
    {
      name: "Ahmad Hidayat",
      position: "Bekerja sejak tahun 2015",
      message:
        "Lingkungan kerja yang profesional namun tetap hangat membuat saya betah. Sistem manajemen yang transparan dan adil membuat karyawan merasa dihargai.",
      image: Profile1,
      date: "10 Januari 2024",
    },
  ];

  return (
    <div className="mx-auto px-4 md:px-6 xl:px-24 py-16 min-h-[600px] section-background">
      <div className="flex flex-col items-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl md:text-4xl font-display font-bold text-center text-gray-800"
        >
          Cerita Kami
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-24 h-1.5 bg-primary-gold mt-5 mb-24 rounded-full"
          style={{ originX: 0.5 }}
        />
      </div>

      <div className="relative">
        {/* Decorative elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute -top-6 left-10 w-20 h-20 bg-primary-gold/10 rounded-full blur-xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute bottom-10 right-10 w-32 h-32 bg-primary-gold/20 rounded-full blur-xl"
        />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, staggerChildren: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 relative z-10"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{
                scale: 1.02,
                y: -8,
                transition: { duration: 0.3 },
              }}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <motion.div
                className="flex items-start mb-6"
                initial={{ x: -20 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.3 }}
              >
                <div className="relative">
                  <motion.div
                    className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary-gold"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-contain"
                    />
                  </motion.div>
                  <motion.div
                    className="absolute -bottom-2 -right-2 bg-primary-gold text-white p-2 rounded-full"
                    whileHover={{ rotate: 180 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
                    </svg>
                  </motion.div>
                </div>
                <div className="ml-4">
                  <motion.h3
                    className="text-lg font-semibold text-gray-800 group-hover:text-primary-gold transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    {testimonial.name}
                  </motion.h3>
                  <p className="text-sm text-gray-600">
                    {testimonial.position}
                  </p>
                </div>
              </motion.div>
              <motion.p
                className="text-gray-700 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.4 }}
              >
                {testimonial.message}
              </motion.p>
              <motion.div
                className="mt-6 flex items-center justify-between"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.5 }}
              >
                <p className="text-sm text-gray-500">{testimonial.date}</p>
                <div className="flex text-primary-gold">
                  {[...Array(5)].map((_, i) => (
                    <motion.svg
                      key={i}
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                      whileHover={{ scale: 1.2, rotate: 180 }}
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </motion.svg>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
