import { Route, Routes } from "react-router";
import "./App.css";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Sejarah from "./Components/Sejarah";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/sejarah" element={<Sejarah />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
