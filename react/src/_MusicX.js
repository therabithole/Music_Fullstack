import React, { useState, useEffect, useCallback } from "react";
import Header from "./components/Header";

import Tiles from "./components/Tiles";
import Tracks from "./components/Tracks";

import CD from "./assets/icons/CD";
import Digital from "./assets/icons/Digital";
import Vinyl from "./assets/icons/Vinyl";

import Error from "./components/Error";
import { apiUrl } from "./config.json";
import "./scss/music.css";

import _ from "lodash";
import axios from "axios";

const tilesUrl = "http://localhost:3500/api/tiles";
const tracksUrl = "http://localhost:3500/api/tracks";

const MusicApp = () => {
  const [tiles, setTiles] = useState([]);
  const [icons, setIcons] = useState([]);
  const [tracks, setTracks] = useState([]);

  const [result, setResult] = useState({
    initialTiles: [],
    initiaTracks: [],
    filteredTiles: [],
    filteredTracks: [],
  });
  const [errorMessage, setErrorMessage] = useState("");

  // Populate TMusic
  const populateMusic = useCallback(() => {
    const loadIMDB = async () => {
      // const {data } = await getTracks();  CORS proxy
      // const {data: tiles} = await getTiles(); CORS proxy
      const { data: tilesD } = await axios.get(tilesUrl);
      const { data: tracksD } = await axios.get(tracksUrl);

      setTiles(tilesD);
      setTracks(tracksD);
    };
    loadIMDB();
  }, []);

  // Run Effect
  useEffect(() => {
    populateMusic();
  }, []);

  const populateIcons = useCallback(() => {
    const fetchIcons = () => {
      const icons = [CD, Digital, Vinyl]; // not using multer gridfsSteam;
      setIcons(icons);
    };
    fetchIcons();
  }, []);

  useEffect(() => {
    populateIcons();
  }, []);

  const handleChange = (e) => {
    // Destructuring

    const { value, checked } = e.target;

    const { filteredTiles, filteredTracks } = result;

    // Case 1 : The tile is checked
    if (checked) {
      const filter = tiles.filter((tile) => tile._id === value);
    }

    // Case 2 : The user unchecks the box
    else {
      console.log("unchecked");
    }
  };

  return (
    <section className="musicApp">
      <Header />

      <section className="musicGrid">
        <section className="tiles">
          {tiles.map((tile, index) => {
            return (
              <section className="tile">
                <h1> {tile.name} </h1>
                {index === 0 ? <Digital /> : index === 1 ? <CD /> : <Vinyl />}
                <section className="checkboxGroup">
                  <input
                    type="checkbox"
                    id={tile._id}
                    name={tile.name}
                    value={tile._id}
                    onChange={handleChange}
                  />
                </section>
              </section>
            );
          })}
        </section>
        <Tracks tracks={tracks} />
      </section>
    </section>
  );
};

export default MusicApp;
