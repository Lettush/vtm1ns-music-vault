import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const links = document.querySelector("#mobile-links");
  const showLinks = () => {
    links.style.display = "flex";
  };

  const hideLinks = () => {
    links.style.display = "none";
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
      <div id="mobile-links">
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
