import { useParams, Link } from "react-router";
import { useState, useEffect } from "react";
import { ChevronLeftCircle, Play } from "lucide-react";
import { motion } from "motion/react";
import { fetchPostDataBySlug } from "../../services/api";

const SorotanDetail = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const baseUrl = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const postData = await fetchPostDataBySlug(slug);
        setPost(postData);
        if (postData.media && postData.media.length > 0) {
          setSelectedMedia(postData.media[0]);
        }
      } catch (err) {
        setError(err.message || "Failed to fetch post data");
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-yellow-100 to-primary-gold">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-gold"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-white via-yellow-100 to-primary-gold">
        <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full mx-4">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Oops! Terjadi Kesalahan</h2>
            <p className="text-gray-600 mb-6">{error}</p>
            <Link
              to="/revolusi-rasa"
              className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-primary-gold hover:bg-yellow-600 text-white rounded-md transition-colors duration-200"
            >
              <ChevronLeftCircle className="w-5 h-5" />
              Kembali ke Halaman Utama
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-white via-yellow-100 to-primary-gold">
        <h2 className="text-2xl font-bold mb-4">Post tidak ditemukan</h2>
        <Link
          to="/revolusi-rasa"
          className="flex items-center gap-2 px-6 py-3 bg-primary-gold hover:bg-yellow-600 text-white rounded-md transition-colors duration-200"
        >
          <ChevronLeftCircle className="w-5 h-5" />
          Kembali
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full px-4 py-24 md:px-8 xl:px-24 xl:py-24 bg-gradient-to-br from-white via-yellow-100 to-primary-gold">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full h-full p-4 md:p-6 xl:p-8 bg-white rounded-xl shadow-xl"
      >
        {/* Media Display */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col md:flex-row md:space-x-2 xl:space-x-3"
        >
          {/* Main Media Display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full md:w-[85%] h-[200px] md:h-[400px] xl:h-[700px] mb-3 md:mb-0"
          >
            {selectedMedia?.type === "video" ? (
              <motion.video
                src={selectedMedia.url ? baseUrl + selectedMedia.url : ""}
                controls
                className="w-full h-full rounded-lg object-cover shadow-xl"
              />
            ) : (
              <motion.img
                src={selectedMedia?.url ? baseUrl + selectedMedia.url : ""}
                alt={post.title}
                className="w-full h-full rounded-lg object-cover shadow-xl"
              />
            )}
          </motion.div>

          {/* Thumbnails */}
          <div className="w-full md:w-[15%] h-24 md:h-[400px] xl:h-[700px] flex md:flex-col space-x-2 md:space-x-0 md:space-y-2 overflow-x-auto md:overflow-y-auto">
            {post.media.map((media) => (
              <div
                key={media.id}
                className={`relative min-w-[100px] xl:min-w-full h-[70px] xl:h-32 cursor-pointer transition-all duration-200 ${
                  selectedMedia?.id === media.id
                    ? "border-[3px] border-primary-gold rounded-xl"
                    : "opacity-70 hover:opacity-100"
                }`}
                onClick={() => setSelectedMedia(media)}
              >
                {media.type === "video" ? (
                  <div className="w-full h-full relative">
                    <video
                      src={media.url ? baseUrl + media.url : ""}
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
                    src={media.url ? baseUrl + media.url : ""}
                    alt={`Thumbnail ${media.id}`}
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                  />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Post Content */}
        <div className="mt-2 md:mt-5 xl:mt-8 mb-6 space-y-4">
          <p className="text-sm md:text-base text-gray-500 font-light">
            {post.date}
          </p>
          <h1 className="mb-8 text-xl md:text-4xl text-gray-800 font-bold font-display text-center">
            {post.title}
          </h1>
          <div
            className="ck-content"
            dangerouslySetInnerHTML={{ __html: post?.content }}
          ></div>
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
