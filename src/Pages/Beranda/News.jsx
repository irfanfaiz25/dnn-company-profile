import { motion } from "motion/react";
import { Link } from "react-router";
import { Posts } from "../../assets/data/Posts";
import { ChevronRight } from "lucide-react";

const News = () => {
  const limitText = (text, limit) => {
    if (text.length > limit) {
      return text.substring(0, limit) + "...";
    } else {
      return text;
    }
  };

  return (
    <div className="bg-white to-white min-h-screen px-4 py-16 md:px-24 md:py-24">
      <div className="flex flex-col items-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl md:text-5xl font-display font-bold text-center text-gray-800 mb-4"
        >
          Sorotan Terbaru
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-gray-600 text-base md:text-lg text-center md:text-start"
        >
          Temukan Cerita Inspiratif dan Inovasi Terkini dalam Dunia Tembakau
          Premium
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-24 h-1.5 bg-primary-gold mt-5 mb-24 rounded-full"
          style={{ originX: 0.5 }}
        />
      </div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* News Card */}
          {Posts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={post.media[0].url}
                  alt={post.slug}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <p className="text-sm text-primary-gold font-semibold mb-2">
                  {post.date}
                </p>
                <h3 className="text-xl text-gray-800 font-display font-bold mb-3">
                  {post.title}
                </h3>
                <p className="text-gray-600 line-clamp-2">
                  {limitText(post.description, 290)}
                </p>
                <Link
                  to={`/revolusi-dalam-sorotan/${post.slug}`}
                  className="mt-4 text-gray-500 font-semibold hover:text-primary-gold transition-colors duration-300 flex items-center gap-2"
                >
                  Baca Selengkapnya
                  <ChevronRight />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Main CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex justify-center mt-12"
        >
          <Link
            to="/revolusi-dalam-sorotan"
            className="px-4 py-2.5 md:px-8 md:py-4 bg-primary-gold text-white rounded-md font-semibold text-lg hover:bg-opacity-90 hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Jelajahi Lebih Banyak Sorotan
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default News;
