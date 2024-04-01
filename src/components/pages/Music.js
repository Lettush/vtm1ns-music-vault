// import { useEffect, useState } from "react";
import YouTube from "../sections/YouTube";

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
    </>
  );
};

export default Music;
