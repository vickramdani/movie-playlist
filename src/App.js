import React, { useState, useEffect } from "react";
import axios from "axios";
import Search from "./component/ui/Search";
import MovieSearch from "./component/ui/MovieSearch";
import Playlist from "./component/ui/Playlist";
import Header from "./component/ui/Header";
import "./App.css";

const API_KEY = "3dfb164479b4a83fc7fac70340e5e91d";
const PAGE_MOVIE = "movie";
const PAGE_PLAYLIST = "playlist";
const LOCAL_STORAGE_KEY = "react-movie-playlist";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [info, setInfo] = useState([]);
  const [playlists, setPlaylist] = useState([]);
  const [page, setPage] = useState(PAGE_MOVIE);
  const [query, setQuery] = useState("spider-man");

  useEffect(() => {
    fetchItems();
  }, [query]);

  useEffect(() => {
    const storagePlaylist = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storagePlaylist) {
      setPlaylist(storagePlaylist);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(playlists));
  }, [playlists]);

  const fetchItems = async () => {
    const result = await axios(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
    );
    const datas = result.data.results;
    console.log(datas);
    setMovies(datas);
  };

  const fetchAddItems = async (id) => {
    const result = await axios(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
    );
    // console.log(result);
    const datas = result.data;
    setInfo(datas);
  };

  const addToPlaylist = (info) => {
    setPlaylist([...playlists, { ...info }]);
  };

  const removeFromPlaylist = (movie) => {
    setPlaylist(playlists.filter((playlist) => playlist !== movie));
  };

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };

  const searchPage = () => (
    <>
      <h1 className="search-header">Search For Movie</h1>
      <Search getQuery={(search) => setQuery(search)} />
      <MovieSearch
        movies={movies}
        info={info}
        fetchAddItems={(id) => fetchAddItems(id)}
        addToPlaylist={(info) => addToPlaylist(info)}
      />
    </>
  );

  const PlaylistPage = () => (
    <>
      <Playlist
        playlists={playlists}
        fetchAddItems={(id) => fetchAddItems(id)}
        removeFromPlaylist={(movie) => removeFromPlaylist(movie)}
      />
    </>
  );

  return (
    <div className="container">
      <Header
        PAGE_MOVIE={PAGE_MOVIE}
        PAGE_PLAYLIST={PAGE_PLAYLIST}
        navigateTo={(nextPage) => navigateTo(nextPage)}
      />
      {page === PAGE_MOVIE && searchPage()}
      {page === PAGE_PLAYLIST && PlaylistPage()}
    </div>
  );
};

export default App;
