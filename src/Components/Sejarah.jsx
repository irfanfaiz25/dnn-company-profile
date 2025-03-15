import { motion, useScroll, useTransform } from "motion/react";
import Image3 from "../assets/img/image3.jpg";

const Sejarah = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 270]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <div className="w-full">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full relative"
      >
        <motion.img
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src={Image3}
          className="w-full h-[500px] object-cover"
          alt="background image"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="w-full h-full absolute top-0 bg-gradient-to-t from-black/80 to-transparent"
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          style={{ y, opacity }}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <h1 className="text-6xl text-gray-50 font-semibold font-display text-center">
            Sejarah Perusahaan
          </h1>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="h-fit bg-white px-24 py-20 space-y-7 relative"
      >
        <motion.p
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-xl/9 font-normal indent-16 text-gray-800"
        >
          PT Dwipa Nusantara Niaga didirikan pada tahun 2010 oleh sekelompok
          pengusaha visioner yang melihat potensi besar dalam industri
          perdagangan di Indonesia. Berawal dari sebuah kantor kecil di Boyolali
          dengan hanya 5 karyawan, perusahaan kami mulai membangun reputasi
          sebagai mitra dagang yang dapat diandalkan. Melalui kerja keras dan
          dedikasi tim kami, perusahaan berhasil mendapatkan kepercayaan dari
          berbagai mitra bisnis baik di dalam maupun luar negeri.
        </motion.p>

        <motion.p
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="text-xl/9 font-normal indent-16 text-gray-800"
        >
          Seiring berjalannya waktu, perusahaan kami terus berkembang dan
          memperluas jangkauan bisnisnya. Saat ini, PT Dwipa Nusantara Niaga
          telah memiliki cabang di berbagai kota besar di Indonesia dan
          mempekerjakan lebih dari 500 karyawan. Kami terus berinovasi dan
          beradaptasi dengan perkembangan teknologi untuk memberikan layanan
          terbaik kepada pelanggan kami. Komitmen kami terhadap kualitas dan
          profesionalisme telah mengantarkan perusahaan menjadi salah satu
          pemain utama dalam industri perdagangan nasional.
        </motion.p>
      </motion.div>

      <motion.div
        className="h-fit w-full section-background px-24 py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-semibold text-gray-800 text-center mb-12">
          Visi & Misi Perusahaan
        </h2>
        <div className="grid grid-cols-2 gap-10">
          <motion.div
            className="w-full p-10 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-2 h-12 bg-secondary-green rounded-full"></div>
                <h2 className="text-3xl font-bold text-gray-800">Visi</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed pl-6">
                "Menjadi perusahaan perdagangan terkemuka di Indonesia yang
                diakui secara nasional dan internasional, dengan memberikan
                nilai tambah berkelanjutan bagi seluruh pemangku kepentingan
                melalui praktik bisnis yang inovatif dan bertanggung jawab."
              </p>
            </div>
          </motion.div>

          <motion.div
            className="w-full p-10 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-2 h-12 bg-secondary-green rounded-full"></div>
                <h2 className="text-3xl font-bold text-gray-800">Misi</h2>
              </div>
              <ul className="space-y-4 text-lg text-gray-600 pl-6">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 mt-2 bg-secondary-green rounded-full"></span>
                  <p>
                    Mengembangkan jaringan perdagangan yang kuat dan
                    berkelanjutan di seluruh Indonesia.
                  </p>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 mt-2 bg-secondary-green rounded-full"></span>
                  <p>
                    Memberikan layanan prima dan solusi inovatif kepada seluruh
                    mitra bisnis.
                  </p>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 mt-2 bg-secondary-green rounded-full"></span>
                  <p>
                    Membangun sumber daya manusia yang unggul dan profesional.
                  </p>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 mt-2 bg-secondary-green rounded-full"></span>
                  <p>Menerapkan praktik bisnis yang etis dan berkelanjutan.</p>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Sejarah;
