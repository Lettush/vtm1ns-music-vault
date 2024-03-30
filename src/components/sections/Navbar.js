import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { useRef } from "react";

const Navbar = () => {
  const links = useRef();

  const showLinks = () => {
    links.current.classList.toggle("links");
  };

  return (
    <>
      <nav>
        <Link to="/" className="home-link">
          vtm1ns
        </Link>
        <MenuIcon fontSize="large" onClick={showLinks} />
        <div ref={links}>
          <Link to="/music"> Music </Link>
          <Link to="/rates"> Rates </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
