import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Advertise.scss"
import ReactPlayer from "react-player";
const Advertise = () => {
  let url = window.location.href.split("/").pop()
  return (
   <div className={url !== "" ? "advertise" : "hidden"}>
    <ReactPlayer
        url="/advert.mp4"
        width="100%"
        height="100%"
        playing={true}
        loop={true}
        muted={true}
      />
      <div className="advertise__footer">
        <button>Advertise</button>
      </div>
   </div>
  );
};

export default Advertise;
