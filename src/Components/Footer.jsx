import { motion } from "framer-motion";
import Logo from "../assets/img/logo.png";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router";

const Footer = () => {
  const socials = [
    {
      id: 1,
      name: "facebook",
      url: "#facebook",
      icon: <Facebook />,
    },
    {
      id: 2,
      name: "twitter",
      url: "#twitter",
      icon: <Twitter />,
    },
    {
      id: 3,
      name: "instagram",
      url: "https://www.instagram.com/dwipa_nusantaraniaga/",
      icon: <Instagram />,
    },
    {
      id: 4,
      name: "linkedin",
      url: "#linkedin",
      icon: <Linkedin />,
    },
  ];
  return (
    <footer className="bg-black/80 backdrop-blur-md text-gray-300">
      <div className="mx-auto px-4 md:px-8 lg:px-24 py-8 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 md:mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <img src={Logo} alt="logo" className="h-8 md:h-10" />
              <h4 className="text-lg md:text-xl font-header font-semibold space-x-1">
                <span className="text-[#E1B101]">DWIPA</span>
                <span className="text-[#e3333c]">NUSANTARA</span>
                <span className="text-[#009B4A]">NIAGA</span>
              </h4>
            </div>
            <p className="text-sm text-gray-400">
              Menjadi mitra terpercaya dalam perdagangan dan distribusi produk
              tembakau di Indonesia.
            </p>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h5 className="text-base md:text-lg font-semibold text-white">
              Kontak
            </h5>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 hover:text-primary-gold transition-colors">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a href="mailto:info@dwipanusantara.com">
                  info@dwipanusantara.id
                </a>
              </li>
              <li className="flex items-center gap-2 hover:text-primary-gold transition-colors">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <a href="tel:+622983539040">0298-3539-040</a>
              </li>
              <li className="flex items-center gap-2 hover:text-primary-gold transition-colors">
                <a
                  href="https://wa.me/6285117225313"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  (WhatsApp) +62851-1722-5313
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-4"
          >
            <h5 className="text-base md:text-lg font-semibold text-white">
              Tautan
            </h5>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-primary-gold transition-colors">
                <Link to="/sejarah">Sejarah Perusahaan</Link>
              </li>
              <li className="hover:text-primary-gold transition-colors">
                <Link to="/tim-manajemen">Tim & Manajemen</Link>
              </li>
              <li className="hover:text-primary-gold transition-colors">
                <Link href="/produk">Produk Kami</Link>
              </li>
              <li className="hover:text-primary-gold transition-colors">
                <Link href="/revolusi-rasa">Revolusi Rasa</Link>
              </li>
            </ul>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="space-y-4"
          >
            <h5 className="text-base md:text-lg font-semibold text-white">
              Ikuti Kami
            </h5>
            <div className="flex gap-3 md:gap-4">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={`${social.url}`}
                  className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:text-primary-gold transition-colors duration-500"
                >
                  <span className="sr-only">{social.name}</span>
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="pt-6 md:pt-8 border-t border-gray-500"
        >
          <p className="text-xs md:text-sm text-center text-primary-gold">
            © {new Date().getFullYear()} PT Dwipa Nusantara Niaga. All rights
            reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
