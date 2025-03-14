import "./App.css";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="w-full h-screen bg-gray-50">
        <h2 className="text-2xl text-gray-800">Hello</h2>
      </div>
    </>
  );
}

export default App;
