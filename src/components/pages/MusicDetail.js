import AudioPlayer from "../AudioPlayer";
import Audio1 from "../../assets/audio/1.mp3";
import Audio2 from "../../assets/audio/2.mp3";
import Audio3 from "../../assets/audio/3.ogg";
import { useParams } from "react-router-dom";

const MusicDetail = ({ name }) => {
  const { id } = useParams();

  switch (id) {
    case "1":
      return <AudioPlayer audioFile={Audio1} name="Jus Hav Fun Vol. 2 Remix" />;
    case "2":
      return <AudioPlayer audioFile={Audio2} name="Blessed By Swords (Reprise)" />;
    case "3":
      return <AudioPlayer audioFile={Audio3} name="Grenada (Unreleased)" />;
  }
};

export default MusicDetail;
