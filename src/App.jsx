import { Route, Routes } from "react-router";
import "./App.css";
import Hero from "./Pages/Hero";
import Navbar from "./Components/Navbar";
import Sejarah from "./Pages/Sejarah";
import Footer from "./Components/Footer";
import TimManajemen from "./Pages/TimManajemen";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/sejarah" element={<Sejarah />} />
        <Route path="/tim-manajemen" element={<TimManajemen />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
