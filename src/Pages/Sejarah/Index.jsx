import { motion, useScroll, useTransform } from "motion/react";
import Image3 from "../../assets/img/image3.jpg";
import { useApi } from "../../hooks/useApi";
import { fetchSejarahData, fetchVisiMisiData } from "../../services/api";

const Sejarah = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 270]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  const {
    data: sejarahData,
    loading: sejarahLoading,
    error: sejarahError,
  } = useApi(fetchSejarahData);

  const {
    data: visiData,
    loading: visiLoading,
    error: visiError,
  } = useApi(() => fetchVisiMisiData("visi"));

  const {
    data: misiData,
    loading: misiLoading,
    error: misiError,
  } = useApi(() => fetchVisiMisiData("misi"));

  const baseUrl = import.meta.env.VITE_BASE_URL;

  // Skeleton components
  const SejarahSkeleton = () => (
    <>
      <div className="w-full h-[500px] bg-gray-200 animate-pulse relative">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4">
          <div className="h-12 bg-gray-300 rounded-lg mx-auto"></div>
        </div>
      </div>
      <div className="h-fit bg-white px-4 md:px-10 lg:px-24 py-16 md:py-10 lg:py-20 space-y-7 relative">
        <div className="space-y-4 animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-4/5"></div>
          <div className="h-4 bg-gray-200 rounded w-full"></div>
        </div>
      </div>
    </>
  );

  const VisiMisiSkeleton = () => (
    <div className="h-fit w-full section-background px-4 py-16 md:px-10 lg:px-24 md:py-10 lg:py-20">
      <div className="flex flex-col items-center animate-pulse">
        <div className="h-8 bg-gray-200 rounded-lg w-48 mb-4"></div>
        <div className="w-24 h-1.5 bg-gray-200 mt-5 mb-24 rounded-full"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10">
        <div className="w-full p-10 bg-white rounded-xl shadow-lg animate-pulse">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-2 h-12 bg-gray-200 rounded-full"></div>
              <div className="h-8 bg-gray-200 rounded w-24"></div>
            </div>
            <div className="h-20 bg-gray-200 rounded w-full pl-6"></div>
          </div>
        </div>

        <div className="w-full p-10 bg-white rounded-xl shadow-lg animate-pulse">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-2 h-12 bg-gray-200 rounded-full"></div>
              <div className="h-8 bg-gray-200 rounded w-24"></div>
            </div>
            <div className="space-y-4 pl-6">
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              <div className="h-4 bg-gray-200 rounded w-4/5"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full">
      {/* Sejarah */}
      {sejarahLoading ? (
        <SejarahSkeleton />
      ) : sejarahError ? (
        <div className="w-full py-16 px-4">
          <div className="max-w-3xl mx-auto p-6 bg-red-50 rounded-lg text-center">
            <h3 className="text-xl font-bold text-red-600 mb-2">
              Error Loading Content
            </h3>
            <p className="text-gray-700">
              {sejarahError?.message ||
                "Failed to load history content. Please try again later."}
            </p>
          </div>
        </div>
      ) : (
        <>
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
              src={sejarahData?.image ? baseUrl + sejarahData?.image : Image3}
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
              <h1 className="text-2xl md:text-6xl text-gray-50 font-semibold font-display text-center">
                {sejarahData?.title}
              </h1>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="h-fit bg-white px-4 md:px-10 lg:px-24 py-16 md:py-10 lg:py-20 space-y-7 relative"
          >
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="ck-content"
              dangerouslySetInnerHTML={{ __html: sejarahData?.description }}
            />
          </motion.div>
        </>
      )}

      {/* visi dan misi */}
      {visiLoading || misiLoading ? (
        <VisiMisiSkeleton />
      ) : visiError || misiError ? (
        <div className="h-fit w-full section-background px-4 py-16 md:px-10 lg:px-24 md:py-10 lg:py-20">
          <div className="max-w-3xl mx-auto p-6 bg-red-50 rounded-lg text-center">
            <h3 className="text-xl font-bold text-red-600 mb-2">
              Error Loading Content
            </h3>
            <p className="text-gray-700">
              {visiError?.message ||
                misiError?.message ||
                "Failed to load vision and mission content. Please try again later."}
            </p>
          </div>
        </div>
      ) : (
        <motion.div
          className="h-fit w-full section-background px-4 py-16 md:px-10 lg:px-24 md:py-10 lg:py-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col items-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl md:text-4xl font-display font-bold text-center text-gray-800"
            >
              Visi & Misi
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="w-24 h-1.5 bg-primary-gold mt-5 mb-24 rounded-full"
              style={{ originX: 0.5 }}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10">
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
                  "{visiData?.content}"
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
                  {misiData?.map((item) => (
                    <li key={item.id} className="flex items-start gap-2">
                      <span className="w-2 h-2 mt-2 bg-secondary-green rounded-full"></span>
                      <p>{item.content}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Sejarah;
