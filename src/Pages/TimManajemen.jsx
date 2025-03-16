import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import Profile1 from "../assets/img/profil1.png";
import Profile2 from "../assets/img/profil2.png";
import { Building2, TrendingUp, Users2 } from "lucide-react";

const TimManajemen = () => {
  const teams = [
    {
      id: 1,
      name: "Alexander Gophel",
      position: "Business Management",
      image: Profile1,
      description:
        "Pemimpin visioner dengan pengalaman lebih dari 15 tahun dalam manajemen bisnis dan perencanaan strategis. Dikenal karena mengimplementasikan solusi inovatif yang mendorong pertumbuhan dan efisiensi organisasi. Meraih gelar MBA dari Harvard Business School dengan predikat istimewa. Berhasil memimpin berbagai inisiatif transformasi digital yang menghasilkan pengurangan biaya 45% dan pertumbuhan pendapatan 30%. Pembicara utama reguler di konferensi bisnis Fortune 500 dan mentor bagi para pemimpin bisnis yang sedang berkembang.",
    },
    {
      id: 2,
      name: "Jane Doe",
      position: "Operational Manager",
      image: Profile2,
      description:
        "Manajer operasional berpengalaman dengan lebih dari 10 tahun dalam mengoptimalkan proses bisnis dan meningkatkan efisiensi organisasi. Ahli dalam manajemen lean dan metodologi Six Sigma. Memimpin tim lintas fungsi dalam implementasi sistem ERP yang berhasil mengurangi biaya operasional sebesar 35%.",
    },
    {
      id: 3,
      name: "John Smith",
      position: "Financial Analyst",
      image: Profile1,
      description:
        "Analis Keuangan Tersertifikasi dengan keahlian dalam strategi investasi dan manajemen risiko. Sebelumnya bekerja dengan bank-bank investasi terkemuka. Spesialis dalam analisis pasar dan optimalisasi portofolio. Memiliki rekam jejak mencapai return 20% di atas pasar untuk portofolio yang dikelola.",
    },
    {
      id: 4,
      name: "Sarah Johnson",
      position: "Marketing Specialist",
      image: Profile2,
      description:
        "Profesional pemasaran kreatif dengan keahlian dalam pemasaran digital dan pengembangan merek. Memimpin kampanye sukses untuk perusahaan Fortune 100. Mencapai peningkatan 150% dalam keterlibatan media sosial dan pertumbuhan pangsa pasar 40% melalui strategi pemasaran inovatif.",
    },
  ];

  const Counter = ({ from, to, duration }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref);

    useEffect(() => {
      let startTime;
      let animationFrame;

      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = (timestamp - startTime) / (duration * 1000);

        if (progress < 1) {
          setCount(Math.floor(from + (to - from) * progress));
          animationFrame = requestAnimationFrame(animate);
        } else {
          setCount(to);
        }
      };

      if (isInView) {
        animationFrame = requestAnimationFrame(animate);
      }

      return () => cancelAnimationFrame(animationFrame);
    }, [from, to, duration, isInView]);

    return <span ref={ref}>{count}</span>;
  };

  const stats = [
    {
      icon: <Building2 size={32} />,
      count: "20",
      label: "Cabang",
      color: "primary-gold",
      iconColor: "text-amber-700",
      delay: 0.2,
    },
    {
      icon: <Users2 size={32} />,
      count: "500",
      label: "Karyawan",
      color: "secondary-green",
      iconColor: "text-green-200",
      delay: 0.4,
    },
    {
      icon: <TrendingUp size={32} />,
      count: "45",
      label: "Pertumbuhan",
      color: "tertiary-red",
      iconColor: "text-red-200",
      delay: 0.6,
    },
  ];

  const [selectedProfile, setSelectedProfile] = useState(teams[0]);

  return (
    <div className="w-full h-full pt-6 pb-20 bg-gradient-to-br from-white via-yellow-100 to-primary-gold overflow-hidden">
      <div className="w-full h-screen relative">
        <div className="container mx-auto px-16 h-full flex items-center justify-between">
          {/* Left side - Text content */}
          <div className="w-1/2 pr-12">
            <motion.div
              key={selectedProfile.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="h-[370px]"
            >
              <h1 className="text-6xl font-display font-bold text-gray-800 mb-3">
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
            <div className="w-fit h-fit mt-10 p-8 bg-black/40 backdrop-blur-lg rounded-xl flex gap-8 shadow-2xl">
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
          <div className="w-1/2 flex justify-end items-center">
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

      <div className="container mx-auto mt-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-display font-bold text-center text-gray-800 mb-12"
        >
          Pencapaian Kami
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-8 px-24 grid grid-cols-3 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: stat.delay,
                ease: "easeOut",
              }}
              className="group hover:-translate-y-2 transition-all duration-300"
            >
              <div className="h-44 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 px-10 py-6 flex space-x-6 items-center relative overflow-hidden">
                <div
                  className={`bg-${stat.color} h-24 w-24 rounded-2xl flex justify-center items-center transform group-hover:scale-110 transition-transform duration-300`}
                >
                  <div
                    className={`${stat.iconColor} transform group-hover:rotate-12 transition-transform duration-300`}
                  >
                    {stat.icon}
                  </div>
                </div>
                <div className="relative z-10">
                  <motion.h1
                    className="text-4xl font-bold font-display text-gray-800 mb-1"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: stat.delay + 0.2 }}
                  >
                    <Counter from={0} to={stat.count} duration={2} />
                    {stat.suffix || "+"}
                  </motion.h1>
                  <motion.p
                    className="text-lg font-medium text-gray-600"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: stat.delay + 0.3 }}
                  >
                    {stat.label}
                  </motion.p>
                </div>
                <div
                  className={`absolute -right-12 -bottom-12 w-48 h-48 bg-gray-100/50 rounded-full transform group-hover:scale-150 transition-transform duration-500`}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TimManajemen;
