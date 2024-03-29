import Default from "../../assets/images/default.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <header>
        <h1>
          <span>vtm1ns</span> <br />
          Music Vault
        </h1>
        <div className="bio">
          vtm1ns is a burgeoning music producer hailing from the bedroom studio
          scene. Despite limited mainstream success thus far, vtm1ns has been
          honing his craft for over 5 years, experimenting with EDM, Trap, Hip
          Hop, and Experimental sounds.
        </div>
      </header>
      <h1 className="samples-heading"> Samples </h1>
      <div className="samples">
        <Link to="/music/1">
          <img
            src="https://i1.sndcdn.com/artworks-FWKQmghCmbcybdZO-XiVEPA-t500x500.jpg"
            alt="Audio 1"
          />
          <p>Jus Hav Fun Vol. 2 Remix</p>
        </Link>
        <Link to="/music/2">
          <img
            src="https://m.media-amazon.com/images/I/51fsb4sNp3L._UXNaN_FMjpg_QL85_.jpg"
            alt="Audio 2"
          />
          <p>Blessed By Swords (Reprise)</p>
        </Link>
        <Link to="/music/3">
          <img src={Default} />
          <p>Grenada (Unreleased)</p>
        </Link>
      </div>
    </>
  );
};

export default Home;
