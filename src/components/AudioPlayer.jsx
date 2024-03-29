import { useRef, useEffect, useState } from "react";
import WaveSurfer from "wavesurfer.js";

const formWaveSurferOptions = (ref) => ({
  container: ref,
  waveColor: "#ccc",
  progressColor: "#0178ff",
  cursorColor: "transparent",
  responsive: true,
  height: 80,
  normalize: true,
  backend: "WebAudio",
  barWidth: 2,
  barGap: 3,
});

export default function AudioPlayer({ audioFile }) {
  // stores mutable values that can change without refreshing the whole page
  const waveformRef = useRef(null);
  const wavesurfer = useRef(null);

  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [muted, setMuted] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  // Initialize WaveSurfer and set up event listeners
  useEffect(() => {
    // Create WaveSurfer instance with options
    const options = formWaveSurferOptions(waveformRef.current);
    wavesurfer.current = WaveSurfer.create(options);

    // Load the audio file
    wavesurfer.current.load(audioFile);

    // When WaveSurfer is ready
    wavesurfer.current.on("ready", () => {
      setVolume(wavesurfer.current.getVolume());
      setDuration(wavesurfer.current.getDuration());
    });

    // Update current time in state as audio plays
    wavesurfer.current.on("audioprocess", () => {
      setCurrentTime(wavesurfer.current.getCurrentTime());
    });

    // Clean up event listeners and destroy instance on unmount
    return () => {
      wavesurfer.current.un("audioprocess");
      wavesurfer.current.un("ready");
      wavesurfer.current.destroy();
    };
  }, [audioFile]);

  const formatTime = (seconds) => {
    let date = new Date(0);
    date.setSeconds(seconds);
    return date.toISOString().substr(14, 5);
  };

  // Toggle audio playback
  const handlePlayPause = () => {
    setPlaying(!playing);
    wavesurfer.current.playPause();
  };

  // Adjust audio volume
  const handleVolumeChange = (newVolume) => {
    setVolume(newVolume);
    wavesurfer.current.setVolume(newVolume);
    setMuted(newVolume === 0);
  };

  return (
    <div className="song-group">
      {/* Play/Pause button */}
      <button onClick={handlePlayPause}>Play/Pause</button>

      <span>{formatTime(currentTime)}</span>

      <div id="waveform" ref={waveformRef} style={{ width: "100%" }}></div>

      <span>{formatTime(duration)}</span>

      {/* Volume slider */}
      <input
        type="range"
        name="volume"
        id="volume"
        min="0"
        max="1"
        step="0.05"
        value={muted ? 0 : volume}
        onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
      />
    </div>
  );
}
