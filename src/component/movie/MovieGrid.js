import React from "react";
import MovieItems from "./MovieItems";

const MovieGrid = ({ movies, info, fetchAddItems, addToPlaylist }) => {
  return (
    <section className="cards">
      {movies.map((movie) => (
        <MovieItems
          key={movie.id}
          movie={movie}
          info={info}
          fetchAddItems={fetchAddItems}
          addToPlaylist={(info) => addToPlaylist(info)}
        />
      ))}
    </section>
  );
};

export default MovieGrid;
