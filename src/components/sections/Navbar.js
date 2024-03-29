import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { useEffect, useRef } from "react";

const Navbar = () => {
  const linksRef = useRef();

  useEffect(() => {
    linksRef.current.style.display = "none";
  }, [])

  const showLinks = () => {
    linksRef.current.style.display = "flex";
  };

  const hideLinks = () => {
    linksRef.current.style.display = "none";
  };

  return (
    <nav>
      <Link to="/" className="home-link">
        vtm1ns
      </Link>
      <MenuIcon
        fontSize="large"
        onMouseOver={showLinks}
        onMouseLeave={hideLinks}
      />
      <div id="mobile-links" ref={linksRef}>
        <Link to="/music"> Music </Link>
        <Link to="/rates"> Rates </Link>
        <Link to="/socials"> Socials </Link>
      </div>
      <div id="desktop-links">
        <Link to="/music"> Music </Link>
        <Link to="/rates"> Rates </Link>
        <Link to="/socials"> Socials </Link>
      </div>
    </nav>
  );
};

export default Navbar;
