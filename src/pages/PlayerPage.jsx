import React from "react";
import ReactPlayer from "react-player";
import './playerpage.css';

export default function PlayerPage() {
  // const ele = document.getElementsByClassName("ytp-pause-overlay")[0]
  // ele.display='none';
  return (
    <div className="mt-16">
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=HtkaJoWhIdk`}
        className="react-player"
        controls
        playing={true}
      />
    </div>
  );
}
