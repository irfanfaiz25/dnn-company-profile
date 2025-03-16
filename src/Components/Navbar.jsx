import { motion, useScroll } from "motion/react";
import { useEffect, useState } from "react";
import Logo from "../assets/img/logo.png";
import { Link, useLocation } from "react-router";

const Navbar = () => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubmenuIndex, setOpenSubmenuIndex] = useState(null);
  const location = useLocation();

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsScrolled(latest > 0);
    });
  }, [scrollY]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setOpenSubmenuIndex(null);
  }, [location.pathname]);

  const isSubmenuActive = (submenu) => {
    return submenu?.some((item) => location.pathname === item.url);
  };

  const toggleSubmenu = (index) => {
    setOpenSubmenuIndex(openSubmenuIndex === index ? null : index);
  };

  const menus = [
    {
      name: "Beranda",
      url: "/",
    },
    {
      name: "Tentang Kami",
      url: "",
      submenu: [
        {
          name: "Sejarah Perusahaan",
          url: "/sejarah",
        },
        {
          name: "Tim & Manajemen",
          url: "/tim-manajemen",
        },
      ],
    },
    {
      name: "Produk",
      url: "/produk-kami",
    },
    {
      name: "Bisnis",
      url: "/bisnis-kami",
    },
  ];

  return (
    <nav className={`w-full fixed top-0 z-[999]`}>
      <motion.div
        animate={{
          backgroundColor:
            isScrolled || isMenuOpen
              ? "rgb(23,23,23 / 0.8)"
              : "rgba(255, 255, 255, 0)",
        }}
        transition={{ duration: 0.3 }}
        className={`${isScrolled || isMenuOpen ? "backdrop-blur-sm" : ""}`}
      >
        <div className="mx-auto px-4 md:px-8 lg:px-24 w-full">
          <div className="flex justify-between w-full h-[5rem] items-center">
            {/* Logo section */}
            <div className="flex space-x-3 items-center">
              <img src={Logo} alt="logo" className="h-8 md:h-10" />
              <h4
                className={`text-lg md:text-xl font-header font-semibold space-x-1 ${
                  isScrolled || isMenuOpen ? "text-gray-800" : "text-gray-50"
                }`}
              >
                <span className="text-[#E1B101]">DWIPA</span>
                <span className="text-[#e3333c]">NUSANTARA</span>
                <span className="text-[#009B4A]">NIAGA</span>
              </h4>
            </div>

            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 rounded-md ${
                  isScrolled ? "text-gray-50" : "text-gray-800"
                }`}
              >
                {isMenuOpen ? (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>

            {/* Desktop menu */}
            <div className="hidden lg:flex lg:items-center lg:justify-between lg:flex-1">
              <ul className="flex justify-center items-center space-x-5 mx-auto">
                {menus.map((item, index) => (
                  <div key={index} className="relative group">
                    {item.submenu ? (
                      <div className="relative">
                        <motion.div
                          className={`flex items-center gap-1 text-base cursor-pointer font-medium ${
                            location.pathname === "/sejarah"
                              ? "text-gray-50"
                              : isScrolled
                              ? "text-gray-50"
                              : "text-gray-800"
                          }`}
                          initial="rest"
                          whileHover="hover"
                          animate="rest"
                        >
                          {item.name}
                          <svg
                            className="w-4 h-4 ml-1 transition-transform group-hover:rotate-180"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                          {isSubmenuActive(item.submenu) && (
                            <div className="absolute -bottom-1 left-0 w-[30px] h-1 bg-primary-gold origin-left rounded-full"></div>
                          )}
                        </motion.div>

                        {/* submenu */}
                        <div className="absolute top-12 right-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                          <div className="bg-neutral-800/90 w-52 rounded-md shadow-lg overflow-hidden p-2 space-y-2">
                            {item.submenu.map((subItem, subIndex) => (
                              <Link
                                key={subIndex}
                                to={subItem.url}
                                className={`block px-5 py-3 text-sm text-gray-50 ${
                                  location.pathname === subItem.url
                                    ? "bg-primary-gold text-gray-800"
                                    : "hover:bg-primary-gold hover:text-gray-800"
                                }  whitespace-nowrap transition-colors duration-200 rounded-md`}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <Link to={item.url}>
                        <motion.div
                          className={`relative text-base cursor-pointer font-medium ${
                            location.pathname === "/sejarah"
                              ? "text-gray-50"
                              : isScrolled
                              ? "text-gray-50"
                              : "text-gray-800"
                          }`}
                          initial="rest"
                          whileHover="hover"
                          animate="rest"
                        >
                          {item.name}
                          {/* active indicator */}
                          {location.pathname === item.url ? (
                            <div className="absolute -bottom-1 left-0 w-[30px] h-1 bg-primary-gold origin-left rounded-full"></div>
                          ) : (
                            <motion.div
                              variants={{
                                rest: { width: "0%" },
                                hover: { width: "30px" },
                              }}
                              transition={{ duration: 0.4, ease: "easeInOut" }}
                              className="absolute -bottom-1 left-0 h-1 bg-primary-gold origin-left rounded-full"
                            />
                          )}
                        </motion.div>
                      </Link>
                    )}
                  </div>
                ))}
              </ul>
              <div className="flex justify-end items-center">
                <button className="relative inline-flex items-center justify-start px-6 py-2.5 overflow-hidden font-medium rounded-full group">
                  <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-primary-gold opacity-[3%]"></span>
                  <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-primary-gold opacity-100 group-hover:-translate-x-8"></span>
                  <span
                    className={`relative w-full text-left transition-colors duration-200 ease-in-out ${
                      location.pathname === "/sejarah"
                        ? "text-gray-50"
                        : isScrolled
                        ? "text-gray-50"
                        : "text-gray-800"
                    } group-hover:text-gray-900`}
                  >
                    Kontak Kami
                  </span>
                  <span className="absolute inset-0 border-2 border-primary-gold rounded-full"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden p-2">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-black/80 rounded-lg backdrop-blur-sm">
            {menus.map((item, index) => (
              <div key={index} className="space-y-1">
                {item.submenu ? (
                  <div>
                    <div
                      className="flex items-center justify-between px-3 py-3 text-base font-medium text-gray-50 rounded-md cursor-pointer hover:bg-primary-gold hover:text-gray-900"
                      onClick={() => toggleSubmenu(index)}
                    >
                      <span>{item.name}</span>
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${
                          openSubmenuIndex === index ? "rotate-180" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                    <div
                      className={`pl-4 mt-1 space-y-1 overflow-hidden transition-all duration-300 ${
                        openSubmenuIndex === index
                          ? "max-h-40 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      {item.submenu.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          to={subItem.url}
                          className={`block px-3 py-3 text-sm rounded-md ${
                            location.pathname === subItem.url
                              ? "bg-primary-gold text-gray-900"
                              : "text-gray-300 hover:bg-primary-gold hover:text-gray-900"
                          }`}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.url}
                    className={`block px-3 py-3 text-base font-medium rounded-md ${
                      location.pathname === item.url
                        ? "bg-primary-gold text-gray-900"
                        : "text-gray-50 hover:bg-primary-gold hover:text-gray-900"
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-2 pb-1">
              <button className="w-full px-3 py-2.5 text-base font-medium text-center text-gray-900 bg-primary-gold rounded-md hover:bg-primary-gold/90">
                Kontak Kami
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
