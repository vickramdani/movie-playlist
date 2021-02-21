import React from "react";

const PlaylistItems = ({ playlist, removeFromPlaylist, fetchAddItems }) => {
  return (
    <div className="card" onMouseOver={() => fetchAddItems(playlist.id)}>
      <div className="card-inner">
        <div className="card-front">
          <img
            src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${playlist.poster_path}`}
            alt={playlist.title}
          />
        </div>
        <div className="card-back">
          <h1>{playlist.title}</h1>
          <ul>
            <li>
              <strong>Release Date:</strong> {playlist.release_date}
            </li>
            <li>
              <strong>Runtime:</strong> {playlist.runtime} minute
            </li>
            <li>
              <strong>Rating:</strong> {playlist.vote_average}
            </li>
            <li>
              <strong>Tagline:</strong> {playlist.tagline}
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
