import { motion, useScroll } from "motion/react";
import { useEffect, useState } from "react";
import Logo from "../assets/img/logo.png";

const Navbar = () => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsScrolled(latest > 0);
    });
  }, [scrollY]);

  const menus = [
    {
      name: "Beranda",
      url: "",
    },
    {
      name: "Tentang Kami",
      url: "",
    },
    {
      name: "Produk Kami",
      url: "",
    },
    {
      name: "Bisnis Kami",
      url: "",
    },
  ];

  return (
    <nav className={`w-full fixed top-0 z-[999]`}>
      <motion.div
        animate={{
          backgroundColor: isScrolled
            ? "rgb(30, 32, 30 / 0.7)"
            : "rgba(255, 255, 255, 0)",
        }}
        transition={{ duration: 0.3 }}
        // className="backdrop-blur-sm"
        className={`${isScrolled ? "backdrop-blur-md" : ""}`}
      >
        <div className="mx-auto px-24 w-full">
          <div className="grid grid-cols-3 w-full h-[5rem] items-center">
            <div className="flex space-x-3 items-center">
              <img src={Logo} alt="logo" className="h-10" />
              <h4
                className={`text-xl font-header font-semibold space-x-1 ${
                  isScrolled ? "text-gray-800" : "text-gray-50"
                }`}
              >
                <span className="text-[#E1B101]">DWIPA</span>
                <span className="text-[#E41F29]">NUSANTARA</span>
                <span className="text-[#009B4A]">NIAGA</span>
              </h4>
            </div>
            <ul className="flex justify-center items-center space-x-5">
              {menus.map((item, index) => (
                <motion.li
                  key={index}
                  className={`relative text-base cursor-pointer font-medium ${
                    isScrolled ? "text-gray-50" : "text-gray-50"
                  }`}
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                >
                  {item.name}
                  {item.name === "Beranda" ? (
                    <div className="absolute -bottom-1 left-0 w-[30px] h-1 bg-primary-gold origin-left"></div>
                  ) : (
                    <motion.div
                      variants={{
                        rest: { width: "0%" },
                        hover: { width: "30px" },
                      }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="absolute -bottom-1 left-0 h-1 bg-primary-gold origin-left"
                    />
                  )}
                </motion.li>
              ))}
            </ul>
            <div className="flex justify-end items-center">
              <button class="relative inline-flex items-center justify-start inline-block px-6 py-2.5 overflow-hidden font-medium rounded-full group curpo">
                <span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-primary-gold opacity-[3%]"></span>
                <span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-primary-gold opacity-100 group-hover:-translate-x-8"></span>
                <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">
                  Kontak Kami
                </span>
                <span class="absolute inset-0 border-2 border-primary-gold rounded-full"></span>
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
