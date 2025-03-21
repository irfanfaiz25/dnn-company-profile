import { Building2, Users2 } from "lucide-react";
import { motion } from "motion/react";

const Branches = () => {
  const branches = [
    {
      city: "Boyolali",
      region: "Jawa Tengah",
      established: 2013,
      employees: 62,
    },
    {
      city: "Sukoharjo",
      region: "Jawa Tengah",
      established: 2010,
      employees: 45,
    },
    {
      city: "Wonogiri",
      region: "Jawa Tengah",
      established: 2012,
      employees: 38,
    },
    {
      city: "Ponorogo",
      region: "Jawa Timur",
      established: 2008,
      employees: 75,
    },
  ];

  return (
    <div className="container mx-auto mt-32 xl:mt-0 py-24 px-8">
      <div className="flex flex-col items-center mb-16">
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
          className="w-24 h-1.5 bg-primary-gold mt-5 rounded-full"
          style={{ originX: 0.5 }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 px-0 xl:px-8"
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
            className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-2xl group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-gold/5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-tertiary-red/5 rounded-full translate-y-16 -translate-x-16 group-hover:scale-150 transition-transform duration-500" />

            <div className="relative">
              <h3 className="text-2xl font-display font-bold text-gray-800 mb-2 group-hover:text-primary-gold transition-colors">
                {branch.city}
              </h3>
              <p className="text-gray-600 font-medium">{branch.region}</p>

              <div className="mt-4 space-y-2">
                <div className="flex items-center text-sm text-gray-500">
                  <Building2 size={16} className="mr-2 text-primary-gold" />
                  <span>Established {branch.established}</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Users2 size={16} className="mr-2 text-primary-gold" />
                  <span>{branch.employees} Karyawan</span>
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
