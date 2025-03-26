import Achievements from "./Achievements";
import Branches from "./Branches";
import Testimonials from "./Testimonials";
import TeamImage from "../../assets/img/teams.jpg";
import { motion } from "motion/react";

const TimManajemen = () => {
  const manajemen = [
    {
      id: 1,
      name: "Irwan Yunanto",
      position: "Direktur Utama",
    },
    {
      id: 2,
      name: "Amirudin Zuhri",
      position: "Direktur Keuangan",
    },
    {
      id: 3,
      name: "Yoan Fauzia",
      position: "Business Development",
    },
  ];

  return (
    <div className="w-full h-full">
      {/* Hero Section */}
      <motion.div
        className="w-full min-h-screen relative overflow-hidden flex flex-col justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Background Image with Overlay */}
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <img
            src={TeamImage}
            alt="Team Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </motion.div>

        {/* Content Container */}
        <div className="container mx-auto px-14 h-full flex flex-col md:flex-row items-center justify-center md:justify-between relative z-10 py-20">
          {/* Text Content */}
          <motion.div
            className="md:w-1/2 text-left md:pr-8 mb-12 md:mb-0"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "80px" }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="h-1.5 bg-primary-gold mb-6 rounded-full"
            />
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
              Tim <span className="text-primary-gold">Manajemen</span> Kami
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-xl mb-8">
              Kami adalah tim yang berdedikasi untuk memberikan produk
              berkualitas tinggi dengan standar layanan terbaik untuk kepuasan
              pelanggan.
            </p>
            <motion.button
              className="px-8 py-3 bg-primary-gold text-gray-900 font-medium rounded-full hover:bg-primary-gold/90 transition-all duration-300 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Kenali Kami
            </motion.button>
          </motion.div>

          {/* Image or Visual Element */}
          <motion.div
            className="relative"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="relative">
              {/* Team stats card */}
              <motion.div
                className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 shadow-2xl max-w-md mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-semibold text-white">
                    Manajemen
                  </h3>
                  <span className="px-3 py-1 bg-primary-gold/20 text-primary-gold rounded-full text-sm">
                    Kepemimpinan
                  </span>
                </div>

                <div className="mb-6 space-y-4">
                  {manajemen.map((item) => (
                    <div key={item.id} className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-primary-gold/30 rounded-full flex items-center justify-center">
                        <span className="text-primary-gold text-xl font-bold">
                          {item.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <h4 className="text-white font-medium">{item.name}</h4>
                        <p className="text-gray-300 text-sm">{item.position}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-white/20">
                  <p className="text-gray-300 text-sm">
                    Tim manajemen kami mengedepankan keunggulan dan inovasi
                    untuk menghadirkan produk berkualitas premium yang memenuhi
                    standar industri tertinggi.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <div className="bg-white overflow-hidden">
        {/* Achievements Display */}
        <Achievements />

        {/* Branches Display */}
        <Branches />
      </div>

      {/* Testimonials Display */}
      <Testimonials />
    </div>
  );
};

export default TimManajemen;
