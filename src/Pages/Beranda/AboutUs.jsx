import { motion } from "motion/react";
import { Link } from "react-router";
import Picture2 from "../../assets/img/picture2.jpg";

const AboutUs = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col justify-center">
      <div className="container mx-auto px-4 py-16 lg:px-24 lg:py-24">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-800 mb-8">
              Kisah Kami
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 mb-6">
              Berawal dari passion untuk menghadirkan cita rasa autentik
              tembakau, Nusantara hadir sebagai pionir dalam revolusi produk
              tembakau Indonesia.
            </p>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 mb-8">
              Setiap produk kami adalah hasil dari penelitian mendalam dan
              dedikasi untuk melestarikan warisan tembakau bangsa dengan
              sentuhan inovasi modern.
            </p>
            <Link
              to="/sejarah"
              className="inline-block text-sm md:text-base px-8 py-3 bg-primary-gold text-white rounded-md font-semibold hover:bg-opacity-90 transform hover:scale-105 transition-all duration-300"
            >
              Lebih Lanjut
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2"
          >
            <div className="relative h-[450px] rounded-lg overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
              <img
                src={Picture2}
                alt="Kisah Kami"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/60"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 via-black/50 to-transparent backdrop-blur-[2px]">
                <p className="text-white text-lg font-medium leading-relaxed tracking-wide drop-shadow-lg transform hover:translate-x-2 transition-transform duration-300">
                  "Setiap rempah memiliki ceritanya sendiri, dan kami di sini
                  untuk menceritakannya melalui setiap produk kami."
                </p>
              </div>
              <div className="absolute inset-0 ring-1 ring-white/10"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
