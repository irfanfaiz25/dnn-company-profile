import { Route, Routes } from "react-router";
import "./App.css";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Sejarah from "./Components/Sejarah";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/sejarah" element={<Sejarah />} />
      </Routes>
    </>
  );
}

export default App;
