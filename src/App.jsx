import { Route, Routes, useLocation } from "react-router";
import "./App.css";
import Beranda from "./Pages/Beranda";
import Navbar from "./Components/Navbar";
import Sejarah from "./Pages/Sejarah";
import Footer from "./Components/Footer";
import TimManajemen from "./Pages/TimManajemen";
import { useEffect } from "react";
import Produk from "./Pages/Produk";
import Sorotan from "./Pages/Sorotan";
import SorotanDetail from "./Pages/SorotanDetail";
import Kontak from "./Pages/Kontak";

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
        <Route path="/revolusi-dalam-sorotan" element={<Sorotan />} />
        <Route
          path="/revolusi-dalam-sorotan/:slug"
          element={<SorotanDetail />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
