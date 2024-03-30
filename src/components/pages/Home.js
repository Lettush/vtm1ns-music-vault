import Default from "../../assets/images/default.jpg";
import SeeMore from "../../assets/images/placeholder.png";
import { Link } from "react-router-dom";
import Carousel from "react-material-ui-carousel";
import Item from "../sections/Item";

const Home = () => {
  const items = [
    {
      name: "Friday Night Farmin: VS Katrine",
      url: "https://gamebanana.com/mods/313655",
      image: "https://images.gamebanana.com/img/ss/mods/6116cea0510cb.jpg",
    },
    {
      name: "ASDF Funkin",
      url: "https://gamebanana.com/mods/373139",
      image: "https://images.gamebanana.com/img/ss/mods/6284270b11dd3.jpg",
    },
    {
      name: "Friday Night Funkin': Pibby Corrupted",
      url: "https://gamebanana.com/mods/344757",
      image: "https://images.gamebanana.com/img/ss/mods/61c1c14d780cd.jpg",
    },
    {
      name: "Friday Night Funkin' - VS Felix Demo",
      url: "https://gamebanana.com/mods/350970",
      image: "https://images.gamebanana.com/img/ss/mods/61e459c976756.jpg",
    },
    {
      name: "Vs. Scorpion",
      url: "https://gamebanana.com/mods/342603",
      image: "https://images.gamebanana.com/img/ss/mods/61df14f03c6da.jpg",
    },
  ];
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
      <h1 className="section-heading"> Works </h1>
      <div className="works">
        <Carousel>
          {items.map((item, i) => (
            <Item key={i} item={item} />
          ))}
        </Carousel>
      </div>
      <h1 className="section-heading"> Samples </h1>
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
          <img src={Default} alt="Audio 3" />
          <p>Grenada (Unreleased)</p>
        </Link>
        <Link to="/music">
          <img src={SeeMore} alt="Audio 4" />
          <p style={{ textAlign: "center", fontWeight: "bolder" }}>
            See More {">>"}
          </p>
        </Link>
      </div>
    </>
  );
};

export default Home;
