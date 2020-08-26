import React from "react";
import MovieGrid from "../movie/MovieGrid";

const MovieSearch = ({ movies, info, fetchAddItems, addToPlaylist }) => {
  return (
    <div>
      <MovieGrid
        movies={movies}
        info={info}
        fetchAddItems={id => fetchAddItems(id)}
        addToPlaylist={info => addToPlaylist(info)}
      />
    </div>
  );
};

export default MovieSearch;
