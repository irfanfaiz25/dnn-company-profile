import { motion } from "motion/react";
import { Building2, UserCheck, Users2 } from "lucide-react";
import { useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

const Achievements = () => {
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
      count: "7",
      label: "Cabang",
      color: "bg-primary-gold",
      iconColor: "text-amber-700",
      delay: 0.2,
    },
    {
      icon: <Users2 size={32} />,
      count: "350",
      label: "Karyawan",
      color: "bg-secondary-green",
      iconColor: "text-green-200",
      delay: 0.4,
    },
    {
      icon: <UserCheck size={32} />,
      count: "1200",
      label: "Customer",
      color: "bg-tertiary-red",
      iconColor: "text-red-200",
      delay: 0.6,
    },
  ];
  return (
    <div className="mx-auto min-h-screen py-16 md:py-24 bg-gradient-to-t from-white via-yellow-50 to-primary-gold/20">
      <div className="flex flex-col justify-center items-center mb-10 md:mb-16 px-4 md:px-14">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl md:text-4xl font-display font-bold text-center text-gray-800"
        >
          Pencapaian Kami
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-24 h-1.5 bg-primary-gold mt-5 mb-8 rounded-full"
          style={{ originX: 0.5 }}
        />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center text-gray-600 max-w-3xl mb-10 md:mb-16 px-4"
        >
          Setiap pencapaian kami merupakan bukti nyata dari komitmen untuk
          memberikan yang terbaik. Didukung oleh tim profesional yang
          berdedikasi dan kepercayaan pelanggan yang terus bertumbuh bersama
          kami.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="px-4 md:px-8 xl:px-24 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
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
            <div className="h-auto py-10 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 px-4 md:px-6 flex flex-col justify-center items-center relative overflow-hidden">
              <div
                className={`${stat.color} h-16 w-16 rounded-full flex justify-center items-center transform group-hover:scale-110 transition-transform duration-300 mb-4`}
              >
                <div
                  className={`${stat.iconColor} transform group-hover:rotate-12 transition-transform duration-300`}
                >
                  {stat.icon}
                </div>
              </div>
              <div className="relative z-10 text-center">
                <motion.h1
                  className="text-3xl md:text-4xl font-bold font-display text-gray-800 mb-1"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: stat.delay + 0.2 }}
                >
                  <Counter from={0} to={parseInt(stat.count)} duration={2} />
                  {stat.suffix || "+"}
                </motion.h1>
                <motion.p
                  className="text-lg font-medium text-gray-600"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
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
  );
};

export default Achievements;
