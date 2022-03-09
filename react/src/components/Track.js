import React, { Component, useCallback, useEffect, useState } from "react";
import _ from "lodash";
import "../scss/music.css";

import homeland from "../assets/albums/home_land.jpeg";
import soundofmusic from "../assets/albums/sound_of_music.jpg";
import attackiscoming from "../assets/albums/attack_is_coming.jpg";
import extinction from "../assets/albums/extinction.png";
import backtoradio from "../assets/albums/Back-to-Radio.png";
import harouldandmaude from "../assets/albums/harould-and-maude.png";
import enochlight from "../assets/albums/Enoch_Light_and_the_Light_Brigade.jpg";
import peterGabriel from "../assets/albums/peter_gabriel.jpg";
import comeTogether from "../assets/albums/come_together.jpg";
import mobyEverything from "../assets/albums/moby_everything_is_wrong.png";
import shapeOfYou from "../assets/albums/shape_of_you.jpg";

const Track = ({ tracks }) => {
  const [albumPic, setAlbumPic] = useState([]);

  const populateAlbums = useCallback(() => {
    const loadPics = () => {
      const albums = [
        comeTogether,
        shapeOfYou,
        peterGabriel,
        homeland,
        attackiscoming,
        enochlight,
        harouldandmaude,
        mobyEverything,
        soundofmusic,
        backtoradio,
        extinction,
      ]; // not using multer gridfsSteam;
      setAlbumPic(albums);
    };
    loadPics();
  }, []);

  useEffect(() => {
    populateAlbums();
  }, [tracks]);

  const mediaEndPoint = "http://localhost:3000/static/media/";

  return (
    <React.Fragment>
      {tracks.map((track, i) => (
        <section className="track" key={track.id}>
          <div className="singer"> {track.singer} </div>
          <div className="album"> {track.album} </div>
          {/*    <div className="tiles"> {track.tile.name} </div> */}
          <div className="name"> {track.name} </div>
          <img className="albumicPic" src={`${mediaEndPoint}/${track.imgId}`} />
        </section>
      ))}
    </React.Fragment>
  );
};

export default Track;
