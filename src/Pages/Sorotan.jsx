import { Link } from "react-router";
import { motion } from "framer-motion";
import NewsBackground from "../assets/img/news-background.jpg";
import { Posts } from "../assets/data/Posts";

const Sorotan = () => {
  const limitText = (text, limit) => {
    if (text.length > limit) {
      return text.substring(0, limit) + "...";
    } else {
      return text;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full p-24 bg-gradient-to-br from-white via-yellow-100 to-primary-gold"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full h-[500px] relative"
      >
        <img
          src={NewsBackground}
          alt="news-background"
          className="w-full h-full rounded-xl object-cover shadow-xl"
        />
        <div className="w-full h-full absolute top-0 bg-gradient-to-t from-black/90 to-transparent rounded-xl" />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full h-full absolute top-0 flex flex-col justify-end p-16 space-y-4"
        >
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-6xl text-white font-semibold font-display"
          >
            Revolusi Dalam Sorotan
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg text-gray-200 font-light"
          >
            Saksikan perjalanan transformatif kami dalam menghadirkan inovasi
            yang mengubah industri. Dari setiap langkah revolusioner, peluncuran
            produk breakthrough, hingga momen-momen bersejarah yang membentuk
            DNA perusahaan kami. Temukan kisah di balik setiap pencapaian dan
            jadilah bagian dari revolusi yang kami bangun untuk masa depan
            Indonesia.
          </motion.p>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-10 w-full h-full"
      >
        <div className="w-full grid grid-cols-3 gap-5">
          {Posts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 * (index + 1) }}
              whileHover={{ scale: 1.02 }}
              className="w-full bg-white flex flex-col p-5 rounded-xl shadow-lg"
            >
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                src={post.media[0].url}
                alt="picture"
                className="w-full h-52 object-cover rounded-md shadow-lg"
              />
              <p className="mt-3 mb-1 text-sm text-gray-500 font-light">
                {post.date}
              </p>
              <h3 className="mb-2 text-xl text-gray-800 font-bold font-display">
                {post.title}
              </h3>
              <p className="mb-4 text-base font-normal text-gray-600">
                {limitText(post.description, 290)}
              </p>
              <div className="flex w-full justify-start">
                <Link
                  to={`/revolusi-dalam-sorotan/${post.slug}`}
                  className="px-8 py-3 text-base font-semibold bg-primary-gold text-gray-800 rounded-full hover:scale-105 transition-all duration-500"
                >
                  Selengkapnya
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Sorotan;
