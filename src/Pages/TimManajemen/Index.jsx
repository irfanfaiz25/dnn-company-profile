import { useState } from "react";
import { motion } from "motion/react";
import Profile1 from "../../assets/img/profil1.png";
import Profile2 from "../../assets/img/profil2.png";
import Achievements from "./Achievements";
import Branches from "./Branches";
import Testimonials from "./Testimonials";

const TimManajemen = () => {
  const teams = [
    {
      id: 1,
      name: "Budi Santoso",
      position: "Business Management",
      image: Profile1,
      description:
        "Pemimpin visioner dengan pengalaman lebih dari 15 tahun dalam manajemen bisnis dan perencanaan strategis. Dikenal karena mengimplementasikan solusi inovatif yang mendorong pertumbuhan dan efisiensi organisasi. Meraih gelar MBA dari Harvard Business School dengan predikat istimewa. Berhasil memimpin berbagai inisiatif transformasi digital yang menghasilkan pengurangan biaya 45% dan pertumbuhan pendapatan 30%. Pembicara utama reguler di konferensi bisnis Fortune 500 dan mentor bagi para pemimpin bisnis yang sedang berkembang.",
    },
    {
      id: 2,
      name: "Rani Aprilia",
      position: "Operational Manager",
      image: Profile2,
      description:
        "Manajer operasional berpengalaman dengan lebih dari 10 tahun dalam mengoptimalkan proses bisnis dan meningkatkan efisiensi organisasi. Ahli dalam manajemen lean dan metodologi Six Sigma. Memimpin tim lintas fungsi dalam implementasi sistem ERP yang berhasil mengurangi biaya operasional sebesar 35%.",
    },
    {
      id: 3,
      name: "Rendi Irwansyah",
      position: "Financial Analyst",
      image: Profile1,
      description:
        "Analis Keuangan Tersertifikasi dengan keahlian dalam strategi investasi dan manajemen risiko. Sebelumnya bekerja dengan bank-bank investasi terkemuka. Spesialis dalam analisis pasar dan optimalisasi portofolio. Memiliki rekam jejak mencapai return 20% di atas pasar untuk portofolio yang dikelola.",
    },
    {
      id: 4,
      name: "Sinta Sari",
      position: "Marketing Specialist",
      image: Profile2,
      description:
        "Profesional pemasaran kreatif dengan keahlian dalam pemasaran digital dan pengembangan merek. Memimpin kampanye sukses untuk perusahaan Fortune 100. Mencapai peningkatan 150% dalam keterlibatan media sosial dan pertumbuhan pangsa pasar 40% melalui strategi pemasaran inovatif.",
    },
  ];

  const [selectedProfile, setSelectedProfile] = useState(teams[0]);

  return (
    <div className="w-full h-full">
      <div className="pt-12 md:pt-6 bg-gradient-to-br from-white via-yellow-100 to-primary-gold overflow-hidden">
        {/* Profile Display */}
        <div className="w-full min-h-screen relative">
          <div className="container mx-auto px-4 md:px-16 h-full flex flex-col md:flex-row items-center justify-between space-y-16 md:space-y-0 py-8 md:py-0">
            {/* Content wrapper - Reorder for mobile */}
            <div className="w-full md:w-1/2 md:pr-12 flex flex-col-reverse md:flex-col">
              <motion.div
                key={selectedProfile.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="min-h-[250px] md:h-[370px] mt-8 md:mt-0"
              >
                <h1 className="text-4xl md:text-6xl font-display font-bold text-gray-800 mb-3">
                  {selectedProfile.name}
                </h1>
                <h4 className="text-2xl font-medium text-gray-700 mb-8">
                  {selectedProfile.position}
                </h4>
                <p className="text-lg leading-relaxed text-gray-600">
                  {selectedProfile.description}
                </p>
              </motion.div>

              {/* teams profile */}
              <div className="w-full md:w-fit h-fit mt-6 md:mt-10 p-4 md:p-8 bg-black/40 backdrop-blur-lg rounded-xl flex flex-wrap md:flex-nowrap justify-center gap-4 md:gap-8 shadow-2xl">
                {teams.map((item, index) => (
                  <motion.div
                    key={index}
                    className={`flex flex-col items-center w-36 transition-all duration-300 cursor-pointer
                ${
                  selectedProfile.id === item.id
                    ? "scale-110"
                    : "hover:scale-105"
                }`}
                    onClick={() => setSelectedProfile(item)}
                    whileHover={{ y: -5 }}
                  >
                    <div
                      className={`w-24 h-24 rounded-full bg-white shadow-lg overflow-hidden 
                ${
                  selectedProfile.id === item.id
                    ? "border-4 border-primary-gold"
                    : "border-2 border-primary-gold/50"
                }`}
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full rounded-full object-contain transition-transform duration-300 hover:scale-110"
                      />
                    </div>
                    <h3
                      className={`mt-3 text-base font-semibold text-center
                ${
                  selectedProfile.id === item.id
                    ? "text-primary-gold"
                    : "text-gray-50"
                }`}
                    >
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-200 font-medium text-center mt-1">
                      {item.position}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right side - Profile image */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-end items-center mb-8 md:mb-0">
              <motion.div
                className="relative w-[80%] group cursor-pointer"
                key={selectedProfile.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-200 to-primary-gold opacity-75 transform rotate-6 scale-95 transition-transform duration-300 group-hover:rotate-12"></div>
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-300 group-hover:scale-105">
                  <img
                    src={selectedProfile.image}
                    alt={selectedProfile.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Achievements Display */}
        <Achievements />

        {/* Branches Display */}
        <Branches />
      </div>

      {/* Testimonials Display */}
      <Testimonials />
    </div>
  );
};

export default TimManajemen;
