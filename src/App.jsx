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
import NotFound from "./Pages/NotFound";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Check if the current route is the NotFound page
  const is404Page = location.pathname !== "/" && 
    !["/sejarah", "/tim-manajemen", "/produk", "/kontak", "/revolusi-rasa"].some(path => 
      location.pathname === path || location.pathname.startsWith(path + "/")
    );

  return (
    <>
      {!is404Page && <Navbar />}
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/sejarah" element={<Sejarah />} />
        <Route path="/tim-manajemen" element={<TimManajemen />} />
        <Route path="/produk" element={<Produk />} />
        <Route path="/kontak" element={<Kontak />} />
        <Route path="/revolusi-rasa" element={<Sorotan />} />
        <Route path="/revolusi-rasa/:slug" element={<SorotanDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {!is404Page && <Footer />}
    </>
  );
}

export default App;
