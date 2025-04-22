import { Link } from "react-router";
import { motion } from "framer-motion";
import NewsBackground from "../../assets/img/news-background.jpg";
import { ChevronRight, ChevronLeft, ChevronRightIcon } from "lucide-react";
import { useApi } from "../../hooks/useApi";
import {
  fetchRevolusiPostsData,
  fetchRevolusiHeroData,
} from "../../services/api";
import { useEffect, useState } from "react";
import { p } from "motion/react-client";

const Sorotan = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const {
    data: HeroData,
    loading: HeroLoading,
    error: HeroError,
  } = useApi(fetchRevolusiHeroData);

  const {
    data: PostsData,
    loading: PostsLoading,
    error: PostsError,
    refetch: refetchPosts,
  } = useApi(() => fetchRevolusiPostsData(currentPage, searchQuery));

  const BaseUrl = import.meta.env.VITE_BASE_URL;

  const handlePageChange = (page) => {
    setCurrentPage(page);
    refetchPosts();
  };

  // Add this useEffect for debouncing
  useEffect(() => {
    setIsSearching(true);
    const timeoutId = setTimeout(() => {
      refetchPosts();
      setIsSearching(false);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [searchQuery]); // This will trigger whenever searchQuery changes

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const limitText = (text, limit) => {
    if (text.length > limit) {
      return text.substring(0, limit) + "...";
    } else {
      return text;
    }
  };

  // Hero section skeleton component
  const HeroSkeleton = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full h-[500px] relative animate-pulse"
    >
      <div className="w-full h-full rounded-xl bg-gray-300"></div>
      <div className="w-full h-full absolute top-0 bg-gradient-to-t from-black/90 to-transparent rounded-xl"></div>
      <div className="w-full h-full absolute top-0 flex flex-col justify-end p-16 space-y-4">
        <div className="h-12 md:h-16 bg-gray-200 rounded-lg w-3/4"></div>
        <div className="h-4 md:h-6 bg-gray-200 rounded-lg w-1/2"></div>
      </div>
    </motion.div>
  );

  // Post card skeleton component
  const PostCardSkeleton = ({ index }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
      className="w-full bg-white flex flex-col p-5 rounded-xl shadow-lg h-full animate-pulse"
    >
      <div className="flex-grow">
        <div className="w-full h-52 bg-gray-300 rounded-md shadow-lg"></div>
        <div className="mt-3 mb-1 h-4 bg-gray-200 rounded w-24"></div>
        <div className="mb-2 h-6 bg-gray-200 rounded w-3/4"></div>
        <div className="space-y-2 mb-4">
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-2/3"></div>
        </div>
      </div>
      <div className="mt-auto">
        <div className="h-4 bg-gray-200 rounded w-32"></div>
      </div>
    </motion.div>
  );

  // Pagination skeleton component
  const PaginationSkeleton = () => (
    <div className="mt-8 flex justify-center items-center gap-4 animate-pulse">
      <div className="w-8 h-8 bg-gray-200 rounded-lg"></div>
      {[...Array(3)].map((_, i) => (
        <div key={i} className="w-10 h-8 bg-gray-200 rounded-lg"></div>
      ))}
      <div className="w-8 h-8 bg-gray-200 rounded-lg"></div>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full px-4 py-24 md:px-8 xl:px-24 xl:py-24 bg-gradient-to-br from-white via-yellow-100 to-primary-gold"
    >
      {/* Hero Section */}
      {HeroLoading ? (
        <HeroSkeleton />
      ) : HeroError ? (
        <div className="w-full h-[500px] flex items-center justify-center">
          <div className="p-6 bg-red-50 rounded-lg text-center max-w-2xl w-full mx-4">
            <h3 className="text-xl font-bold text-red-600 mb-2">
              Error Loading Content
            </h3>
            <p className="text-gray-700">
              {HeroError?.message ||
                "Failed to load hero data. Please try again later."}
            </p>
          </div>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full h-[500px] relative"
        >
          <img
            src={HeroData?.image ? BaseUrl + HeroData.image : NewsBackground}
            alt={HeroData?.title}
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
              className="text-3xl md:text-6xl text-white font-semibold font-display"
            >
              {HeroData?.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-sm md:text-lg text-gray-200 font-light"
            >
              {HeroData?.description}
            </motion.p>
          </motion.div>
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-10 w-full h-full"
      >
        {/* search bar */}
        <div className="mb-6 w-full">
          <div className="relative flex justify-center items-center w-full max-w-xl mx-auto">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              type="search"
              className="w-full pl-10 pr-4 py-2 sm:py-2.5 text-xs sm:text-sm text-gray-900 bg-gray-50 rounded-lg border focus:border-0 border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-gold/50"
              placeholder="Pencarian ..."
              value={searchQuery}
              onChange={handleSearch}
            />
            {isSearching && (
              <div className="animate-spin rounded-full h-4 w-4 sm:h-6 sm:w-6 border-[2px] sm:border-[3px] border-primary-gold border-t-transparent ml-2" />
            )}
          </div>
        </div>
        {PostsLoading ? (
          <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {[...Array(9)].map((_, index) => (
              <PostCardSkeleton key={`skeleton-${index}`} index={index} />
            ))}
          </div>
        ) : PostsError ? (
          <div className="w-full flex items-center justify-center py-12">
            <div className="p-6 bg-red-50 rounded-lg text-center max-w-2xl w-full">
              <h3 className="text-xl font-bold text-red-600 mb-2">
                Error Loading Posts
              </h3>
              <p className="text-gray-700">
                {PostsError?.message ||
                  "Failed to load posts data. Please try again later."}
              </p>
            </div>
          </div>
        ) : (
          <>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
              {PostsData?.posts?.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 * (index + 1) }}
                  whileHover={{ scale: 1.02 }}
                  className="w-full bg-white flex flex-col p-5 rounded-xl shadow-lg h-full"
                >
                  <div className="flex-grow">
                    {post.media[0]?.type === "video" ? (
                      <motion.video
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        src={BaseUrl + post.media[0].url}
                        // controls
                        autoPlay
                        muted
                        loop
                        className="w-full h-52 object-cover rounded-md shadow-lg"
                      />
                    ) : (
                      <motion.img
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        src={
                          post.media[0]
                            ? BaseUrl + post.media[0].url
                            : NewsBackground
                        }
                        alt={post.title}
                        className="w-full h-52 object-cover rounded-md shadow-lg"
                      />
                    )}
                    <p className="mt-3 mb-1 text-sm text-gray-500 font-light">
                      {post.date}
                    </p>
                    <h3 className="mb-2 text-xl text-gray-800 font-bold font-display">
                      {post.title}
                    </h3>
                    <p className="mb-4 text-base font-normal text-gray-600">
                      {limitText(post.content.replace(/<[^>]*>/g, ""), 290)}
                    </p>
                  </div>
                  <div className="mt-auto">
                    <Link
                      to={`/revolusi-rasa/${post.slug}`}
                      className="text-gray-500 font-semibold hover:text-primary-gold transition-colors duration-300 flex items-center gap-2"
                    >
                      Baca Selengkapnya
                      <ChevronRight />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>

            {PostsData?.pagination && (
              <div className="mt-8 flex justify-center items-center gap-4">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`p-2 rounded-lg ${
                    currentPage === 1
                      ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                      : "bg-white text-gray-600 hover:bg-primary-gold hover:text-white"
                  }`}
                >
                  <ChevronLeft size={20} />
                </button>

                {Array.from(
                  { length: PostsData.pagination.lastPage },
                  (_, i) => i + 1
                ).map((page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`px-4 py-2 rounded-lg ${
                      currentPage === page
                        ? "bg-primary-gold text-white"
                        : "bg-white text-gray-600 hover:bg-primary-gold hover:text-white"
                    }`}
                  >
                    {page}
                  </button>
                ))}

                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === PostsData.pagination.lastPage}
                  className={`p-2 rounded-lg ${
                    currentPage === PostsData.pagination.lastPage
                      ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                      : "bg-white text-gray-600 hover:bg-primary-gold hover:text-white"
                  }`}
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            )}
          </>
        )}

        {/* Pagination for loading state */}
        {PostsLoading && <PaginationSkeleton />}
      </motion.div>
    </motion.div>
  );
};

export default Sorotan;
