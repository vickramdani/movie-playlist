import React from "react";

const PlaylistItems = ({ playlist, removeFromPlaylist, fetchAddItems }) => {
  return (
    <div className="card" onMouseOver={() => fetchAddItems(playlist.imdbID)}>
      <div className="card-inner">
        <div className="card-front">
          <img src={playlist.Poster} alt={playlist.Title} />
        </div>
        <div className="card-back">
          <h1>{playlist.Title}</h1>
          <ul>
            <li>
              <strong>Year:</strong> {playlist.Year}
            </li>
            <li>
              <strong>Rated:</strong> {playlist.Rated}
            </li>
            <li>
              <strong>Runtime:</strong> {playlist.Runtime}
            </li>
            <li>
              <strong>IMDb Rating:</strong> {playlist.imdbRating}
            </li>
          </ul>
          <button className="btn" onClick={() => removeFromPlaylist(playlist)}>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlaylistItems;
