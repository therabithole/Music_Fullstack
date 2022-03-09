import React, { useState, useCallback, useEffect } from "react";

import { getTiles } from "../services/tileService";
import { getTracks } from "../services/trackService";

import Track from "./Track";

import axios from "axios";

import "../scss/music.css";

const Tracks = (props) => {
  return (
    <section className="tracks">
      <Track tracks={props.tracks} />
    </section>
  );
};

export default Tracks;
