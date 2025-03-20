import { motion } from "motion/react";
import { Building2, TrendingUp, Users2 } from "lucide-react";
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
  return (
    <div className="container mx-auto mt-44 md:mt-10 h-[500px] flex flex-col justify-center">
      <div className="flex flex-col items-center">
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
          className="w-24 h-1.5 bg-primary-gold mt-5 mb-24 rounded-full"
          style={{ originX: 0.5 }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="px-4 md:px-24 grid grid-cols-1 md:grid-cols-3 gap-8"
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
                  {stat.label === "Pertumbuhan"
                    ? stat.suffix || "%"
                    : stat.suffix || "+"}
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
  );
};

export default Achievements;
