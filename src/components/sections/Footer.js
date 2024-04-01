import SoundCloud from "../../assets/images/sc.png"
import Spotify from "../../assets/images/spotify.webp"
import { YouTube, Twitter } from "@mui/icons-material";

const Footer = () => {
  return (
    <footer>
      <div>
        <a href="https://soundcloud.com/vtm1ns" target="_blank" rel="noreferrer"><img src={SoundCloud} alt="SC" /></a>
        <a href="https://youtube.com/c/vtm1ns" target="_blank" rel="noreferrer"><YouTube fontSize="large"/></a>
        <a href="https://twitter.com/vtm1ns" target="_blank" rel="noreferrer"><Twitter fontSize="large"/></a>
        <a href="https://open.spotify.com/artist/6FSaNQlUJjC2X9hDQNFzwY" target="_blank" rel="noreferrer"><img src={Spotify} alt="SC" /></a>
      </div>
      <hr />
      <p>&copy; vtm1ns (2019) | All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
