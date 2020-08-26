import React from "react";

const MovieItems = ({ movie, info, fetchAddItems, addToPlaylist }) => {
  return (
    <div className="card" onMouseOver={() => fetchAddItems(movie.imdbID)}>
      <div className="card-inner">
        <div className="card-front">
          <img src={movie.Poster} alt={movie.Title} />
        </div>
        <div className="card-back">
          <h1>{info.Title}</h1>
          <ul>
            <li>
              <strong>Year:</strong> {info.Year}
            </li>
            <li>
              <strong>Rated:</strong> {info.Rated}
            </li>
            <li>
              <strong>Runtime:</strong> {info.Runtime}
            </li>
            <li>
              <strong>IMDb Rating:</strong> {info.imdbRating}
            </li>
          </ul>
          <button className="btn" onClick={() => addToPlaylist(info)}>
            Add to Playlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieItems;
