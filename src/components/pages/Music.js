// import { useEffect, useState } from "react";
import YouTube from "../sections/YouTube";
import { Link } from "react-router-dom";
import Default from "../../assets/images/default.jpg";
import Frog from "../../assets/images/frog.jpg";
import Finn from "../../assets/images/finn.jpg";
import Lofi from "../../assets/images/lofi.jpg";

const Music = () => {
  // const [latest, setLatest] = useState("");

  /* Youtube API */
  // useEffect(() => {
  //   fetch(
  //     "https://www.googleapis.com/youtube/v3/search?key=AIzaSyB05ZW_6lgBCtA1UtoRKP0uSG52HWpWtsI&channelId=UC8H9civC3067vONXbBNDmrw&part=id&order=date&maxResults=1"
  //   )
  //     .then((res) => res.json())
  //     .then((data) => setLatest(data.items[0].id.videoId));
  // }, []);
  return (
    <>
      <div className="spotify column-layout">
        <div>
          <h1>Spotify</h1>
          <p>5,000+ Monthly Listeners</p>
        </div>
        <iframe
          title="spotify-frame"
          src="https://open.spotify.com/embed/artist/6FSaNQlUJjC2X9hDQNFzwY?utm_source=generator"
          style={{ borderRadius: "10px", border: "none" }}
          width="100%"
          height="352"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
      <hr className="section-line" />
      <div className="youtube column-layout">
        <YouTube
          link={`https://www.youtube.com/watch?v=n7a9t9NYBto`}
          className="vid"
        />
        <div className="text">
          <h1>YouTube</h1>
          <p>2,000+ Subscribers</p>
        </div>
      </div>
      <h1 className="section-heading">
        <span> Samples </span>
      </h1>
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
        <Link to="/music/4">
          <img src={Frog} alt="Audio 4" />
          <p>Everlasting</p>
        </Link>
        <Link to="/music/5">
          <img src={Lofi} alt="Audio 5" />
          <p>懐かしい</p>
        </Link>
        <Link to="/music/6">
          <img src={Finn} alt="Audio 6" />
          <p>Corrupted Hero (Remastered)</p>
        </Link>
      </div>
    </>
  );
};

export default Music;
