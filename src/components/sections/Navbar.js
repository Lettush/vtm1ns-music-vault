import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { useEffect, useRef } from "react";

const Navbar = () => {
  const nav = useRef();
  const links = useRef();
  const cursorDot = useRef();
  const cursorOutline = useRef();

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      const posX = e.clientX;
      const posY = e.clientY;

      cursorDot.current.style.left = `${posX}px`;
      cursorDot.current.style.top = `${posY}px`;

      cursorOutline.current.style.left = `${posX}px`;
      cursorOutline.current.style.top = `${posY}px`;

      cursorOutline.current.animate(
        {
          left: `${posX}px`,
          top: `${posY}px`,
        },
        { duration: 500, fill: "forwards" }
      );
    });

    nav.current.onmousemove = (e) => {
      const { currentTarget: target } = e;
      const rect = target.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;

      target.style.setProperty("--mouse-x", `${x}px`);
      target.style.setProperty("--mouse-y", `${y}px`);
    };
  }, []);

  const showLinks = () => {
    links.current.classList.toggle("links");
  };

  return (
    <>
      {/* Custom Cursor */}
      <div className="cursor-dot" ref={cursorDot}></div>
      <div className="cursor-outline" ref={cursorOutline}></div>
      <nav ref={nav}>
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
