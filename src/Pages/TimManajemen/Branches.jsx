import { Users2, MapPin, Calendar } from "lucide-react";
import { motion } from "motion/react";

const Branches = () => {
  const branches = [
    {
      city: "Boyolali",
      region: "Jawa Tengah",
      established: "November 2024",
      address: "Jl. Raya Boyolali No. 123",
    },
    {
      city: "Sukoharjo",
      region: "Jawa Tengah",
      established: "Desember 2024",
      address: "Jl. Raya Boyolali No. 123",
    },
    {
      city: "Karanganyar",
      region: "Jawa Tengah",
      established: "Januari 2025",
      address: "Jl. Raya Boyolali No. 123",
    },
    {
      city: "Wonogiri",
      region: "Jawa Tengah",
      established: "Januari 2025",
      address: "Jl. Raya Boyolali No. 123",
    },
    {
      city: "Ponorogo",
      region: "Jawa Timur",
      established: "Februari 2025",
      address: "Jl. Raya Boyolali No. 123",
    },
    {
      city: "Cirebon",
      region: "Jawa Barat",
      established: "April 2025",
      address: "Jl. Raya Boyolali No. 123",
    },
    {
      city: "Yogyakarta",
      region: "DIY",
      established: "April 2025",
      address: "Jl. Raya Boyolali No. 123",
    },
  ];

  return (
    <div className="mx-auto min-h-screen py-16 md:py-24 bg-white">
      <div className="flex flex-col justify-center items-center mb-10 md:mb-16 px-4 md:px-14">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-display font-bold text-center text-gray-800"
        >
          Jaringan Cabang Kami
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-24 h-1.5 bg-primary-gold mt-5 mb-8 rounded-full"
          style={{ originX: 0.5 }}
        />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center text-gray-600 max-w-2xl mb-10 md:mb-16 px-4"
        >
          Kami terus memperluas jangkauan untuk melayani pelanggan di berbagai
          wilayah dengan standar kualitas yang sama di setiap cabang.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 px-4 md:px-8 xl:px-12"
      >
        {branches.map((branch, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{
              scale: 1.05,
              y: -10,
              transition: { type: "spring", stiffness: 400 },
            }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="bg-white p-4 md:p-6 rounded-2xl shadow-lg hover:shadow-2xl group relative overflow-hidden border border-gray-100"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-gold/5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-tertiary-red/5 rounded-full translate-y-16 -translate-x-16 group-hover:scale-150 transition-transform duration-500" />

            <div className="relative">
              <div className="flex items-center mb-3">
                <MapPin
                  size={20}
                  className="text-primary-gold mr-2 flex-shrink-0"
                />
                <h3 className="text-xl md:text-2xl font-display font-bold text-gray-800 group-hover:text-primary-gold transition-colors">
                  {branch.city}
                </h3>
              </div>
              <p className="text-gray-600 text-sm font-medium mb-2 line-clamp-2">
                {branch.address}
              </p>

              <div className="space-y-3 mt-3">
                <div className="flex items-center text-base text-gray-500">
                  <span>{branch.region}</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar
                    size={16}
                    className="mr-2 text-primary-gold flex-shrink-0"
                  />
                  <span>Established {branch.established}</span>
                </div>
              </div>

              <motion.div
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                className="absolute top-2 right-2 w-8 h-8 bg-primary-gold/10 rounded-full flex items-center justify-center"
              >
                <div className="w-2 h-2 bg-primary-gold rounded-full" />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
export default Branches;
