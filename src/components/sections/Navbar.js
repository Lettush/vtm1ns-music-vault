import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/" className="home-link"> vtm1ns </Link>
      <div>
        <Link to="/music"> Music </Link>
        <Link to="/rates"> Rates </Link>
        <Link to="/socials"> Socials </Link>
      </div>
    </nav>
  );
};

export default Navbar;
