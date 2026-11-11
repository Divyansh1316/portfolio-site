"use client";

import { useState } from "react";

export default function MusicPlayer() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);

  const togglePlayer = () => {
    if (!isExpanded) setHasOpened(true);
    setIsExpanded(!isExpanded);
  };

  return (
    <aside className={`music-player${isExpanded ? " is-expanded" : " is-minimized"}`} aria-label="Spotify playlist player">
      <button className="music-player-heading" type="button" aria-expanded={isExpanded} aria-controls="spotify-playlist-embed" aria-label={isExpanded ? "Minimize music player" : "Expand music player"} onClick={togglePlayer}>
        <span className="music-player-icon" aria-hidden="true">♫</span>
        <span><strong>Playlist</strong><small>Spotify</small></span>
        <span className="music-player-toggle" aria-hidden="true">{isExpanded ? "−" : "+"}</span>
      </button>
      {hasOpened && <div className="music-player-embed" aria-hidden={!isExpanded}>
        <iframe id="spotify-playlist-embed" title="Divyansh’s Spotify playlist" src="https://open.spotify.com/embed/playlist/3JNwUjxzqkusW4VGlZZA7W?utm_source=generator&amp;theme=0" allow="autoplay; encrypted-media; picture-in-picture" referrerPolicy="strict-origin-when-cross-origin" loading="lazy" />
      </div>}
    </aside>
  );
}
