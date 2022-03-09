import React, { useState, useCallback, useMemo, useEffect } from "react";
import CheckBox from "./common/CheckBox";
// client side SVGS, not using multer buffer in express + mongodb atlas
import CD from "../assets/icons/CD";
import Digital from "../assets/icons/Digital";
import Vinyl from "../assets/icons/Vinyl";
import Tile from "./Tile";

import "../scss/music.css";

const Tiles = ({ tiles, selectedTiles}) => {
  const [icons, setIcons] = useState([]);

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



  return (
    <React.Fragment>
      <section className="tiles">
        {tiles.map((tile, i) => {
          return (
            <section 
            className="tile" 
           // onClick={() => onTileSelect(tile)}
           >
              <Tile
                title={tile.name} 
                id={tile._id} 
                name={tile.name}
                value={tile.value}
                selectedTile={selectedTiles}>
                {i === 0 ? <Digital /> : i === 1 ? <CD /> : <Vinyl />}
              </Tile>
            </section>
          );
        })}
      </section>
    </React.Fragment>
  );
};

export default Tiles;
