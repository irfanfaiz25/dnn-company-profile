import { motion } from "framer-motion";
import Logo from "../assets/img/logo.png";

const Footer = () => {
  return (
    <footer className="bg-neutral-900/80 backdrop-blur-md text-gray-300">
      <div className="mx-auto px-24 py-16">
        <div className="grid grid-cols-4 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <img src={Logo} alt="logo" className="h-10" />
              <h4 className="text-xl font-header font-semibold space-x-1">
                <span className="text-[#E1B101]">DWIPA</span>
                <span className="text-[#e3333c]">NUSANTARA</span>
                <span className="text-[#009B4A]">NIAGA</span>
              </h4>
            </div>
            <p className="text-sm text-gray-400">
              Menjadi mitra terpercaya dalam perdagangan dan distribusi di
              Indonesia.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h5 className="text-lg font-semibold text-white">Kontak</h5>
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
                <span>info@dwipanusantara.com</span>
              </li>
              <li className="flex items-center gap-2 hover:text-primary-gold transition-colors">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>+62 123 4567 890</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-4"
          >
            <h5 className="text-lg font-semibold text-white">Tautan</h5>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-primary-gold transition-colors">
                <a href="/sejarah">Sejarah Perusahaan</a>
              </li>
              <li className="hover:text-primary-gold transition-colors">
                <a href="/visi-misi">Visi dan Misi</a>
              </li>
              <li className="hover:text-primary-gold transition-colors">
                <a href="/produk-kami">Produk Kami</a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="space-y-4"
          >
            <h5 className="text-lg font-semibold text-white">Ikuti Kami</h5>
            <div className="flex gap-4">
              {["facebook", "twitter", "instagram", "linkedin"].map(
                (social, index) => (
                  <a
                    key={social}
                    href={`#${social}`}
                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-gold transition-colors"
                  >
                    <span className="sr-only">{social}</span>
                    {/* Add social media icons here */}
                  </a>
                )
              )}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="pt-8 border-t border-gray-800"
        >
          <p className="text-sm text-center text-gray-400">
            © {new Date().getFullYear()} PT Dwipa Nusantara Niaga. All rights
            reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
