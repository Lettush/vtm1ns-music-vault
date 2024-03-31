import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/pages/Home";
import Music from "./components/pages/Music";
import Navbar from "./components/sections/Navbar";
import MusicDetail from "./components/pages/MusicDetail";
import Footer from "./components/sections/Footer";
import Breadcrumbs from "./components/sections/Breadcrumbs";
import { useState, useEffect } from "react";

function App() {
  const [breadcrumbs, setBreadcrumbs] = useState([]);
  const location = useLocation();

  const toTitleCase = (str) => {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  };

  useEffect(() => {
    const currentURL = new URL(window.location.href).pathname;
    const routesList = currentURL.split("/").slice(1);
    let routes = [{ link: "/", label: "Home" }];

    routesList.map((route) => {
      if (route != "") {
        let label = toTitleCase(route);
        routes.push({ link: `${route}`, label: `${label}` });
      }
    });

    setBreadcrumbs(routes);
  }, [location]);

  return (
    <>
      <Navbar />
      <Breadcrumbs breadcrumbs={breadcrumbs.length > 1 ? breadcrumbs : []} />
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
