import React from "react";

const Header = ({ navigateTo, PAGE_MOVIE, PAGE_PLAYLIST }) => {
  return (
    <div className="header">
      <div className="logo">
        <h1>MovieGeeks</h1>
      </div>
      <div className="nav">
        <a href="#" onClick={() => navigateTo(PAGE_MOVIE)}>
          Search
        </a>
        <a href="#" onClick={() => navigateTo(PAGE_PLAYLIST)}>
          Playlist
        </a>
      </div>
    </div>
  );
};

export default Header;
