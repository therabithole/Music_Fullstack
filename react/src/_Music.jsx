import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Tiles from "./components/Tiles";
import Tracks from "./components/Tracks";
import Error from "./components/Error";
import { apiUrl } from "./config.json";
import _ from "lodash";

import "./scss/music.css";
import Header from "./components/Header";

const _Music = () => {
  const [tiles, setTiles] = useState([]);
  const [tracks, setTracks] = useState([]);
  const [filteredTracks, setFilteredTracks] = useState([]);
  const [selectedTile, setSelectedTile] = useState(null);
  const [selectedTiles, setSelectedTiles] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  // Populate TMusic
  const populateMusic = useCallback(() => {
    const getTracksTiles = async () => {
      // const {data } = await getTracks();  CORS proxy
      // const {data: tiles} = await getTiles(); CORS proxy
      const { data: loadingTiles } = await axios.get(
        "http://localhost:3500/api/tiles"
      );
      const { data: loadingTracks } = await axios.get(
        "http://localhost:3500/api/tracks"
      );
      setTiles(loadingTiles);
      setTracks(loadingTracks);
    };
    getTracksTiles();
  }, []);

  // Run Effect
  useEffect(() => {
    populateMusic();
  }, []);

  const handleSelected = () => {
    console.log("handling selected");
  };

  // Check console for RESULT
  return (
    <section className="musicApp">
      <Header />

      <section className="musicGrid">
        <Tiles
          tiles={tiles}
          // onTileSelect={handleTileSelect}
          selected={handleSelected}
          //   handleChange={handleChange}
        />

        <Tracks tracks={tracks} />
      </section>
    </section>
  );
};

export default _Music;

{
  /*

const handleTileSelect = (tile) => {
    console.log(tile, "tile");
    if (!_.includes(selectedTile, tile)) {
      selectedTile.push(tile);
      console.log(selectedTile, "selectedTile");
      const filtered = tracks.filter((track) => track.tile._id === tile._id);

      // setSelectedTiles((selectedTiles) => [...selectedTiles, tile]);
    } else {
      _.remove(selectedTile, (x) => x === tile);
    }
  };

  const handleChange = (tile) => {
    console.log("soemthing changed");
  };
  
   */
}
