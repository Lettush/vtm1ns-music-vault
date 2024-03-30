const Music = () => {
  return (
    <>
      <h1 className="section-heading">Music</h1>
      <div className="spotify">
        <div>
          <h1>Spotify</h1>
        </div>
        <iframe
          title="spotify-frame"
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/artist/6FSaNQlUJjC2X9hDQNFzwY?utm_source=generator&theme=0"
          width="100%"
          height="352"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </>
  );
};

export default Music;
