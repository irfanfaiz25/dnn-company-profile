import { useParams, Link } from "react-router";
import { useState, useEffect } from "react";
import { ChevronLeftCircle, Play } from "lucide-react";
import { Posts } from "../../assets/data/Posts";
import { motion } from "motion/react";

const SorotanDetail = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Find the post that matches the slug
    const currentPost = Posts.find((post) => post.slug === slug);
    if (currentPost) {
      setPost(currentPost);
      setSelectedMedia(currentPost.media[0]);
    }
    setLoading(false);
  }, [slug]);

  if (loading) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-yellow-100 to-primary-gold">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-gold"></div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-white via-yellow-100 to-primary-gold">
        <h2 className="text-2xl font-bold mb-4">Post tidak ditemukan</h2>
        <Link
          to="/revolusi-dalam-sorotan"
          className="flex items-center gap-2 px-6 py-3 bg-primary-gold hover:bg-yellow-600 text-white rounded-md transition-colors duration-200"
        >
          <ChevronLeftCircle className="w-5 h-5" />
          Kembali
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full px-4 py-24 md:px-12 md:py-12 lg:p-24 bg-gradient-to-br from-white via-yellow-100 to-primary-gold">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full h-full p-4 md:p-8 bg-white rounded-xl shadow-xl"
      >
        {/* Media Display */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col md:flex-row md:space-x-3"
        >
          {/* Main Media Display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full md:w-[85%] h-[200px] md:h-[600px] mb-3 md:mb-0"
          >
            {selectedMedia?.type === "video" ? (
              <motion.video
                src={selectedMedia.url}
                controls
                className="w-full h-full rounded-lg object-cover shadow-xl"
              />
            ) : (
              <motion.img
                src={selectedMedia?.url}
                alt={post.title}
                className="w-full h-full rounded-lg object-cover shadow-xl"
              />
            )}
          </motion.div>

          {/* Thumbnails */}
          <div className="w-full md:w-[15%] h-24 md:h-[600px] flex md:flex-col space-x-2 md:space-x-0 md:space-y-2 overflow-x-auto md:overflow-y-auto">
            {post.media.map((media) => (
              <div
                key={media.id}
                className={`relative min-w-[100px] md:min-w-full h-[70px] md:h-24 cursor-pointer transition-all duration-200 ${
                  selectedMedia?.id === media.id
                    ? "border-[3px] border-primary-gold rounded-xl"
                    : "opacity-70 hover:opacity-100"
                }`}
                onClick={() => setSelectedMedia(media)}
              >
                {media.type === "video" ? (
                  <div className="w-full h-full relative">
                    <video
                      src={media.url}
                      className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center rounded-lg">
                      <div className="w-6 h-6 flex justify-center items-center bg-gray-50 hover:bg-gray-100 rounded-full">
                        <Play className="w-3 h-3" />
                      </div>
                    </div>
                  </div>
                ) : (
                  <img
                    src={media.url}
                    alt={`Thumbnail ${media.id}`}
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                  />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Post Content */}
        <div className="mt-2 md:mt-8 mb-6 space-y-4">
          <p className="text-sm md:text-base text-gray-500 font-light">
            {post.date}
          </p>
          <h1 className="mb-8 text-xl md:text-4xl text-gray-800 font-bold font-display text-center">
            {post.title}
          </h1>
          <div className="text-gray-600 text-sm md:text-lg font-light space-y-4">
            {post.description.split("\n").map((paragraph, index) => (
              <p key={index} className="indent-10">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-start mt-8">
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 text-sm md:text-base px-4 py-2.5 md:px-6 md:py-3 bg-primary-gold hover:bg-yellow-600 text-white rounded-md transition-colors duration-200"
          >
            <ChevronLeftCircle className="w-5 h-5" />
            Kembali
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default SorotanDetail;
