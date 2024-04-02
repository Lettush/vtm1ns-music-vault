import AudioPlayer from "../AudioPlayer";
import Audio1 from "../../assets/audio/1.mp3";
import Audio2 from "../../assets/audio/2.mp3";
import Audio3 from "../../assets/audio/3.ogg";
import Audio4 from "../../assets/audio/4.mp3";
import Audio5 from "../../assets/audio/5.mp3";
import Audio6 from "../../assets/audio/6.mp3";
import { useParams } from "react-router-dom";

const MusicDetail = () => {
  const { id } = useParams();

  switch (id) {
    case "1":
      return <AudioPlayer audioFile={Audio1} name="Jus Hav Fun Vol. 2 Remix" />;
    case "2":
      return <AudioPlayer audioFile={Audio2} name="Blessed By Swords (Reprise)" />;
    case "3":
      return <AudioPlayer audioFile={Audio3} name="Grenada (Unreleased)" />;
    case "4":
      return <AudioPlayer audioFile={Audio4} name="Everlasting" />;
    case "5":
      return <AudioPlayer audioFile={Audio5} name="懐かしい" />;
    case "6":
      return <AudioPlayer audioFile={Audio6} name="Corrupted Hero (Remastered)" />;
    default:
      break;
  }
};

export default MusicDetail;
