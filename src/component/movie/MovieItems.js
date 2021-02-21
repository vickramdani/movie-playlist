import React from "react";

const MovieItems = ({ movie, info, fetchAddItems, addToPlaylist }) => {
  return (
    <div className="card" onMouseOver={() => fetchAddItems(movie.id)}>
      <div className="card-inner">
        <div className="card-front">
          <img
            src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`}
            alt={movie.title}
          />
        </div>
        <div className="card-back">
          <h1>{info.title}</h1>
          <ul>
            <li>
              <strong>Release Date:</strong> {info.release_date}
            </li>
            <li>
              <strong>Runtime:</strong> {info.runtime} minute
            </li>
            <li>
              <strong>Rating:</strong> {info.vote_average}
            </li>
            <li>
              <strong>Tagline:</strong> {info.tagline}
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
