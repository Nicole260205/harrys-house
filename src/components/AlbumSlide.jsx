function AlbumSlide({ title, year, trackCount, tracks, image, listenLink }) {
  return (
    <>
      <div className="album-slide">
        <div className="album-info">
          <h1 className="album-heading">Albums</h1>
          <h3 className="album-title">{title}</h3>
          <p className="album-meta">
            {year} • {trackCount} songs
          </p>

          <div className="tracklist">
            <ul>
              {tracks.map((track, i) => (
                <li key={i}>
                  <span>{track.name}</span>
                  <span>{track.duration}</span>
                </li>
              ))}
            </ul>
          </div>

          <a
            href={listenLink}
            className="listen-button"
            target="_blank"
            rel="noreferrer"
          >
            LISTEN
          </a>
        </div>

        <div className="album-image">
          <img src={image} alt={title} />
        </div>
      </div>
    </>
  );
}

export default AlbumSlide;
