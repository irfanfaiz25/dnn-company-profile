import { Route, Routes, useLocation } from "react-router";
import "./App.css";
import Hero from "./Pages/Hero";
import Navbar from "./Components/Navbar";
import Sejarah from "./Pages/Sejarah";
import Footer from "./Components/Footer";
import TimManajemen from "./Pages/TimManajemen";
import { useEffect } from "react";
import Produk from "./Pages/Produk";
import Sorotan from "./Pages/Sorotan";
import SorotanDetail from "./Pages/SorotanDetail";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/sejarah" element={<Sejarah />} />
        <Route path="/tim-manajemen" element={<TimManajemen />} />
        <Route path="/produk" element={<Produk />} />
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
