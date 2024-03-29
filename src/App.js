import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/pages/Home";
import Navbar from "./components/sections/Navbar";

function App() {
  const location = useLocation();
  return (
    <>
      {location.pathname !== "/" && <Navbar />}
      {console.log(location.pathname)}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
