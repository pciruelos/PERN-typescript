import React, { useEffect, useState } from "react";

import { Songs } from "./songs";
import * as SongsService from "./songsService";
import Song from "./song";



const Playlist = () => {
  const [songs, setSongs] = useState<Songs[]>([]);

  const Loadsongs = async () => {
    const res = await SongsService.getSongs();
    setSongs(res.data);
  };

  useEffect(() => {
    Loadsongs();
  }, []);

  return (
    <div className="row">
      {songs.map((song) => {
        return <Song song={song} key={song.id} loadSong={Loadsongs} />;
      })}
    </div>
  );
};
export default Playlist;
