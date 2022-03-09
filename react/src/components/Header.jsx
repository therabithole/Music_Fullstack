import React, { Component } from "react";
import "../scss/music.css";
const Header = () => {
  return (
    <React.Fragment>
      <section className="header">
        <h1 className="header-title"> Best New Music</h1>
        <h2 className="header-subTitle">
          Launched in 2003, Best New Music is Pitchfork’s way of <br />{" "}
          highlighting the finest music of the current moment.
        </h2>
      </section>
    </React.Fragment>
  );
};

export default Header;
