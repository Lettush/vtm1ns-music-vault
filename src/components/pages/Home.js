import Navbar from "../sections/Navbar";
import Audio1 from "../../assets/audio/1.mp3";
import Audio2 from "../../assets/audio/2.mp3";
import Audio3 from "../../assets/audio/3.ogg";
import AudioPlayer from "../AudioPlayer";

const Home = () => {
  return (
    <>
      <header>
        <h1>
          <span>vtm1ns</span> <br />
          Music Vault
        </h1>
      </header>
      <Navbar />
      <h1 className="samples-heading"> Samples </h1>
      <AudioPlayer audioFile={Audio1} />
      <AudioPlayer audioFile={Audio2} />
      <AudioPlayer audioFile={Audio3} />
    </>
  );
};

export default Home;
