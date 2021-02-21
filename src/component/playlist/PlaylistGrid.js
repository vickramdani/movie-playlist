import React from "react";
import PlaylistItems from "./PlaylistItems";

const PlaylistGrid = ({ playlists, removeFromPlaylist, fetchAddItems }) => {
  return playlists.length === 0 ? (
    <h1 className="empty-state">Ooopss, your playlist are empty...</h1>
  ) : (
    <section className="cards">
      {playlists.map((playlist) => (
        <PlaylistItems
          key={playlist.id}
          playlist={playlist}
          fetchAddItems={(id) => fetchAddItems(id)}
          removeFromPlaylist={(movie) => removeFromPlaylist(movie)}
        />
      ))}
    </section>
  );
};

export default PlaylistGrid;
