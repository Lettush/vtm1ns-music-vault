import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Music from "./components/pages/Music";
import Navbar from "./components/sections/Navbar";
import MusicDetail from "./components/pages/MusicDetail";
import Footer from "./components/sections/Footer";

function App() {
  

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/music" element={<Music />} />
        <Route path="/music/:id" element={<MusicDetail />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
