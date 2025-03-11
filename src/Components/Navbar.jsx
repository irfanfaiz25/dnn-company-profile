import { motion, useScroll } from "motion/react";
import { useEffect, useState } from "react";

const Navbar = () => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsScrolled(latest > 0);
    });
  }, [scrollY]);

  return (
    <nav className={`w-full fixed top-0 z-[999]`}>
      <motion.div
        animate={{
          backgroundColor: isScrolled
            ? "rgb(239 191 4 / 0.8)"
            : "rgba(255, 255, 255, 0)",
        }}
        transition={{ duration: 0.3 }}
        className="backdrop-blur-sm"
      >
        <div className="mx-auto px-20">
          <div className="flex w-full h-[4.5rem] justify-between items-center">
            <h4 className="text-xl font-display font-semibold text-gray-800">
              Nusantara
            </h4>
            <ul className="flex items-center space-x-4">
              <li className="text-base text-gray-800">Home</li>
              <li className="text-base text-gray-800">About Us</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
