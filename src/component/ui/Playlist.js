import React from "react";
import PlaylistGrid from "../playlist/PlaylistGrid";

const Playlist = ({ playlists, removeFromPlaylist, fetchAddItems }) => {
  return (
    <div>
      <h1 className="playlist-header">Movie Playlist</h1>
      <PlaylistGrid
        playlists={playlists}
        fetchAddItems={id => fetchAddItems(id)}
        removeFromPlaylist={movie => removeFromPlaylist(movie)}
      />
    </div>
  );
};

export default Playlist;
