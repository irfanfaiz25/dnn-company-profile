import { motion } from "framer-motion";
import Logo from "../assets/img/logo.png";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router";
import { useEffect, useState } from "react";
import { fetchInformationData } from "../services/api";

const Footer = () => {
  const [information, setInformation] = useState(null);
  const [loading, setLoading] = useState(true);
  const BaseUrl = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchInformationData();
        setInformation(data);
      } catch (error) {
        console.error("Error fetching information:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const socials = [
    {
      id: 1,
      name: "facebook",
      url: information?.facebook?.value || "#",
      icon: <Facebook />,
    },
    {
      id: 2,
      name: "twitter",
      url: information?.twitter?.value || "#",
      icon: <Twitter />,
    },
    {
      id: 3,
      name: "instagram",
      url: information?.instagram?.value || "#",
      icon: <Instagram />,
    },
    {
      id: 4,
      name: "linkedin",
      url: information?.linkedin?.value || "#",
      icon: <Linkedin />,
    },
  ];

  if (loading) {
    return <div>Loading...</div>; // You can replace this with a proper loading component
  }

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
              <img
                src={
                  information?.company_name?.image_url
                    ? BaseUrl + information.company_name.image_url
                    : Logo
                }
                alt="logo"
                className="h-8 md:h-10"
              />
              <h4 className="text-lg md:text-xl font-header font-semibold space-x-1">
                <span className="text-[#E1B101]">DWIPA</span>
                <span className="text-[#e3333c]">NUSANTARA</span>
                <span className="text-[#009B4A]">NIAGA</span>
              </h4>
            </div>
            <p className="text-sm text-gray-400"></p>Menjadi mitra terpercaya
            dalam perdagangan dan distribusi produk tembakau di Indonesia.
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
                <a href={`mailto:${information?.email?.value}`}>
                  {information?.email?.value}
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
                <a href={`tel:${information?.phone?.value}`}>
                  {information?.phone?.value}
                </a>
              </li>
              <li className="flex items-center gap-2 hover:text-primary-gold transition-colors">
                <a
                  href={`https://wa.me/${information?.whatsapp?.value?.replace(
                    /\+/g,
                    ""
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  {information?.whatsapp?.value}
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
            © {new Date().getFullYear()} {information?.company_name?.value}. All
            rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
