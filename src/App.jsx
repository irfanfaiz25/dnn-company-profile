import { Route, Routes, useLocation } from "react-router";
import "./App.css";
import Beranda from "./Pages/Beranda/Index";
import Navbar from "./Components/Navbar";
import Sejarah from "./Pages/Sejarah/Index";
import Footer from "./Components/Footer";
import TimManajemen from "./Pages/TimManajemen/Index";
import { useEffect } from "react";
import Produk from "./Pages/Produk/Index";
import Sorotan from "./Pages/Sorotan/Index";
import SorotanDetail from "./Pages/Sorotan/SorotanDetail";
import Kontak from "./Pages/Kontak/Index";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/sejarah" element={<Sejarah />} />
        <Route path="/tim-manajemen" element={<TimManajemen />} />
        <Route path="/produk" element={<Produk />} />
        <Route path="/kontak" element={<Kontak />} />
        <Route path="/revolusi-rasa" element={<Sorotan />} />
        <Route path="/revolusi-rasa/:slug" element={<SorotanDetail />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
