import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/pages/Home";
import Navbar from "./components/sections/Navbar";
import MusicDetail from "./components/pages/MusicDetail";
import Footer from "./components/sections/Footer";

function App() {
  const location = useLocation();
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/music/:id"
          element={
            <MusicDetail />
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
